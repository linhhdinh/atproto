/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@atproto/xrpc';
export interface QueryParams {
}
export type InputSchema = undefined;
export interface OutputSchema {
    handle: string;
    did: string;
    email?: string;
    emailConfirmed?: boolean;
    emailAuthFactor?: boolean;
    didDoc?: {};
    active?: boolean;
    /** If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted. */
    status?: 'takendown' | 'suspended' | 'deactivated' | (string & {});
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
//# sourceMappingURL=getSession.d.ts.map