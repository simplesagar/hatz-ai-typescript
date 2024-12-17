/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Security = {
  apiKeyHeader?: string | undefined;
};

/** @internal */
export const Security$inboundSchema: z.ZodType<
  Security,
  z.ZodTypeDef,
  unknown
> = z.object({
  APIKeyHeader: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "APIKeyHeader": "apiKeyHeader",
  });
});

/** @internal */
export type Security$Outbound = {
  APIKeyHeader?: string | undefined;
};

/** @internal */
export const Security$outboundSchema: z.ZodType<
  Security$Outbound,
  z.ZodTypeDef,
  Security
> = z.object({
  apiKeyHeader: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    apiKeyHeader: "APIKeyHeader",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Security$ {
  /** @deprecated use `Security$inboundSchema` instead. */
  export const inboundSchema = Security$inboundSchema;
  /** @deprecated use `Security$outboundSchema` instead. */
  export const outboundSchema = Security$outboundSchema;
  /** @deprecated use `Security$Outbound` instead. */
  export type Outbound = Security$Outbound;
}

export function securityToJSON(security: Security): string {
  return JSON.stringify(Security$outboundSchema.parse(security));
}

export function securityFromJSON(
  jsonString: string,
): SafeParseResult<Security, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Security$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Security' from JSON`,
  );
}
