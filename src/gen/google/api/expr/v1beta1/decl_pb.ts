// Copyright 2019 Google LLC.
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
//

// @generated by protoc-gen-es v0.1.1 with parameter "target=ts"
// @generated from file google/api/expr/v1beta1/decl.proto (package google.api.expr.v1beta1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import {Expr} from "./expr_pb.js";

/**
 * A declaration.
 *
 * @generated from message google.api.expr.v1beta1.Decl
 */
export class Decl extends Message<Decl> {
  /**
   * The id of the declaration.
   *
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * The name of the declaration.
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * The documentation string for the declaration.
   *
   * @generated from field: string doc = 3;
   */
  doc = "";

  /**
   * The kind of declaration.
   *
   * @generated from oneof google.api.expr.v1beta1.Decl.kind
   */
  kind: {
    /**
     * An identifier declaration.
     *
     * @generated from field: google.api.expr.v1beta1.IdentDecl ident = 4;
     */
    value: IdentDecl;
    case: "ident";
  } | {
    /**
     * A function declaration.
     *
     * @generated from field: google.api.expr.v1beta1.FunctionDecl function = 5;
     */
    value: FunctionDecl;
    case: "function";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Decl>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "google.api.expr.v1beta1.Decl";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "doc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ident", kind: "message", T: IdentDecl, oneof: "kind" },
    { no: 5, name: "function", kind: "message", T: FunctionDecl, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Decl {
    return new Decl().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Decl {
    return new Decl().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Decl {
    return new Decl().fromJsonString(jsonString, options);
  }

  static equals(a: Decl | PlainMessage<Decl> | undefined, b: Decl | PlainMessage<Decl> | undefined): boolean {
    return proto3.util.equals(Decl, a, b);
  }
}

/**
 * The declared type of a variable.
 *
 * Extends runtime type values with extra information used for type checking
 * and dispatching.
 *
 * @generated from message google.api.expr.v1beta1.DeclType
 */
export class DeclType extends Message<DeclType> {
  /**
   * The expression id of the declared type, if applicable.
   *
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * The type name, e.g. 'int', 'my.type.Type' or 'T'
   *
   * @generated from field: string type = 2;
   */
  type = "";

  /**
   * An ordered list of type parameters, e.g. `<string, int>`.
   * Only applies to a subset of types, e.g. `map`, `list`.
   *
   * @generated from field: repeated google.api.expr.v1beta1.DeclType type_params = 4;
   */
  typeParams: DeclType[] = [];

  constructor(data?: PartialMessage<DeclType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "google.api.expr.v1beta1.DeclType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "type_params", kind: "message", T: DeclType, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeclType {
    return new DeclType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeclType {
    return new DeclType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeclType {
    return new DeclType().fromJsonString(jsonString, options);
  }

  static equals(a: DeclType | PlainMessage<DeclType> | undefined, b: DeclType | PlainMessage<DeclType> | undefined): boolean {
    return proto3.util.equals(DeclType, a, b);
  }
}

/**
 * An identifier declaration.
 *
 * @generated from message google.api.expr.v1beta1.IdentDecl
 */
export class IdentDecl extends Message<IdentDecl> {
  /**
   * Optional type of the identifier.
   *
   * @generated from field: google.api.expr.v1beta1.DeclType type = 3;
   */
  type?: DeclType;

  /**
   * Optional value of the identifier.
   *
   * @generated from field: google.api.expr.v1beta1.Expr value = 4;
   */
  value?: Expr;

  constructor(data?: PartialMessage<IdentDecl>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "google.api.expr.v1beta1.IdentDecl";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "type", kind: "message", T: DeclType },
    { no: 4, name: "value", kind: "message", T: Expr },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentDecl {
    return new IdentDecl().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentDecl {
    return new IdentDecl().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentDecl {
    return new IdentDecl().fromJsonString(jsonString, options);
  }

  static equals(a: IdentDecl | PlainMessage<IdentDecl> | undefined, b: IdentDecl | PlainMessage<IdentDecl> | undefined): boolean {
    return proto3.util.equals(IdentDecl, a, b);
  }
}

/**
 * A function declaration.
 *
 * @generated from message google.api.expr.v1beta1.FunctionDecl
 */
export class FunctionDecl extends Message<FunctionDecl> {
  /**
   * The function arguments.
   *
   * @generated from field: repeated google.api.expr.v1beta1.IdentDecl args = 1;
   */
  args: IdentDecl[] = [];

  /**
   * Optional declared return type.
   *
   * @generated from field: google.api.expr.v1beta1.DeclType return_type = 2;
   */
  returnType?: DeclType;

  /**
   * If the first argument of the function is the receiver.
   *
   * @generated from field: bool receiver_function = 3;
   */
  receiverFunction = false;

  constructor(data?: PartialMessage<FunctionDecl>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "google.api.expr.v1beta1.FunctionDecl";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "args", kind: "message", T: IdentDecl, repeated: true },
    { no: 2, name: "return_type", kind: "message", T: DeclType },
    { no: 3, name: "receiver_function", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FunctionDecl {
    return new FunctionDecl().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FunctionDecl {
    return new FunctionDecl().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FunctionDecl {
    return new FunctionDecl().fromJsonString(jsonString, options);
  }

  static equals(a: FunctionDecl | PlainMessage<FunctionDecl> | undefined, b: FunctionDecl | PlainMessage<FunctionDecl> | undefined): boolean {
    return proto3.util.equals(FunctionDecl, a, b);
  }
}

