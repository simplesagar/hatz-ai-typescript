/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileT = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

export type BodyUploadFileV1FilesUploadPost = {
  file: FileT | Blob;
  onlyCalculateTokens?: boolean | undefined;
};

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    fileName: z.string(),
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
  });

/** @internal */
export type FileT$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

export function fileToJSON(fileT: FileT): string {
  return JSON.stringify(FileT$outboundSchema.parse(fileT));
}

export function fileFromJSON(
  jsonString: string,
): SafeParseResult<FileT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileT' from JSON`,
  );
}

/** @internal */
export const BodyUploadFileV1FilesUploadPost$inboundSchema: z.ZodType<
  BodyUploadFileV1FilesUploadPost,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => FileT$inboundSchema),
  only_calculate_tokens: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "only_calculate_tokens": "onlyCalculateTokens",
  });
});

/** @internal */
export type BodyUploadFileV1FilesUploadPost$Outbound = {
  file: FileT$Outbound | Blob;
  only_calculate_tokens: boolean;
};

/** @internal */
export const BodyUploadFileV1FilesUploadPost$outboundSchema: z.ZodType<
  BodyUploadFileV1FilesUploadPost$Outbound,
  z.ZodTypeDef,
  BodyUploadFileV1FilesUploadPost
> = z.object({
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema),
  onlyCalculateTokens: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    onlyCalculateTokens: "only_calculate_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyUploadFileV1FilesUploadPost$ {
  /** @deprecated use `BodyUploadFileV1FilesUploadPost$inboundSchema` instead. */
  export const inboundSchema = BodyUploadFileV1FilesUploadPost$inboundSchema;
  /** @deprecated use `BodyUploadFileV1FilesUploadPost$outboundSchema` instead. */
  export const outboundSchema = BodyUploadFileV1FilesUploadPost$outboundSchema;
  /** @deprecated use `BodyUploadFileV1FilesUploadPost$Outbound` instead. */
  export type Outbound = BodyUploadFileV1FilesUploadPost$Outbound;
}

export function bodyUploadFileV1FilesUploadPostToJSON(
  bodyUploadFileV1FilesUploadPost: BodyUploadFileV1FilesUploadPost,
): string {
  return JSON.stringify(
    BodyUploadFileV1FilesUploadPost$outboundSchema.parse(
      bodyUploadFileV1FilesUploadPost,
    ),
  );
}

export function bodyUploadFileV1FilesUploadPostFromJSON(
  jsonString: string,
): SafeParseResult<BodyUploadFileV1FilesUploadPost, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BodyUploadFileV1FilesUploadPost$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BodyUploadFileV1FilesUploadPost' from JSON`,
  );
}
