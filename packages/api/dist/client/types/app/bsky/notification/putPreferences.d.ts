/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@atproto/xrpc';
export interface QueryParams {
}
export interface InputSchema {
    priority: boolean;
    [k: string]: unknown;
}
export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
    qp?: QueryParams;
    encoding?: 'application/json';
}
export interface Response {
    success: boolean;
    headers: HeadersMap;
}
export declare function toKnownErr(e: any): any;
//# sourceMappingURL=putPreferences.d.ts.map