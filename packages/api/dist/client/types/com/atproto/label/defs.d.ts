/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult } from '@atproto/lexicon';
/** Metadata tag on an atproto resource (eg, repo or record). */
export interface Label {
    /** The AT Protocol version of the label object. */
    ver?: number;
    /** DID of the actor who created this label. */
    src: string;
    /** AT URI of the record, repository (account), or other resource that this label applies to. */
    uri: string;
    /** Optionally, CID specifying the specific version of 'uri' resource this label applies to. */
    cid?: string;
    /** The short string name of the value or type of this label. */
    val: string;
    /** If true, this is a negation label, overwriting a previous label. */
    neg?: boolean;
    /** Timestamp when this label was created. */
    cts: string;
    /** Timestamp at which this label expires (no longer applies). */
    exp?: string;
    /** Signature of dag-cbor encoded label. */
    sig?: Uint8Array;
    [k: string]: unknown;
}
export declare function isLabel(v: unknown): v is Label;
export declare function validateLabel(v: unknown): ValidationResult;
/** Metadata tags on an atproto record, published by the author within the record. */
export interface SelfLabels {
    values: SelfLabel[];
    [k: string]: unknown;
}
export declare function isSelfLabels(v: unknown): v is SelfLabels;
export declare function validateSelfLabels(v: unknown): ValidationResult;
/** Metadata tag on an atproto record, published by the author within the record. Note that schemas should use #selfLabels, not #selfLabel. */
export interface SelfLabel {
    /** The short string name of the value or type of this label. */
    val: string;
    [k: string]: unknown;
}
export declare function isSelfLabel(v: unknown): v is SelfLabel;
export declare function validateSelfLabel(v: unknown): ValidationResult;
/** Declares a label value and its expected interpretations and behaviors. */
export interface LabelValueDefinition {
    /** The value of the label being defined. Must only include lowercase ascii and the '-' character ([a-z-]+). */
    identifier: string;
    /** How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing. */
    severity: 'inform' | 'alert' | 'none' | (string & {});
    /** What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing. */
    blurs: 'content' | 'media' | 'none' | (string & {});
    /** The default setting for this label. */
    defaultSetting: 'ignore' | 'warn' | 'hide' | (string & {});
    /** Does the user need to have adult content enabled in order to configure this label? */
    adultOnly?: boolean;
    locales: LabelValueDefinitionStrings[];
    [k: string]: unknown;
}
export declare function isLabelValueDefinition(v: unknown): v is LabelValueDefinition;
export declare function validateLabelValueDefinition(v: unknown): ValidationResult;
/** Strings which describe the label in the UI, localized into a specific language. */
export interface LabelValueDefinitionStrings {
    /** The code of the language these strings are written in. */
    lang: string;
    /** A short human-readable name for the label. */
    name: string;
    /** A longer description of what the label means and why it might be applied. */
    description: string;
    [k: string]: unknown;
}
export declare function isLabelValueDefinitionStrings(v: unknown): v is LabelValueDefinitionStrings;
export declare function validateLabelValueDefinitionStrings(v: unknown): ValidationResult;
export type LabelValue = '!hide' | '!no-promote' | '!warn' | '!no-unauthenticated' | 'dmca-violation' | 'doxxing' | 'porn' | 'sexual' | 'nudity' | 'nsfl' | 'gore' | (string & {});
//# sourceMappingURL=defs.d.ts.map