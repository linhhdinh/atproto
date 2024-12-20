/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@atproto/xrpc';
import * as AppBskyActorDefs from './defs';
export interface QueryParams {
    /** DEPRECATED: use 'q' instead. */
    term?: string;
    /** Search query string. Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. */
    q?: string;
    limit?: number;
    cursor?: string;
}
export type InputSchema = undefined;
export interface OutputSchema {
    cursor?: string;
    actors: AppBskyActorDefs.ProfileView[];
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
//# sourceMappingURL=searchActors.d.ts.map