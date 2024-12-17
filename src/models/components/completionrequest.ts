/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Message,
  Message$inboundSchema,
  Message$Outbound,
  Message$outboundSchema,
} from "./message.js";

export type CompletionRequest = {
  /**
   * The list of messages to process
   */
  messages: Array<Message>;
  /**
   * The AI model to use for processing. Please use the unique name of the model, not the display name
   */
  model?: string | null | undefined;
  /**
   * Whether to stream the response
   */
  stream?: boolean | undefined;
  /**
   * The list of file uuids to process
   */
  fileUuids?: Array<string> | null | undefined;
};

/** @internal */
export const CompletionRequest$inboundSchema: z.ZodType<
  CompletionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  messages: z.array(Message$inboundSchema),
  model: z.nullable(z.string()).optional(),
  stream: z.boolean().default(false),
  file_uuids: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    "file_uuids": "fileUuids",
  });
});

/** @internal */
export type CompletionRequest$Outbound = {
  messages: Array<Message$Outbound>;
  model?: string | null | undefined;
  stream: boolean;
  file_uuids?: Array<string> | null | undefined;
};

/** @internal */
export const CompletionRequest$outboundSchema: z.ZodType<
  CompletionRequest$Outbound,
  z.ZodTypeDef,
  CompletionRequest
> = z.object({
  messages: z.array(Message$outboundSchema),
  model: z.nullable(z.string()).optional(),
  stream: z.boolean().default(false),
  fileUuids: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    fileUuids: "file_uuids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionRequest$ {
  /** @deprecated use `CompletionRequest$inboundSchema` instead. */
  export const inboundSchema = CompletionRequest$inboundSchema;
  /** @deprecated use `CompletionRequest$outboundSchema` instead. */
  export const outboundSchema = CompletionRequest$outboundSchema;
  /** @deprecated use `CompletionRequest$Outbound` instead. */
  export type Outbound = CompletionRequest$Outbound;
}

export function completionRequestToJSON(
  completionRequest: CompletionRequest,
): string {
  return JSON.stringify(
    CompletionRequest$outboundSchema.parse(completionRequest),
  );
}

export function completionRequestFromJSON(
  jsonString: string,
): SafeParseResult<CompletionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionRequest' from JSON`,
  );
}
