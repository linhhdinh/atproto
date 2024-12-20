"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSkeletonSearchPost = isSkeletonSearchPost;
exports.validateSkeletonSearchPost = validateSkeletonSearchPost;
exports.isSkeletonSearchActor = isSkeletonSearchActor;
exports.validateSkeletonSearchActor = validateSkeletonSearchActor;
exports.isSkeletonSearchStarterPack = isSkeletonSearchStarterPack;
exports.validateSkeletonSearchStarterPack = validateSkeletonSearchStarterPack;
const util_1 = require("../../../../util");
const lexicons_1 = require("../../../../lexicons");
function isSkeletonSearchPost(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.unspecced.defs#skeletonSearchPost');
}
function validateSkeletonSearchPost(v) {
    return lexicons_1.lexicons.validate('app.bsky.unspecced.defs#skeletonSearchPost', v);
}
function isSkeletonSearchActor(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.unspecced.defs#skeletonSearchActor');
}
function validateSkeletonSearchActor(v) {
    return lexicons_1.lexicons.validate('app.bsky.unspecced.defs#skeletonSearchActor', v);
}
function isSkeletonSearchStarterPack(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'app.bsky.unspecced.defs#skeletonSearchStarterPack');
}
function validateSkeletonSearchStarterPack(v) {
    return lexicons_1.lexicons.validate('app.bsky.unspecced.defs#skeletonSearchStarterPack', v);
}
//# sourceMappingURL=defs.js.map