/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult } from '@atproto/lexicon';
import * as AppBskyActorDefs from '../../../app/bsky/actor/defs';
export interface Member {
    did: string;
    disabled?: boolean;
    profile?: AppBskyActorDefs.ProfileViewDetailed;
    createdAt?: string;
    updatedAt?: string;
    lastUpdatedBy?: string;
    role: 'lex:tools.ozone.team.defs#roleAdmin' | 'lex:tools.ozone.team.defs#roleModerator' | 'lex:tools.ozone.team.defs#roleTriage' | (string & {});
    [k: string]: unknown;
}
export declare function isMember(v: unknown): v is Member;
export declare function validateMember(v: unknown): ValidationResult;
/** Admin role. Highest level of access, can perform all actions. */
export declare const ROLEADMIN = "tools.ozone.team.defs#roleAdmin";
/** Moderator role. Can perform most actions. */
export declare const ROLEMODERATOR = "tools.ozone.team.defs#roleModerator";
/** Triage role. Mostly intended for monitoring and escalating issues. */
export declare const ROLETRIAGE = "tools.ozone.team.defs#roleTriage";
//# sourceMappingURL=defs.d.ts.map