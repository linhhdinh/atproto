/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap } from '@atproto/xrpc';
import { ValidationResult } from '@atproto/lexicon';
import * as AppBskyActorDefs from '../actor/defs';
import * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs';
export interface QueryParams {
    /** Notification reasons to include in response. */
    reasons?: string[];
    limit?: number;
    priority?: boolean;
    cursor?: string;
    seenAt?: string;
}
export type InputSchema = undefined;
export interface OutputSchema {
    cursor?: string;
    notifications: Notification[];
    priority?: boolean;
    seenAt?: string;
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
export interface Notification {
    uri: string;
    cid: string;
    author: AppBskyActorDefs.ProfileView;
    /** Expected values are 'like', 'repost', 'follow', 'mention', 'reply', 'quote', and 'starterpack-joined'. */
    reason: 'like' | 'repost' | 'follow' | 'mention' | 'reply' | 'quote' | 'starterpack-joined' | (string & {});
    reasonSubject?: string;
    record: {};
    isRead: boolean;
    indexedAt: string;
    labels?: ComAtprotoLabelDefs.Label[];
    [k: string]: unknown;
}
export declare function isNotification(v: unknown): v is Notification;
export declare function validateNotification(v: unknown): ValidationResult;
//# sourceMappingURL=listNotifications.d.ts.map