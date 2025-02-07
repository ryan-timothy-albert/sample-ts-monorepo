/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ShowPetByIdRequest = {
  /**
   * The id of the pet to retrieve
   */
  petId: string;
};

export type ShowPetByIdResponse = components.ErrorT | components.Pet;

/** @internal */
export const ShowPetByIdRequest$inboundSchema: z.ZodType<
  ShowPetByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  petId: z.string(),
});

/** @internal */
export type ShowPetByIdRequest$Outbound = {
  petId: string;
};

/** @internal */
export const ShowPetByIdRequest$outboundSchema: z.ZodType<
  ShowPetByIdRequest$Outbound,
  z.ZodTypeDef,
  ShowPetByIdRequest
> = z.object({
  petId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShowPetByIdRequest$ {
  /** @deprecated use `ShowPetByIdRequest$inboundSchema` instead. */
  export const inboundSchema = ShowPetByIdRequest$inboundSchema;
  /** @deprecated use `ShowPetByIdRequest$outboundSchema` instead. */
  export const outboundSchema = ShowPetByIdRequest$outboundSchema;
  /** @deprecated use `ShowPetByIdRequest$Outbound` instead. */
  export type Outbound = ShowPetByIdRequest$Outbound;
}

export function showPetByIdRequestToJSON(
  showPetByIdRequest: ShowPetByIdRequest,
): string {
  return JSON.stringify(
    ShowPetByIdRequest$outboundSchema.parse(showPetByIdRequest),
  );
}

export function showPetByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<ShowPetByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ShowPetByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ShowPetByIdRequest' from JSON`,
  );
}

/** @internal */
export const ShowPetByIdResponse$inboundSchema: z.ZodType<
  ShowPetByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.ErrorT$inboundSchema, components.Pet$inboundSchema]);

/** @internal */
export type ShowPetByIdResponse$Outbound =
  | components.ErrorT$Outbound
  | components.Pet$Outbound;

/** @internal */
export const ShowPetByIdResponse$outboundSchema: z.ZodType<
  ShowPetByIdResponse$Outbound,
  z.ZodTypeDef,
  ShowPetByIdResponse
> = z.union([components.ErrorT$outboundSchema, components.Pet$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShowPetByIdResponse$ {
  /** @deprecated use `ShowPetByIdResponse$inboundSchema` instead. */
  export const inboundSchema = ShowPetByIdResponse$inboundSchema;
  /** @deprecated use `ShowPetByIdResponse$outboundSchema` instead. */
  export const outboundSchema = ShowPetByIdResponse$outboundSchema;
  /** @deprecated use `ShowPetByIdResponse$Outbound` instead. */
  export type Outbound = ShowPetByIdResponse$Outbound;
}

export function showPetByIdResponseToJSON(
  showPetByIdResponse: ShowPetByIdResponse,
): string {
  return JSON.stringify(
    ShowPetByIdResponse$outboundSchema.parse(showPetByIdResponse),
  );
}

export function showPetByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<ShowPetByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ShowPetByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ShowPetByIdResponse' from JSON`,
  );
}
