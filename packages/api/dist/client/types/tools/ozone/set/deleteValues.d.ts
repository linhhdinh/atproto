/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@atproto/xrpc';
export interface QueryParams {
}
export interface InputSchema {
    /** Name of the set to delete values from */
    name: string;
    /** Array of string values to delete from the set */
    values: string[];
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
export declare class SetNotFoundError extends XRPCError {
    constructor(src: XRPCError);
}
export declare function toKnownErr(e: any): any;
//# sourceMappingURL=deleteValues.d.ts.map