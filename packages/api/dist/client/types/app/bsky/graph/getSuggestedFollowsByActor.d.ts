/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@atproto/xrpc';
import * as AppBskyActorDefs from '../actor/defs';
export interface QueryParams {
    actor: string;
}
export type InputSchema = undefined;
export interface OutputSchema {
    suggestions: AppBskyActorDefs.ProfileView[];
    /** If true, response has fallen-back to generic results, and is not scoped using relativeToDid */
    isFallback: boolean;
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
//# sourceMappingURL=getSuggestedFollowsByActor.d.ts.map