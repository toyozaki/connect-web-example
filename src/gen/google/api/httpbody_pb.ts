// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v0.1.1 with parameter "target=ts"
// @generated from file google/api/httpbody.proto (package google.api, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Any, Message, proto3} from "@bufbuild/protobuf";

/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest)
 *         returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody)
 *         returns (google.protobuf.Empty);
 *
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 *
 * @generated from message google.api.HttpBody
 */
export class HttpBody extends Message<HttpBody> {
  /**
   * The HTTP Content-Type header value specifying the content type of the body.
   *
   * @generated from field: string content_type = 1;
   */
  contentType = "";

  /**
   * The HTTP request/response body as raw binary.
   *
   * @generated from field: bytes data = 2;
   */
  data = new Uint8Array(0);

  /**
   * Application specific response metadata. Must be set in the first response
   * for streaming APIs.
   *
   * @generated from field: repeated google.protobuf.Any extensions = 3;
   */
  extensions: Any[] = [];

  constructor(data?: PartialMessage<HttpBody>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "google.api.HttpBody";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "content_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "extensions", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HttpBody {
    return new HttpBody().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HttpBody {
    return new HttpBody().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HttpBody {
    return new HttpBody().fromJsonString(jsonString, options);
  }

  static equals(a: HttpBody | PlainMessage<HttpBody> | undefined, b: HttpBody | PlainMessage<HttpBody> | undefined): boolean {
    return proto3.util.equals(HttpBody, a, b);
  }
}

