import {
  BeforeRequestContext,
  BeforeRequestHook,

} from "./types";

export class CustomHeaderHook
  implements BeforeRequestHook
{
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    // modify the request object before it is sent, such as adding headers or query parameters, or throw an error to stop the request from being sent

    request.headers.set("x-custom-header", "custom-value");

    return request;
  }
}
