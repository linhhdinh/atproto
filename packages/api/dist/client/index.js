"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComAtprotoServerDeleteSession = exports.ComAtprotoServerDeleteAccount = exports.ComAtprotoServerDefs = exports.ComAtprotoServerDeactivateAccount = exports.ComAtprotoServerCreateSession = exports.ComAtprotoServerCreateInviteCodes = exports.ComAtprotoServerCreateInviteCode = exports.ComAtprotoServerCreateAppPassword = exports.ComAtprotoServerCreateAccount = exports.ComAtprotoServerConfirmEmail = exports.ComAtprotoServerCheckAccountStatus = exports.ComAtprotoServerActivateAccount = exports.ComAtprotoRepoUploadBlob = exports.ComAtprotoRepoStrongRef = exports.ComAtprotoRepoPutRecord = exports.ComAtprotoRepoListRecords = exports.ComAtprotoRepoListMissingBlobs = exports.ComAtprotoRepoImportRepo = exports.ComAtprotoRepoGetRecord = exports.ComAtprotoRepoDescribeRepo = exports.ComAtprotoRepoDeleteRecord = exports.ComAtprotoRepoDefs = exports.ComAtprotoRepoCreateRecord = exports.ComAtprotoRepoApplyWrites = exports.ComAtprotoModerationDefs = exports.ComAtprotoModerationCreateReport = exports.ComAtprotoLabelSubscribeLabels = exports.ComAtprotoLabelQueryLabels = exports.ComAtprotoLabelDefs = exports.ComAtprotoIdentityUpdateHandle = exports.ComAtprotoIdentitySubmitPlcOperation = exports.ComAtprotoIdentitySignPlcOperation = exports.ComAtprotoIdentityResolveHandle = exports.ComAtprotoIdentityRequestPlcOperationSignature = exports.ComAtprotoIdentityGetRecommendedDidCredentials = exports.ComAtprotoAdminUpdateSubjectStatus = exports.ComAtprotoAdminUpdateAccountPassword = exports.ComAtprotoAdminUpdateAccountHandle = exports.ComAtprotoAdminUpdateAccountEmail = exports.ComAtprotoAdminSendEmail = exports.ComAtprotoAdminSearchAccounts = exports.ComAtprotoAdminGetSubjectStatus = exports.ComAtprotoAdminGetInviteCodes = exports.ComAtprotoAdminGetAccountInfos = exports.ComAtprotoAdminGetAccountInfo = exports.ComAtprotoAdminEnableAccountInvites = exports.ComAtprotoAdminDisableInviteCodes = exports.ComAtprotoAdminDisableAccountInvites = exports.ComAtprotoAdminDeleteAccount = exports.ComAtprotoAdminDefs = void 0;
exports.AppBskyFeedGetActorFeeds = exports.AppBskyFeedGenerator = exports.AppBskyFeedDescribeFeedGenerator = exports.AppBskyFeedDefs = exports.AppBskyEmbedVideo = exports.AppBskyEmbedRecordWithMedia = exports.AppBskyEmbedRecord = exports.AppBskyEmbedImages = exports.AppBskyEmbedExternal = exports.AppBskyEmbedDefs = exports.AppBskyActorSearchActorsTypeahead = exports.AppBskyActorSearchActors = exports.AppBskyActorPutPreferences = exports.AppBskyActorProfile = exports.AppBskyActorGetSuggestions = exports.AppBskyActorGetProfiles = exports.AppBskyActorGetProfile = exports.AppBskyActorGetPreferences = exports.AppBskyActorDefs = exports.ComAtprotoTempRequestPhoneVerification = exports.ComAtprotoTempFetchLabels = exports.ComAtprotoTempCheckSignupQueue = exports.ComAtprotoTempAddReservedHandle = exports.ComAtprotoSyncSubscribeRepos = exports.ComAtprotoSyncRequestCrawl = exports.ComAtprotoSyncNotifyOfUpdate = exports.ComAtprotoSyncListRepos = exports.ComAtprotoSyncListBlobs = exports.ComAtprotoSyncGetRepoStatus = exports.ComAtprotoSyncGetRepo = exports.ComAtprotoSyncGetRecord = exports.ComAtprotoSyncGetLatestCommit = exports.ComAtprotoSyncGetHead = exports.ComAtprotoSyncGetCheckout = exports.ComAtprotoSyncGetBlocks = exports.ComAtprotoSyncGetBlob = exports.ComAtprotoServerUpdateEmail = exports.ComAtprotoServerRevokeAppPassword = exports.ComAtprotoServerResetPassword = exports.ComAtprotoServerReserveSigningKey = exports.ComAtprotoServerRequestPasswordReset = exports.ComAtprotoServerRequestEmailUpdate = exports.ComAtprotoServerRequestEmailConfirmation = exports.ComAtprotoServerRequestAccountDelete = exports.ComAtprotoServerRefreshSession = exports.ComAtprotoServerListAppPasswords = exports.ComAtprotoServerGetSession = exports.ComAtprotoServerGetServiceAuth = exports.ComAtprotoServerGetAccountInviteCodes = exports.ComAtprotoServerDescribeServer = void 0;
exports.AppBskyLabelerDefs = exports.AppBskyGraphUnmuteThread = exports.AppBskyGraphUnmuteActorList = exports.AppBskyGraphUnmuteActor = exports.AppBskyGraphStarterpack = exports.AppBskyGraphSearchStarterPacks = exports.AppBskyGraphMuteThread = exports.AppBskyGraphMuteActorList = exports.AppBskyGraphMuteActor = exports.AppBskyGraphListitem = exports.AppBskyGraphListblock = exports.AppBskyGraphList = exports.AppBskyGraphGetSuggestedFollowsByActor = exports.AppBskyGraphGetStarterPacks = exports.AppBskyGraphGetStarterPack = exports.AppBskyGraphGetRelationships = exports.AppBskyGraphGetMutes = exports.AppBskyGraphGetLists = exports.AppBskyGraphGetListMutes = exports.AppBskyGraphGetListBlocks = exports.AppBskyGraphGetList = exports.AppBskyGraphGetKnownFollowers = exports.AppBskyGraphGetFollows = exports.AppBskyGraphGetFollowers = exports.AppBskyGraphGetBlocks = exports.AppBskyGraphGetActorStarterPacks = exports.AppBskyGraphFollow = exports.AppBskyGraphDefs = exports.AppBskyGraphBlock = exports.AppBskyFeedThreadgate = exports.AppBskyFeedSendInteractions = exports.AppBskyFeedSearchPosts = exports.AppBskyFeedRepost = exports.AppBskyFeedPostgate = exports.AppBskyFeedPost = exports.AppBskyFeedLike = exports.AppBskyFeedGetTimeline = exports.AppBskyFeedGetSuggestedFeeds = exports.AppBskyFeedGetRepostedBy = exports.AppBskyFeedGetQuotes = exports.AppBskyFeedGetPosts = exports.AppBskyFeedGetPostThread = exports.AppBskyFeedGetListFeed = exports.AppBskyFeedGetLikes = exports.AppBskyFeedGetFeedSkeleton = exports.AppBskyFeedGetFeedGenerators = exports.AppBskyFeedGetFeedGenerator = exports.AppBskyFeedGetFeed = exports.AppBskyFeedGetAuthorFeed = exports.AppBskyFeedGetActorLikes = void 0;
exports.ToolsOzoneModerationGetRecords = exports.ToolsOzoneModerationGetRecord = exports.ToolsOzoneModerationGetEvent = exports.ToolsOzoneModerationEmitEvent = exports.ToolsOzoneModerationDefs = exports.ToolsOzoneCommunicationUpdateTemplate = exports.ToolsOzoneCommunicationListTemplates = exports.ToolsOzoneCommunicationDeleteTemplate = exports.ToolsOzoneCommunicationDefs = exports.ToolsOzoneCommunicationCreateTemplate = exports.ChatBskyModerationUpdateActorAccess = exports.ChatBskyModerationGetMessageContext = exports.ChatBskyModerationGetActorMetadata = exports.ChatBskyConvoUpdateRead = exports.ChatBskyConvoUnmuteConvo = exports.ChatBskyConvoSendMessageBatch = exports.ChatBskyConvoSendMessage = exports.ChatBskyConvoMuteConvo = exports.ChatBskyConvoListConvos = exports.ChatBskyConvoLeaveConvo = exports.ChatBskyConvoGetMessages = exports.ChatBskyConvoGetLog = exports.ChatBskyConvoGetConvoForMembers = exports.ChatBskyConvoGetConvo = exports.ChatBskyConvoDeleteMessageForSelf = exports.ChatBskyConvoDefs = exports.ChatBskyActorExportAccountData = exports.ChatBskyActorDeleteAccount = exports.ChatBskyActorDefs = exports.ChatBskyActorDeclaration = exports.AppBskyVideoUploadVideo = exports.AppBskyVideoGetUploadLimits = exports.AppBskyVideoGetJobStatus = exports.AppBskyVideoDefs = exports.AppBskyUnspeccedSearchStarterPacksSkeleton = exports.AppBskyUnspeccedSearchPostsSkeleton = exports.AppBskyUnspeccedSearchActorsSkeleton = exports.AppBskyUnspeccedGetTaggedSuggestions = exports.AppBskyUnspeccedGetSuggestionsSkeleton = exports.AppBskyUnspeccedGetPopularFeedGenerators = exports.AppBskyUnspeccedGetConfig = exports.AppBskyUnspeccedDefs = exports.AppBskyRichtextFacet = exports.AppBskyNotificationUpdateSeen = exports.AppBskyNotificationRegisterPush = exports.AppBskyNotificationPutPreferences = exports.AppBskyNotificationListNotifications = exports.AppBskyNotificationGetUnreadCount = exports.AppBskyLabelerService = exports.AppBskyLabelerGetServices = void 0;
exports.LikeRecord = exports.GeneratorRecord = exports.AppBskyFeedNS = exports.AppBskyEmbedNS = exports.ProfileRecord = exports.AppBskyActorNS = exports.AppBskyNS = exports.AppNS = exports.ComAtprotoTempNS = exports.ComAtprotoSyncNS = exports.ComAtprotoServerNS = exports.ComAtprotoRepoNS = exports.ComAtprotoModerationNS = exports.ComAtprotoLabelNS = exports.ComAtprotoIdentityNS = exports.ComAtprotoAdminNS = exports.ComAtprotoNS = exports.ComNS = exports.AtpBaseClient = exports.TOOLS_OZONE_TEAM = exports.TOOLS_OZONE_MODERATION = exports.APP_BSKY_GRAPH = exports.APP_BSKY_FEED = exports.COM_ATPROTO_MODERATION = exports.ToolsOzoneTeamUpdateMember = exports.ToolsOzoneTeamListMembers = exports.ToolsOzoneTeamDeleteMember = exports.ToolsOzoneTeamDefs = exports.ToolsOzoneTeamAddMember = exports.ToolsOzoneSignatureSearchAccounts = exports.ToolsOzoneSignatureFindRelatedAccounts = exports.ToolsOzoneSignatureFindCorrelation = exports.ToolsOzoneSignatureDefs = exports.ToolsOzoneSettingUpsertOption = exports.ToolsOzoneSettingRemoveOptions = exports.ToolsOzoneSettingListOptions = exports.ToolsOzoneSettingDefs = exports.ToolsOzoneSetUpsertSet = exports.ToolsOzoneSetQuerySets = exports.ToolsOzoneSetGetValues = exports.ToolsOzoneSetDeleteValues = exports.ToolsOzoneSetDeleteSet = exports.ToolsOzoneSetDefs = exports.ToolsOzoneSetAddValues = exports.ToolsOzoneServerGetConfig = exports.ToolsOzoneModerationSearchRepos = exports.ToolsOzoneModerationQueryStatuses = exports.ToolsOzoneModerationQueryEvents = exports.ToolsOzoneModerationGetRepos = exports.ToolsOzoneModerationGetRepo = void 0;
exports.ToolsOzoneTeamNS = exports.ToolsOzoneSignatureNS = exports.ToolsOzoneSettingNS = exports.ToolsOzoneSetNS = exports.ToolsOzoneServerNS = exports.ToolsOzoneModerationNS = exports.ToolsOzoneCommunicationNS = exports.ToolsOzoneNS = exports.ToolsNS = exports.ChatBskyModerationNS = exports.ChatBskyConvoNS = exports.DeclarationRecord = exports.ChatBskyActorNS = exports.ChatBskyNS = exports.ChatNS = exports.AppBskyVideoNS = exports.AppBskyUnspeccedNS = exports.AppBskyRichtextNS = exports.AppBskyNotificationNS = exports.ServiceRecord = exports.AppBskyLabelerNS = exports.StarterpackRecord = exports.ListitemRecord = exports.ListblockRecord = exports.ListRecord = exports.FollowRecord = exports.BlockRecord = exports.AppBskyGraphNS = exports.ThreadgateRecord = exports.RepostRecord = exports.PostgateRecord = exports.PostRecord = void 0;
/**
 * GENERATED CODE - DO NOT MODIFY
 */
const xrpc_1 = require("@atproto/xrpc");
const lexicons_1 = require("./lexicons");
const ComAtprotoRepoApplyWrites = __importStar(require("./types/com/atproto/repo/applyWrites"));
const ComAtprotoRepoCreateRecord = __importStar(require("./types/com/atproto/repo/createRecord"));
const ComAtprotoRepoDeleteRecord = __importStar(require("./types/com/atproto/repo/deleteRecord"));
const ComAtprotoRepoGetRecord = __importStar(require("./types/com/atproto/repo/getRecord"));
const ComAtprotoRepoPutRecord = __importStar(require("./types/com/atproto/repo/putRecord"));
const ComAtprotoServerConfirmEmail = __importStar(require("./types/com/atproto/server/confirmEmail"));
const ComAtprotoServerCreateAccount = __importStar(require("./types/com/atproto/server/createAccount"));
const ComAtprotoServerCreateAppPassword = __importStar(require("./types/com/atproto/server/createAppPassword"));
const ComAtprotoServerCreateSession = __importStar(require("./types/com/atproto/server/createSession"));
const ComAtprotoServerDeleteAccount = __importStar(require("./types/com/atproto/server/deleteAccount"));
const ComAtprotoServerGetAccountInviteCodes = __importStar(require("./types/com/atproto/server/getAccountInviteCodes"));
const ComAtprotoServerGetServiceAuth = __importStar(require("./types/com/atproto/server/getServiceAuth"));
const ComAtprotoServerListAppPasswords = __importStar(require("./types/com/atproto/server/listAppPasswords"));
const ComAtprotoServerRefreshSession = __importStar(require("./types/com/atproto/server/refreshSession"));
const ComAtprotoServerResetPassword = __importStar(require("./types/com/atproto/server/resetPassword"));
const ComAtprotoServerUpdateEmail = __importStar(require("./types/com/atproto/server/updateEmail"));
const ComAtprotoSyncGetBlob = __importStar(require("./types/com/atproto/sync/getBlob"));
const ComAtprotoSyncGetBlocks = __importStar(require("./types/com/atproto/sync/getBlocks"));
const ComAtprotoSyncGetHead = __importStar(require("./types/com/atproto/sync/getHead"));
const ComAtprotoSyncGetLatestCommit = __importStar(require("./types/com/atproto/sync/getLatestCommit"));
const ComAtprotoSyncGetRecord = __importStar(require("./types/com/atproto/sync/getRecord"));
const ComAtprotoSyncGetRepo = __importStar(require("./types/com/atproto/sync/getRepo"));
const ComAtprotoSyncGetRepoStatus = __importStar(require("./types/com/atproto/sync/getRepoStatus"));
const ComAtprotoSyncListBlobs = __importStar(require("./types/com/atproto/sync/listBlobs"));
const AppBskyFeedGetActorLikes = __importStar(require("./types/app/bsky/feed/getActorLikes"));
const AppBskyFeedGetAuthorFeed = __importStar(require("./types/app/bsky/feed/getAuthorFeed"));
const AppBskyFeedGetFeed = __importStar(require("./types/app/bsky/feed/getFeed"));
const AppBskyFeedGetFeedSkeleton = __importStar(require("./types/app/bsky/feed/getFeedSkeleton"));
const AppBskyFeedGetListFeed = __importStar(require("./types/app/bsky/feed/getListFeed"));
const AppBskyFeedGetPostThread = __importStar(require("./types/app/bsky/feed/getPostThread"));
const AppBskyFeedSearchPosts = __importStar(require("./types/app/bsky/feed/searchPosts"));
const AppBskyGraphGetRelationships = __importStar(require("./types/app/bsky/graph/getRelationships"));
const AppBskyUnspeccedSearchActorsSkeleton = __importStar(require("./types/app/bsky/unspecced/searchActorsSkeleton"));
const AppBskyUnspeccedSearchPostsSkeleton = __importStar(require("./types/app/bsky/unspecced/searchPostsSkeleton"));
const AppBskyUnspeccedSearchStarterPacksSkeleton = __importStar(require("./types/app/bsky/unspecced/searchStarterPacksSkeleton"));
const ToolsOzoneCommunicationCreateTemplate = __importStar(require("./types/tools/ozone/communication/createTemplate"));
const ToolsOzoneCommunicationUpdateTemplate = __importStar(require("./types/tools/ozone/communication/updateTemplate"));
const ToolsOzoneModerationEmitEvent = __importStar(require("./types/tools/ozone/moderation/emitEvent"));
const ToolsOzoneModerationGetRecord = __importStar(require("./types/tools/ozone/moderation/getRecord"));
const ToolsOzoneModerationGetRepo = __importStar(require("./types/tools/ozone/moderation/getRepo"));
const ToolsOzoneSetDeleteSet = __importStar(require("./types/tools/ozone/set/deleteSet"));
const ToolsOzoneSetDeleteValues = __importStar(require("./types/tools/ozone/set/deleteValues"));
const ToolsOzoneSetGetValues = __importStar(require("./types/tools/ozone/set/getValues"));
const ToolsOzoneTeamAddMember = __importStar(require("./types/tools/ozone/team/addMember"));
const ToolsOzoneTeamDeleteMember = __importStar(require("./types/tools/ozone/team/deleteMember"));
const ToolsOzoneTeamUpdateMember = __importStar(require("./types/tools/ozone/team/updateMember"));
exports.ComAtprotoAdminDefs = __importStar(require("./types/com/atproto/admin/defs"));
exports.ComAtprotoAdminDeleteAccount = __importStar(require("./types/com/atproto/admin/deleteAccount"));
exports.ComAtprotoAdminDisableAccountInvites = __importStar(require("./types/com/atproto/admin/disableAccountInvites"));
exports.ComAtprotoAdminDisableInviteCodes = __importStar(require("./types/com/atproto/admin/disableInviteCodes"));
exports.ComAtprotoAdminEnableAccountInvites = __importStar(require("./types/com/atproto/admin/enableAccountInvites"));
exports.ComAtprotoAdminGetAccountInfo = __importStar(require("./types/com/atproto/admin/getAccountInfo"));
exports.ComAtprotoAdminGetAccountInfos = __importStar(require("./types/com/atproto/admin/getAccountInfos"));
exports.ComAtprotoAdminGetInviteCodes = __importStar(require("./types/com/atproto/admin/getInviteCodes"));
exports.ComAtprotoAdminGetSubjectStatus = __importStar(require("./types/com/atproto/admin/getSubjectStatus"));
exports.ComAtprotoAdminSearchAccounts = __importStar(require("./types/com/atproto/admin/searchAccounts"));
exports.ComAtprotoAdminSendEmail = __importStar(require("./types/com/atproto/admin/sendEmail"));
exports.ComAtprotoAdminUpdateAccountEmail = __importStar(require("./types/com/atproto/admin/updateAccountEmail"));
exports.ComAtprotoAdminUpdateAccountHandle = __importStar(require("./types/com/atproto/admin/updateAccountHandle"));
exports.ComAtprotoAdminUpdateAccountPassword = __importStar(require("./types/com/atproto/admin/updateAccountPassword"));
exports.ComAtprotoAdminUpdateSubjectStatus = __importStar(require("./types/com/atproto/admin/updateSubjectStatus"));
exports.ComAtprotoIdentityGetRecommendedDidCredentials = __importStar(require("./types/com/atproto/identity/getRecommendedDidCredentials"));
exports.ComAtprotoIdentityRequestPlcOperationSignature = __importStar(require("./types/com/atproto/identity/requestPlcOperationSignature"));
exports.ComAtprotoIdentityResolveHandle = __importStar(require("./types/com/atproto/identity/resolveHandle"));
exports.ComAtprotoIdentitySignPlcOperation = __importStar(require("./types/com/atproto/identity/signPlcOperation"));
exports.ComAtprotoIdentitySubmitPlcOperation = __importStar(require("./types/com/atproto/identity/submitPlcOperation"));
exports.ComAtprotoIdentityUpdateHandle = __importStar(require("./types/com/atproto/identity/updateHandle"));
exports.ComAtprotoLabelDefs = __importStar(require("./types/com/atproto/label/defs"));
exports.ComAtprotoLabelQueryLabels = __importStar(require("./types/com/atproto/label/queryLabels"));
exports.ComAtprotoLabelSubscribeLabels = __importStar(require("./types/com/atproto/label/subscribeLabels"));
exports.ComAtprotoModerationCreateReport = __importStar(require("./types/com/atproto/moderation/createReport"));
exports.ComAtprotoModerationDefs = __importStar(require("./types/com/atproto/moderation/defs"));
exports.ComAtprotoRepoApplyWrites = __importStar(require("./types/com/atproto/repo/applyWrites"));
exports.ComAtprotoRepoCreateRecord = __importStar(require("./types/com/atproto/repo/createRecord"));
exports.ComAtprotoRepoDefs = __importStar(require("./types/com/atproto/repo/defs"));
exports.ComAtprotoRepoDeleteRecord = __importStar(require("./types/com/atproto/repo/deleteRecord"));
exports.ComAtprotoRepoDescribeRepo = __importStar(require("./types/com/atproto/repo/describeRepo"));
exports.ComAtprotoRepoGetRecord = __importStar(require("./types/com/atproto/repo/getRecord"));
exports.ComAtprotoRepoImportRepo = __importStar(require("./types/com/atproto/repo/importRepo"));
exports.ComAtprotoRepoListMissingBlobs = __importStar(require("./types/com/atproto/repo/listMissingBlobs"));
exports.ComAtprotoRepoListRecords = __importStar(require("./types/com/atproto/repo/listRecords"));
exports.ComAtprotoRepoPutRecord = __importStar(require("./types/com/atproto/repo/putRecord"));
exports.ComAtprotoRepoStrongRef = __importStar(require("./types/com/atproto/repo/strongRef"));
exports.ComAtprotoRepoUploadBlob = __importStar(require("./types/com/atproto/repo/uploadBlob"));
exports.ComAtprotoServerActivateAccount = __importStar(require("./types/com/atproto/server/activateAccount"));
exports.ComAtprotoServerCheckAccountStatus = __importStar(require("./types/com/atproto/server/checkAccountStatus"));
exports.ComAtprotoServerConfirmEmail = __importStar(require("./types/com/atproto/server/confirmEmail"));
exports.ComAtprotoServerCreateAccount = __importStar(require("./types/com/atproto/server/createAccount"));
exports.ComAtprotoServerCreateAppPassword = __importStar(require("./types/com/atproto/server/createAppPassword"));
exports.ComAtprotoServerCreateInviteCode = __importStar(require("./types/com/atproto/server/createInviteCode"));
exports.ComAtprotoServerCreateInviteCodes = __importStar(require("./types/com/atproto/server/createInviteCodes"));
exports.ComAtprotoServerCreateSession = __importStar(require("./types/com/atproto/server/createSession"));
exports.ComAtprotoServerDeactivateAccount = __importStar(require("./types/com/atproto/server/deactivateAccount"));
exports.ComAtprotoServerDefs = __importStar(require("./types/com/atproto/server/defs"));
exports.ComAtprotoServerDeleteAccount = __importStar(require("./types/com/atproto/server/deleteAccount"));
exports.ComAtprotoServerDeleteSession = __importStar(require("./types/com/atproto/server/deleteSession"));
exports.ComAtprotoServerDescribeServer = __importStar(require("./types/com/atproto/server/describeServer"));
exports.ComAtprotoServerGetAccountInviteCodes = __importStar(require("./types/com/atproto/server/getAccountInviteCodes"));
exports.ComAtprotoServerGetServiceAuth = __importStar(require("./types/com/atproto/server/getServiceAuth"));
exports.ComAtprotoServerGetSession = __importStar(require("./types/com/atproto/server/getSession"));
exports.ComAtprotoServerListAppPasswords = __importStar(require("./types/com/atproto/server/listAppPasswords"));
exports.ComAtprotoServerRefreshSession = __importStar(require("./types/com/atproto/server/refreshSession"));
exports.ComAtprotoServerRequestAccountDelete = __importStar(require("./types/com/atproto/server/requestAccountDelete"));
exports.ComAtprotoServerRequestEmailConfirmation = __importStar(require("./types/com/atproto/server/requestEmailConfirmation"));
exports.ComAtprotoServerRequestEmailUpdate = __importStar(require("./types/com/atproto/server/requestEmailUpdate"));
exports.ComAtprotoServerRequestPasswordReset = __importStar(require("./types/com/atproto/server/requestPasswordReset"));
exports.ComAtprotoServerReserveSigningKey = __importStar(require("./types/com/atproto/server/reserveSigningKey"));
exports.ComAtprotoServerResetPassword = __importStar(require("./types/com/atproto/server/resetPassword"));
exports.ComAtprotoServerRevokeAppPassword = __importStar(require("./types/com/atproto/server/revokeAppPassword"));
exports.ComAtprotoServerUpdateEmail = __importStar(require("./types/com/atproto/server/updateEmail"));
exports.ComAtprotoSyncGetBlob = __importStar(require("./types/com/atproto/sync/getBlob"));
exports.ComAtprotoSyncGetBlocks = __importStar(require("./types/com/atproto/sync/getBlocks"));
exports.ComAtprotoSyncGetCheckout = __importStar(require("./types/com/atproto/sync/getCheckout"));
exports.ComAtprotoSyncGetHead = __importStar(require("./types/com/atproto/sync/getHead"));
exports.ComAtprotoSyncGetLatestCommit = __importStar(require("./types/com/atproto/sync/getLatestCommit"));
exports.ComAtprotoSyncGetRecord = __importStar(require("./types/com/atproto/sync/getRecord"));
exports.ComAtprotoSyncGetRepo = __importStar(require("./types/com/atproto/sync/getRepo"));
exports.ComAtprotoSyncGetRepoStatus = __importStar(require("./types/com/atproto/sync/getRepoStatus"));
exports.ComAtprotoSyncListBlobs = __importStar(require("./types/com/atproto/sync/listBlobs"));
exports.ComAtprotoSyncListRepos = __importStar(require("./types/com/atproto/sync/listRepos"));
exports.ComAtprotoSyncNotifyOfUpdate = __importStar(require("./types/com/atproto/sync/notifyOfUpdate"));
exports.ComAtprotoSyncRequestCrawl = __importStar(require("./types/com/atproto/sync/requestCrawl"));
exports.ComAtprotoSyncSubscribeRepos = __importStar(require("./types/com/atproto/sync/subscribeRepos"));
exports.ComAtprotoTempAddReservedHandle = __importStar(require("./types/com/atproto/temp/addReservedHandle"));
exports.ComAtprotoTempCheckSignupQueue = __importStar(require("./types/com/atproto/temp/checkSignupQueue"));
exports.ComAtprotoTempFetchLabels = __importStar(require("./types/com/atproto/temp/fetchLabels"));
exports.ComAtprotoTempRequestPhoneVerification = __importStar(require("./types/com/atproto/temp/requestPhoneVerification"));
exports.AppBskyActorDefs = __importStar(require("./types/app/bsky/actor/defs"));
exports.AppBskyActorGetPreferences = __importStar(require("./types/app/bsky/actor/getPreferences"));
exports.AppBskyActorGetProfile = __importStar(require("./types/app/bsky/actor/getProfile"));
exports.AppBskyActorGetProfiles = __importStar(require("./types/app/bsky/actor/getProfiles"));
exports.AppBskyActorGetSuggestions = __importStar(require("./types/app/bsky/actor/getSuggestions"));
exports.AppBskyActorProfile = __importStar(require("./types/app/bsky/actor/profile"));
exports.AppBskyActorPutPreferences = __importStar(require("./types/app/bsky/actor/putPreferences"));
exports.AppBskyActorSearchActors = __importStar(require("./types/app/bsky/actor/searchActors"));
exports.AppBskyActorSearchActorsTypeahead = __importStar(require("./types/app/bsky/actor/searchActorsTypeahead"));
exports.AppBskyEmbedDefs = __importStar(require("./types/app/bsky/embed/defs"));
exports.AppBskyEmbedExternal = __importStar(require("./types/app/bsky/embed/external"));
exports.AppBskyEmbedImages = __importStar(require("./types/app/bsky/embed/images"));
exports.AppBskyEmbedRecord = __importStar(require("./types/app/bsky/embed/record"));
exports.AppBskyEmbedRecordWithMedia = __importStar(require("./types/app/bsky/embed/recordWithMedia"));
exports.AppBskyEmbedVideo = __importStar(require("./types/app/bsky/embed/video"));
exports.AppBskyFeedDefs = __importStar(require("./types/app/bsky/feed/defs"));
exports.AppBskyFeedDescribeFeedGenerator = __importStar(require("./types/app/bsky/feed/describeFeedGenerator"));
exports.AppBskyFeedGenerator = __importStar(require("./types/app/bsky/feed/generator"));
exports.AppBskyFeedGetActorFeeds = __importStar(require("./types/app/bsky/feed/getActorFeeds"));
exports.AppBskyFeedGetActorLikes = __importStar(require("./types/app/bsky/feed/getActorLikes"));
exports.AppBskyFeedGetAuthorFeed = __importStar(require("./types/app/bsky/feed/getAuthorFeed"));
exports.AppBskyFeedGetFeed = __importStar(require("./types/app/bsky/feed/getFeed"));
exports.AppBskyFeedGetFeedGenerator = __importStar(require("./types/app/bsky/feed/getFeedGenerator"));
exports.AppBskyFeedGetFeedGenerators = __importStar(require("./types/app/bsky/feed/getFeedGenerators"));
exports.AppBskyFeedGetFeedSkeleton = __importStar(require("./types/app/bsky/feed/getFeedSkeleton"));
exports.AppBskyFeedGetLikes = __importStar(require("./types/app/bsky/feed/getLikes"));
exports.AppBskyFeedGetListFeed = __importStar(require("./types/app/bsky/feed/getListFeed"));
exports.AppBskyFeedGetPostThread = __importStar(require("./types/app/bsky/feed/getPostThread"));
exports.AppBskyFeedGetPosts = __importStar(require("./types/app/bsky/feed/getPosts"));
exports.AppBskyFeedGetQuotes = __importStar(require("./types/app/bsky/feed/getQuotes"));
exports.AppBskyFeedGetRepostedBy = __importStar(require("./types/app/bsky/feed/getRepostedBy"));
exports.AppBskyFeedGetSuggestedFeeds = __importStar(require("./types/app/bsky/feed/getSuggestedFeeds"));
exports.AppBskyFeedGetTimeline = __importStar(require("./types/app/bsky/feed/getTimeline"));
exports.AppBskyFeedLike = __importStar(require("./types/app/bsky/feed/like"));
exports.AppBskyFeedPost = __importStar(require("./types/app/bsky/feed/post"));
exports.AppBskyFeedPostgate = __importStar(require("./types/app/bsky/feed/postgate"));
exports.AppBskyFeedRepost = __importStar(require("./types/app/bsky/feed/repost"));
exports.AppBskyFeedSearchPosts = __importStar(require("./types/app/bsky/feed/searchPosts"));
exports.AppBskyFeedSendInteractions = __importStar(require("./types/app/bsky/feed/sendInteractions"));
exports.AppBskyFeedThreadgate = __importStar(require("./types/app/bsky/feed/threadgate"));
exports.AppBskyGraphBlock = __importStar(require("./types/app/bsky/graph/block"));
exports.AppBskyGraphDefs = __importStar(require("./types/app/bsky/graph/defs"));
exports.AppBskyGraphFollow = __importStar(require("./types/app/bsky/graph/follow"));
exports.AppBskyGraphGetActorStarterPacks = __importStar(require("./types/app/bsky/graph/getActorStarterPacks"));
exports.AppBskyGraphGetBlocks = __importStar(require("./types/app/bsky/graph/getBlocks"));
exports.AppBskyGraphGetFollowers = __importStar(require("./types/app/bsky/graph/getFollowers"));
exports.AppBskyGraphGetFollows = __importStar(require("./types/app/bsky/graph/getFollows"));
exports.AppBskyGraphGetKnownFollowers = __importStar(require("./types/app/bsky/graph/getKnownFollowers"));
exports.AppBskyGraphGetList = __importStar(require("./types/app/bsky/graph/getList"));
exports.AppBskyGraphGetListBlocks = __importStar(require("./types/app/bsky/graph/getListBlocks"));
exports.AppBskyGraphGetListMutes = __importStar(require("./types/app/bsky/graph/getListMutes"));
exports.AppBskyGraphGetLists = __importStar(require("./types/app/bsky/graph/getLists"));
exports.AppBskyGraphGetMutes = __importStar(require("./types/app/bsky/graph/getMutes"));
exports.AppBskyGraphGetRelationships = __importStar(require("./types/app/bsky/graph/getRelationships"));
exports.AppBskyGraphGetStarterPack = __importStar(require("./types/app/bsky/graph/getStarterPack"));
exports.AppBskyGraphGetStarterPacks = __importStar(require("./types/app/bsky/graph/getStarterPacks"));
exports.AppBskyGraphGetSuggestedFollowsByActor = __importStar(require("./types/app/bsky/graph/getSuggestedFollowsByActor"));
exports.AppBskyGraphList = __importStar(require("./types/app/bsky/graph/list"));
exports.AppBskyGraphListblock = __importStar(require("./types/app/bsky/graph/listblock"));
exports.AppBskyGraphListitem = __importStar(require("./types/app/bsky/graph/listitem"));
exports.AppBskyGraphMuteActor = __importStar(require("./types/app/bsky/graph/muteActor"));
exports.AppBskyGraphMuteActorList = __importStar(require("./types/app/bsky/graph/muteActorList"));
exports.AppBskyGraphMuteThread = __importStar(require("./types/app/bsky/graph/muteThread"));
exports.AppBskyGraphSearchStarterPacks = __importStar(require("./types/app/bsky/graph/searchStarterPacks"));
exports.AppBskyGraphStarterpack = __importStar(require("./types/app/bsky/graph/starterpack"));
exports.AppBskyGraphUnmuteActor = __importStar(require("./types/app/bsky/graph/unmuteActor"));
exports.AppBskyGraphUnmuteActorList = __importStar(require("./types/app/bsky/graph/unmuteActorList"));
exports.AppBskyGraphUnmuteThread = __importStar(require("./types/app/bsky/graph/unmuteThread"));
exports.AppBskyLabelerDefs = __importStar(require("./types/app/bsky/labeler/defs"));
exports.AppBskyLabelerGetServices = __importStar(require("./types/app/bsky/labeler/getServices"));
exports.AppBskyLabelerService = __importStar(require("./types/app/bsky/labeler/service"));
exports.AppBskyNotificationGetUnreadCount = __importStar(require("./types/app/bsky/notification/getUnreadCount"));
exports.AppBskyNotificationListNotifications = __importStar(require("./types/app/bsky/notification/listNotifications"));
exports.AppBskyNotificationPutPreferences = __importStar(require("./types/app/bsky/notification/putPreferences"));
exports.AppBskyNotificationRegisterPush = __importStar(require("./types/app/bsky/notification/registerPush"));
exports.AppBskyNotificationUpdateSeen = __importStar(require("./types/app/bsky/notification/updateSeen"));
exports.AppBskyRichtextFacet = __importStar(require("./types/app/bsky/richtext/facet"));
exports.AppBskyUnspeccedDefs = __importStar(require("./types/app/bsky/unspecced/defs"));
exports.AppBskyUnspeccedGetConfig = __importStar(require("./types/app/bsky/unspecced/getConfig"));
exports.AppBskyUnspeccedGetPopularFeedGenerators = __importStar(require("./types/app/bsky/unspecced/getPopularFeedGenerators"));
exports.AppBskyUnspeccedGetSuggestionsSkeleton = __importStar(require("./types/app/bsky/unspecced/getSuggestionsSkeleton"));
exports.AppBskyUnspeccedGetTaggedSuggestions = __importStar(require("./types/app/bsky/unspecced/getTaggedSuggestions"));
exports.AppBskyUnspeccedSearchActorsSkeleton = __importStar(require("./types/app/bsky/unspecced/searchActorsSkeleton"));
exports.AppBskyUnspeccedSearchPostsSkeleton = __importStar(require("./types/app/bsky/unspecced/searchPostsSkeleton"));
exports.AppBskyUnspeccedSearchStarterPacksSkeleton = __importStar(require("./types/app/bsky/unspecced/searchStarterPacksSkeleton"));
exports.AppBskyVideoDefs = __importStar(require("./types/app/bsky/video/defs"));
exports.AppBskyVideoGetJobStatus = __importStar(require("./types/app/bsky/video/getJobStatus"));
exports.AppBskyVideoGetUploadLimits = __importStar(require("./types/app/bsky/video/getUploadLimits"));
exports.AppBskyVideoUploadVideo = __importStar(require("./types/app/bsky/video/uploadVideo"));
exports.ChatBskyActorDeclaration = __importStar(require("./types/chat/bsky/actor/declaration"));
exports.ChatBskyActorDefs = __importStar(require("./types/chat/bsky/actor/defs"));
exports.ChatBskyActorDeleteAccount = __importStar(require("./types/chat/bsky/actor/deleteAccount"));
exports.ChatBskyActorExportAccountData = __importStar(require("./types/chat/bsky/actor/exportAccountData"));
exports.ChatBskyConvoDefs = __importStar(require("./types/chat/bsky/convo/defs"));
exports.ChatBskyConvoDeleteMessageForSelf = __importStar(require("./types/chat/bsky/convo/deleteMessageForSelf"));
exports.ChatBskyConvoGetConvo = __importStar(require("./types/chat/bsky/convo/getConvo"));
exports.ChatBskyConvoGetConvoForMembers = __importStar(require("./types/chat/bsky/convo/getConvoForMembers"));
exports.ChatBskyConvoGetLog = __importStar(require("./types/chat/bsky/convo/getLog"));
exports.ChatBskyConvoGetMessages = __importStar(require("./types/chat/bsky/convo/getMessages"));
exports.ChatBskyConvoLeaveConvo = __importStar(require("./types/chat/bsky/convo/leaveConvo"));
exports.ChatBskyConvoListConvos = __importStar(require("./types/chat/bsky/convo/listConvos"));
exports.ChatBskyConvoMuteConvo = __importStar(require("./types/chat/bsky/convo/muteConvo"));
exports.ChatBskyConvoSendMessage = __importStar(require("./types/chat/bsky/convo/sendMessage"));
exports.ChatBskyConvoSendMessageBatch = __importStar(require("./types/chat/bsky/convo/sendMessageBatch"));
exports.ChatBskyConvoUnmuteConvo = __importStar(require("./types/chat/bsky/convo/unmuteConvo"));
exports.ChatBskyConvoUpdateRead = __importStar(require("./types/chat/bsky/convo/updateRead"));
exports.ChatBskyModerationGetActorMetadata = __importStar(require("./types/chat/bsky/moderation/getActorMetadata"));
exports.ChatBskyModerationGetMessageContext = __importStar(require("./types/chat/bsky/moderation/getMessageContext"));
exports.ChatBskyModerationUpdateActorAccess = __importStar(require("./types/chat/bsky/moderation/updateActorAccess"));
exports.ToolsOzoneCommunicationCreateTemplate = __importStar(require("./types/tools/ozone/communication/createTemplate"));
exports.ToolsOzoneCommunicationDefs = __importStar(require("./types/tools/ozone/communication/defs"));
exports.ToolsOzoneCommunicationDeleteTemplate = __importStar(require("./types/tools/ozone/communication/deleteTemplate"));
exports.ToolsOzoneCommunicationListTemplates = __importStar(require("./types/tools/ozone/communication/listTemplates"));
exports.ToolsOzoneCommunicationUpdateTemplate = __importStar(require("./types/tools/ozone/communication/updateTemplate"));
exports.ToolsOzoneModerationDefs = __importStar(require("./types/tools/ozone/moderation/defs"));
exports.ToolsOzoneModerationEmitEvent = __importStar(require("./types/tools/ozone/moderation/emitEvent"));
exports.ToolsOzoneModerationGetEvent = __importStar(require("./types/tools/ozone/moderation/getEvent"));
exports.ToolsOzoneModerationGetRecord = __importStar(require("./types/tools/ozone/moderation/getRecord"));
exports.ToolsOzoneModerationGetRecords = __importStar(require("./types/tools/ozone/moderation/getRecords"));
exports.ToolsOzoneModerationGetRepo = __importStar(require("./types/tools/ozone/moderation/getRepo"));
exports.ToolsOzoneModerationGetRepos = __importStar(require("./types/tools/ozone/moderation/getRepos"));
exports.ToolsOzoneModerationQueryEvents = __importStar(require("./types/tools/ozone/moderation/queryEvents"));
exports.ToolsOzoneModerationQueryStatuses = __importStar(require("./types/tools/ozone/moderation/queryStatuses"));
exports.ToolsOzoneModerationSearchRepos = __importStar(require("./types/tools/ozone/moderation/searchRepos"));
exports.ToolsOzoneServerGetConfig = __importStar(require("./types/tools/ozone/server/getConfig"));
exports.ToolsOzoneSetAddValues = __importStar(require("./types/tools/ozone/set/addValues"));
exports.ToolsOzoneSetDefs = __importStar(require("./types/tools/ozone/set/defs"));
exports.ToolsOzoneSetDeleteSet = __importStar(require("./types/tools/ozone/set/deleteSet"));
exports.ToolsOzoneSetDeleteValues = __importStar(require("./types/tools/ozone/set/deleteValues"));
exports.ToolsOzoneSetGetValues = __importStar(require("./types/tools/ozone/set/getValues"));
exports.ToolsOzoneSetQuerySets = __importStar(require("./types/tools/ozone/set/querySets"));
exports.ToolsOzoneSetUpsertSet = __importStar(require("./types/tools/ozone/set/upsertSet"));
exports.ToolsOzoneSettingDefs = __importStar(require("./types/tools/ozone/setting/defs"));
exports.ToolsOzoneSettingListOptions = __importStar(require("./types/tools/ozone/setting/listOptions"));
exports.ToolsOzoneSettingRemoveOptions = __importStar(require("./types/tools/ozone/setting/removeOptions"));
exports.ToolsOzoneSettingUpsertOption = __importStar(require("./types/tools/ozone/setting/upsertOption"));
exports.ToolsOzoneSignatureDefs = __importStar(require("./types/tools/ozone/signature/defs"));
exports.ToolsOzoneSignatureFindCorrelation = __importStar(require("./types/tools/ozone/signature/findCorrelation"));
exports.ToolsOzoneSignatureFindRelatedAccounts = __importStar(require("./types/tools/ozone/signature/findRelatedAccounts"));
exports.ToolsOzoneSignatureSearchAccounts = __importStar(require("./types/tools/ozone/signature/searchAccounts"));
exports.ToolsOzoneTeamAddMember = __importStar(require("./types/tools/ozone/team/addMember"));
exports.ToolsOzoneTeamDefs = __importStar(require("./types/tools/ozone/team/defs"));
exports.ToolsOzoneTeamDeleteMember = __importStar(require("./types/tools/ozone/team/deleteMember"));
exports.ToolsOzoneTeamListMembers = __importStar(require("./types/tools/ozone/team/listMembers"));
exports.ToolsOzoneTeamUpdateMember = __importStar(require("./types/tools/ozone/team/updateMember"));
exports.COM_ATPROTO_MODERATION = {
    DefsReasonSpam: 'com.atproto.moderation.defs#reasonSpam',
    DefsReasonViolation: 'com.atproto.moderation.defs#reasonViolation',
    DefsReasonMisleading: 'com.atproto.moderation.defs#reasonMisleading',
    DefsReasonSexual: 'com.atproto.moderation.defs#reasonSexual',
    DefsReasonRude: 'com.atproto.moderation.defs#reasonRude',
    DefsReasonOther: 'com.atproto.moderation.defs#reasonOther',
    DefsReasonAppeal: 'com.atproto.moderation.defs#reasonAppeal',
};
exports.APP_BSKY_FEED = {
    DefsRequestLess: 'app.bsky.feed.defs#requestLess',
    DefsRequestMore: 'app.bsky.feed.defs#requestMore',
    DefsClickthroughItem: 'app.bsky.feed.defs#clickthroughItem',
    DefsClickthroughAuthor: 'app.bsky.feed.defs#clickthroughAuthor',
    DefsClickthroughReposter: 'app.bsky.feed.defs#clickthroughReposter',
    DefsClickthroughEmbed: 'app.bsky.feed.defs#clickthroughEmbed',
    DefsInteractionSeen: 'app.bsky.feed.defs#interactionSeen',
    DefsInteractionLike: 'app.bsky.feed.defs#interactionLike',
    DefsInteractionRepost: 'app.bsky.feed.defs#interactionRepost',
    DefsInteractionReply: 'app.bsky.feed.defs#interactionReply',
    DefsInteractionQuote: 'app.bsky.feed.defs#interactionQuote',
    DefsInteractionShare: 'app.bsky.feed.defs#interactionShare',
};
exports.APP_BSKY_GRAPH = {
    DefsModlist: 'app.bsky.graph.defs#modlist',
    DefsCuratelist: 'app.bsky.graph.defs#curatelist',
    DefsReferencelist: 'app.bsky.graph.defs#referencelist',
};
exports.TOOLS_OZONE_MODERATION = {
    DefsReviewOpen: 'tools.ozone.moderation.defs#reviewOpen',
    DefsReviewEscalated: 'tools.ozone.moderation.defs#reviewEscalated',
    DefsReviewClosed: 'tools.ozone.moderation.defs#reviewClosed',
    DefsReviewNone: 'tools.ozone.moderation.defs#reviewNone',
};
exports.TOOLS_OZONE_TEAM = {
    DefsRoleAdmin: 'tools.ozone.team.defs#roleAdmin',
    DefsRoleModerator: 'tools.ozone.team.defs#roleModerator',
    DefsRoleTriage: 'tools.ozone.team.defs#roleTriage',
};
class AtpBaseClient extends xrpc_1.XrpcClient {
    constructor(options) {
        super(options, lexicons_1.schemas);
        Object.defineProperty(this, "com", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "chat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tools", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.com = new ComNS(this);
        this.app = new AppNS(this);
        this.chat = new ChatNS(this);
        this.tools = new ToolsNS(this);
    }
    /** @deprecated use `this` instead */
    get xrpc() {
        return this;
    }
}
exports.AtpBaseClient = AtpBaseClient;
class ComNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "atproto", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.atproto = new ComAtprotoNS(client);
    }
}
exports.ComNS = ComNS;
class ComAtprotoNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "admin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "identity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "label", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "repo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sync", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "temp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.admin = new ComAtprotoAdminNS(client);
        this.identity = new ComAtprotoIdentityNS(client);
        this.label = new ComAtprotoLabelNS(client);
        this.moderation = new ComAtprotoModerationNS(client);
        this.repo = new ComAtprotoRepoNS(client);
        this.server = new ComAtprotoServerNS(client);
        this.sync = new ComAtprotoSyncNS(client);
        this.temp = new ComAtprotoTempNS(client);
    }
}
exports.ComAtprotoNS = ComAtprotoNS;
class ComAtprotoAdminNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    deleteAccount(data, opts) {
        return this._client.call('com.atproto.admin.deleteAccount', opts?.qp, data, opts);
    }
    disableAccountInvites(data, opts) {
        return this._client.call('com.atproto.admin.disableAccountInvites', opts?.qp, data, opts);
    }
    disableInviteCodes(data, opts) {
        return this._client.call('com.atproto.admin.disableInviteCodes', opts?.qp, data, opts);
    }
    enableAccountInvites(data, opts) {
        return this._client.call('com.atproto.admin.enableAccountInvites', opts?.qp, data, opts);
    }
    getAccountInfo(params, opts) {
        return this._client.call('com.atproto.admin.getAccountInfo', params, undefined, opts);
    }
    getAccountInfos(params, opts) {
        return this._client.call('com.atproto.admin.getAccountInfos', params, undefined, opts);
    }
    getInviteCodes(params, opts) {
        return this._client.call('com.atproto.admin.getInviteCodes', params, undefined, opts);
    }
    getSubjectStatus(params, opts) {
        return this._client.call('com.atproto.admin.getSubjectStatus', params, undefined, opts);
    }
    searchAccounts(params, opts) {
        return this._client.call('com.atproto.admin.searchAccounts', params, undefined, opts);
    }
    sendEmail(data, opts) {
        return this._client.call('com.atproto.admin.sendEmail', opts?.qp, data, opts);
    }
    updateAccountEmail(data, opts) {
        return this._client.call('com.atproto.admin.updateAccountEmail', opts?.qp, data, opts);
    }
    updateAccountHandle(data, opts) {
        return this._client.call('com.atproto.admin.updateAccountHandle', opts?.qp, data, opts);
    }
    updateAccountPassword(data, opts) {
        return this._client.call('com.atproto.admin.updateAccountPassword', opts?.qp, data, opts);
    }
    updateSubjectStatus(data, opts) {
        return this._client.call('com.atproto.admin.updateSubjectStatus', opts?.qp, data, opts);
    }
}
exports.ComAtprotoAdminNS = ComAtprotoAdminNS;
class ComAtprotoIdentityNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    getRecommendedDidCredentials(params, opts) {
        return this._client.call('com.atproto.identity.getRecommendedDidCredentials', params, undefined, opts);
    }
    requestPlcOperationSignature(data, opts) {
        return this._client.call('com.atproto.identity.requestPlcOperationSignature', opts?.qp, data, opts);
    }
    resolveHandle(params, opts) {
        return this._client.call('com.atproto.identity.resolveHandle', params, undefined, opts);
    }
    signPlcOperation(data, opts) {
        return this._client.call('com.atproto.identity.signPlcOperation', opts?.qp, data, opts);
    }
    submitPlcOperation(data, opts) {
        return this._client.call('com.atproto.identity.submitPlcOperation', opts?.qp, data, opts);
    }
    updateHandle(data, opts) {
        return this._client.call('com.atproto.identity.updateHandle', opts?.qp, data, opts);
    }
}
exports.ComAtprotoIdentityNS = ComAtprotoIdentityNS;
class ComAtprotoLabelNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    queryLabels(params, opts) {
        return this._client.call('com.atproto.label.queryLabels', params, undefined, opts);
    }
}
exports.ComAtprotoLabelNS = ComAtprotoLabelNS;
class ComAtprotoModerationNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    createReport(data, opts) {
        return this._client.call('com.atproto.moderation.createReport', opts?.qp, data, opts);
    }
}
exports.ComAtprotoModerationNS = ComAtprotoModerationNS;
class ComAtprotoRepoNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    applyWrites(data, opts) {
        return this._client
            .call('com.atproto.repo.applyWrites', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoRepoApplyWrites.toKnownErr(e);
        });
    }
    createRecord(data, opts) {
        return this._client
            .call('com.atproto.repo.createRecord', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoRepoCreateRecord.toKnownErr(e);
        });
    }
    deleteRecord(data, opts) {
        return this._client
            .call('com.atproto.repo.deleteRecord', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoRepoDeleteRecord.toKnownErr(e);
        });
    }
    describeRepo(params, opts) {
        return this._client.call('com.atproto.repo.describeRepo', params, undefined, opts);
    }
    getRecord(params, opts) {
        return this._client
            .call('com.atproto.repo.getRecord', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoRepoGetRecord.toKnownErr(e);
        });
    }
    importRepo(data, opts) {
        return this._client.call('com.atproto.repo.importRepo', opts?.qp, data, opts);
    }
    listMissingBlobs(params, opts) {
        return this._client.call('com.atproto.repo.listMissingBlobs', params, undefined, opts);
    }
    listRecords(params, opts) {
        return this._client.call('com.atproto.repo.listRecords', params, undefined, opts);
    }
    putRecord(data, opts) {
        return this._client
            .call('com.atproto.repo.putRecord', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoRepoPutRecord.toKnownErr(e);
        });
    }
    uploadBlob(data, opts) {
        return this._client.call('com.atproto.repo.uploadBlob', opts?.qp, data, opts);
    }
}
exports.ComAtprotoRepoNS = ComAtprotoRepoNS;
class ComAtprotoServerNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    activateAccount(data, opts) {
        return this._client.call('com.atproto.server.activateAccount', opts?.qp, data, opts);
    }
    checkAccountStatus(params, opts) {
        return this._client.call('com.atproto.server.checkAccountStatus', params, undefined, opts);
    }
    confirmEmail(data, opts) {
        return this._client
            .call('com.atproto.server.confirmEmail', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerConfirmEmail.toKnownErr(e);
        });
    }
    createAccount(data, opts) {
        return this._client
            .call('com.atproto.server.createAccount', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerCreateAccount.toKnownErr(e);
        });
    }
    createAppPassword(data, opts) {
        return this._client
            .call('com.atproto.server.createAppPassword', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerCreateAppPassword.toKnownErr(e);
        });
    }
    createInviteCode(data, opts) {
        return this._client.call('com.atproto.server.createInviteCode', opts?.qp, data, opts);
    }
    createInviteCodes(data, opts) {
        return this._client.call('com.atproto.server.createInviteCodes', opts?.qp, data, opts);
    }
    createSession(data, opts) {
        return this._client
            .call('com.atproto.server.createSession', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerCreateSession.toKnownErr(e);
        });
    }
    deactivateAccount(data, opts) {
        return this._client.call('com.atproto.server.deactivateAccount', opts?.qp, data, opts);
    }
    deleteAccount(data, opts) {
        return this._client
            .call('com.atproto.server.deleteAccount', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerDeleteAccount.toKnownErr(e);
        });
    }
    deleteSession(data, opts) {
        return this._client.call('com.atproto.server.deleteSession', opts?.qp, data, opts);
    }
    describeServer(params, opts) {
        return this._client.call('com.atproto.server.describeServer', params, undefined, opts);
    }
    getAccountInviteCodes(params, opts) {
        return this._client
            .call('com.atproto.server.getAccountInviteCodes', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoServerGetAccountInviteCodes.toKnownErr(e);
        });
    }
    getServiceAuth(params, opts) {
        return this._client
            .call('com.atproto.server.getServiceAuth', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoServerGetServiceAuth.toKnownErr(e);
        });
    }
    getSession(params, opts) {
        return this._client.call('com.atproto.server.getSession', params, undefined, opts);
    }
    listAppPasswords(params, opts) {
        return this._client
            .call('com.atproto.server.listAppPasswords', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoServerListAppPasswords.toKnownErr(e);
        });
    }
    refreshSession(data, opts) {
        return this._client
            .call('com.atproto.server.refreshSession', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerRefreshSession.toKnownErr(e);
        });
    }
    requestAccountDelete(data, opts) {
        return this._client.call('com.atproto.server.requestAccountDelete', opts?.qp, data, opts);
    }
    requestEmailConfirmation(data, opts) {
        return this._client.call('com.atproto.server.requestEmailConfirmation', opts?.qp, data, opts);
    }
    requestEmailUpdate(data, opts) {
        return this._client.call('com.atproto.server.requestEmailUpdate', opts?.qp, data, opts);
    }
    requestPasswordReset(data, opts) {
        return this._client.call('com.atproto.server.requestPasswordReset', opts?.qp, data, opts);
    }
    reserveSigningKey(data, opts) {
        return this._client.call('com.atproto.server.reserveSigningKey', opts?.qp, data, opts);
    }
    resetPassword(data, opts) {
        return this._client
            .call('com.atproto.server.resetPassword', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerResetPassword.toKnownErr(e);
        });
    }
    revokeAppPassword(data, opts) {
        return this._client.call('com.atproto.server.revokeAppPassword', opts?.qp, data, opts);
    }
    updateEmail(data, opts) {
        return this._client
            .call('com.atproto.server.updateEmail', opts?.qp, data, opts)
            .catch((e) => {
            throw ComAtprotoServerUpdateEmail.toKnownErr(e);
        });
    }
}
exports.ComAtprotoServerNS = ComAtprotoServerNS;
class ComAtprotoSyncNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    getBlob(params, opts) {
        return this._client
            .call('com.atproto.sync.getBlob', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncGetBlob.toKnownErr(e);
        });
    }
    getBlocks(params, opts) {
        return this._client
            .call('com.atproto.sync.getBlocks', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncGetBlocks.toKnownErr(e);
        });
    }
    getCheckout(params, opts) {
        return this._client.call('com.atproto.sync.getCheckout', params, undefined, opts);
    }
    getHead(params, opts) {
        return this._client
            .call('com.atproto.sync.getHead', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncGetHead.toKnownErr(e);
        });
    }
    getLatestCommit(params, opts) {
        return this._client
            .call('com.atproto.sync.getLatestCommit', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncGetLatestCommit.toKnownErr(e);
        });
    }
    getRecord(params, opts) {
        return this._client
            .call('com.atproto.sync.getRecord', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncGetRecord.toKnownErr(e);
        });
    }
    getRepo(params, opts) {
        return this._client
            .call('com.atproto.sync.getRepo', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncGetRepo.toKnownErr(e);
        });
    }
    getRepoStatus(params, opts) {
        return this._client
            .call('com.atproto.sync.getRepoStatus', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncGetRepoStatus.toKnownErr(e);
        });
    }
    listBlobs(params, opts) {
        return this._client
            .call('com.atproto.sync.listBlobs', params, undefined, opts)
            .catch((e) => {
            throw ComAtprotoSyncListBlobs.toKnownErr(e);
        });
    }
    listRepos(params, opts) {
        return this._client.call('com.atproto.sync.listRepos', params, undefined, opts);
    }
    notifyOfUpdate(data, opts) {
        return this._client.call('com.atproto.sync.notifyOfUpdate', opts?.qp, data, opts);
    }
    requestCrawl(data, opts) {
        return this._client.call('com.atproto.sync.requestCrawl', opts?.qp, data, opts);
    }
}
exports.ComAtprotoSyncNS = ComAtprotoSyncNS;
class ComAtprotoTempNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    addReservedHandle(data, opts) {
        return this._client.call('com.atproto.temp.addReservedHandle', opts?.qp, data, opts);
    }
    checkSignupQueue(params, opts) {
        return this._client.call('com.atproto.temp.checkSignupQueue', params, undefined, opts);
    }
    fetchLabels(params, opts) {
        return this._client.call('com.atproto.temp.fetchLabels', params, undefined, opts);
    }
    requestPhoneVerification(data, opts) {
        return this._client.call('com.atproto.temp.requestPhoneVerification', opts?.qp, data, opts);
    }
}
exports.ComAtprotoTempNS = ComAtprotoTempNS;
class AppNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bsky", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.bsky = new AppBskyNS(client);
    }
}
exports.AppNS = AppNS;
class AppBskyNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "actor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "embed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "feed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "graph", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "labeler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "notification", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "richtext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "unspecced", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "video", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.actor = new AppBskyActorNS(client);
        this.embed = new AppBskyEmbedNS(client);
        this.feed = new AppBskyFeedNS(client);
        this.graph = new AppBskyGraphNS(client);
        this.labeler = new AppBskyLabelerNS(client);
        this.notification = new AppBskyNotificationNS(client);
        this.richtext = new AppBskyRichtextNS(client);
        this.unspecced = new AppBskyUnspeccedNS(client);
        this.video = new AppBskyVideoNS(client);
    }
}
exports.AppBskyNS = AppBskyNS;
class AppBskyActorNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.profile = new ProfileRecord(client);
    }
    getPreferences(params, opts) {
        return this._client.call('app.bsky.actor.getPreferences', params, undefined, opts);
    }
    getProfile(params, opts) {
        console.log('--- AppBskyActorGetProfile');
        console.log('--- params', params);
        console.log('--- opts', opts);
        return this._client.call('app.bsky.actor.getProfile', params, undefined, opts);
    }
    getProfiles(params, opts) {
        return this._client.call('app.bsky.actor.getProfiles', params, undefined, opts);
    }
    getSuggestions(params, opts) {
        return this._client.call('app.bsky.actor.getSuggestions', params, undefined, opts);
    }
    putPreferences(data, opts) {
        return this._client.call('app.bsky.actor.putPreferences', opts?.qp, data, opts);
    }
    searchActors(params, opts) {
        return this._client.call('app.bsky.actor.searchActors', params, undefined, opts);
    }
    searchActorsTypeahead(params, opts) {
        return this._client.call('app.bsky.actor.searchActorsTypeahead', params, undefined, opts);
    }
}
exports.AppBskyActorNS = AppBskyActorNS;
class ProfileRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.actor.profile',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.actor.profile',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.actor.profile';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.actor.profile', rkey: 'self', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.actor.profile', ...params }, { headers });
    }
}
exports.ProfileRecord = ProfileRecord;
class AppBskyEmbedNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
}
exports.AppBskyEmbedNS = AppBskyEmbedNS;
class AppBskyFeedNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "generator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "like", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "post", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "postgate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "repost", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "threadgate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.generator = new GeneratorRecord(client);
        this.like = new LikeRecord(client);
        this.post = new PostRecord(client);
        this.postgate = new PostgateRecord(client);
        this.repost = new RepostRecord(client);
        this.threadgate = new ThreadgateRecord(client);
    }
    describeFeedGenerator(params, opts) {
        return this._client.call('app.bsky.feed.describeFeedGenerator', params, undefined, opts);
    }
    getActorFeeds(params, opts) {
        return this._client.call('app.bsky.feed.getActorFeeds', params, undefined, opts);
    }
    getActorLikes(params, opts) {
        return this._client
            .call('app.bsky.feed.getActorLikes', params, undefined, opts)
            .catch((e) => {
            throw AppBskyFeedGetActorLikes.toKnownErr(e);
        });
    }
    getAuthorFeed(params, opts) {
        return this._client
            .call('app.bsky.feed.getAuthorFeed', params, undefined, opts)
            .catch((e) => {
            throw AppBskyFeedGetAuthorFeed.toKnownErr(e);
        });
    }
    getFeed(params, opts) {
        return this._client
            .call('app.bsky.feed.getFeed', params, undefined, opts)
            .catch((e) => {
            throw AppBskyFeedGetFeed.toKnownErr(e);
        });
    }
    getFeedGenerator(params, opts) {
        return this._client.call('app.bsky.feed.getFeedGenerator', params, undefined, opts);
    }
    getFeedGenerators(params, opts) {
        return this._client.call('app.bsky.feed.getFeedGenerators', params, undefined, opts);
    }
    getFeedSkeleton(params, opts) {
        return this._client
            .call('app.bsky.feed.getFeedSkeleton', params, undefined, opts)
            .catch((e) => {
            throw AppBskyFeedGetFeedSkeleton.toKnownErr(e);
        });
    }
    getLikes(params, opts) {
        return this._client.call('app.bsky.feed.getLikes', params, undefined, opts);
    }
    getListFeed(params, opts) {
        return this._client
            .call('app.bsky.feed.getListFeed', params, undefined, opts)
            .catch((e) => {
            throw AppBskyFeedGetListFeed.toKnownErr(e);
        });
    }
    getPostThread(params, opts) {
        return this._client
            .call('app.bsky.feed.getPostThread', params, undefined, opts)
            .catch((e) => {
            throw AppBskyFeedGetPostThread.toKnownErr(e);
        });
    }
    getPosts(params, opts) {
        return this._client.call('app.bsky.feed.getPosts', params, undefined, opts);
    }
    getQuotes(params, opts) {
        return this._client.call('app.bsky.feed.getQuotes', params, undefined, opts);
    }
    getRepostedBy(params, opts) {
        return this._client.call('app.bsky.feed.getRepostedBy', params, undefined, opts);
    }
    getSuggestedFeeds(params, opts) {
        return this._client.call('app.bsky.feed.getSuggestedFeeds', params, undefined, opts);
    }
    getTimeline(params, opts) {
        return this._client.call('app.bsky.feed.getTimeline', params, undefined, opts);
    }
    searchPosts(params, opts) {
        return this._client
            .call('app.bsky.feed.searchPosts', params, undefined, opts)
            .catch((e) => {
            throw AppBskyFeedSearchPosts.toKnownErr(e);
        });
    }
    sendInteractions(data, opts) {
        return this._client.call('app.bsky.feed.sendInteractions', opts?.qp, data, opts);
    }
}
exports.AppBskyFeedNS = AppBskyFeedNS;
class GeneratorRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.feed.generator',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.feed.generator',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.feed.generator';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.feed.generator', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.feed.generator', ...params }, { headers });
    }
}
exports.GeneratorRecord = GeneratorRecord;
class LikeRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.feed.like',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.feed.like',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.feed.like';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.feed.like', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.feed.like', ...params }, { headers });
    }
}
exports.LikeRecord = LikeRecord;
class PostRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.feed.post',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.feed.post',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.feed.post';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.feed.post', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.feed.post', ...params }, { headers });
    }
}
exports.PostRecord = PostRecord;
class PostgateRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.feed.postgate',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.feed.postgate',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.feed.postgate';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.feed.postgate', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.feed.postgate', ...params }, { headers });
    }
}
exports.PostgateRecord = PostgateRecord;
class RepostRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.feed.repost',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.feed.repost',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.feed.repost';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.feed.repost', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.feed.repost', ...params }, { headers });
    }
}
exports.RepostRecord = RepostRecord;
class ThreadgateRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.feed.threadgate',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.feed.threadgate',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.feed.threadgate';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.feed.threadgate', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.feed.threadgate', ...params }, { headers });
    }
}
exports.ThreadgateRecord = ThreadgateRecord;
class AppBskyGraphNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "block", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "follow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "listblock", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "listitem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "starterpack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.block = new BlockRecord(client);
        this.follow = new FollowRecord(client);
        this.list = new ListRecord(client);
        this.listblock = new ListblockRecord(client);
        this.listitem = new ListitemRecord(client);
        this.starterpack = new StarterpackRecord(client);
    }
    getActorStarterPacks(params, opts) {
        return this._client.call('app.bsky.graph.getActorStarterPacks', params, undefined, opts);
    }
    getBlocks(params, opts) {
        return this._client.call('app.bsky.graph.getBlocks', params, undefined, opts);
    }
    getFollowers(params, opts) {
        return this._client.call('app.bsky.graph.getFollowers', params, undefined, opts);
    }
    getFollows(params, opts) {
        return this._client.call('app.bsky.graph.getFollows', params, undefined, opts);
    }
    getKnownFollowers(params, opts) {
        return this._client.call('app.bsky.graph.getKnownFollowers', params, undefined, opts);
    }
    getList(params, opts) {
        return this._client.call('app.bsky.graph.getList', params, undefined, opts);
    }
    getListBlocks(params, opts) {
        return this._client.call('app.bsky.graph.getListBlocks', params, undefined, opts);
    }
    getListMutes(params, opts) {
        return this._client.call('app.bsky.graph.getListMutes', params, undefined, opts);
    }
    getLists(params, opts) {
        return this._client.call('app.bsky.graph.getLists', params, undefined, opts);
    }
    getMutes(params, opts) {
        return this._client.call('app.bsky.graph.getMutes', params, undefined, opts);
    }
    getRelationships(params, opts) {
        return this._client
            .call('app.bsky.graph.getRelationships', params, undefined, opts)
            .catch((e) => {
            throw AppBskyGraphGetRelationships.toKnownErr(e);
        });
    }
    getStarterPack(params, opts) {
        return this._client.call('app.bsky.graph.getStarterPack', params, undefined, opts);
    }
    getStarterPacks(params, opts) {
        return this._client.call('app.bsky.graph.getStarterPacks', params, undefined, opts);
    }
    getSuggestedFollowsByActor(params, opts) {
        return this._client.call('app.bsky.graph.getSuggestedFollowsByActor', params, undefined, opts);
    }
    muteActor(data, opts) {
        return this._client.call('app.bsky.graph.muteActor', opts?.qp, data, opts);
    }
    muteActorList(data, opts) {
        return this._client.call('app.bsky.graph.muteActorList', opts?.qp, data, opts);
    }
    muteThread(data, opts) {
        return this._client.call('app.bsky.graph.muteThread', opts?.qp, data, opts);
    }
    searchStarterPacks(params, opts) {
        return this._client.call('app.bsky.graph.searchStarterPacks', params, undefined, opts);
    }
    unmuteActor(data, opts) {
        return this._client.call('app.bsky.graph.unmuteActor', opts?.qp, data, opts);
    }
    unmuteActorList(data, opts) {
        return this._client.call('app.bsky.graph.unmuteActorList', opts?.qp, data, opts);
    }
    unmuteThread(data, opts) {
        return this._client.call('app.bsky.graph.unmuteThread', opts?.qp, data, opts);
    }
}
exports.AppBskyGraphNS = AppBskyGraphNS;
class BlockRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.graph.block',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.graph.block',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.graph.block';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.graph.block', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.graph.block', ...params }, { headers });
    }
}
exports.BlockRecord = BlockRecord;
class FollowRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.graph.follow',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.graph.follow',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.graph.follow';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.graph.follow', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.graph.follow', ...params }, { headers });
    }
}
exports.FollowRecord = FollowRecord;
class ListRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.graph.list',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.graph.list',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.graph.list';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.graph.list', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.graph.list', ...params }, { headers });
    }
}
exports.ListRecord = ListRecord;
class ListblockRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.graph.listblock',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.graph.listblock',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.graph.listblock';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.graph.listblock', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.graph.listblock', ...params }, { headers });
    }
}
exports.ListblockRecord = ListblockRecord;
class ListitemRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.graph.listitem',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.graph.listitem',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.graph.listitem';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.graph.listitem', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.graph.listitem', ...params }, { headers });
    }
}
exports.ListitemRecord = ListitemRecord;
class StarterpackRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.graph.starterpack',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.graph.starterpack',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.graph.starterpack';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, { collection: 'app.bsky.graph.starterpack', ...params, record }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.graph.starterpack', ...params }, { headers });
    }
}
exports.StarterpackRecord = StarterpackRecord;
class AppBskyLabelerNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "service", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.service = new ServiceRecord(client);
    }
    getServices(params, opts) {
        return this._client.call('app.bsky.labeler.getServices', params, undefined, opts);
    }
}
exports.AppBskyLabelerNS = AppBskyLabelerNS;
class ServiceRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'app.bsky.labeler.service',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'app.bsky.labeler.service',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'app.bsky.labeler.service';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, {
            collection: 'app.bsky.labeler.service',
            rkey: 'self',
            ...params,
            record,
        }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'app.bsky.labeler.service', ...params }, { headers });
    }
}
exports.ServiceRecord = ServiceRecord;
class AppBskyNotificationNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    getUnreadCount(params, opts) {
        return this._client.call('app.bsky.notification.getUnreadCount', params, undefined, opts);
    }
    listNotifications(params, opts) {
        return this._client.call('app.bsky.notification.listNotifications', params, undefined, opts);
    }
    putPreferences(data, opts) {
        return this._client.call('app.bsky.notification.putPreferences', opts?.qp, data, opts);
    }
    registerPush(data, opts) {
        return this._client.call('app.bsky.notification.registerPush', opts?.qp, data, opts);
    }
    updateSeen(data, opts) {
        return this._client.call('app.bsky.notification.updateSeen', opts?.qp, data, opts);
    }
}
exports.AppBskyNotificationNS = AppBskyNotificationNS;
class AppBskyRichtextNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
}
exports.AppBskyRichtextNS = AppBskyRichtextNS;
class AppBskyUnspeccedNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    getConfig(params, opts) {
        return this._client.call('app.bsky.unspecced.getConfig', params, undefined, opts);
    }
    getPopularFeedGenerators(params, opts) {
        return this._client.call('app.bsky.unspecced.getPopularFeedGenerators', params, undefined, opts);
    }
    getSuggestionsSkeleton(params, opts) {
        return this._client.call('app.bsky.unspecced.getSuggestionsSkeleton', params, undefined, opts);
    }
    getTaggedSuggestions(params, opts) {
        return this._client.call('app.bsky.unspecced.getTaggedSuggestions', params, undefined, opts);
    }
    searchActorsSkeleton(params, opts) {
        return this._client
            .call('app.bsky.unspecced.searchActorsSkeleton', params, undefined, opts)
            .catch((e) => {
            throw AppBskyUnspeccedSearchActorsSkeleton.toKnownErr(e);
        });
    }
    searchPostsSkeleton(params, opts) {
        return this._client
            .call('app.bsky.unspecced.searchPostsSkeleton', params, undefined, opts)
            .catch((e) => {
            throw AppBskyUnspeccedSearchPostsSkeleton.toKnownErr(e);
        });
    }
    searchStarterPacksSkeleton(params, opts) {
        return this._client
            .call('app.bsky.unspecced.searchStarterPacksSkeleton', params, undefined, opts)
            .catch((e) => {
            throw AppBskyUnspeccedSearchStarterPacksSkeleton.toKnownErr(e);
        });
    }
}
exports.AppBskyUnspeccedNS = AppBskyUnspeccedNS;
class AppBskyVideoNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    getJobStatus(params, opts) {
        return this._client.call('app.bsky.video.getJobStatus', params, undefined, opts);
    }
    getUploadLimits(params, opts) {
        return this._client.call('app.bsky.video.getUploadLimits', params, undefined, opts);
    }
    uploadVideo(data, opts) {
        return this._client.call('app.bsky.video.uploadVideo', opts?.qp, data, opts);
    }
}
exports.AppBskyVideoNS = AppBskyVideoNS;
class ChatNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bsky", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.bsky = new ChatBskyNS(client);
    }
}
exports.ChatNS = ChatNS;
class ChatBskyNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "actor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "convo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.actor = new ChatBskyActorNS(client);
        this.convo = new ChatBskyConvoNS(client);
        this.moderation = new ChatBskyModerationNS(client);
    }
}
exports.ChatBskyNS = ChatBskyNS;
class ChatBskyActorNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "declaration", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.declaration = new DeclarationRecord(client);
    }
    deleteAccount(data, opts) {
        return this._client.call('chat.bsky.actor.deleteAccount', opts?.qp, data, opts);
    }
    exportAccountData(params, opts) {
        return this._client.call('chat.bsky.actor.exportAccountData', params, undefined, opts);
    }
}
exports.ChatBskyActorNS = ChatBskyActorNS;
class DeclarationRecord {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    async list(params) {
        const res = await this._client.call('com.atproto.repo.listRecords', {
            collection: 'chat.bsky.actor.declaration',
            ...params,
        });
        return res.data;
    }
    async get(params) {
        const res = await this._client.call('com.atproto.repo.getRecord', {
            collection: 'chat.bsky.actor.declaration',
            ...params,
        });
        return res.data;
    }
    async create(params, record, headers) {
        record.$type = 'chat.bsky.actor.declaration';
        const res = await this._client.call('com.atproto.repo.createRecord', undefined, {
            collection: 'chat.bsky.actor.declaration',
            rkey: 'self',
            ...params,
            record,
        }, { encoding: 'application/json', headers });
        return res.data;
    }
    async delete(params, headers) {
        await this._client.call('com.atproto.repo.deleteRecord', undefined, { collection: 'chat.bsky.actor.declaration', ...params }, { headers });
    }
}
exports.DeclarationRecord = DeclarationRecord;
class ChatBskyConvoNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    deleteMessageForSelf(data, opts) {
        return this._client.call('chat.bsky.convo.deleteMessageForSelf', opts?.qp, data, opts);
    }
    getConvo(params, opts) {
        return this._client.call('chat.bsky.convo.getConvo', params, undefined, opts);
    }
    getConvoForMembers(params, opts) {
        return this._client.call('chat.bsky.convo.getConvoForMembers', params, undefined, opts);
    }
    getLog(params, opts) {
        return this._client.call('chat.bsky.convo.getLog', params, undefined, opts);
    }
    getMessages(params, opts) {
        return this._client.call('chat.bsky.convo.getMessages', params, undefined, opts);
    }
    leaveConvo(data, opts) {
        return this._client.call('chat.bsky.convo.leaveConvo', opts?.qp, data, opts);
    }
    listConvos(params, opts) {
        return this._client.call('chat.bsky.convo.listConvos', params, undefined, opts);
    }
    muteConvo(data, opts) {
        return this._client.call('chat.bsky.convo.muteConvo', opts?.qp, data, opts);
    }
    sendMessage(data, opts) {
        return this._client.call('chat.bsky.convo.sendMessage', opts?.qp, data, opts);
    }
    sendMessageBatch(data, opts) {
        return this._client.call('chat.bsky.convo.sendMessageBatch', opts?.qp, data, opts);
    }
    unmuteConvo(data, opts) {
        return this._client.call('chat.bsky.convo.unmuteConvo', opts?.qp, data, opts);
    }
    updateRead(data, opts) {
        return this._client.call('chat.bsky.convo.updateRead', opts?.qp, data, opts);
    }
}
exports.ChatBskyConvoNS = ChatBskyConvoNS;
class ChatBskyModerationNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    getActorMetadata(params, opts) {
        return this._client.call('chat.bsky.moderation.getActorMetadata', params, undefined, opts);
    }
    getMessageContext(params, opts) {
        return this._client.call('chat.bsky.moderation.getMessageContext', params, undefined, opts);
    }
    updateActorAccess(data, opts) {
        return this._client.call('chat.bsky.moderation.updateActorAccess', opts?.qp, data, opts);
    }
}
exports.ChatBskyModerationNS = ChatBskyModerationNS;
class ToolsNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ozone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.ozone = new ToolsOzoneNS(client);
    }
}
exports.ToolsNS = ToolsNS;
class ToolsOzoneNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "communication", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "set", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "team", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
        this.communication = new ToolsOzoneCommunicationNS(client);
        this.moderation = new ToolsOzoneModerationNS(client);
        this.server = new ToolsOzoneServerNS(client);
        this.set = new ToolsOzoneSetNS(client);
        this.setting = new ToolsOzoneSettingNS(client);
        this.signature = new ToolsOzoneSignatureNS(client);
        this.team = new ToolsOzoneTeamNS(client);
    }
}
exports.ToolsOzoneNS = ToolsOzoneNS;
class ToolsOzoneCommunicationNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    createTemplate(data, opts) {
        return this._client
            .call('tools.ozone.communication.createTemplate', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneCommunicationCreateTemplate.toKnownErr(e);
        });
    }
    deleteTemplate(data, opts) {
        return this._client.call('tools.ozone.communication.deleteTemplate', opts?.qp, data, opts);
    }
    listTemplates(params, opts) {
        return this._client.call('tools.ozone.communication.listTemplates', params, undefined, opts);
    }
    updateTemplate(data, opts) {
        return this._client
            .call('tools.ozone.communication.updateTemplate', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneCommunicationUpdateTemplate.toKnownErr(e);
        });
    }
}
exports.ToolsOzoneCommunicationNS = ToolsOzoneCommunicationNS;
class ToolsOzoneModerationNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    emitEvent(data, opts) {
        return this._client
            .call('tools.ozone.moderation.emitEvent', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneModerationEmitEvent.toKnownErr(e);
        });
    }
    getEvent(params, opts) {
        return this._client.call('tools.ozone.moderation.getEvent', params, undefined, opts);
    }
    getRecord(params, opts) {
        return this._client
            .call('tools.ozone.moderation.getRecord', params, undefined, opts)
            .catch((e) => {
            throw ToolsOzoneModerationGetRecord.toKnownErr(e);
        });
    }
    getRecords(params, opts) {
        return this._client.call('tools.ozone.moderation.getRecords', params, undefined, opts);
    }
    getRepo(params, opts) {
        return this._client
            .call('tools.ozone.moderation.getRepo', params, undefined, opts)
            .catch((e) => {
            throw ToolsOzoneModerationGetRepo.toKnownErr(e);
        });
    }
    getRepos(params, opts) {
        return this._client.call('tools.ozone.moderation.getRepos', params, undefined, opts);
    }
    queryEvents(params, opts) {
        return this._client.call('tools.ozone.moderation.queryEvents', params, undefined, opts);
    }
    queryStatuses(params, opts) {
        return this._client.call('tools.ozone.moderation.queryStatuses', params, undefined, opts);
    }
    searchRepos(params, opts) {
        return this._client.call('tools.ozone.moderation.searchRepos', params, undefined, opts);
    }
}
exports.ToolsOzoneModerationNS = ToolsOzoneModerationNS;
class ToolsOzoneServerNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    getConfig(params, opts) {
        return this._client.call('tools.ozone.server.getConfig', params, undefined, opts);
    }
}
exports.ToolsOzoneServerNS = ToolsOzoneServerNS;
class ToolsOzoneSetNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    addValues(data, opts) {
        return this._client.call('tools.ozone.set.addValues', opts?.qp, data, opts);
    }
    deleteSet(data, opts) {
        return this._client
            .call('tools.ozone.set.deleteSet', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneSetDeleteSet.toKnownErr(e);
        });
    }
    deleteValues(data, opts) {
        return this._client
            .call('tools.ozone.set.deleteValues', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneSetDeleteValues.toKnownErr(e);
        });
    }
    getValues(params, opts) {
        return this._client
            .call('tools.ozone.set.getValues', params, undefined, opts)
            .catch((e) => {
            throw ToolsOzoneSetGetValues.toKnownErr(e);
        });
    }
    querySets(params, opts) {
        return this._client.call('tools.ozone.set.querySets', params, undefined, opts);
    }
    upsertSet(data, opts) {
        return this._client.call('tools.ozone.set.upsertSet', opts?.qp, data, opts);
    }
}
exports.ToolsOzoneSetNS = ToolsOzoneSetNS;
class ToolsOzoneSettingNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    listOptions(params, opts) {
        return this._client.call('tools.ozone.setting.listOptions', params, undefined, opts);
    }
    removeOptions(data, opts) {
        return this._client.call('tools.ozone.setting.removeOptions', opts?.qp, data, opts);
    }
    upsertOption(data, opts) {
        return this._client.call('tools.ozone.setting.upsertOption', opts?.qp, data, opts);
    }
}
exports.ToolsOzoneSettingNS = ToolsOzoneSettingNS;
class ToolsOzoneSignatureNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    findCorrelation(params, opts) {
        return this._client.call('tools.ozone.signature.findCorrelation', params, undefined, opts);
    }
    findRelatedAccounts(params, opts) {
        return this._client.call('tools.ozone.signature.findRelatedAccounts', params, undefined, opts);
    }
    searchAccounts(params, opts) {
        return this._client.call('tools.ozone.signature.searchAccounts', params, undefined, opts);
    }
}
exports.ToolsOzoneSignatureNS = ToolsOzoneSignatureNS;
class ToolsOzoneTeamNS {
    constructor(client) {
        Object.defineProperty(this, "_client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._client = client;
    }
    addMember(data, opts) {
        return this._client
            .call('tools.ozone.team.addMember', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneTeamAddMember.toKnownErr(e);
        });
    }
    deleteMember(data, opts) {
        return this._client
            .call('tools.ozone.team.deleteMember', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneTeamDeleteMember.toKnownErr(e);
        });
    }
    listMembers(params, opts) {
        return this._client.call('tools.ozone.team.listMembers', params, undefined, opts);
    }
    updateMember(data, opts) {
        return this._client
            .call('tools.ozone.team.updateMember', opts?.qp, data, opts)
            .catch((e) => {
            throw ToolsOzoneTeamUpdateMember.toKnownErr(e);
        });
    }
}
exports.ToolsOzoneTeamNS = ToolsOzoneTeamNS;
//# sourceMappingURL=index.js.map