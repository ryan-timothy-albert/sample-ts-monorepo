/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ApiErrorInvalidInputData = {
  status: number;
  error: string;
};

export class ApiErrorInvalidInput extends Error {
  status: number;
  error: string;

  /** The original data that was passed to this error instance. */
  data$: ApiErrorInvalidInputData;

  constructor(err: ApiErrorInvalidInputData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.status = err.status;
    this.error = err.error;

    this.name = "ApiErrorInvalidInput";
  }
}

/** @internal */
export const ApiErrorInvalidInput$inboundSchema: z.ZodType<
  ApiErrorInvalidInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int(),
  error: z.string(),
})
  .transform((v) => {
    return new ApiErrorInvalidInput(v);
  });

/** @internal */
export type ApiErrorInvalidInput$Outbound = {
  status: number;
  error: string;
};

/** @internal */
export const ApiErrorInvalidInput$outboundSchema: z.ZodType<
  ApiErrorInvalidInput$Outbound,
  z.ZodTypeDef,
  ApiErrorInvalidInput
> = z.instanceof(ApiErrorInvalidInput)
  .transform(v => v.data$)
  .pipe(z.object({
    status: z.number().int(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiErrorInvalidInput$ {
  /** @deprecated use `ApiErrorInvalidInput$inboundSchema` instead. */
  export const inboundSchema = ApiErrorInvalidInput$inboundSchema;
  /** @deprecated use `ApiErrorInvalidInput$outboundSchema` instead. */
  export const outboundSchema = ApiErrorInvalidInput$outboundSchema;
  /** @deprecated use `ApiErrorInvalidInput$Outbound` instead. */
  export type Outbound = ApiErrorInvalidInput$Outbound;
}
