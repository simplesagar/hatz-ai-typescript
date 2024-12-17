/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The role of the message sender
 */
export const Role = {
  System: "system",
  User: "user",
  Assistant: "assistant",
} as const;
/**
 * The role of the message sender
 */
export type Role = ClosedEnum<typeof Role>;

export type Message = {
  /**
   * The role of the message sender
   */
  role: Role;
  /**
   * The content of the message
   */
  content: string;
};

/** @internal */
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(
  Role,
);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> =
  Role$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
  /** @deprecated use `Role$inboundSchema` instead. */
  export const inboundSchema = Role$inboundSchema;
  /** @deprecated use `Role$outboundSchema` instead. */
  export const outboundSchema = Role$outboundSchema;
}

/** @internal */
export const Message$inboundSchema: z.ZodType<Message, z.ZodTypeDef, unknown> =
  z.object({
    role: Role$inboundSchema,
    content: z.string(),
  });

/** @internal */
export type Message$Outbound = {
  role: string;
  content: string;
};

/** @internal */
export const Message$outboundSchema: z.ZodType<
  Message$Outbound,
  z.ZodTypeDef,
  Message
> = z.object({
  role: Role$outboundSchema,
  content: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Message$ {
  /** @deprecated use `Message$inboundSchema` instead. */
  export const inboundSchema = Message$inboundSchema;
  /** @deprecated use `Message$outboundSchema` instead. */
  export const outboundSchema = Message$outboundSchema;
  /** @deprecated use `Message$Outbound` instead. */
  export type Outbound = Message$Outbound;
}

export function messageToJSON(message: Message): string {
  return JSON.stringify(Message$outboundSchema.parse(message));
}

export function messageFromJSON(
  jsonString: string,
): SafeParseResult<Message, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Message$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Message' from JSON`,
  );
}
