import {
  AutoLLMLog,
  BaserunProvider,
  BaserunStepType,
  BaserunType,
  LLMChatLog,
  LLMCompletionLog,
  LLMEmbeddingsLog,
  Message,
} from '../../types.js';
import { patch } from '../patch.js';
import { DEFAULT_USAGE } from '../constants.js';
import { modulesPromise, openai } from '../modules.js';
import getDebug from 'debug';
import OpenAI from 'openai';
import { track } from '../../utils/track.js';
import { APIPromise } from 'openai/core';
import { Chat } from 'openai/resources/index';
import { TemplateMessage } from '../../templates.js';
import ChatCompletionChunk = Chat.ChatCompletionChunk;

const debug = getDebug('baserun:openai');

interface NewOpenAIError {
  response?: { error?: { message?: string } };
}

export class OpenAIWrapper {
  static resolver(
    symbol: string,
    _patchedObject: any,
    args: any[],
    startTimestamp: Date,
    completionTimestamp: Date,
    isStream: boolean,
    response?: any,
    error?: any,
  ) {
    let usage = DEFAULT_USAGE;
    const type = symbol.includes('Chat')
      ? BaserunType.Chat
      : symbol.includes('Embeddings')
      ? BaserunType.Embeddings
      : BaserunType.Completion;

    let errorStack: string | undefined = undefined;

    const options = args[0] ?? {};

    if (error) {
      const maybeOpenAIError = error as NewOpenAIError;
      if (error.stack) {
        errorStack = error.stack;
      } else {
        if (maybeOpenAIError?.response?.error?.message) {
          errorStack = maybeOpenAIError.response.error.message;
        } else {
          errorStack = error;
        }
      }
    } else if (response) {
      usage = response.usage;
    }
    // todo: this is a bunch of duplicate code from the function above, this is something to clean up later, but it's also not
    // clear if we need to keep the support for the old OpenAI lib around
    if (type === BaserunType.Chat) {
      const { messages = [], tools, ...config } = options;

      return {
        choices: getChoiceMessages(response),
        config,
        logId: response?.id,
        stepType: BaserunStepType.AutoLLM,
        startTimestamp,
        completionTimestamp,
        type,
        provider: BaserunProvider.OpenAI,
        promptMessages: messages,
        usage: usage ?? DEFAULT_USAGE,
        errorStack,
        tools,
        toolChoice: config.tool_choice,
      } as LLMChatLog;
    } else if (type === BaserunType.Completion) {
      const { prompt = '', ...config } = options;
      return {
        stepType: BaserunStepType.AutoLLM,
        type,
        provider: BaserunProvider.OpenAI,
        startTimestamp,
        completionTimestamp,
        usage: usage ?? DEFAULT_USAGE,
        prompt: { content: prompt },
        choices: getChoiceMessages(response),
        config,
        errorStack,
      } as LLMCompletionLog;
    }

    /* eslint-disable-next-line prefer-const */
    let { input, ...config }: { input: string[] | string } = options;
    if (typeof input === 'string') {
      input = [input];
    }
    return {
      config: { stream: false, ...config },
      stepType: BaserunStepType.AutoLLM,
      startTimestamp,
      completionTimestamp,
      type,
      provider: BaserunProvider.OpenAI,
      promptMessages: input.map((v) => ({
        role: 'user',
        content: v,
        finish_reason: '',
      })),
      usage: usage ?? DEFAULT_USAGE,
      errorStack,
    } as LLMEmbeddingsLog;
  }

  static isStreaming(_symbol: string, args: any[]): boolean {
    return args[0].stream;
  }

  static getMessages(_symbol: string, args: any[]): TemplateMessage[] {
    return args[0].messages || [];
  }

  static preprocessArgs(_symbol: string, args: any[]) {
    args[0].messages?.forEach((msg: any) => {
      delete msg['baserunFormatMetadata'];
    });
    return args;
  }

  static handleToolCallChunk(
    choice: any,
    chunk: ChatCompletionChunk.Choice.Delta.ToolCall,
  ) {
    if (!choice.message.tool_calls) {
      choice.message.tool_calls = [];
    }
    if (choice.message.tool_calls.length <= chunk.index) {
      choice.message.tool_calls.push({
        id: '',
        type: 'function',
        function: { name: '', arguments: '' },
      });
    }
    const tc = choice.message.tool_calls[chunk.index];
    if (chunk.id) {
      tc.id += chunk.id;
    }
    if (chunk.function?.name) {
      tc.function.name += chunk.function.name;
    }
    if (chunk.function?.arguments) {
      tc.function.arguments += chunk.function.arguments;
    }
  }

  static collectStreamedResponse(
    symbol: string,
    response: any,
    chunk: any,
  ): any {
    if (symbol.includes('Chat')) {
      if (response === null) {
        response = {
          id: chunk.id,
          object: 'chat.completion',
          created: chunk.created,
          model: chunk.model,
          choices: [],
          usage: DEFAULT_USAGE,
        };
      }

      const newChoices = chunk.choices || [];

      for (const newChoice of newChoices) {
        const newIndex = newChoice.index || 0;
        const newDelta = newChoice.delta || {};
        const newContent = newDelta.content || '';
        const newRole = newDelta.role || 'assistant';
        const newFunctionCall = newDelta.function_call || null;
        const newToolCalls = newDelta.tool_calls || null;
        const newFinishReason = newChoice.finish_reason;

        const existingChoice = response.choices.find(
          (choice: any) => choice.index === newIndex,
        );

        if (existingChoice) {
          if (newContent) {
            if ('content' in existingChoice.message) {
              existingChoice.message.content += newContent;
            } else {
              existingChoice.message.content = newContent;
            }
          }

          if (newFunctionCall) {
            existingChoice.message.function_call = newFunctionCall;
          }

          if (newToolCalls) {
            for (const toolCallChunk of newToolCalls) {
              OpenAIWrapper.handleToolCallChunk(existingChoice, toolCallChunk);
            }
          }

          existingChoice.finish_reason = newFinishReason;
        } else {
          const newChoiceObj: any = {
            index: newIndex,
            message: {
              role: newRole,
              content: '',
            },
            finish_reason: newFinishReason,
          };

          if (newContent) {
            newChoiceObj.message.content = newContent;
          }

          if (newFunctionCall) {
            newChoiceObj.message.function_call = newFunctionCall;
          }

          if (newToolCalls) {
            for (const toolCallChunk of newToolCalls) {
              OpenAIWrapper.handleToolCallChunk(newChoiceObj, toolCallChunk);
            }
          }

          response.choices.push(newChoiceObj);
        }
      }

      return response;
    }

    if (response === null) {
      return chunk;
    }

    const newChoices = chunk.choices || [];

    for (const newChoice of newChoices) {
      const newIndex = newChoice.index || 0;
      const newText = newChoice.text || '';

      const existingChoice = response.choices.find(
        (choice: any) => choice.index === newIndex,
      );
      if (existingChoice) {
        existingChoice.text += newText;
      } else {
        response.choices.push(newChoice);
      }
    }

    return response;
  }

  static patch(openaiModule: any, log: (entry: AutoLLMLog) => Promise<void>) {
    try {
      const symbols = [
        'OpenAI.Completions.prototype.create',
        'OpenAI.Chat.Completions.prototype.create',
        'OpenAI.Embeddings.prototype.create',
      ];
      let requestId: string | null = null;
      patch({
        module: openaiModule,
        symbols,
        resolver: async (...args) => {
          const log = OpenAIWrapper.resolver(...args);
          if (requestId) log.requestId = requestId;
          return log;
        },
        log,
        isStreaming: OpenAIWrapper.isStreaming,
        collectStreamedResponse: OpenAIWrapper.collectStreamedResponse,
        getMessages: OpenAIWrapper.getMessages,
        preprocessArgs: OpenAIWrapper.preprocessArgs,
        processUnawaitedResponse: async (promise: APIPromise<any>) => {
          const { data, response } = await promise.withResponse();
          requestId = response.headers.get('x-request-id');
          return data;
        },
      });
    } catch (err) {
      /* openai isn't used */
      if (
        err &&
        typeof err === 'object' &&
        'code' in err &&
        err.code === 'MODULE_NOT_FOUND'
      ) {
        return;
      }

      throw err;
    }
  }

  static async init(log: (entry: AutoLLMLog) => Promise<void>) {
    debug('patching openai', openai.length);
    const patchedModules: any[] = [];
    await track(async () => {
      await modulesPromise;
      for (const mod of openai) {
        if (
          patchedModules.includes(mod) ||
          !mod ||
          !mod.Completions ||
          !mod.Chat
        ) {
          continue;
        }
        OpenAIWrapper.patch(mod, log);
        patchedModules.push(mod);
      }

      if (
        !patchedModules.includes(OpenAI) &&
        OpenAI &&
        OpenAI.Completions &&
        OpenAI.Chat
      ) {
        OpenAIWrapper.patch(OpenAI, log);
        patchedModules.push(OpenAI);
      }

      if (patchedModules.length === 0) {
        console.error('baserun: Could not find OpenAI module');
      }
    }, 'patching openai');
  }
}

export function getChoiceMessages(response: any): Message[] {
  if (!response || !response.choices) {
    return [];
  }

  return response.choices.map((c: any) => {
    const { finish_reason, message, text } = c;
    if (text) {
      return {
        content: text,
        finish_reason,
      };
    }
    return {
      finish_reason,
      ...message,
    };
  });
}
