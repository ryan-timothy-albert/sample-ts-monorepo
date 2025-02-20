/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Unauthorized error
 */
export type ApiErrorUnauthorizedData = {
  status: number;
  error: string;
};

/**
 * Unauthorized error
 */
export class ApiErrorUnauthorized extends Error {
  status: number;
  error: string;

  /** The original data that was passed to this error instance. */
  data$: ApiErrorUnauthorizedData;

  constructor(err: ApiErrorUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.status = err.status;
    this.error = err.error;

    this.name = "ApiErrorUnauthorized";
  }
}

/** @internal */
export const ApiErrorUnauthorized$inboundSchema: z.ZodType<
  ApiErrorUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int(),
  error: z.string(),
})
  .transform((v) => {
    return new ApiErrorUnauthorized(v);
  });

/** @internal */
export type ApiErrorUnauthorized$Outbound = {
  status: number;
  error: string;
};

/** @internal */
export const ApiErrorUnauthorized$outboundSchema: z.ZodType<
  ApiErrorUnauthorized$Outbound,
  z.ZodTypeDef,
  ApiErrorUnauthorized
> = z.instanceof(ApiErrorUnauthorized)
  .transform(v => v.data$)
  .pipe(z.object({
    status: z.number().int(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiErrorUnauthorized$ {
  /** @deprecated use `ApiErrorUnauthorized$inboundSchema` instead. */
  export const inboundSchema = ApiErrorUnauthorized$inboundSchema;
  /** @deprecated use `ApiErrorUnauthorized$outboundSchema` instead. */
  export const outboundSchema = ApiErrorUnauthorized$outboundSchema;
  /** @deprecated use `ApiErrorUnauthorized$Outbound` instead. */
  export type Outbound = ApiErrorUnauthorized$Outbound;
}
