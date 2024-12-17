/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AIModel,
  AIModel$inboundSchema,
  AIModel$Outbound,
  AIModel$outboundSchema,
} from "./aimodel.js";

export type ModelsResponse = {
  /**
   * The list of available AI models
   */
  data: Array<AIModel>;
};

/** @internal */
export const ModelsResponse$inboundSchema: z.ZodType<
  ModelsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(AIModel$inboundSchema),
});

/** @internal */
export type ModelsResponse$Outbound = {
  data: Array<AIModel$Outbound>;
};

/** @internal */
export const ModelsResponse$outboundSchema: z.ZodType<
  ModelsResponse$Outbound,
  z.ZodTypeDef,
  ModelsResponse
> = z.object({
  data: z.array(AIModel$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModelsResponse$ {
  /** @deprecated use `ModelsResponse$inboundSchema` instead. */
  export const inboundSchema = ModelsResponse$inboundSchema;
  /** @deprecated use `ModelsResponse$outboundSchema` instead. */
  export const outboundSchema = ModelsResponse$outboundSchema;
  /** @deprecated use `ModelsResponse$Outbound` instead. */
  export type Outbound = ModelsResponse$Outbound;
}

export function modelsResponseToJSON(modelsResponse: ModelsResponse): string {
  return JSON.stringify(ModelsResponse$outboundSchema.parse(modelsResponse));
}

export function modelsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ModelsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ModelsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ModelsResponse' from JSON`,
  );
}
