/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@atproto/xrpc';
export interface QueryParams {
}
export interface InputSchema {
    /** Handle or other identifier supported by the server for the authenticating user. */
    identifier: string;
    password: string;
    authFactorToken?: string;
    [k: string]: unknown;
}
export interface OutputSchema {
    accessJwt: string;
    refreshJwt: string;
    handle: string;
    did: string;
    didDoc?: {};
    email?: string;
    emailConfirmed?: boolean;
    emailAuthFactor?: boolean;
    active?: boolean;
    /** If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted. */
    status?: 'takendown' | 'suspended' | 'deactivated' | (string & {});
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
    data: OutputSchema;
}
export declare class AccountTakedownError extends XRPCError {
    constructor(src: XRPCError);
}
export declare class AuthFactorTokenRequiredError extends XRPCError {
    constructor(src: XRPCError);
}
export declare function toKnownErr(e: any): any;
//# sourceMappingURL=createSession.d.ts.map