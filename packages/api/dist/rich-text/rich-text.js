"use strict";
/*
= Rich Text Manipulation

When we sanitize rich text, we have to update the entity indices as the
text is modified. This can be modeled as inserts() and deletes() of the
rich text string. The possible scenarios are outlined below, along with
their expected behaviors.

NOTE: Slices are start inclusive, end exclusive

== richTextInsert()

Target string:

   0 1 2 3 4 5 6 7 8 910   // string indices
   h e l l o   w o r l d   // string value
       ^-------^           // target slice {start: 2, end: 7}

Scenarios:

A: ^                       // insert "test" at 0
B:        ^                // insert "test" at 4
C:                 ^       // insert "test" at 8

A = before           -> move both by num added
B = inner            -> move end by num added
C = after            -> noop

Results:

A: 0 1 2 3 4 5 6 7 8 910   // string indices
   t e s t h e l l o   w   // string value
               ^-------^   // target slice {start: 6, end: 11}

B: 0 1 2 3 4 5 6 7 8 910   // string indices
   h e l l t e s t o   w   // string value
       ^---------------^   // target slice {start: 2, end: 11}

C: 0 1 2 3 4 5 6 7 8 910   // string indices
   h e l l o   w o t e s   // string value
       ^-------^           // target slice {start: 2, end: 7}

== richTextDelete()

Target string:

   0 1 2 3 4 5 6 7 8 910   // string indices
   h e l l o   w o r l d   // string value
       ^-------^           // target slice {start: 2, end: 7}

Scenarios:

A: ^---------------^       // remove slice {start: 0, end: 9}
B:               ^-----^   // remove slice {start: 7, end: 11}
C:         ^-----------^   // remove slice {start: 4, end: 11}
D:       ^-^               // remove slice {start: 3, end: 5}
E:   ^-----^               // remove slice {start: 1, end: 5}
F: ^-^                     // remove slice {start: 0, end: 2}

A = entirely outer   -> delete slice
B = entirely after   -> noop
C = partially after  -> move end to remove-start
D = entirely inner   -> move end by num removed
E = partially before -> move start to remove-start index, move end by num removed
F = entirely before  -> move both by num removed

Results:

A: 0 1 2 3 4 5 6 7 8 910   // string indices
   l d                     // string value
                           // target slice (deleted)

B: 0 1 2 3 4 5 6 7 8 910   // string indices
   h e l l o   w           // string value
       ^-------^           // target slice {start: 2, end: 7}

C: 0 1 2 3 4 5 6 7 8 910   // string indices
   h e l l                 // string value
       ^-^                 // target slice {start: 2, end: 4}

D: 0 1 2 3 4 5 6 7 8 910   // string indices
   h e l   w o r l d       // string value
       ^---^               // target slice {start: 2, end: 5}

E: 0 1 2 3 4 5 6 7 8 910   // string indices
   h   w o r l d           // string value
     ^-^                   // target slice {start: 1, end: 3}

F: 0 1 2 3 4 5 6 7 8 910   // string indices
   l l o   w o r l d       // string value
   ^-------^               // target slice {start: 0, end: 5}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichText = exports.RichTextSegment = void 0;
const client_1 = require("../client");
const unicode_1 = require("./unicode");
const sanitization_1 = require("./sanitization");
const detection_1 = require("./detection");
class RichTextSegment {
    constructor(text, facet) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "facet", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: facet
        });
    }
    get link() {
        const link = this.facet?.features.find(client_1.AppBskyRichtextFacet.isLink);
        if (client_1.AppBskyRichtextFacet.isLink(link)) {
            return link;
        }
        return undefined;
    }
    isLink() {
        return !!this.link;
    }
    get mention() {
        const mention = this.facet?.features.find(client_1.AppBskyRichtextFacet.isMention);
        if (client_1.AppBskyRichtextFacet.isMention(mention)) {
            return mention;
        }
        return undefined;
    }
    isMention() {
        return !!this.mention;
    }
    get tag() {
        const tag = this.facet?.features.find(client_1.AppBskyRichtextFacet.isTag);
        if (client_1.AppBskyRichtextFacet.isTag(tag)) {
            return tag;
        }
        return undefined;
    }
    isTag() {
        return !!this.tag;
    }
}
exports.RichTextSegment = RichTextSegment;
class RichText {
    constructor(props, opts) {
        Object.defineProperty(this, "unicodeText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "facets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.unicodeText = new unicode_1.UnicodeString(props.text);
        this.facets = props.facets;
        if (!this.facets?.length && props.entities?.length) {
            this.facets = entitiesToFacets(this.unicodeText, props.entities);
        }
        if (this.facets) {
            this.facets = this.facets.filter(facetFilter).sort(facetSort);
        }
        if (opts?.cleanNewlines) {
            (0, sanitization_1.sanitizeRichText)(this, { cleanNewlines: true }).copyInto(this);
        }
    }
    get text() {
        return this.unicodeText.toString();
    }
    get length() {
        return this.unicodeText.length;
    }
    get graphemeLength() {
        return this.unicodeText.graphemeLength;
    }
    clone() {
        return new RichText({
            text: this.unicodeText.utf16,
            facets: cloneDeep(this.facets),
        });
    }
    copyInto(target) {
        target.unicodeText = this.unicodeText;
        target.facets = cloneDeep(this.facets);
    }
    *segments() {
        const facets = this.facets || [];
        if (!facets.length) {
            yield new RichTextSegment(this.unicodeText.utf16);
            return;
        }
        let textCursor = 0;
        let facetCursor = 0;
        do {
            const currFacet = facets[facetCursor];
            if (textCursor < currFacet.index.byteStart) {
                yield new RichTextSegment(this.unicodeText.slice(textCursor, currFacet.index.byteStart));
            }
            else if (textCursor > currFacet.index.byteStart) {
                facetCursor++;
                continue;
            }
            if (currFacet.index.byteStart < currFacet.index.byteEnd) {
                const subtext = this.unicodeText.slice(currFacet.index.byteStart, currFacet.index.byteEnd);
                if (!subtext.trim()) {
                    // dont empty string entities
                    yield new RichTextSegment(subtext);
                }
                else {
                    yield new RichTextSegment(subtext, currFacet);
                }
            }
            textCursor = currFacet.index.byteEnd;
            facetCursor++;
        } while (facetCursor < facets.length);
        if (textCursor < this.unicodeText.length) {
            yield new RichTextSegment(this.unicodeText.slice(textCursor, this.unicodeText.length));
        }
    }
    insert(insertIndex, insertText) {
        this.unicodeText = new unicode_1.UnicodeString(this.unicodeText.slice(0, insertIndex) +
            insertText +
            this.unicodeText.slice(insertIndex));
        if (!this.facets?.length) {
            return this;
        }
        const numCharsAdded = insertText.length;
        for (const ent of this.facets) {
            // see comment at top of file for labels of each scenario
            // scenario A (before)
            if (insertIndex <= ent.index.byteStart) {
                // move both by num added
                ent.index.byteStart += numCharsAdded;
                ent.index.byteEnd += numCharsAdded;
            }
            // scenario B (inner)
            else if (insertIndex >= ent.index.byteStart &&
                insertIndex < ent.index.byteEnd) {
                // move end by num added
                ent.index.byteEnd += numCharsAdded;
            }
            // scenario C (after)
            // noop
        }
        return this;
    }
    delete(removeStartIndex, removeEndIndex) {
        this.unicodeText = new unicode_1.UnicodeString(this.unicodeText.slice(0, removeStartIndex) +
            this.unicodeText.slice(removeEndIndex));
        if (!this.facets?.length) {
            return this;
        }
        const numCharsRemoved = removeEndIndex - removeStartIndex;
        for (const ent of this.facets) {
            // see comment at top of file for labels of each scenario
            // scenario A (entirely outer)
            if (removeStartIndex <= ent.index.byteStart &&
                removeEndIndex >= ent.index.byteEnd) {
                // delete slice (will get removed in final pass)
                ent.index.byteStart = 0;
                ent.index.byteEnd = 0;
            }
            // scenario B (entirely after)
            else if (removeStartIndex > ent.index.byteEnd) {
                // noop
            }
            // scenario C (partially after)
            else if (removeStartIndex > ent.index.byteStart &&
                removeStartIndex <= ent.index.byteEnd &&
                removeEndIndex > ent.index.byteEnd) {
                // move end to remove start
                ent.index.byteEnd = removeStartIndex;
            }
            // scenario D (entirely inner)
            else if (removeStartIndex >= ent.index.byteStart &&
                removeEndIndex <= ent.index.byteEnd) {
                // move end by num removed
                ent.index.byteEnd -= numCharsRemoved;
            }
            // scenario E (partially before)
            else if (removeStartIndex < ent.index.byteStart &&
                removeEndIndex >= ent.index.byteStart &&
                removeEndIndex <= ent.index.byteEnd) {
                // move start to remove-start index, move end by num removed
                ent.index.byteStart = removeStartIndex;
                ent.index.byteEnd -= numCharsRemoved;
            }
            // scenario F (entirely before)
            else if (removeEndIndex < ent.index.byteStart) {
                // move both by num removed
                ent.index.byteStart -= numCharsRemoved;
                ent.index.byteEnd -= numCharsRemoved;
            }
        }
        // filter out any facets that were made irrelevant
        this.facets = this.facets.filter((ent) => ent.index.byteStart < ent.index.byteEnd);
        return this;
    }
    /**
     * Detects facets such as links and mentions
     * Note: Overwrites the existing facets with auto-detected facets
     */
    async detectFacets(agent) {
        this.facets = (0, detection_1.detectFacets)(this.unicodeText);
        if (this.facets) {
            const promises = [];
            for (const facet of this.facets) {
                for (const feature of facet.features) {
                    if (client_1.AppBskyRichtextFacet.isMention(feature)) {
                        promises.push(agent.com.atproto.identity
                            .resolveHandle({ handle: feature.did })
                            .then((res) => res?.data.did)
                            .catch((_) => undefined)
                            .then((did) => {
                            feature.did = did || '';
                        }));
                    }
                }
            }
            await Promise.allSettled(promises);
            this.facets.sort(facetSort);
        }
    }
    /**
     * Detects facets such as links and mentions but does not resolve them
     * Will produce invalid facets! For instance, mentions will not have their DIDs set.
     * Note: Overwrites the existing facets with auto-detected facets
     */
    detectFacetsWithoutResolution() {
        this.facets = (0, detection_1.detectFacets)(this.unicodeText);
        if (this.facets) {
            this.facets.sort(facetSort);
        }
    }
}
exports.RichText = RichText;
const facetSort = (a, b) => a.index.byteStart - b.index.byteStart;
const facetFilter = (facet) => 
// discard negative-length facets. zero-length facets are valid
facet.index.byteStart <= facet.index.byteEnd;
function entitiesToFacets(text, entities) {
    const facets = [];
    for (const ent of entities) {
        if (ent.type === 'link') {
            facets.push({
                $type: 'app.bsky.richtext.facet',
                index: {
                    byteStart: text.utf16IndexToUtf8Index(ent.index.start),
                    byteEnd: text.utf16IndexToUtf8Index(ent.index.end),
                },
                features: [{ $type: 'app.bsky.richtext.facet#link', uri: ent.value }],
            });
        }
        else if (ent.type === 'mention') {
            facets.push({
                $type: 'app.bsky.richtext.facet',
                index: {
                    byteStart: text.utf16IndexToUtf8Index(ent.index.start),
                    byteEnd: text.utf16IndexToUtf8Index(ent.index.end),
                },
                features: [
                    { $type: 'app.bsky.richtext.facet#mention', did: ent.value },
                ],
            });
        }
    }
    return facets;
}
function cloneDeep(v) {
    if (typeof v === 'undefined') {
        return v;
    }
    return JSON.parse(JSON.stringify(v));
}
//# sourceMappingURL=rich-text.js.map