// @generated by protobuf-ts 2.9.1 with parameter client_grpc1
// @generated from protobuf file "baserun.proto" (package "baserun.v1", syntax proto3)
// tslint:disable
import { SubmissionService } from './baserun.js';
import type { BinaryWriteOptions } from '@protobuf-ts/runtime';
import type { BinaryReadOptions } from '@protobuf-ts/runtime';
import type { SubmitAnnotationsResponse } from './baserun.js';
import type { SubmitAnnotationsRequest } from './baserun.js';
import type { GetTemplatesResponse } from './baserun.js';
import type { GetTemplatesRequest } from './baserun.js';
import type { SubmitUserResponse } from './baserun.js';
import type { SubmitUserRequest } from './baserun.js';
import type { SubmitModelConfigResponse } from './baserun.js';
import type { SubmitModelConfigRequest } from './baserun.js';
import type { SubmitTemplateVersionResponse } from './baserun.js';
import type { SubmitTemplateVersionRequest } from './baserun.js';
import type { EndSessionResponse } from './baserun.js';
import type { EndSessionRequest } from './baserun.js';
import type { StartSessionResponse } from './baserun.js';
import type { StartSessionRequest } from './baserun.js';
import type { EndTestSuiteResponse } from './baserun.js';
import type { EndTestSuiteRequest } from './baserun.js';
import type { StartTestSuiteResponse } from './baserun.js';
import type { StartTestSuiteRequest } from './baserun.js';
import type { SubmitEvalResponse } from './baserun.js';
import type { SubmitEvalRequest } from './baserun.js';
import type { EndRunResponse } from './baserun.js';
import type { EndRunRequest } from './baserun.js';
import type { SubmitSpanResponse } from './baserun.js';
import type { SubmitSpanRequest } from './baserun.js';
import type { SubmitLogResponse } from './baserun.js';
import type { SubmitLogRequest } from './baserun.js';
import type { StartRunResponse } from './baserun.js';
import type { StartRunRequest } from './baserun.js';
import * as grpc from '@grpc/grpc-js';
/**
 * @generated from protobuf service baserun.v1.SubmissionService
 */
export interface ISubmissionServiceClient {
  /**
   * @generated from protobuf rpc: StartRun(baserun.v1.StartRunRequest) returns (baserun.v1.StartRunResponse);
   */
  startRun(
    input: StartRunRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (err: grpc.ServiceError | null, value?: StartRunResponse) => void,
  ): grpc.ClientUnaryCall;
  startRun(
    input: StartRunRequest,
    metadata: grpc.Metadata,
    callback: (err: grpc.ServiceError | null, value?: StartRunResponse) => void,
  ): grpc.ClientUnaryCall;
  startRun(
    input: StartRunRequest,
    options: grpc.CallOptions,
    callback: (err: grpc.ServiceError | null, value?: StartRunResponse) => void,
  ): grpc.ClientUnaryCall;
  startRun(
    input: StartRunRequest,
    callback: (err: grpc.ServiceError | null, value?: StartRunResponse) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: SubmitLog(baserun.v1.SubmitLogRequest) returns (baserun.v1.SubmitLogResponse);
   */
  submitLog(
    input: SubmitLogRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitLogResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitLog(
    input: SubmitLogRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitLogResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitLog(
    input: SubmitLogRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitLogResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitLog(
    input: SubmitLogRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitLogResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: SubmitSpan(baserun.v1.SubmitSpanRequest) returns (baserun.v1.SubmitSpanResponse);
   */
  submitSpan(
    input: SubmitSpanRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitSpanResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitSpan(
    input: SubmitSpanRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitSpanResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitSpan(
    input: SubmitSpanRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitSpanResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitSpan(
    input: SubmitSpanRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitSpanResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: EndRun(baserun.v1.EndRunRequest) returns (baserun.v1.EndRunResponse);
   */
  endRun(
    input: EndRunRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (err: grpc.ServiceError | null, value?: EndRunResponse) => void,
  ): grpc.ClientUnaryCall;
  endRun(
    input: EndRunRequest,
    metadata: grpc.Metadata,
    callback: (err: grpc.ServiceError | null, value?: EndRunResponse) => void,
  ): grpc.ClientUnaryCall;
  endRun(
    input: EndRunRequest,
    options: grpc.CallOptions,
    callback: (err: grpc.ServiceError | null, value?: EndRunResponse) => void,
  ): grpc.ClientUnaryCall;
  endRun(
    input: EndRunRequest,
    callback: (err: grpc.ServiceError | null, value?: EndRunResponse) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: SubmitEval(baserun.v1.SubmitEvalRequest) returns (baserun.v1.SubmitEvalResponse);
   */
  submitEval(
    input: SubmitEvalRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitEvalResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitEval(
    input: SubmitEvalRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitEvalResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitEval(
    input: SubmitEvalRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitEvalResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitEval(
    input: SubmitEvalRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitEvalResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: StartTestSuite(baserun.v1.StartTestSuiteRequest) returns (baserun.v1.StartTestSuiteResponse);
   */
  startTestSuite(
    input: StartTestSuiteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  startTestSuite(
    input: StartTestSuiteRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  startTestSuite(
    input: StartTestSuiteRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  startTestSuite(
    input: StartTestSuiteRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: EndTestSuite(baserun.v1.EndTestSuiteRequest) returns (baserun.v1.EndTestSuiteResponse);
   */
  endTestSuite(
    input: EndTestSuiteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  endTestSuite(
    input: EndTestSuiteRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  endTestSuite(
    input: EndTestSuiteRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  endTestSuite(
    input: EndTestSuiteRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: StartSession(baserun.v1.StartSessionRequest) returns (baserun.v1.StartSessionResponse);
   */
  startSession(
    input: StartSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  startSession(
    input: StartSessionRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  startSession(
    input: StartSessionRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  startSession(
    input: StartSessionRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: StartSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: EndSession(baserun.v1.EndSessionRequest) returns (baserun.v1.EndSessionResponse);
   */
  endSession(
    input: EndSessionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  endSession(
    input: EndSessionRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  endSession(
    input: EndSessionRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  endSession(
    input: EndSessionRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: EndSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: SubmitTemplateVersion(baserun.v1.SubmitTemplateVersionRequest) returns (baserun.v1.SubmitTemplateVersionResponse);
   */
  submitTemplateVersion(
    input: SubmitTemplateVersionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitTemplateVersionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitTemplateVersion(
    input: SubmitTemplateVersionRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitTemplateVersionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitTemplateVersion(
    input: SubmitTemplateVersionRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitTemplateVersionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitTemplateVersion(
    input: SubmitTemplateVersionRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitTemplateVersionResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: SubmitModelConfig(baserun.v1.SubmitModelConfigRequest) returns (baserun.v1.SubmitModelConfigResponse);
   */
  submitModelConfig(
    input: SubmitModelConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitModelConfigResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitModelConfig(
    input: SubmitModelConfigRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitModelConfigResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitModelConfig(
    input: SubmitModelConfigRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitModelConfigResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitModelConfig(
    input: SubmitModelConfigRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitModelConfigResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: SubmitUser(baserun.v1.SubmitUserRequest) returns (baserun.v1.SubmitUserResponse);
   */
  submitUser(
    input: SubmitUserRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitUserResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitUser(
    input: SubmitUserRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitUserResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitUser(
    input: SubmitUserRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitUserResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitUser(
    input: SubmitUserRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitUserResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: GetTemplates(baserun.v1.GetTemplatesRequest) returns (baserun.v1.GetTemplatesResponse);
   */
  getTemplates(
    input: GetTemplatesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: GetTemplatesResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  getTemplates(
    input: GetTemplatesRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: GetTemplatesResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  getTemplates(
    input: GetTemplatesRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: GetTemplatesResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  getTemplates(
    input: GetTemplatesRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: GetTemplatesResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  /**
   * @generated from protobuf rpc: SubmitAnnotations(baserun.v1.SubmitAnnotationsRequest) returns (baserun.v1.SubmitAnnotationsResponse);
   */
  submitAnnotations(
    input: SubmitAnnotationsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitAnnotationsResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitAnnotations(
    input: SubmitAnnotationsRequest,
    metadata: grpc.Metadata,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitAnnotationsResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitAnnotations(
    input: SubmitAnnotationsRequest,
    options: grpc.CallOptions,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitAnnotationsResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
  submitAnnotations(
    input: SubmitAnnotationsRequest,
    callback: (
      err: grpc.ServiceError | null,
      value?: SubmitAnnotationsResponse,
    ) => void,
  ): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service baserun.v1.SubmissionService
 */
export class SubmissionServiceClient
  extends grpc.Client
  implements ISubmissionServiceClient
{
  private readonly _binaryOptions: Partial<
    BinaryReadOptions & BinaryWriteOptions
  >;
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options: grpc.ClientOptions = {},
    binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {},
  ) {
    super(address, credentials, options);
    this._binaryOptions = binaryOptions;
  }
  /**
   * @generated from protobuf rpc: StartRun(baserun.v1.StartRunRequest) returns (baserun.v1.StartRunResponse);
   */
  startRun(
    input: StartRunRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: StartRunResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: StartRunResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: StartRunResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[0];
    return this.makeUnaryRequest<StartRunRequest, StartRunResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: StartRunRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): StartRunResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: SubmitLog(baserun.v1.SubmitLogRequest) returns (baserun.v1.SubmitLogResponse);
   */
  submitLog(
    input: SubmitLogRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitLogResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitLogResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: SubmitLogResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[1];
    return this.makeUnaryRequest<SubmitLogRequest, SubmitLogResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: SubmitLogRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): SubmitLogResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: SubmitSpan(baserun.v1.SubmitSpanRequest) returns (baserun.v1.SubmitSpanResponse);
   */
  submitSpan(
    input: SubmitSpanRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitSpanResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitSpanResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: SubmitSpanResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[2];
    return this.makeUnaryRequest<SubmitSpanRequest, SubmitSpanResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: SubmitSpanRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): SubmitSpanResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: EndRun(baserun.v1.EndRunRequest) returns (baserun.v1.EndRunResponse);
   */
  endRun(
    input: EndRunRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: EndRunResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: EndRunResponse) => void),
    callback?: (err: grpc.ServiceError | null, value?: EndRunResponse) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[3];
    return this.makeUnaryRequest<EndRunRequest, EndRunResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: EndRunRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): EndRunResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: SubmitEval(baserun.v1.SubmitEvalRequest) returns (baserun.v1.SubmitEvalResponse);
   */
  submitEval(
    input: SubmitEvalRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitEvalResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitEvalResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: SubmitEvalResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[4];
    return this.makeUnaryRequest<SubmitEvalRequest, SubmitEvalResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: SubmitEvalRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): SubmitEvalResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: StartTestSuite(baserun.v1.StartTestSuiteRequest) returns (baserun.v1.StartTestSuiteResponse);
   */
  startTestSuite(
    input: StartTestSuiteRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: StartTestSuiteResponse,
        ) => void),
    options?:
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: StartTestSuiteResponse,
        ) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: StartTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[5];
    return this.makeUnaryRequest<StartTestSuiteRequest, StartTestSuiteResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: StartTestSuiteRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): StartTestSuiteResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: EndTestSuite(baserun.v1.EndTestSuiteRequest) returns (baserun.v1.EndTestSuiteResponse);
   */
  endTestSuite(
    input: EndTestSuiteRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: EndTestSuiteResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: EndTestSuiteResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: EndTestSuiteResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[6];
    return this.makeUnaryRequest<EndTestSuiteRequest, EndTestSuiteResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: EndTestSuiteRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): EndTestSuiteResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: StartSession(baserun.v1.StartSessionRequest) returns (baserun.v1.StartSessionResponse);
   */
  startSession(
    input: StartSessionRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: StartSessionResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: StartSessionResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: StartSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[7];
    return this.makeUnaryRequest<StartSessionRequest, StartSessionResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: StartSessionRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): StartSessionResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: EndSession(baserun.v1.EndSessionRequest) returns (baserun.v1.EndSessionResponse);
   */
  endSession(
    input: EndSessionRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: EndSessionResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: EndSessionResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: EndSessionResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[8];
    return this.makeUnaryRequest<EndSessionRequest, EndSessionResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: EndSessionRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): EndSessionResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: SubmitTemplateVersion(baserun.v1.SubmitTemplateVersionRequest) returns (baserun.v1.SubmitTemplateVersionResponse);
   */
  submitTemplateVersion(
    input: SubmitTemplateVersionRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: SubmitTemplateVersionResponse,
        ) => void),
    options?:
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: SubmitTemplateVersionResponse,
        ) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: SubmitTemplateVersionResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[9];
    return this.makeUnaryRequest<
      SubmitTemplateVersionRequest,
      SubmitTemplateVersionResponse
    >(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: SubmitTemplateVersionRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): SubmitTemplateVersionResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: SubmitModelConfig(baserun.v1.SubmitModelConfigRequest) returns (baserun.v1.SubmitModelConfigResponse);
   */
  submitModelConfig(
    input: SubmitModelConfigRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: SubmitModelConfigResponse,
        ) => void),
    options?:
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: SubmitModelConfigResponse,
        ) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: SubmitModelConfigResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[10];
    return this.makeUnaryRequest<
      SubmitModelConfigRequest,
      SubmitModelConfigResponse
    >(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: SubmitModelConfigRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): SubmitModelConfigResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: SubmitUser(baserun.v1.SubmitUserRequest) returns (baserun.v1.SubmitUserResponse);
   */
  submitUser(
    input: SubmitUserRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitUserResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: SubmitUserResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: SubmitUserResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[11];
    return this.makeUnaryRequest<SubmitUserRequest, SubmitUserResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: SubmitUserRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): SubmitUserResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: GetTemplates(baserun.v1.GetTemplatesRequest) returns (baserun.v1.GetTemplatesResponse);
   */
  getTemplates(
    input: GetTemplatesRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: GetTemplatesResponse) => void),
    options?:
      | grpc.CallOptions
      | ((err: grpc.ServiceError | null, value?: GetTemplatesResponse) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: GetTemplatesResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[12];
    return this.makeUnaryRequest<GetTemplatesRequest, GetTemplatesResponse>(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: GetTemplatesRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): GetTemplatesResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
  /**
   * @generated from protobuf rpc: SubmitAnnotations(baserun.v1.SubmitAnnotationsRequest) returns (baserun.v1.SubmitAnnotationsResponse);
   */
  submitAnnotations(
    input: SubmitAnnotationsRequest,
    metadata:
      | grpc.Metadata
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: SubmitAnnotationsResponse,
        ) => void),
    options?:
      | grpc.CallOptions
      | ((
          err: grpc.ServiceError | null,
          value?: SubmitAnnotationsResponse,
        ) => void),
    callback?: (
      err: grpc.ServiceError | null,
      value?: SubmitAnnotationsResponse,
    ) => void,
  ): grpc.ClientUnaryCall {
    const method = SubmissionService.methods[13];
    return this.makeUnaryRequest<
      SubmitAnnotationsRequest,
      SubmitAnnotationsResponse
    >(
      `/${SubmissionService.typeName}/${method.name}`,
      (value: SubmitAnnotationsRequest): Buffer =>
        Buffer.from(method.I.toBinary(value, this._binaryOptions)),
      (value: Buffer): SubmitAnnotationsResponse =>
        method.O.fromBinary(value, this._binaryOptions),
      input,
      metadata as any,
      options as any,
      callback as any,
    );
  }
}
