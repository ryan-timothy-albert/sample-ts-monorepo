/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ErrorT = {
    code: number;
    message: string;
};

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z.object({
    code: z.number().int(),
    message: z.string(),
});

/** @internal */
export type ErrorT$Outbound = {
    code: number;
    message: string;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT> = z.object({
    code: z.number().int(),
    message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
    /** @deprecated use `ErrorT$inboundSchema` instead. */
    export const inboundSchema = ErrorT$inboundSchema;
    /** @deprecated use `ErrorT$outboundSchema` instead. */
    export const outboundSchema = ErrorT$outboundSchema;
    /** @deprecated use `ErrorT$Outbound` instead. */
    export type Outbound = ErrorT$Outbound;
}
