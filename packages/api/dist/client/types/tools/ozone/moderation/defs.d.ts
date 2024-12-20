/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult } from '@atproto/lexicon';
import * as ComAtprotoAdminDefs from '../../../com/atproto/admin/defs';
import * as ComAtprotoRepoStrongRef from '../../../com/atproto/repo/strongRef';
import * as ChatBskyConvoDefs from '../../../chat/bsky/convo/defs';
import * as ComAtprotoModerationDefs from '../../../com/atproto/moderation/defs';
import * as ComAtprotoServerDefs from '../../../com/atproto/server/defs';
import * as ComAtprotoLabelDefs from '../../../com/atproto/label/defs';
export interface ModEventView {
    id: number;
    event: ModEventTakedown | ModEventReverseTakedown | ModEventComment | ModEventReport | ModEventLabel | ModEventAcknowledge | ModEventEscalate | ModEventMute | ModEventUnmute | ModEventMuteReporter | ModEventUnmuteReporter | ModEventEmail | ModEventResolveAppeal | ModEventDivert | ModEventTag | AccountEvent | IdentityEvent | RecordEvent | {
        $type: string;
        [k: string]: unknown;
    };
    subject: ComAtprotoAdminDefs.RepoRef | ComAtprotoRepoStrongRef.Main | ChatBskyConvoDefs.MessageRef | {
        $type: string;
        [k: string]: unknown;
    };
    subjectBlobCids: string[];
    createdBy: string;
    createdAt: string;
    creatorHandle?: string;
    subjectHandle?: string;
    [k: string]: unknown;
}
export declare function isModEventView(v: unknown): v is ModEventView;
export declare function validateModEventView(v: unknown): ValidationResult;
export interface ModEventViewDetail {
    id: number;
    event: ModEventTakedown | ModEventReverseTakedown | ModEventComment | ModEventReport | ModEventLabel | ModEventAcknowledge | ModEventEscalate | ModEventMute | ModEventUnmute | ModEventMuteReporter | ModEventUnmuteReporter | ModEventEmail | ModEventResolveAppeal | ModEventDivert | ModEventTag | AccountEvent | IdentityEvent | RecordEvent | {
        $type: string;
        [k: string]: unknown;
    };
    subject: RepoView | RepoViewNotFound | RecordView | RecordViewNotFound | {
        $type: string;
        [k: string]: unknown;
    };
    subjectBlobs: BlobView[];
    createdBy: string;
    createdAt: string;
    [k: string]: unknown;
}
export declare function isModEventViewDetail(v: unknown): v is ModEventViewDetail;
export declare function validateModEventViewDetail(v: unknown): ValidationResult;
export interface SubjectStatusView {
    id: number;
    subject: ComAtprotoAdminDefs.RepoRef | ComAtprotoRepoStrongRef.Main | {
        $type: string;
        [k: string]: unknown;
    };
    hosting?: AccountHosting | RecordHosting | {
        $type: string;
        [k: string]: unknown;
    };
    subjectBlobCids?: string[];
    subjectRepoHandle?: string;
    /** Timestamp referencing when the last update was made to the moderation status of the subject */
    updatedAt: string;
    /** Timestamp referencing the first moderation status impacting event was emitted on the subject */
    createdAt: string;
    reviewState: SubjectReviewState;
    /** Sticky comment on the subject. */
    comment?: string;
    muteUntil?: string;
    muteReportingUntil?: string;
    lastReviewedBy?: string;
    lastReviewedAt?: string;
    lastReportedAt?: string;
    /** Timestamp referencing when the author of the subject appealed a moderation action */
    lastAppealedAt?: string;
    takendown?: boolean;
    /** True indicates that the a previously taken moderator action was appealed against, by the author of the content. False indicates last appeal was resolved by moderators. */
    appealed?: boolean;
    suspendUntil?: string;
    tags?: string[];
    [k: string]: unknown;
}
export declare function isSubjectStatusView(v: unknown): v is SubjectStatusView;
export declare function validateSubjectStatusView(v: unknown): ValidationResult;
export type SubjectReviewState = 'lex:tools.ozone.moderation.defs#reviewOpen' | 'lex:tools.ozone.moderation.defs#reviewEscalated' | 'lex:tools.ozone.moderation.defs#reviewClosed' | 'lex:tools.ozone.moderation.defs#reviewNone' | (string & {});
/** Moderator review status of a subject: Open. Indicates that the subject needs to be reviewed by a moderator */
export declare const REVIEWOPEN = "tools.ozone.moderation.defs#reviewOpen";
/** Moderator review status of a subject: Escalated. Indicates that the subject was escalated for review by a moderator */
export declare const REVIEWESCALATED = "tools.ozone.moderation.defs#reviewEscalated";
/** Moderator review status of a subject: Closed. Indicates that the subject was already reviewed and resolved by a moderator */
export declare const REVIEWCLOSED = "tools.ozone.moderation.defs#reviewClosed";
/** Moderator review status of a subject: Unnecessary. Indicates that the subject does not need a review at the moment but there is probably some moderation related metadata available for it */
export declare const REVIEWNONE = "tools.ozone.moderation.defs#reviewNone";
/** Take down a subject permanently or temporarily */
export interface ModEventTakedown {
    comment?: string;
    /** Indicates how long the takedown should be in effect before automatically expiring. */
    durationInHours?: number;
    /** If true, all other reports on content authored by this account will be resolved (acknowledged). */
    acknowledgeAccountSubjects?: boolean;
    [k: string]: unknown;
}
export declare function isModEventTakedown(v: unknown): v is ModEventTakedown;
export declare function validateModEventTakedown(v: unknown): ValidationResult;
/** Revert take down action on a subject */
export interface ModEventReverseTakedown {
    /** Describe reasoning behind the reversal. */
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventReverseTakedown(v: unknown): v is ModEventReverseTakedown;
export declare function validateModEventReverseTakedown(v: unknown): ValidationResult;
/** Resolve appeal on a subject */
export interface ModEventResolveAppeal {
    /** Describe resolution. */
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventResolveAppeal(v: unknown): v is ModEventResolveAppeal;
export declare function validateModEventResolveAppeal(v: unknown): ValidationResult;
/** Add a comment to a subject */
export interface ModEventComment {
    comment: string;
    /** Make the comment persistent on the subject */
    sticky?: boolean;
    [k: string]: unknown;
}
export declare function isModEventComment(v: unknown): v is ModEventComment;
export declare function validateModEventComment(v: unknown): ValidationResult;
/** Report a subject */
export interface ModEventReport {
    comment?: string;
    /** Set to true if the reporter was muted from reporting at the time of the event. These reports won't impact the reviewState of the subject. */
    isReporterMuted?: boolean;
    reportType: ComAtprotoModerationDefs.ReasonType;
    [k: string]: unknown;
}
export declare function isModEventReport(v: unknown): v is ModEventReport;
export declare function validateModEventReport(v: unknown): ValidationResult;
/** Apply/Negate labels on a subject */
export interface ModEventLabel {
    comment?: string;
    createLabelVals: string[];
    negateLabelVals: string[];
    [k: string]: unknown;
}
export declare function isModEventLabel(v: unknown): v is ModEventLabel;
export declare function validateModEventLabel(v: unknown): ValidationResult;
export interface ModEventAcknowledge {
    comment?: string;
    /** If true, all other reports on content authored by this account will be resolved (acknowledged). */
    acknowledgeAccountSubjects?: boolean;
    [k: string]: unknown;
}
export declare function isModEventAcknowledge(v: unknown): v is ModEventAcknowledge;
export declare function validateModEventAcknowledge(v: unknown): ValidationResult;
export interface ModEventEscalate {
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventEscalate(v: unknown): v is ModEventEscalate;
export declare function validateModEventEscalate(v: unknown): ValidationResult;
/** Mute incoming reports on a subject */
export interface ModEventMute {
    comment?: string;
    /** Indicates how long the subject should remain muted. */
    durationInHours: number;
    [k: string]: unknown;
}
export declare function isModEventMute(v: unknown): v is ModEventMute;
export declare function validateModEventMute(v: unknown): ValidationResult;
/** Unmute action on a subject */
export interface ModEventUnmute {
    /** Describe reasoning behind the reversal. */
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventUnmute(v: unknown): v is ModEventUnmute;
export declare function validateModEventUnmute(v: unknown): ValidationResult;
/** Mute incoming reports from an account */
export interface ModEventMuteReporter {
    comment?: string;
    /** Indicates how long the account should remain muted. Falsy value here means a permanent mute. */
    durationInHours?: number;
    [k: string]: unknown;
}
export declare function isModEventMuteReporter(v: unknown): v is ModEventMuteReporter;
export declare function validateModEventMuteReporter(v: unknown): ValidationResult;
/** Unmute incoming reports from an account */
export interface ModEventUnmuteReporter {
    /** Describe reasoning behind the reversal. */
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventUnmuteReporter(v: unknown): v is ModEventUnmuteReporter;
export declare function validateModEventUnmuteReporter(v: unknown): ValidationResult;
/** Keep a log of outgoing email to a user */
export interface ModEventEmail {
    /** The subject line of the email sent to the user. */
    subjectLine: string;
    /** The content of the email sent to the user. */
    content?: string;
    /** Additional comment about the outgoing comm. */
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventEmail(v: unknown): v is ModEventEmail;
export declare function validateModEventEmail(v: unknown): ValidationResult;
/** Divert a record's blobs to a 3rd party service for further scanning/tagging */
export interface ModEventDivert {
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventDivert(v: unknown): v is ModEventDivert;
export declare function validateModEventDivert(v: unknown): ValidationResult;
/** Add/Remove a tag on a subject */
export interface ModEventTag {
    /** Tags to be added to the subject. If already exists, won't be duplicated. */
    add: string[];
    /** Tags to be removed to the subject. Ignores a tag If it doesn't exist, won't be duplicated. */
    remove: string[];
    /** Additional comment about added/removed tags. */
    comment?: string;
    [k: string]: unknown;
}
export declare function isModEventTag(v: unknown): v is ModEventTag;
export declare function validateModEventTag(v: unknown): ValidationResult;
/** Logs account status related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking. */
export interface AccountEvent {
    comment?: string;
    /** Indicates that the account has a repository which can be fetched from the host that emitted this event. */
    active: boolean;
    status?: 'unknown' | 'deactivated' | 'deleted' | 'takendown' | 'suspended' | 'tombstoned' | (string & {});
    timestamp: string;
    [k: string]: unknown;
}
export declare function isAccountEvent(v: unknown): v is AccountEvent;
export declare function validateAccountEvent(v: unknown): ValidationResult;
/** Logs identity related events on a repo subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking. */
export interface IdentityEvent {
    comment?: string;
    handle?: string;
    pdsHost?: string;
    tombstone?: boolean;
    timestamp: string;
    [k: string]: unknown;
}
export declare function isIdentityEvent(v: unknown): v is IdentityEvent;
export declare function validateIdentityEvent(v: unknown): ValidationResult;
/** Logs lifecycle event on a record subject. Normally captured by automod from the firehose and emitted to ozone for historical tracking. */
export interface RecordEvent {
    comment?: string;
    op: 'create' | 'update' | 'delete' | (string & {});
    cid?: string;
    timestamp: string;
    [k: string]: unknown;
}
export declare function isRecordEvent(v: unknown): v is RecordEvent;
export declare function validateRecordEvent(v: unknown): ValidationResult;
export interface RepoView {
    did: string;
    handle: string;
    email?: string;
    relatedRecords: {}[];
    indexedAt: string;
    moderation: Moderation;
    invitedBy?: ComAtprotoServerDefs.InviteCode;
    invitesDisabled?: boolean;
    inviteNote?: string;
    deactivatedAt?: string;
    threatSignatures?: ComAtprotoAdminDefs.ThreatSignature[];
    [k: string]: unknown;
}
export declare function isRepoView(v: unknown): v is RepoView;
export declare function validateRepoView(v: unknown): ValidationResult;
export interface RepoViewDetail {
    did: string;
    handle: string;
    email?: string;
    relatedRecords: {}[];
    indexedAt: string;
    moderation: ModerationDetail;
    labels?: ComAtprotoLabelDefs.Label[];
    invitedBy?: ComAtprotoServerDefs.InviteCode;
    invites?: ComAtprotoServerDefs.InviteCode[];
    invitesDisabled?: boolean;
    inviteNote?: string;
    emailConfirmedAt?: string;
    deactivatedAt?: string;
    threatSignatures?: ComAtprotoAdminDefs.ThreatSignature[];
    [k: string]: unknown;
}
export declare function isRepoViewDetail(v: unknown): v is RepoViewDetail;
export declare function validateRepoViewDetail(v: unknown): ValidationResult;
export interface RepoViewNotFound {
    did: string;
    [k: string]: unknown;
}
export declare function isRepoViewNotFound(v: unknown): v is RepoViewNotFound;
export declare function validateRepoViewNotFound(v: unknown): ValidationResult;
export interface RecordView {
    uri: string;
    cid: string;
    value: {};
    blobCids: string[];
    indexedAt: string;
    moderation: Moderation;
    repo: RepoView;
    [k: string]: unknown;
}
export declare function isRecordView(v: unknown): v is RecordView;
export declare function validateRecordView(v: unknown): ValidationResult;
export interface RecordViewDetail {
    uri: string;
    cid: string;
    value: {};
    blobs: BlobView[];
    labels?: ComAtprotoLabelDefs.Label[];
    indexedAt: string;
    moderation: ModerationDetail;
    repo: RepoView;
    [k: string]: unknown;
}
export declare function isRecordViewDetail(v: unknown): v is RecordViewDetail;
export declare function validateRecordViewDetail(v: unknown): ValidationResult;
export interface RecordViewNotFound {
    uri: string;
    [k: string]: unknown;
}
export declare function isRecordViewNotFound(v: unknown): v is RecordViewNotFound;
export declare function validateRecordViewNotFound(v: unknown): ValidationResult;
export interface Moderation {
    subjectStatus?: SubjectStatusView;
    [k: string]: unknown;
}
export declare function isModeration(v: unknown): v is Moderation;
export declare function validateModeration(v: unknown): ValidationResult;
export interface ModerationDetail {
    subjectStatus?: SubjectStatusView;
    [k: string]: unknown;
}
export declare function isModerationDetail(v: unknown): v is ModerationDetail;
export declare function validateModerationDetail(v: unknown): ValidationResult;
export interface BlobView {
    cid: string;
    mimeType: string;
    size: number;
    createdAt: string;
    details?: ImageDetails | VideoDetails | {
        $type: string;
        [k: string]: unknown;
    };
    moderation?: Moderation;
    [k: string]: unknown;
}
export declare function isBlobView(v: unknown): v is BlobView;
export declare function validateBlobView(v: unknown): ValidationResult;
export interface ImageDetails {
    width: number;
    height: number;
    [k: string]: unknown;
}
export declare function isImageDetails(v: unknown): v is ImageDetails;
export declare function validateImageDetails(v: unknown): ValidationResult;
export interface VideoDetails {
    width: number;
    height: number;
    length: number;
    [k: string]: unknown;
}
export declare function isVideoDetails(v: unknown): v is VideoDetails;
export declare function validateVideoDetails(v: unknown): ValidationResult;
export interface AccountHosting {
    status: 'takendown' | 'suspended' | 'deleted' | 'deactivated' | 'unknown' | (string & {});
    updatedAt?: string;
    createdAt?: string;
    deletedAt?: string;
    deactivatedAt?: string;
    reactivatedAt?: string;
    [k: string]: unknown;
}
export declare function isAccountHosting(v: unknown): v is AccountHosting;
export declare function validateAccountHosting(v: unknown): ValidationResult;
export interface RecordHosting {
    status: 'deleted' | 'unknown' | (string & {});
    updatedAt?: string;
    createdAt?: string;
    deletedAt?: string;
    [k: string]: unknown;
}
export declare function isRecordHosting(v: unknown): v is RecordHosting;
export declare function validateRecordHosting(v: unknown): ValidationResult;
//# sourceMappingURL=defs.d.ts.map