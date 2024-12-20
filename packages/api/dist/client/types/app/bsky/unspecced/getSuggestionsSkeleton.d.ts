/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@atproto/xrpc';
import * as AppBskyUnspeccedDefs from './defs';
export interface QueryParams {
    /** DID of the account making the request (not included for public/unauthenticated queries). Used to boost followed accounts in ranking. */
    viewer?: string;
    limit?: number;
    cursor?: string;
    /** DID of the account to get suggestions relative to. If not provided, suggestions will be based on the viewer. */
    relativeToDid?: string;
}
export type InputSchema = undefined;
export interface OutputSchema {
    cursor?: string;
    actors: AppBskyUnspeccedDefs.SkeletonSearchActor[];
    /** DID of the account these suggestions are relative to. If this is returned undefined, suggestions are based on the viewer. */
    relativeToDid?: string;
    [k: string]: unknown;
}
export interface CallOptions {
    signal?: AbortSignal;
    headers?: HeadersMap;
}
export interface Response {
    success: boolean;
    headers: HeadersMap;
    data: OutputSchema;
}
export declare function toKnownErr(e: any): any;
//# sourceMappingURL=getSuggestionsSkeleton.d.ts.map