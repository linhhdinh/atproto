/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { XrpcClient, FetchHandler, FetchHandlerOptions } from '@atproto/xrpc';
import * as ComAtprotoAdminDeleteAccount from './types/com/atproto/admin/deleteAccount';
import * as ComAtprotoAdminDisableAccountInvites from './types/com/atproto/admin/disableAccountInvites';
import * as ComAtprotoAdminDisableInviteCodes from './types/com/atproto/admin/disableInviteCodes';
import * as ComAtprotoAdminEnableAccountInvites from './types/com/atproto/admin/enableAccountInvites';
import * as ComAtprotoAdminGetAccountInfo from './types/com/atproto/admin/getAccountInfo';
import * as ComAtprotoAdminGetAccountInfos from './types/com/atproto/admin/getAccountInfos';
import * as ComAtprotoAdminGetInviteCodes from './types/com/atproto/admin/getInviteCodes';
import * as ComAtprotoAdminGetSubjectStatus from './types/com/atproto/admin/getSubjectStatus';
import * as ComAtprotoAdminSearchAccounts from './types/com/atproto/admin/searchAccounts';
import * as ComAtprotoAdminSendEmail from './types/com/atproto/admin/sendEmail';
import * as ComAtprotoAdminUpdateAccountEmail from './types/com/atproto/admin/updateAccountEmail';
import * as ComAtprotoAdminUpdateAccountHandle from './types/com/atproto/admin/updateAccountHandle';
import * as ComAtprotoAdminUpdateAccountPassword from './types/com/atproto/admin/updateAccountPassword';
import * as ComAtprotoAdminUpdateSubjectStatus from './types/com/atproto/admin/updateSubjectStatus';
import * as ComAtprotoIdentityGetRecommendedDidCredentials from './types/com/atproto/identity/getRecommendedDidCredentials';
import * as ComAtprotoIdentityRequestPlcOperationSignature from './types/com/atproto/identity/requestPlcOperationSignature';
import * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle';
import * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation';
import * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation';
import * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle';
import * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels';
import * as ComAtprotoModerationCreateReport from './types/com/atproto/moderation/createReport';
import * as ComAtprotoRepoApplyWrites from './types/com/atproto/repo/applyWrites';
import * as ComAtprotoRepoCreateRecord from './types/com/atproto/repo/createRecord';
import * as ComAtprotoRepoDeleteRecord from './types/com/atproto/repo/deleteRecord';
import * as ComAtprotoRepoDescribeRepo from './types/com/atproto/repo/describeRepo';
import * as ComAtprotoRepoGetRecord from './types/com/atproto/repo/getRecord';
import * as ComAtprotoRepoImportRepo from './types/com/atproto/repo/importRepo';
import * as ComAtprotoRepoListMissingBlobs from './types/com/atproto/repo/listMissingBlobs';
import * as ComAtprotoRepoListRecords from './types/com/atproto/repo/listRecords';
import * as ComAtprotoRepoPutRecord from './types/com/atproto/repo/putRecord';
import * as ComAtprotoRepoUploadBlob from './types/com/atproto/repo/uploadBlob';
import * as ComAtprotoServerActivateAccount from './types/com/atproto/server/activateAccount';
import * as ComAtprotoServerCheckAccountStatus from './types/com/atproto/server/checkAccountStatus';
import * as ComAtprotoServerConfirmEmail from './types/com/atproto/server/confirmEmail';
import * as ComAtprotoServerCreateAccount from './types/com/atproto/server/createAccount';
import * as ComAtprotoServerCreateAppPassword from './types/com/atproto/server/createAppPassword';
import * as ComAtprotoServerCreateInviteCode from './types/com/atproto/server/createInviteCode';
import * as ComAtprotoServerCreateInviteCodes from './types/com/atproto/server/createInviteCodes';
import * as ComAtprotoServerCreateSession from './types/com/atproto/server/createSession';
import * as ComAtprotoServerDeactivateAccount from './types/com/atproto/server/deactivateAccount';
import * as ComAtprotoServerDeleteAccount from './types/com/atproto/server/deleteAccount';
import * as ComAtprotoServerDeleteSession from './types/com/atproto/server/deleteSession';
import * as ComAtprotoServerDescribeServer from './types/com/atproto/server/describeServer';
import * as ComAtprotoServerGetAccountInviteCodes from './types/com/atproto/server/getAccountInviteCodes';
import * as ComAtprotoServerGetServiceAuth from './types/com/atproto/server/getServiceAuth';
import * as ComAtprotoServerGetSession from './types/com/atproto/server/getSession';
import * as ComAtprotoServerListAppPasswords from './types/com/atproto/server/listAppPasswords';
import * as ComAtprotoServerRefreshSession from './types/com/atproto/server/refreshSession';
import * as ComAtprotoServerRequestAccountDelete from './types/com/atproto/server/requestAccountDelete';
import * as ComAtprotoServerRequestEmailConfirmation from './types/com/atproto/server/requestEmailConfirmation';
import * as ComAtprotoServerRequestEmailUpdate from './types/com/atproto/server/requestEmailUpdate';
import * as ComAtprotoServerRequestPasswordReset from './types/com/atproto/server/requestPasswordReset';
import * as ComAtprotoServerReserveSigningKey from './types/com/atproto/server/reserveSigningKey';
import * as ComAtprotoServerResetPassword from './types/com/atproto/server/resetPassword';
import * as ComAtprotoServerRevokeAppPassword from './types/com/atproto/server/revokeAppPassword';
import * as ComAtprotoServerUpdateEmail from './types/com/atproto/server/updateEmail';
import * as ComAtprotoSyncGetBlob from './types/com/atproto/sync/getBlob';
import * as ComAtprotoSyncGetBlocks from './types/com/atproto/sync/getBlocks';
import * as ComAtprotoSyncGetCheckout from './types/com/atproto/sync/getCheckout';
import * as ComAtprotoSyncGetHead from './types/com/atproto/sync/getHead';
import * as ComAtprotoSyncGetLatestCommit from './types/com/atproto/sync/getLatestCommit';
import * as ComAtprotoSyncGetRecord from './types/com/atproto/sync/getRecord';
import * as ComAtprotoSyncGetRepo from './types/com/atproto/sync/getRepo';
import * as ComAtprotoSyncGetRepoStatus from './types/com/atproto/sync/getRepoStatus';
import * as ComAtprotoSyncListBlobs from './types/com/atproto/sync/listBlobs';
import * as ComAtprotoSyncListRepos from './types/com/atproto/sync/listRepos';
import * as ComAtprotoSyncNotifyOfUpdate from './types/com/atproto/sync/notifyOfUpdate';
import * as ComAtprotoSyncRequestCrawl from './types/com/atproto/sync/requestCrawl';
import * as ComAtprotoTempAddReservedHandle from './types/com/atproto/temp/addReservedHandle';
import * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue';
import * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels';
import * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification';
import * as AppBskyActorGetPreferences from './types/app/bsky/actor/getPreferences';
import * as AppBskyActorGetProfile from './types/app/bsky/actor/getProfile';
import * as AppBskyActorGetProfiles from './types/app/bsky/actor/getProfiles';
import * as AppBskyActorGetSuggestions from './types/app/bsky/actor/getSuggestions';
import * as AppBskyActorProfile from './types/app/bsky/actor/profile';
import * as AppBskyActorPutPreferences from './types/app/bsky/actor/putPreferences';
import * as AppBskyActorSearchActors from './types/app/bsky/actor/searchActors';
import * as AppBskyActorSearchActorsTypeahead from './types/app/bsky/actor/searchActorsTypeahead';
import * as AppBskyFeedDescribeFeedGenerator from './types/app/bsky/feed/describeFeedGenerator';
import * as AppBskyFeedGenerator from './types/app/bsky/feed/generator';
import * as AppBskyFeedGetActorFeeds from './types/app/bsky/feed/getActorFeeds';
import * as AppBskyFeedGetActorLikes from './types/app/bsky/feed/getActorLikes';
import * as AppBskyFeedGetAuthorFeed from './types/app/bsky/feed/getAuthorFeed';
import * as AppBskyFeedGetFeed from './types/app/bsky/feed/getFeed';
import * as AppBskyFeedGetFeedGenerator from './types/app/bsky/feed/getFeedGenerator';
import * as AppBskyFeedGetFeedGenerators from './types/app/bsky/feed/getFeedGenerators';
import * as AppBskyFeedGetFeedSkeleton from './types/app/bsky/feed/getFeedSkeleton';
import * as AppBskyFeedGetLikes from './types/app/bsky/feed/getLikes';
import * as AppBskyFeedGetListFeed from './types/app/bsky/feed/getListFeed';
import * as AppBskyFeedGetPostThread from './types/app/bsky/feed/getPostThread';
import * as AppBskyFeedGetPosts from './types/app/bsky/feed/getPosts';
import * as AppBskyFeedGetQuotes from './types/app/bsky/feed/getQuotes';
import * as AppBskyFeedGetRepostedBy from './types/app/bsky/feed/getRepostedBy';
import * as AppBskyFeedGetSuggestedFeeds from './types/app/bsky/feed/getSuggestedFeeds';
import * as AppBskyFeedGetTimeline from './types/app/bsky/feed/getTimeline';
import * as AppBskyFeedLike from './types/app/bsky/feed/like';
import * as AppBskyFeedPost from './types/app/bsky/feed/post';
import * as AppBskyFeedPostgate from './types/app/bsky/feed/postgate';
import * as AppBskyFeedRepost from './types/app/bsky/feed/repost';
import * as AppBskyFeedSearchPosts from './types/app/bsky/feed/searchPosts';
import * as AppBskyFeedSendInteractions from './types/app/bsky/feed/sendInteractions';
import * as AppBskyFeedThreadgate from './types/app/bsky/feed/threadgate';
import * as AppBskyGraphBlock from './types/app/bsky/graph/block';
import * as AppBskyGraphFollow from './types/app/bsky/graph/follow';
import * as AppBskyGraphGetActorStarterPacks from './types/app/bsky/graph/getActorStarterPacks';
import * as AppBskyGraphGetBlocks from './types/app/bsky/graph/getBlocks';
import * as AppBskyGraphGetFollowers from './types/app/bsky/graph/getFollowers';
import * as AppBskyGraphGetFollows from './types/app/bsky/graph/getFollows';
import * as AppBskyGraphGetKnownFollowers from './types/app/bsky/graph/getKnownFollowers';
import * as AppBskyGraphGetList from './types/app/bsky/graph/getList';
import * as AppBskyGraphGetListBlocks from './types/app/bsky/graph/getListBlocks';
import * as AppBskyGraphGetListMutes from './types/app/bsky/graph/getListMutes';
import * as AppBskyGraphGetLists from './types/app/bsky/graph/getLists';
import * as AppBskyGraphGetMutes from './types/app/bsky/graph/getMutes';
import * as AppBskyGraphGetRelationships from './types/app/bsky/graph/getRelationships';
import * as AppBskyGraphGetStarterPack from './types/app/bsky/graph/getStarterPack';
import * as AppBskyGraphGetStarterPacks from './types/app/bsky/graph/getStarterPacks';
import * as AppBskyGraphGetSuggestedFollowsByActor from './types/app/bsky/graph/getSuggestedFollowsByActor';
import * as AppBskyGraphList from './types/app/bsky/graph/list';
import * as AppBskyGraphListblock from './types/app/bsky/graph/listblock';
import * as AppBskyGraphListitem from './types/app/bsky/graph/listitem';
import * as AppBskyGraphMuteActor from './types/app/bsky/graph/muteActor';
import * as AppBskyGraphMuteActorList from './types/app/bsky/graph/muteActorList';
import * as AppBskyGraphMuteThread from './types/app/bsky/graph/muteThread';
import * as AppBskyGraphSearchStarterPacks from './types/app/bsky/graph/searchStarterPacks';
import * as AppBskyGraphStarterpack from './types/app/bsky/graph/starterpack';
import * as AppBskyGraphUnmuteActor from './types/app/bsky/graph/unmuteActor';
import * as AppBskyGraphUnmuteActorList from './types/app/bsky/graph/unmuteActorList';
import * as AppBskyGraphUnmuteThread from './types/app/bsky/graph/unmuteThread';
import * as AppBskyLabelerGetServices from './types/app/bsky/labeler/getServices';
import * as AppBskyLabelerService from './types/app/bsky/labeler/service';
import * as AppBskyNotificationGetUnreadCount from './types/app/bsky/notification/getUnreadCount';
import * as AppBskyNotificationListNotifications from './types/app/bsky/notification/listNotifications';
import * as AppBskyNotificationPutPreferences from './types/app/bsky/notification/putPreferences';
import * as AppBskyNotificationRegisterPush from './types/app/bsky/notification/registerPush';
import * as AppBskyNotificationUpdateSeen from './types/app/bsky/notification/updateSeen';
import * as AppBskyUnspeccedGetConfig from './types/app/bsky/unspecced/getConfig';
import * as AppBskyUnspeccedGetPopularFeedGenerators from './types/app/bsky/unspecced/getPopularFeedGenerators';
import * as AppBskyUnspeccedGetSuggestionsSkeleton from './types/app/bsky/unspecced/getSuggestionsSkeleton';
import * as AppBskyUnspeccedGetTaggedSuggestions from './types/app/bsky/unspecced/getTaggedSuggestions';
import * as AppBskyUnspeccedSearchActorsSkeleton from './types/app/bsky/unspecced/searchActorsSkeleton';
import * as AppBskyUnspeccedSearchPostsSkeleton from './types/app/bsky/unspecced/searchPostsSkeleton';
import * as AppBskyUnspeccedSearchStarterPacksSkeleton from './types/app/bsky/unspecced/searchStarterPacksSkeleton';
import * as AppBskyVideoGetJobStatus from './types/app/bsky/video/getJobStatus';
import * as AppBskyVideoGetUploadLimits from './types/app/bsky/video/getUploadLimits';
import * as AppBskyVideoUploadVideo from './types/app/bsky/video/uploadVideo';
import * as ChatBskyActorDeclaration from './types/chat/bsky/actor/declaration';
import * as ChatBskyActorDeleteAccount from './types/chat/bsky/actor/deleteAccount';
import * as ChatBskyActorExportAccountData from './types/chat/bsky/actor/exportAccountData';
import * as ChatBskyConvoDeleteMessageForSelf from './types/chat/bsky/convo/deleteMessageForSelf';
import * as ChatBskyConvoGetConvo from './types/chat/bsky/convo/getConvo';
import * as ChatBskyConvoGetConvoForMembers from './types/chat/bsky/convo/getConvoForMembers';
import * as ChatBskyConvoGetLog from './types/chat/bsky/convo/getLog';
import * as ChatBskyConvoGetMessages from './types/chat/bsky/convo/getMessages';
import * as ChatBskyConvoLeaveConvo from './types/chat/bsky/convo/leaveConvo';
import * as ChatBskyConvoListConvos from './types/chat/bsky/convo/listConvos';
import * as ChatBskyConvoMuteConvo from './types/chat/bsky/convo/muteConvo';
import * as ChatBskyConvoSendMessage from './types/chat/bsky/convo/sendMessage';
import * as ChatBskyConvoSendMessageBatch from './types/chat/bsky/convo/sendMessageBatch';
import * as ChatBskyConvoUnmuteConvo from './types/chat/bsky/convo/unmuteConvo';
import * as ChatBskyConvoUpdateRead from './types/chat/bsky/convo/updateRead';
import * as ChatBskyModerationGetActorMetadata from './types/chat/bsky/moderation/getActorMetadata';
import * as ChatBskyModerationGetMessageContext from './types/chat/bsky/moderation/getMessageContext';
import * as ChatBskyModerationUpdateActorAccess from './types/chat/bsky/moderation/updateActorAccess';
import * as ToolsOzoneCommunicationCreateTemplate from './types/tools/ozone/communication/createTemplate';
import * as ToolsOzoneCommunicationDeleteTemplate from './types/tools/ozone/communication/deleteTemplate';
import * as ToolsOzoneCommunicationListTemplates from './types/tools/ozone/communication/listTemplates';
import * as ToolsOzoneCommunicationUpdateTemplate from './types/tools/ozone/communication/updateTemplate';
import * as ToolsOzoneModerationEmitEvent from './types/tools/ozone/moderation/emitEvent';
import * as ToolsOzoneModerationGetEvent from './types/tools/ozone/moderation/getEvent';
import * as ToolsOzoneModerationGetRecord from './types/tools/ozone/moderation/getRecord';
import * as ToolsOzoneModerationGetRecords from './types/tools/ozone/moderation/getRecords';
import * as ToolsOzoneModerationGetRepo from './types/tools/ozone/moderation/getRepo';
import * as ToolsOzoneModerationGetRepos from './types/tools/ozone/moderation/getRepos';
import * as ToolsOzoneModerationQueryEvents from './types/tools/ozone/moderation/queryEvents';
import * as ToolsOzoneModerationQueryStatuses from './types/tools/ozone/moderation/queryStatuses';
import * as ToolsOzoneModerationSearchRepos from './types/tools/ozone/moderation/searchRepos';
import * as ToolsOzoneServerGetConfig from './types/tools/ozone/server/getConfig';
import * as ToolsOzoneSetAddValues from './types/tools/ozone/set/addValues';
import * as ToolsOzoneSetDeleteSet from './types/tools/ozone/set/deleteSet';
import * as ToolsOzoneSetDeleteValues from './types/tools/ozone/set/deleteValues';
import * as ToolsOzoneSetGetValues from './types/tools/ozone/set/getValues';
import * as ToolsOzoneSetQuerySets from './types/tools/ozone/set/querySets';
import * as ToolsOzoneSetUpsertSet from './types/tools/ozone/set/upsertSet';
import * as ToolsOzoneSettingListOptions from './types/tools/ozone/setting/listOptions';
import * as ToolsOzoneSettingRemoveOptions from './types/tools/ozone/setting/removeOptions';
import * as ToolsOzoneSettingUpsertOption from './types/tools/ozone/setting/upsertOption';
import * as ToolsOzoneSignatureFindCorrelation from './types/tools/ozone/signature/findCorrelation';
import * as ToolsOzoneSignatureFindRelatedAccounts from './types/tools/ozone/signature/findRelatedAccounts';
import * as ToolsOzoneSignatureSearchAccounts from './types/tools/ozone/signature/searchAccounts';
import * as ToolsOzoneTeamAddMember from './types/tools/ozone/team/addMember';
import * as ToolsOzoneTeamDeleteMember from './types/tools/ozone/team/deleteMember';
import * as ToolsOzoneTeamListMembers from './types/tools/ozone/team/listMembers';
import * as ToolsOzoneTeamUpdateMember from './types/tools/ozone/team/updateMember';
export * as ComAtprotoAdminDefs from './types/com/atproto/admin/defs';
export * as ComAtprotoAdminDeleteAccount from './types/com/atproto/admin/deleteAccount';
export * as ComAtprotoAdminDisableAccountInvites from './types/com/atproto/admin/disableAccountInvites';
export * as ComAtprotoAdminDisableInviteCodes from './types/com/atproto/admin/disableInviteCodes';
export * as ComAtprotoAdminEnableAccountInvites from './types/com/atproto/admin/enableAccountInvites';
export * as ComAtprotoAdminGetAccountInfo from './types/com/atproto/admin/getAccountInfo';
export * as ComAtprotoAdminGetAccountInfos from './types/com/atproto/admin/getAccountInfos';
export * as ComAtprotoAdminGetInviteCodes from './types/com/atproto/admin/getInviteCodes';
export * as ComAtprotoAdminGetSubjectStatus from './types/com/atproto/admin/getSubjectStatus';
export * as ComAtprotoAdminSearchAccounts from './types/com/atproto/admin/searchAccounts';
export * as ComAtprotoAdminSendEmail from './types/com/atproto/admin/sendEmail';
export * as ComAtprotoAdminUpdateAccountEmail from './types/com/atproto/admin/updateAccountEmail';
export * as ComAtprotoAdminUpdateAccountHandle from './types/com/atproto/admin/updateAccountHandle';
export * as ComAtprotoAdminUpdateAccountPassword from './types/com/atproto/admin/updateAccountPassword';
export * as ComAtprotoAdminUpdateSubjectStatus from './types/com/atproto/admin/updateSubjectStatus';
export * as ComAtprotoIdentityGetRecommendedDidCredentials from './types/com/atproto/identity/getRecommendedDidCredentials';
export * as ComAtprotoIdentityRequestPlcOperationSignature from './types/com/atproto/identity/requestPlcOperationSignature';
export * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle';
export * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation';
export * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation';
export * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle';
export * as ComAtprotoLabelDefs from './types/com/atproto/label/defs';
export * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels';
export * as ComAtprotoLabelSubscribeLabels from './types/com/atproto/label/subscribeLabels';
export * as ComAtprotoModerationCreateReport from './types/com/atproto/moderation/createReport';
export * as ComAtprotoModerationDefs from './types/com/atproto/moderation/defs';
export * as ComAtprotoRepoApplyWrites from './types/com/atproto/repo/applyWrites';
export * as ComAtprotoRepoCreateRecord from './types/com/atproto/repo/createRecord';
export * as ComAtprotoRepoDefs from './types/com/atproto/repo/defs';
export * as ComAtprotoRepoDeleteRecord from './types/com/atproto/repo/deleteRecord';
export * as ComAtprotoRepoDescribeRepo from './types/com/atproto/repo/describeRepo';
export * as ComAtprotoRepoGetRecord from './types/com/atproto/repo/getRecord';
export * as ComAtprotoRepoImportRepo from './types/com/atproto/repo/importRepo';
export * as ComAtprotoRepoListMissingBlobs from './types/com/atproto/repo/listMissingBlobs';
export * as ComAtprotoRepoListRecords from './types/com/atproto/repo/listRecords';
export * as ComAtprotoRepoPutRecord from './types/com/atproto/repo/putRecord';
export * as ComAtprotoRepoStrongRef from './types/com/atproto/repo/strongRef';
export * as ComAtprotoRepoUploadBlob from './types/com/atproto/repo/uploadBlob';
export * as ComAtprotoServerActivateAccount from './types/com/atproto/server/activateAccount';
export * as ComAtprotoServerCheckAccountStatus from './types/com/atproto/server/checkAccountStatus';
export * as ComAtprotoServerConfirmEmail from './types/com/atproto/server/confirmEmail';
export * as ComAtprotoServerCreateAccount from './types/com/atproto/server/createAccount';
export * as ComAtprotoServerCreateAppPassword from './types/com/atproto/server/createAppPassword';
export * as ComAtprotoServerCreateInviteCode from './types/com/atproto/server/createInviteCode';
export * as ComAtprotoServerCreateInviteCodes from './types/com/atproto/server/createInviteCodes';
export * as ComAtprotoServerCreateSession from './types/com/atproto/server/createSession';
export * as ComAtprotoServerDeactivateAccount from './types/com/atproto/server/deactivateAccount';
export * as ComAtprotoServerDefs from './types/com/atproto/server/defs';
export * as ComAtprotoServerDeleteAccount from './types/com/atproto/server/deleteAccount';
export * as ComAtprotoServerDeleteSession from './types/com/atproto/server/deleteSession';
export * as ComAtprotoServerDescribeServer from './types/com/atproto/server/describeServer';
export * as ComAtprotoServerGetAccountInviteCodes from './types/com/atproto/server/getAccountInviteCodes';
export * as ComAtprotoServerGetServiceAuth from './types/com/atproto/server/getServiceAuth';
export * as ComAtprotoServerGetSession from './types/com/atproto/server/getSession';
export * as ComAtprotoServerListAppPasswords from './types/com/atproto/server/listAppPasswords';
export * as ComAtprotoServerRefreshSession from './types/com/atproto/server/refreshSession';
export * as ComAtprotoServerRequestAccountDelete from './types/com/atproto/server/requestAccountDelete';
export * as ComAtprotoServerRequestEmailConfirmation from './types/com/atproto/server/requestEmailConfirmation';
export * as ComAtprotoServerRequestEmailUpdate from './types/com/atproto/server/requestEmailUpdate';
export * as ComAtprotoServerRequestPasswordReset from './types/com/atproto/server/requestPasswordReset';
export * as ComAtprotoServerReserveSigningKey from './types/com/atproto/server/reserveSigningKey';
export * as ComAtprotoServerResetPassword from './types/com/atproto/server/resetPassword';
export * as ComAtprotoServerRevokeAppPassword from './types/com/atproto/server/revokeAppPassword';
export * as ComAtprotoServerUpdateEmail from './types/com/atproto/server/updateEmail';
export * as ComAtprotoSyncGetBlob from './types/com/atproto/sync/getBlob';
export * as ComAtprotoSyncGetBlocks from './types/com/atproto/sync/getBlocks';
export * as ComAtprotoSyncGetCheckout from './types/com/atproto/sync/getCheckout';
export * as ComAtprotoSyncGetHead from './types/com/atproto/sync/getHead';
export * as ComAtprotoSyncGetLatestCommit from './types/com/atproto/sync/getLatestCommit';
export * as ComAtprotoSyncGetRecord from './types/com/atproto/sync/getRecord';
export * as ComAtprotoSyncGetRepo from './types/com/atproto/sync/getRepo';
export * as ComAtprotoSyncGetRepoStatus from './types/com/atproto/sync/getRepoStatus';
export * as ComAtprotoSyncListBlobs from './types/com/atproto/sync/listBlobs';
export * as ComAtprotoSyncListRepos from './types/com/atproto/sync/listRepos';
export * as ComAtprotoSyncNotifyOfUpdate from './types/com/atproto/sync/notifyOfUpdate';
export * as ComAtprotoSyncRequestCrawl from './types/com/atproto/sync/requestCrawl';
export * as ComAtprotoSyncSubscribeRepos from './types/com/atproto/sync/subscribeRepos';
export * as ComAtprotoTempAddReservedHandle from './types/com/atproto/temp/addReservedHandle';
export * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue';
export * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels';
export * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification';
export * as AppBskyActorDefs from './types/app/bsky/actor/defs';
export * as AppBskyActorGetPreferences from './types/app/bsky/actor/getPreferences';
export * as AppBskyActorGetProfile from './types/app/bsky/actor/getProfile';
export * as AppBskyActorGetProfiles from './types/app/bsky/actor/getProfiles';
export * as AppBskyActorGetSuggestions from './types/app/bsky/actor/getSuggestions';
export * as AppBskyActorProfile from './types/app/bsky/actor/profile';
export * as AppBskyActorPutPreferences from './types/app/bsky/actor/putPreferences';
export * as AppBskyActorSearchActors from './types/app/bsky/actor/searchActors';
export * as AppBskyActorSearchActorsTypeahead from './types/app/bsky/actor/searchActorsTypeahead';
export * as AppBskyEmbedDefs from './types/app/bsky/embed/defs';
export * as AppBskyEmbedExternal from './types/app/bsky/embed/external';
export * as AppBskyEmbedImages from './types/app/bsky/embed/images';
export * as AppBskyEmbedRecord from './types/app/bsky/embed/record';
export * as AppBskyEmbedRecordWithMedia from './types/app/bsky/embed/recordWithMedia';
export * as AppBskyEmbedVideo from './types/app/bsky/embed/video';
export * as AppBskyFeedDefs from './types/app/bsky/feed/defs';
export * as AppBskyFeedDescribeFeedGenerator from './types/app/bsky/feed/describeFeedGenerator';
export * as AppBskyFeedGenerator from './types/app/bsky/feed/generator';
export * as AppBskyFeedGetActorFeeds from './types/app/bsky/feed/getActorFeeds';
export * as AppBskyFeedGetActorLikes from './types/app/bsky/feed/getActorLikes';
export * as AppBskyFeedGetAuthorFeed from './types/app/bsky/feed/getAuthorFeed';
export * as AppBskyFeedGetFeed from './types/app/bsky/feed/getFeed';
export * as AppBskyFeedGetFeedGenerator from './types/app/bsky/feed/getFeedGenerator';
export * as AppBskyFeedGetFeedGenerators from './types/app/bsky/feed/getFeedGenerators';
export * as AppBskyFeedGetFeedSkeleton from './types/app/bsky/feed/getFeedSkeleton';
export * as AppBskyFeedGetLikes from './types/app/bsky/feed/getLikes';
export * as AppBskyFeedGetListFeed from './types/app/bsky/feed/getListFeed';
export * as AppBskyFeedGetPostThread from './types/app/bsky/feed/getPostThread';
export * as AppBskyFeedGetPosts from './types/app/bsky/feed/getPosts';
export * as AppBskyFeedGetQuotes from './types/app/bsky/feed/getQuotes';
export * as AppBskyFeedGetRepostedBy from './types/app/bsky/feed/getRepostedBy';
export * as AppBskyFeedGetSuggestedFeeds from './types/app/bsky/feed/getSuggestedFeeds';
export * as AppBskyFeedGetTimeline from './types/app/bsky/feed/getTimeline';
export * as AppBskyFeedLike from './types/app/bsky/feed/like';
export * as AppBskyFeedPost from './types/app/bsky/feed/post';
export * as AppBskyFeedPostgate from './types/app/bsky/feed/postgate';
export * as AppBskyFeedRepost from './types/app/bsky/feed/repost';
export * as AppBskyFeedSearchPosts from './types/app/bsky/feed/searchPosts';
export * as AppBskyFeedSendInteractions from './types/app/bsky/feed/sendInteractions';
export * as AppBskyFeedThreadgate from './types/app/bsky/feed/threadgate';
export * as AppBskyGraphBlock from './types/app/bsky/graph/block';
export * as AppBskyGraphDefs from './types/app/bsky/graph/defs';
export * as AppBskyGraphFollow from './types/app/bsky/graph/follow';
export * as AppBskyGraphGetActorStarterPacks from './types/app/bsky/graph/getActorStarterPacks';
export * as AppBskyGraphGetBlocks from './types/app/bsky/graph/getBlocks';
export * as AppBskyGraphGetFollowers from './types/app/bsky/graph/getFollowers';
export * as AppBskyGraphGetFollows from './types/app/bsky/graph/getFollows';
export * as AppBskyGraphGetKnownFollowers from './types/app/bsky/graph/getKnownFollowers';
export * as AppBskyGraphGetList from './types/app/bsky/graph/getList';
export * as AppBskyGraphGetListBlocks from './types/app/bsky/graph/getListBlocks';
export * as AppBskyGraphGetListMutes from './types/app/bsky/graph/getListMutes';
export * as AppBskyGraphGetLists from './types/app/bsky/graph/getLists';
export * as AppBskyGraphGetMutes from './types/app/bsky/graph/getMutes';
export * as AppBskyGraphGetRelationships from './types/app/bsky/graph/getRelationships';
export * as AppBskyGraphGetStarterPack from './types/app/bsky/graph/getStarterPack';
export * as AppBskyGraphGetStarterPacks from './types/app/bsky/graph/getStarterPacks';
export * as AppBskyGraphGetSuggestedFollowsByActor from './types/app/bsky/graph/getSuggestedFollowsByActor';
export * as AppBskyGraphList from './types/app/bsky/graph/list';
export * as AppBskyGraphListblock from './types/app/bsky/graph/listblock';
export * as AppBskyGraphListitem from './types/app/bsky/graph/listitem';
export * as AppBskyGraphMuteActor from './types/app/bsky/graph/muteActor';
export * as AppBskyGraphMuteActorList from './types/app/bsky/graph/muteActorList';
export * as AppBskyGraphMuteThread from './types/app/bsky/graph/muteThread';
export * as AppBskyGraphSearchStarterPacks from './types/app/bsky/graph/searchStarterPacks';
export * as AppBskyGraphStarterpack from './types/app/bsky/graph/starterpack';
export * as AppBskyGraphUnmuteActor from './types/app/bsky/graph/unmuteActor';
export * as AppBskyGraphUnmuteActorList from './types/app/bsky/graph/unmuteActorList';
export * as AppBskyGraphUnmuteThread from './types/app/bsky/graph/unmuteThread';
export * as AppBskyLabelerDefs from './types/app/bsky/labeler/defs';
export * as AppBskyLabelerGetServices from './types/app/bsky/labeler/getServices';
export * as AppBskyLabelerService from './types/app/bsky/labeler/service';
export * as AppBskyNotificationGetUnreadCount from './types/app/bsky/notification/getUnreadCount';
export * as AppBskyNotificationListNotifications from './types/app/bsky/notification/listNotifications';
export * as AppBskyNotificationPutPreferences from './types/app/bsky/notification/putPreferences';
export * as AppBskyNotificationRegisterPush from './types/app/bsky/notification/registerPush';
export * as AppBskyNotificationUpdateSeen from './types/app/bsky/notification/updateSeen';
export * as AppBskyRichtextFacet from './types/app/bsky/richtext/facet';
export * as AppBskyUnspeccedDefs from './types/app/bsky/unspecced/defs';
export * as AppBskyUnspeccedGetConfig from './types/app/bsky/unspecced/getConfig';
export * as AppBskyUnspeccedGetPopularFeedGenerators from './types/app/bsky/unspecced/getPopularFeedGenerators';
export * as AppBskyUnspeccedGetSuggestionsSkeleton from './types/app/bsky/unspecced/getSuggestionsSkeleton';
export * as AppBskyUnspeccedGetTaggedSuggestions from './types/app/bsky/unspecced/getTaggedSuggestions';
export * as AppBskyUnspeccedSearchActorsSkeleton from './types/app/bsky/unspecced/searchActorsSkeleton';
export * as AppBskyUnspeccedSearchPostsSkeleton from './types/app/bsky/unspecced/searchPostsSkeleton';
export * as AppBskyUnspeccedSearchStarterPacksSkeleton from './types/app/bsky/unspecced/searchStarterPacksSkeleton';
export * as AppBskyVideoDefs from './types/app/bsky/video/defs';
export * as AppBskyVideoGetJobStatus from './types/app/bsky/video/getJobStatus';
export * as AppBskyVideoGetUploadLimits from './types/app/bsky/video/getUploadLimits';
export * as AppBskyVideoUploadVideo from './types/app/bsky/video/uploadVideo';
export * as ChatBskyActorDeclaration from './types/chat/bsky/actor/declaration';
export * as ChatBskyActorDefs from './types/chat/bsky/actor/defs';
export * as ChatBskyActorDeleteAccount from './types/chat/bsky/actor/deleteAccount';
export * as ChatBskyActorExportAccountData from './types/chat/bsky/actor/exportAccountData';
export * as ChatBskyConvoDefs from './types/chat/bsky/convo/defs';
export * as ChatBskyConvoDeleteMessageForSelf from './types/chat/bsky/convo/deleteMessageForSelf';
export * as ChatBskyConvoGetConvo from './types/chat/bsky/convo/getConvo';
export * as ChatBskyConvoGetConvoForMembers from './types/chat/bsky/convo/getConvoForMembers';
export * as ChatBskyConvoGetLog from './types/chat/bsky/convo/getLog';
export * as ChatBskyConvoGetMessages from './types/chat/bsky/convo/getMessages';
export * as ChatBskyConvoLeaveConvo from './types/chat/bsky/convo/leaveConvo';
export * as ChatBskyConvoListConvos from './types/chat/bsky/convo/listConvos';
export * as ChatBskyConvoMuteConvo from './types/chat/bsky/convo/muteConvo';
export * as ChatBskyConvoSendMessage from './types/chat/bsky/convo/sendMessage';
export * as ChatBskyConvoSendMessageBatch from './types/chat/bsky/convo/sendMessageBatch';
export * as ChatBskyConvoUnmuteConvo from './types/chat/bsky/convo/unmuteConvo';
export * as ChatBskyConvoUpdateRead from './types/chat/bsky/convo/updateRead';
export * as ChatBskyModerationGetActorMetadata from './types/chat/bsky/moderation/getActorMetadata';
export * as ChatBskyModerationGetMessageContext from './types/chat/bsky/moderation/getMessageContext';
export * as ChatBskyModerationUpdateActorAccess from './types/chat/bsky/moderation/updateActorAccess';
export * as ToolsOzoneCommunicationCreateTemplate from './types/tools/ozone/communication/createTemplate';
export * as ToolsOzoneCommunicationDefs from './types/tools/ozone/communication/defs';
export * as ToolsOzoneCommunicationDeleteTemplate from './types/tools/ozone/communication/deleteTemplate';
export * as ToolsOzoneCommunicationListTemplates from './types/tools/ozone/communication/listTemplates';
export * as ToolsOzoneCommunicationUpdateTemplate from './types/tools/ozone/communication/updateTemplate';
export * as ToolsOzoneModerationDefs from './types/tools/ozone/moderation/defs';
export * as ToolsOzoneModerationEmitEvent from './types/tools/ozone/moderation/emitEvent';
export * as ToolsOzoneModerationGetEvent from './types/tools/ozone/moderation/getEvent';
export * as ToolsOzoneModerationGetRecord from './types/tools/ozone/moderation/getRecord';
export * as ToolsOzoneModerationGetRecords from './types/tools/ozone/moderation/getRecords';
export * as ToolsOzoneModerationGetRepo from './types/tools/ozone/moderation/getRepo';
export * as ToolsOzoneModerationGetRepos from './types/tools/ozone/moderation/getRepos';
export * as ToolsOzoneModerationQueryEvents from './types/tools/ozone/moderation/queryEvents';
export * as ToolsOzoneModerationQueryStatuses from './types/tools/ozone/moderation/queryStatuses';
export * as ToolsOzoneModerationSearchRepos from './types/tools/ozone/moderation/searchRepos';
export * as ToolsOzoneServerGetConfig from './types/tools/ozone/server/getConfig';
export * as ToolsOzoneSetAddValues from './types/tools/ozone/set/addValues';
export * as ToolsOzoneSetDefs from './types/tools/ozone/set/defs';
export * as ToolsOzoneSetDeleteSet from './types/tools/ozone/set/deleteSet';
export * as ToolsOzoneSetDeleteValues from './types/tools/ozone/set/deleteValues';
export * as ToolsOzoneSetGetValues from './types/tools/ozone/set/getValues';
export * as ToolsOzoneSetQuerySets from './types/tools/ozone/set/querySets';
export * as ToolsOzoneSetUpsertSet from './types/tools/ozone/set/upsertSet';
export * as ToolsOzoneSettingDefs from './types/tools/ozone/setting/defs';
export * as ToolsOzoneSettingListOptions from './types/tools/ozone/setting/listOptions';
export * as ToolsOzoneSettingRemoveOptions from './types/tools/ozone/setting/removeOptions';
export * as ToolsOzoneSettingUpsertOption from './types/tools/ozone/setting/upsertOption';
export * as ToolsOzoneSignatureDefs from './types/tools/ozone/signature/defs';
export * as ToolsOzoneSignatureFindCorrelation from './types/tools/ozone/signature/findCorrelation';
export * as ToolsOzoneSignatureFindRelatedAccounts from './types/tools/ozone/signature/findRelatedAccounts';
export * as ToolsOzoneSignatureSearchAccounts from './types/tools/ozone/signature/searchAccounts';
export * as ToolsOzoneTeamAddMember from './types/tools/ozone/team/addMember';
export * as ToolsOzoneTeamDefs from './types/tools/ozone/team/defs';
export * as ToolsOzoneTeamDeleteMember from './types/tools/ozone/team/deleteMember';
export * as ToolsOzoneTeamListMembers from './types/tools/ozone/team/listMembers';
export * as ToolsOzoneTeamUpdateMember from './types/tools/ozone/team/updateMember';
export declare const COM_ATPROTO_MODERATION: {
    DefsReasonSpam: string;
    DefsReasonViolation: string;
    DefsReasonMisleading: string;
    DefsReasonSexual: string;
    DefsReasonRude: string;
    DefsReasonOther: string;
    DefsReasonAppeal: string;
};
export declare const APP_BSKY_FEED: {
    DefsRequestLess: string;
    DefsRequestMore: string;
    DefsClickthroughItem: string;
    DefsClickthroughAuthor: string;
    DefsClickthroughReposter: string;
    DefsClickthroughEmbed: string;
    DefsInteractionSeen: string;
    DefsInteractionLike: string;
    DefsInteractionRepost: string;
    DefsInteractionReply: string;
    DefsInteractionQuote: string;
    DefsInteractionShare: string;
};
export declare const APP_BSKY_GRAPH: {
    DefsModlist: string;
    DefsCuratelist: string;
    DefsReferencelist: string;
};
export declare const TOOLS_OZONE_MODERATION: {
    DefsReviewOpen: string;
    DefsReviewEscalated: string;
    DefsReviewClosed: string;
    DefsReviewNone: string;
};
export declare const TOOLS_OZONE_TEAM: {
    DefsRoleAdmin: string;
    DefsRoleModerator: string;
    DefsRoleTriage: string;
};
export declare class AtpBaseClient extends XrpcClient {
    com: ComNS;
    app: AppNS;
    chat: ChatNS;
    tools: ToolsNS;
    constructor(options: FetchHandler | FetchHandlerOptions);
    /** @deprecated use `this` instead */
    get xrpc(): XrpcClient;
}
export declare class ComNS {
    _client: XrpcClient;
    atproto: ComAtprotoNS;
    constructor(client: XrpcClient);
}
export declare class ComAtprotoNS {
    _client: XrpcClient;
    admin: ComAtprotoAdminNS;
    identity: ComAtprotoIdentityNS;
    label: ComAtprotoLabelNS;
    moderation: ComAtprotoModerationNS;
    repo: ComAtprotoRepoNS;
    server: ComAtprotoServerNS;
    sync: ComAtprotoSyncNS;
    temp: ComAtprotoTempNS;
    constructor(client: XrpcClient);
}
export declare class ComAtprotoAdminNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    deleteAccount(data?: ComAtprotoAdminDeleteAccount.InputSchema, opts?: ComAtprotoAdminDeleteAccount.CallOptions): Promise<ComAtprotoAdminDeleteAccount.Response>;
    disableAccountInvites(data?: ComAtprotoAdminDisableAccountInvites.InputSchema, opts?: ComAtprotoAdminDisableAccountInvites.CallOptions): Promise<ComAtprotoAdminDisableAccountInvites.Response>;
    disableInviteCodes(data?: ComAtprotoAdminDisableInviteCodes.InputSchema, opts?: ComAtprotoAdminDisableInviteCodes.CallOptions): Promise<ComAtprotoAdminDisableInviteCodes.Response>;
    enableAccountInvites(data?: ComAtprotoAdminEnableAccountInvites.InputSchema, opts?: ComAtprotoAdminEnableAccountInvites.CallOptions): Promise<ComAtprotoAdminEnableAccountInvites.Response>;
    getAccountInfo(params?: ComAtprotoAdminGetAccountInfo.QueryParams, opts?: ComAtprotoAdminGetAccountInfo.CallOptions): Promise<ComAtprotoAdminGetAccountInfo.Response>;
    getAccountInfos(params?: ComAtprotoAdminGetAccountInfos.QueryParams, opts?: ComAtprotoAdminGetAccountInfos.CallOptions): Promise<ComAtprotoAdminGetAccountInfos.Response>;
    getInviteCodes(params?: ComAtprotoAdminGetInviteCodes.QueryParams, opts?: ComAtprotoAdminGetInviteCodes.CallOptions): Promise<ComAtprotoAdminGetInviteCodes.Response>;
    getSubjectStatus(params?: ComAtprotoAdminGetSubjectStatus.QueryParams, opts?: ComAtprotoAdminGetSubjectStatus.CallOptions): Promise<ComAtprotoAdminGetSubjectStatus.Response>;
    searchAccounts(params?: ComAtprotoAdminSearchAccounts.QueryParams, opts?: ComAtprotoAdminSearchAccounts.CallOptions): Promise<ComAtprotoAdminSearchAccounts.Response>;
    sendEmail(data?: ComAtprotoAdminSendEmail.InputSchema, opts?: ComAtprotoAdminSendEmail.CallOptions): Promise<ComAtprotoAdminSendEmail.Response>;
    updateAccountEmail(data?: ComAtprotoAdminUpdateAccountEmail.InputSchema, opts?: ComAtprotoAdminUpdateAccountEmail.CallOptions): Promise<ComAtprotoAdminUpdateAccountEmail.Response>;
    updateAccountHandle(data?: ComAtprotoAdminUpdateAccountHandle.InputSchema, opts?: ComAtprotoAdminUpdateAccountHandle.CallOptions): Promise<ComAtprotoAdminUpdateAccountHandle.Response>;
    updateAccountPassword(data?: ComAtprotoAdminUpdateAccountPassword.InputSchema, opts?: ComAtprotoAdminUpdateAccountPassword.CallOptions): Promise<ComAtprotoAdminUpdateAccountPassword.Response>;
    updateSubjectStatus(data?: ComAtprotoAdminUpdateSubjectStatus.InputSchema, opts?: ComAtprotoAdminUpdateSubjectStatus.CallOptions): Promise<ComAtprotoAdminUpdateSubjectStatus.Response>;
}
export declare class ComAtprotoIdentityNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    getRecommendedDidCredentials(params?: ComAtprotoIdentityGetRecommendedDidCredentials.QueryParams, opts?: ComAtprotoIdentityGetRecommendedDidCredentials.CallOptions): Promise<ComAtprotoIdentityGetRecommendedDidCredentials.Response>;
    requestPlcOperationSignature(data?: ComAtprotoIdentityRequestPlcOperationSignature.InputSchema, opts?: ComAtprotoIdentityRequestPlcOperationSignature.CallOptions): Promise<ComAtprotoIdentityRequestPlcOperationSignature.Response>;
    resolveHandle(params?: ComAtprotoIdentityResolveHandle.QueryParams, opts?: ComAtprotoIdentityResolveHandle.CallOptions): Promise<ComAtprotoIdentityResolveHandle.Response>;
    signPlcOperation(data?: ComAtprotoIdentitySignPlcOperation.InputSchema, opts?: ComAtprotoIdentitySignPlcOperation.CallOptions): Promise<ComAtprotoIdentitySignPlcOperation.Response>;
    submitPlcOperation(data?: ComAtprotoIdentitySubmitPlcOperation.InputSchema, opts?: ComAtprotoIdentitySubmitPlcOperation.CallOptions): Promise<ComAtprotoIdentitySubmitPlcOperation.Response>;
    updateHandle(data?: ComAtprotoIdentityUpdateHandle.InputSchema, opts?: ComAtprotoIdentityUpdateHandle.CallOptions): Promise<ComAtprotoIdentityUpdateHandle.Response>;
}
export declare class ComAtprotoLabelNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    queryLabels(params?: ComAtprotoLabelQueryLabels.QueryParams, opts?: ComAtprotoLabelQueryLabels.CallOptions): Promise<ComAtprotoLabelQueryLabels.Response>;
}
export declare class ComAtprotoModerationNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    createReport(data?: ComAtprotoModerationCreateReport.InputSchema, opts?: ComAtprotoModerationCreateReport.CallOptions): Promise<ComAtprotoModerationCreateReport.Response>;
}
export declare class ComAtprotoRepoNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    applyWrites(data?: ComAtprotoRepoApplyWrites.InputSchema, opts?: ComAtprotoRepoApplyWrites.CallOptions): Promise<ComAtprotoRepoApplyWrites.Response>;
    createRecord(data?: ComAtprotoRepoCreateRecord.InputSchema, opts?: ComAtprotoRepoCreateRecord.CallOptions): Promise<ComAtprotoRepoCreateRecord.Response>;
    deleteRecord(data?: ComAtprotoRepoDeleteRecord.InputSchema, opts?: ComAtprotoRepoDeleteRecord.CallOptions): Promise<ComAtprotoRepoDeleteRecord.Response>;
    describeRepo(params?: ComAtprotoRepoDescribeRepo.QueryParams, opts?: ComAtprotoRepoDescribeRepo.CallOptions): Promise<ComAtprotoRepoDescribeRepo.Response>;
    getRecord(params?: ComAtprotoRepoGetRecord.QueryParams, opts?: ComAtprotoRepoGetRecord.CallOptions): Promise<ComAtprotoRepoGetRecord.Response>;
    importRepo(data?: ComAtprotoRepoImportRepo.InputSchema, opts?: ComAtprotoRepoImportRepo.CallOptions): Promise<ComAtprotoRepoImportRepo.Response>;
    listMissingBlobs(params?: ComAtprotoRepoListMissingBlobs.QueryParams, opts?: ComAtprotoRepoListMissingBlobs.CallOptions): Promise<ComAtprotoRepoListMissingBlobs.Response>;
    listRecords(params?: ComAtprotoRepoListRecords.QueryParams, opts?: ComAtprotoRepoListRecords.CallOptions): Promise<ComAtprotoRepoListRecords.Response>;
    putRecord(data?: ComAtprotoRepoPutRecord.InputSchema, opts?: ComAtprotoRepoPutRecord.CallOptions): Promise<ComAtprotoRepoPutRecord.Response>;
    uploadBlob(data?: ComAtprotoRepoUploadBlob.InputSchema, opts?: ComAtprotoRepoUploadBlob.CallOptions): Promise<ComAtprotoRepoUploadBlob.Response>;
}
export declare class ComAtprotoServerNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    activateAccount(data?: ComAtprotoServerActivateAccount.InputSchema, opts?: ComAtprotoServerActivateAccount.CallOptions): Promise<ComAtprotoServerActivateAccount.Response>;
    checkAccountStatus(params?: ComAtprotoServerCheckAccountStatus.QueryParams, opts?: ComAtprotoServerCheckAccountStatus.CallOptions): Promise<ComAtprotoServerCheckAccountStatus.Response>;
    confirmEmail(data?: ComAtprotoServerConfirmEmail.InputSchema, opts?: ComAtprotoServerConfirmEmail.CallOptions): Promise<ComAtprotoServerConfirmEmail.Response>;
    createAccount(data?: ComAtprotoServerCreateAccount.InputSchema, opts?: ComAtprotoServerCreateAccount.CallOptions): Promise<ComAtprotoServerCreateAccount.Response>;
    createAppPassword(data?: ComAtprotoServerCreateAppPassword.InputSchema, opts?: ComAtprotoServerCreateAppPassword.CallOptions): Promise<ComAtprotoServerCreateAppPassword.Response>;
    createInviteCode(data?: ComAtprotoServerCreateInviteCode.InputSchema, opts?: ComAtprotoServerCreateInviteCode.CallOptions): Promise<ComAtprotoServerCreateInviteCode.Response>;
    createInviteCodes(data?: ComAtprotoServerCreateInviteCodes.InputSchema, opts?: ComAtprotoServerCreateInviteCodes.CallOptions): Promise<ComAtprotoServerCreateInviteCodes.Response>;
    createSession(data?: ComAtprotoServerCreateSession.InputSchema, opts?: ComAtprotoServerCreateSession.CallOptions): Promise<ComAtprotoServerCreateSession.Response>;
    deactivateAccount(data?: ComAtprotoServerDeactivateAccount.InputSchema, opts?: ComAtprotoServerDeactivateAccount.CallOptions): Promise<ComAtprotoServerDeactivateAccount.Response>;
    deleteAccount(data?: ComAtprotoServerDeleteAccount.InputSchema, opts?: ComAtprotoServerDeleteAccount.CallOptions): Promise<ComAtprotoServerDeleteAccount.Response>;
    deleteSession(data?: ComAtprotoServerDeleteSession.InputSchema, opts?: ComAtprotoServerDeleteSession.CallOptions): Promise<ComAtprotoServerDeleteSession.Response>;
    describeServer(params?: ComAtprotoServerDescribeServer.QueryParams, opts?: ComAtprotoServerDescribeServer.CallOptions): Promise<ComAtprotoServerDescribeServer.Response>;
    getAccountInviteCodes(params?: ComAtprotoServerGetAccountInviteCodes.QueryParams, opts?: ComAtprotoServerGetAccountInviteCodes.CallOptions): Promise<ComAtprotoServerGetAccountInviteCodes.Response>;
    getServiceAuth(params?: ComAtprotoServerGetServiceAuth.QueryParams, opts?: ComAtprotoServerGetServiceAuth.CallOptions): Promise<ComAtprotoServerGetServiceAuth.Response>;
    getSession(params?: ComAtprotoServerGetSession.QueryParams, opts?: ComAtprotoServerGetSession.CallOptions): Promise<ComAtprotoServerGetSession.Response>;
    listAppPasswords(params?: ComAtprotoServerListAppPasswords.QueryParams, opts?: ComAtprotoServerListAppPasswords.CallOptions): Promise<ComAtprotoServerListAppPasswords.Response>;
    refreshSession(data?: ComAtprotoServerRefreshSession.InputSchema, opts?: ComAtprotoServerRefreshSession.CallOptions): Promise<ComAtprotoServerRefreshSession.Response>;
    requestAccountDelete(data?: ComAtprotoServerRequestAccountDelete.InputSchema, opts?: ComAtprotoServerRequestAccountDelete.CallOptions): Promise<ComAtprotoServerRequestAccountDelete.Response>;
    requestEmailConfirmation(data?: ComAtprotoServerRequestEmailConfirmation.InputSchema, opts?: ComAtprotoServerRequestEmailConfirmation.CallOptions): Promise<ComAtprotoServerRequestEmailConfirmation.Response>;
    requestEmailUpdate(data?: ComAtprotoServerRequestEmailUpdate.InputSchema, opts?: ComAtprotoServerRequestEmailUpdate.CallOptions): Promise<ComAtprotoServerRequestEmailUpdate.Response>;
    requestPasswordReset(data?: ComAtprotoServerRequestPasswordReset.InputSchema, opts?: ComAtprotoServerRequestPasswordReset.CallOptions): Promise<ComAtprotoServerRequestPasswordReset.Response>;
    reserveSigningKey(data?: ComAtprotoServerReserveSigningKey.InputSchema, opts?: ComAtprotoServerReserveSigningKey.CallOptions): Promise<ComAtprotoServerReserveSigningKey.Response>;
    resetPassword(data?: ComAtprotoServerResetPassword.InputSchema, opts?: ComAtprotoServerResetPassword.CallOptions): Promise<ComAtprotoServerResetPassword.Response>;
    revokeAppPassword(data?: ComAtprotoServerRevokeAppPassword.InputSchema, opts?: ComAtprotoServerRevokeAppPassword.CallOptions): Promise<ComAtprotoServerRevokeAppPassword.Response>;
    updateEmail(data?: ComAtprotoServerUpdateEmail.InputSchema, opts?: ComAtprotoServerUpdateEmail.CallOptions): Promise<ComAtprotoServerUpdateEmail.Response>;
}
export declare class ComAtprotoSyncNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    getBlob(params?: ComAtprotoSyncGetBlob.QueryParams, opts?: ComAtprotoSyncGetBlob.CallOptions): Promise<ComAtprotoSyncGetBlob.Response>;
    getBlocks(params?: ComAtprotoSyncGetBlocks.QueryParams, opts?: ComAtprotoSyncGetBlocks.CallOptions): Promise<ComAtprotoSyncGetBlocks.Response>;
    getCheckout(params?: ComAtprotoSyncGetCheckout.QueryParams, opts?: ComAtprotoSyncGetCheckout.CallOptions): Promise<ComAtprotoSyncGetCheckout.Response>;
    getHead(params?: ComAtprotoSyncGetHead.QueryParams, opts?: ComAtprotoSyncGetHead.CallOptions): Promise<ComAtprotoSyncGetHead.Response>;
    getLatestCommit(params?: ComAtprotoSyncGetLatestCommit.QueryParams, opts?: ComAtprotoSyncGetLatestCommit.CallOptions): Promise<ComAtprotoSyncGetLatestCommit.Response>;
    getRecord(params?: ComAtprotoSyncGetRecord.QueryParams, opts?: ComAtprotoSyncGetRecord.CallOptions): Promise<ComAtprotoSyncGetRecord.Response>;
    getRepo(params?: ComAtprotoSyncGetRepo.QueryParams, opts?: ComAtprotoSyncGetRepo.CallOptions): Promise<ComAtprotoSyncGetRepo.Response>;
    getRepoStatus(params?: ComAtprotoSyncGetRepoStatus.QueryParams, opts?: ComAtprotoSyncGetRepoStatus.CallOptions): Promise<ComAtprotoSyncGetRepoStatus.Response>;
    listBlobs(params?: ComAtprotoSyncListBlobs.QueryParams, opts?: ComAtprotoSyncListBlobs.CallOptions): Promise<ComAtprotoSyncListBlobs.Response>;
    listRepos(params?: ComAtprotoSyncListRepos.QueryParams, opts?: ComAtprotoSyncListRepos.CallOptions): Promise<ComAtprotoSyncListRepos.Response>;
    notifyOfUpdate(data?: ComAtprotoSyncNotifyOfUpdate.InputSchema, opts?: ComAtprotoSyncNotifyOfUpdate.CallOptions): Promise<ComAtprotoSyncNotifyOfUpdate.Response>;
    requestCrawl(data?: ComAtprotoSyncRequestCrawl.InputSchema, opts?: ComAtprotoSyncRequestCrawl.CallOptions): Promise<ComAtprotoSyncRequestCrawl.Response>;
}
export declare class ComAtprotoTempNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    addReservedHandle(data?: ComAtprotoTempAddReservedHandle.InputSchema, opts?: ComAtprotoTempAddReservedHandle.CallOptions): Promise<ComAtprotoTempAddReservedHandle.Response>;
    checkSignupQueue(params?: ComAtprotoTempCheckSignupQueue.QueryParams, opts?: ComAtprotoTempCheckSignupQueue.CallOptions): Promise<ComAtprotoTempCheckSignupQueue.Response>;
    fetchLabels(params?: ComAtprotoTempFetchLabels.QueryParams, opts?: ComAtprotoTempFetchLabels.CallOptions): Promise<ComAtprotoTempFetchLabels.Response>;
    requestPhoneVerification(data?: ComAtprotoTempRequestPhoneVerification.InputSchema, opts?: ComAtprotoTempRequestPhoneVerification.CallOptions): Promise<ComAtprotoTempRequestPhoneVerification.Response>;
}
export declare class AppNS {
    _client: XrpcClient;
    bsky: AppBskyNS;
    constructor(client: XrpcClient);
}
export declare class AppBskyNS {
    _client: XrpcClient;
    actor: AppBskyActorNS;
    embed: AppBskyEmbedNS;
    feed: AppBskyFeedNS;
    graph: AppBskyGraphNS;
    labeler: AppBskyLabelerNS;
    notification: AppBskyNotificationNS;
    richtext: AppBskyRichtextNS;
    unspecced: AppBskyUnspeccedNS;
    video: AppBskyVideoNS;
    constructor(client: XrpcClient);
}
export declare class AppBskyActorNS {
    _client: XrpcClient;
    profile: ProfileRecord;
    constructor(client: XrpcClient);
    getPreferences(params?: AppBskyActorGetPreferences.QueryParams, opts?: AppBskyActorGetPreferences.CallOptions): Promise<AppBskyActorGetPreferences.Response>;
    getProfile(params?: AppBskyActorGetProfile.QueryParams, opts?: AppBskyActorGetProfile.CallOptions): Promise<AppBskyActorGetProfile.Response>;
    getProfiles(params?: AppBskyActorGetProfiles.QueryParams, opts?: AppBskyActorGetProfiles.CallOptions): Promise<AppBskyActorGetProfiles.Response>;
    getSuggestions(params?: AppBskyActorGetSuggestions.QueryParams, opts?: AppBskyActorGetSuggestions.CallOptions): Promise<AppBskyActorGetSuggestions.Response>;
    putPreferences(data?: AppBskyActorPutPreferences.InputSchema, opts?: AppBskyActorPutPreferences.CallOptions): Promise<AppBskyActorPutPreferences.Response>;
    searchActors(params?: AppBskyActorSearchActors.QueryParams, opts?: AppBskyActorSearchActors.CallOptions): Promise<AppBskyActorSearchActors.Response>;
    searchActorsTypeahead(params?: AppBskyActorSearchActorsTypeahead.QueryParams, opts?: AppBskyActorSearchActorsTypeahead.CallOptions): Promise<AppBskyActorSearchActorsTypeahead.Response>;
}
export declare class ProfileRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyActorProfile.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyActorProfile.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyActorProfile.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class AppBskyEmbedNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
}
export declare class AppBskyFeedNS {
    _client: XrpcClient;
    generator: GeneratorRecord;
    like: LikeRecord;
    post: PostRecord;
    postgate: PostgateRecord;
    repost: RepostRecord;
    threadgate: ThreadgateRecord;
    constructor(client: XrpcClient);
    describeFeedGenerator(params?: AppBskyFeedDescribeFeedGenerator.QueryParams, opts?: AppBskyFeedDescribeFeedGenerator.CallOptions): Promise<AppBskyFeedDescribeFeedGenerator.Response>;
    getActorFeeds(params?: AppBskyFeedGetActorFeeds.QueryParams, opts?: AppBskyFeedGetActorFeeds.CallOptions): Promise<AppBskyFeedGetActorFeeds.Response>;
    getActorLikes(params?: AppBskyFeedGetActorLikes.QueryParams, opts?: AppBskyFeedGetActorLikes.CallOptions): Promise<AppBskyFeedGetActorLikes.Response>;
    getAuthorFeed(params?: AppBskyFeedGetAuthorFeed.QueryParams, opts?: AppBskyFeedGetAuthorFeed.CallOptions): Promise<AppBskyFeedGetAuthorFeed.Response>;
    getFeed(params?: AppBskyFeedGetFeed.QueryParams, opts?: AppBskyFeedGetFeed.CallOptions): Promise<AppBskyFeedGetFeed.Response>;
    getFeedGenerator(params?: AppBskyFeedGetFeedGenerator.QueryParams, opts?: AppBskyFeedGetFeedGenerator.CallOptions): Promise<AppBskyFeedGetFeedGenerator.Response>;
    getFeedGenerators(params?: AppBskyFeedGetFeedGenerators.QueryParams, opts?: AppBskyFeedGetFeedGenerators.CallOptions): Promise<AppBskyFeedGetFeedGenerators.Response>;
    getFeedSkeleton(params?: AppBskyFeedGetFeedSkeleton.QueryParams, opts?: AppBskyFeedGetFeedSkeleton.CallOptions): Promise<AppBskyFeedGetFeedSkeleton.Response>;
    getLikes(params?: AppBskyFeedGetLikes.QueryParams, opts?: AppBskyFeedGetLikes.CallOptions): Promise<AppBskyFeedGetLikes.Response>;
    getListFeed(params?: AppBskyFeedGetListFeed.QueryParams, opts?: AppBskyFeedGetListFeed.CallOptions): Promise<AppBskyFeedGetListFeed.Response>;
    getPostThread(params?: AppBskyFeedGetPostThread.QueryParams, opts?: AppBskyFeedGetPostThread.CallOptions): Promise<AppBskyFeedGetPostThread.Response>;
    getPosts(params?: AppBskyFeedGetPosts.QueryParams, opts?: AppBskyFeedGetPosts.CallOptions): Promise<AppBskyFeedGetPosts.Response>;
    getQuotes(params?: AppBskyFeedGetQuotes.QueryParams, opts?: AppBskyFeedGetQuotes.CallOptions): Promise<AppBskyFeedGetQuotes.Response>;
    getRepostedBy(params?: AppBskyFeedGetRepostedBy.QueryParams, opts?: AppBskyFeedGetRepostedBy.CallOptions): Promise<AppBskyFeedGetRepostedBy.Response>;
    getSuggestedFeeds(params?: AppBskyFeedGetSuggestedFeeds.QueryParams, opts?: AppBskyFeedGetSuggestedFeeds.CallOptions): Promise<AppBskyFeedGetSuggestedFeeds.Response>;
    getTimeline(params?: AppBskyFeedGetTimeline.QueryParams, opts?: AppBskyFeedGetTimeline.CallOptions): Promise<AppBskyFeedGetTimeline.Response>;
    searchPosts(params?: AppBskyFeedSearchPosts.QueryParams, opts?: AppBskyFeedSearchPosts.CallOptions): Promise<AppBskyFeedSearchPosts.Response>;
    sendInteractions(data?: AppBskyFeedSendInteractions.InputSchema, opts?: AppBskyFeedSendInteractions.CallOptions): Promise<AppBskyFeedSendInteractions.Response>;
}
export declare class GeneratorRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyFeedGenerator.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyFeedGenerator.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyFeedGenerator.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class LikeRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyFeedLike.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyFeedLike.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyFeedLike.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class PostRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyFeedPost.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyFeedPost.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyFeedPost.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class PostgateRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyFeedPostgate.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyFeedPostgate.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyFeedPostgate.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class RepostRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyFeedRepost.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyFeedRepost.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyFeedRepost.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class ThreadgateRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyFeedThreadgate.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyFeedThreadgate.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyFeedThreadgate.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class AppBskyGraphNS {
    _client: XrpcClient;
    block: BlockRecord;
    follow: FollowRecord;
    list: ListRecord;
    listblock: ListblockRecord;
    listitem: ListitemRecord;
    starterpack: StarterpackRecord;
    constructor(client: XrpcClient);
    getActorStarterPacks(params?: AppBskyGraphGetActorStarterPacks.QueryParams, opts?: AppBskyGraphGetActorStarterPacks.CallOptions): Promise<AppBskyGraphGetActorStarterPacks.Response>;
    getBlocks(params?: AppBskyGraphGetBlocks.QueryParams, opts?: AppBskyGraphGetBlocks.CallOptions): Promise<AppBskyGraphGetBlocks.Response>;
    getFollowers(params?: AppBskyGraphGetFollowers.QueryParams, opts?: AppBskyGraphGetFollowers.CallOptions): Promise<AppBskyGraphGetFollowers.Response>;
    getFollows(params?: AppBskyGraphGetFollows.QueryParams, opts?: AppBskyGraphGetFollows.CallOptions): Promise<AppBskyGraphGetFollows.Response>;
    getKnownFollowers(params?: AppBskyGraphGetKnownFollowers.QueryParams, opts?: AppBskyGraphGetKnownFollowers.CallOptions): Promise<AppBskyGraphGetKnownFollowers.Response>;
    getList(params?: AppBskyGraphGetList.QueryParams, opts?: AppBskyGraphGetList.CallOptions): Promise<AppBskyGraphGetList.Response>;
    getListBlocks(params?: AppBskyGraphGetListBlocks.QueryParams, opts?: AppBskyGraphGetListBlocks.CallOptions): Promise<AppBskyGraphGetListBlocks.Response>;
    getListMutes(params?: AppBskyGraphGetListMutes.QueryParams, opts?: AppBskyGraphGetListMutes.CallOptions): Promise<AppBskyGraphGetListMutes.Response>;
    getLists(params?: AppBskyGraphGetLists.QueryParams, opts?: AppBskyGraphGetLists.CallOptions): Promise<AppBskyGraphGetLists.Response>;
    getMutes(params?: AppBskyGraphGetMutes.QueryParams, opts?: AppBskyGraphGetMutes.CallOptions): Promise<AppBskyGraphGetMutes.Response>;
    getRelationships(params?: AppBskyGraphGetRelationships.QueryParams, opts?: AppBskyGraphGetRelationships.CallOptions): Promise<AppBskyGraphGetRelationships.Response>;
    getStarterPack(params?: AppBskyGraphGetStarterPack.QueryParams, opts?: AppBskyGraphGetStarterPack.CallOptions): Promise<AppBskyGraphGetStarterPack.Response>;
    getStarterPacks(params?: AppBskyGraphGetStarterPacks.QueryParams, opts?: AppBskyGraphGetStarterPacks.CallOptions): Promise<AppBskyGraphGetStarterPacks.Response>;
    getSuggestedFollowsByActor(params?: AppBskyGraphGetSuggestedFollowsByActor.QueryParams, opts?: AppBskyGraphGetSuggestedFollowsByActor.CallOptions): Promise<AppBskyGraphGetSuggestedFollowsByActor.Response>;
    muteActor(data?: AppBskyGraphMuteActor.InputSchema, opts?: AppBskyGraphMuteActor.CallOptions): Promise<AppBskyGraphMuteActor.Response>;
    muteActorList(data?: AppBskyGraphMuteActorList.InputSchema, opts?: AppBskyGraphMuteActorList.CallOptions): Promise<AppBskyGraphMuteActorList.Response>;
    muteThread(data?: AppBskyGraphMuteThread.InputSchema, opts?: AppBskyGraphMuteThread.CallOptions): Promise<AppBskyGraphMuteThread.Response>;
    searchStarterPacks(params?: AppBskyGraphSearchStarterPacks.QueryParams, opts?: AppBskyGraphSearchStarterPacks.CallOptions): Promise<AppBskyGraphSearchStarterPacks.Response>;
    unmuteActor(data?: AppBskyGraphUnmuteActor.InputSchema, opts?: AppBskyGraphUnmuteActor.CallOptions): Promise<AppBskyGraphUnmuteActor.Response>;
    unmuteActorList(data?: AppBskyGraphUnmuteActorList.InputSchema, opts?: AppBskyGraphUnmuteActorList.CallOptions): Promise<AppBskyGraphUnmuteActorList.Response>;
    unmuteThread(data?: AppBskyGraphUnmuteThread.InputSchema, opts?: AppBskyGraphUnmuteThread.CallOptions): Promise<AppBskyGraphUnmuteThread.Response>;
}
export declare class BlockRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyGraphBlock.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphBlock.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyGraphBlock.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class FollowRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyGraphFollow.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphFollow.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyGraphFollow.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class ListRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyGraphList.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphList.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyGraphList.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class ListblockRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyGraphListblock.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphListblock.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyGraphListblock.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class ListitemRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyGraphListitem.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphListitem.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyGraphListitem.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class StarterpackRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyGraphStarterpack.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphStarterpack.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyGraphStarterpack.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class AppBskyLabelerNS {
    _client: XrpcClient;
    service: ServiceRecord;
    constructor(client: XrpcClient);
    getServices(params?: AppBskyLabelerGetServices.QueryParams, opts?: AppBskyLabelerGetServices.CallOptions): Promise<AppBskyLabelerGetServices.Response>;
}
export declare class ServiceRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: AppBskyLabelerService.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: AppBskyLabelerService.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: AppBskyLabelerService.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class AppBskyNotificationNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    getUnreadCount(params?: AppBskyNotificationGetUnreadCount.QueryParams, opts?: AppBskyNotificationGetUnreadCount.CallOptions): Promise<AppBskyNotificationGetUnreadCount.Response>;
    listNotifications(params?: AppBskyNotificationListNotifications.QueryParams, opts?: AppBskyNotificationListNotifications.CallOptions): Promise<AppBskyNotificationListNotifications.Response>;
    putPreferences(data?: AppBskyNotificationPutPreferences.InputSchema, opts?: AppBskyNotificationPutPreferences.CallOptions): Promise<AppBskyNotificationPutPreferences.Response>;
    registerPush(data?: AppBskyNotificationRegisterPush.InputSchema, opts?: AppBskyNotificationRegisterPush.CallOptions): Promise<AppBskyNotificationRegisterPush.Response>;
    updateSeen(data?: AppBskyNotificationUpdateSeen.InputSchema, opts?: AppBskyNotificationUpdateSeen.CallOptions): Promise<AppBskyNotificationUpdateSeen.Response>;
}
export declare class AppBskyRichtextNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
}
export declare class AppBskyUnspeccedNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    getConfig(params?: AppBskyUnspeccedGetConfig.QueryParams, opts?: AppBskyUnspeccedGetConfig.CallOptions): Promise<AppBskyUnspeccedGetConfig.Response>;
    getPopularFeedGenerators(params?: AppBskyUnspeccedGetPopularFeedGenerators.QueryParams, opts?: AppBskyUnspeccedGetPopularFeedGenerators.CallOptions): Promise<AppBskyUnspeccedGetPopularFeedGenerators.Response>;
    getSuggestionsSkeleton(params?: AppBskyUnspeccedGetSuggestionsSkeleton.QueryParams, opts?: AppBskyUnspeccedGetSuggestionsSkeleton.CallOptions): Promise<AppBskyUnspeccedGetSuggestionsSkeleton.Response>;
    getTaggedSuggestions(params?: AppBskyUnspeccedGetTaggedSuggestions.QueryParams, opts?: AppBskyUnspeccedGetTaggedSuggestions.CallOptions): Promise<AppBskyUnspeccedGetTaggedSuggestions.Response>;
    searchActorsSkeleton(params?: AppBskyUnspeccedSearchActorsSkeleton.QueryParams, opts?: AppBskyUnspeccedSearchActorsSkeleton.CallOptions): Promise<AppBskyUnspeccedSearchActorsSkeleton.Response>;
    searchPostsSkeleton(params?: AppBskyUnspeccedSearchPostsSkeleton.QueryParams, opts?: AppBskyUnspeccedSearchPostsSkeleton.CallOptions): Promise<AppBskyUnspeccedSearchPostsSkeleton.Response>;
    searchStarterPacksSkeleton(params?: AppBskyUnspeccedSearchStarterPacksSkeleton.QueryParams, opts?: AppBskyUnspeccedSearchStarterPacksSkeleton.CallOptions): Promise<AppBskyUnspeccedSearchStarterPacksSkeleton.Response>;
}
export declare class AppBskyVideoNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    getJobStatus(params?: AppBskyVideoGetJobStatus.QueryParams, opts?: AppBskyVideoGetJobStatus.CallOptions): Promise<AppBskyVideoGetJobStatus.Response>;
    getUploadLimits(params?: AppBskyVideoGetUploadLimits.QueryParams, opts?: AppBskyVideoGetUploadLimits.CallOptions): Promise<AppBskyVideoGetUploadLimits.Response>;
    uploadVideo(data?: AppBskyVideoUploadVideo.InputSchema, opts?: AppBskyVideoUploadVideo.CallOptions): Promise<AppBskyVideoUploadVideo.Response>;
}
export declare class ChatNS {
    _client: XrpcClient;
    bsky: ChatBskyNS;
    constructor(client: XrpcClient);
}
export declare class ChatBskyNS {
    _client: XrpcClient;
    actor: ChatBskyActorNS;
    convo: ChatBskyConvoNS;
    moderation: ChatBskyModerationNS;
    constructor(client: XrpcClient);
}
export declare class ChatBskyActorNS {
    _client: XrpcClient;
    declaration: DeclarationRecord;
    constructor(client: XrpcClient);
    deleteAccount(data?: ChatBskyActorDeleteAccount.InputSchema, opts?: ChatBskyActorDeleteAccount.CallOptions): Promise<ChatBskyActorDeleteAccount.Response>;
    exportAccountData(params?: ChatBskyActorExportAccountData.QueryParams, opts?: ChatBskyActorExportAccountData.CallOptions): Promise<ChatBskyActorExportAccountData.Response>;
}
export declare class DeclarationRecord {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    list(params: Omit<ComAtprotoRepoListRecords.QueryParams, 'collection'>): Promise<{
        cursor?: string;
        records: {
            uri: string;
            value: ChatBskyActorDeclaration.Record;
        }[];
    }>;
    get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, 'collection'>): Promise<{
        uri: string;
        cid: string;
        value: ChatBskyActorDeclaration.Record;
    }>;
    create(params: Omit<ComAtprotoRepoCreateRecord.InputSchema, 'collection' | 'record'>, record: ChatBskyActorDeclaration.Record, headers?: Record<string, string>): Promise<{
        uri: string;
        cid: string;
    }>;
    delete(params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, 'collection'>, headers?: Record<string, string>): Promise<void>;
}
export declare class ChatBskyConvoNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    deleteMessageForSelf(data?: ChatBskyConvoDeleteMessageForSelf.InputSchema, opts?: ChatBskyConvoDeleteMessageForSelf.CallOptions): Promise<ChatBskyConvoDeleteMessageForSelf.Response>;
    getConvo(params?: ChatBskyConvoGetConvo.QueryParams, opts?: ChatBskyConvoGetConvo.CallOptions): Promise<ChatBskyConvoGetConvo.Response>;
    getConvoForMembers(params?: ChatBskyConvoGetConvoForMembers.QueryParams, opts?: ChatBskyConvoGetConvoForMembers.CallOptions): Promise<ChatBskyConvoGetConvoForMembers.Response>;
    getLog(params?: ChatBskyConvoGetLog.QueryParams, opts?: ChatBskyConvoGetLog.CallOptions): Promise<ChatBskyConvoGetLog.Response>;
    getMessages(params?: ChatBskyConvoGetMessages.QueryParams, opts?: ChatBskyConvoGetMessages.CallOptions): Promise<ChatBskyConvoGetMessages.Response>;
    leaveConvo(data?: ChatBskyConvoLeaveConvo.InputSchema, opts?: ChatBskyConvoLeaveConvo.CallOptions): Promise<ChatBskyConvoLeaveConvo.Response>;
    listConvos(params?: ChatBskyConvoListConvos.QueryParams, opts?: ChatBskyConvoListConvos.CallOptions): Promise<ChatBskyConvoListConvos.Response>;
    muteConvo(data?: ChatBskyConvoMuteConvo.InputSchema, opts?: ChatBskyConvoMuteConvo.CallOptions): Promise<ChatBskyConvoMuteConvo.Response>;
    sendMessage(data?: ChatBskyConvoSendMessage.InputSchema, opts?: ChatBskyConvoSendMessage.CallOptions): Promise<ChatBskyConvoSendMessage.Response>;
    sendMessageBatch(data?: ChatBskyConvoSendMessageBatch.InputSchema, opts?: ChatBskyConvoSendMessageBatch.CallOptions): Promise<ChatBskyConvoSendMessageBatch.Response>;
    unmuteConvo(data?: ChatBskyConvoUnmuteConvo.InputSchema, opts?: ChatBskyConvoUnmuteConvo.CallOptions): Promise<ChatBskyConvoUnmuteConvo.Response>;
    updateRead(data?: ChatBskyConvoUpdateRead.InputSchema, opts?: ChatBskyConvoUpdateRead.CallOptions): Promise<ChatBskyConvoUpdateRead.Response>;
}
export declare class ChatBskyModerationNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    getActorMetadata(params?: ChatBskyModerationGetActorMetadata.QueryParams, opts?: ChatBskyModerationGetActorMetadata.CallOptions): Promise<ChatBskyModerationGetActorMetadata.Response>;
    getMessageContext(params?: ChatBskyModerationGetMessageContext.QueryParams, opts?: ChatBskyModerationGetMessageContext.CallOptions): Promise<ChatBskyModerationGetMessageContext.Response>;
    updateActorAccess(data?: ChatBskyModerationUpdateActorAccess.InputSchema, opts?: ChatBskyModerationUpdateActorAccess.CallOptions): Promise<ChatBskyModerationUpdateActorAccess.Response>;
}
export declare class ToolsNS {
    _client: XrpcClient;
    ozone: ToolsOzoneNS;
    constructor(client: XrpcClient);
}
export declare class ToolsOzoneNS {
    _client: XrpcClient;
    communication: ToolsOzoneCommunicationNS;
    moderation: ToolsOzoneModerationNS;
    server: ToolsOzoneServerNS;
    set: ToolsOzoneSetNS;
    setting: ToolsOzoneSettingNS;
    signature: ToolsOzoneSignatureNS;
    team: ToolsOzoneTeamNS;
    constructor(client: XrpcClient);
}
export declare class ToolsOzoneCommunicationNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    createTemplate(data?: ToolsOzoneCommunicationCreateTemplate.InputSchema, opts?: ToolsOzoneCommunicationCreateTemplate.CallOptions): Promise<ToolsOzoneCommunicationCreateTemplate.Response>;
    deleteTemplate(data?: ToolsOzoneCommunicationDeleteTemplate.InputSchema, opts?: ToolsOzoneCommunicationDeleteTemplate.CallOptions): Promise<ToolsOzoneCommunicationDeleteTemplate.Response>;
    listTemplates(params?: ToolsOzoneCommunicationListTemplates.QueryParams, opts?: ToolsOzoneCommunicationListTemplates.CallOptions): Promise<ToolsOzoneCommunicationListTemplates.Response>;
    updateTemplate(data?: ToolsOzoneCommunicationUpdateTemplate.InputSchema, opts?: ToolsOzoneCommunicationUpdateTemplate.CallOptions): Promise<ToolsOzoneCommunicationUpdateTemplate.Response>;
}
export declare class ToolsOzoneModerationNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    emitEvent(data?: ToolsOzoneModerationEmitEvent.InputSchema, opts?: ToolsOzoneModerationEmitEvent.CallOptions): Promise<ToolsOzoneModerationEmitEvent.Response>;
    getEvent(params?: ToolsOzoneModerationGetEvent.QueryParams, opts?: ToolsOzoneModerationGetEvent.CallOptions): Promise<ToolsOzoneModerationGetEvent.Response>;
    getRecord(params?: ToolsOzoneModerationGetRecord.QueryParams, opts?: ToolsOzoneModerationGetRecord.CallOptions): Promise<ToolsOzoneModerationGetRecord.Response>;
    getRecords(params?: ToolsOzoneModerationGetRecords.QueryParams, opts?: ToolsOzoneModerationGetRecords.CallOptions): Promise<ToolsOzoneModerationGetRecords.Response>;
    getRepo(params?: ToolsOzoneModerationGetRepo.QueryParams, opts?: ToolsOzoneModerationGetRepo.CallOptions): Promise<ToolsOzoneModerationGetRepo.Response>;
    getRepos(params?: ToolsOzoneModerationGetRepos.QueryParams, opts?: ToolsOzoneModerationGetRepos.CallOptions): Promise<ToolsOzoneModerationGetRepos.Response>;
    queryEvents(params?: ToolsOzoneModerationQueryEvents.QueryParams, opts?: ToolsOzoneModerationQueryEvents.CallOptions): Promise<ToolsOzoneModerationQueryEvents.Response>;
    queryStatuses(params?: ToolsOzoneModerationQueryStatuses.QueryParams, opts?: ToolsOzoneModerationQueryStatuses.CallOptions): Promise<ToolsOzoneModerationQueryStatuses.Response>;
    searchRepos(params?: ToolsOzoneModerationSearchRepos.QueryParams, opts?: ToolsOzoneModerationSearchRepos.CallOptions): Promise<ToolsOzoneModerationSearchRepos.Response>;
}
export declare class ToolsOzoneServerNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    getConfig(params?: ToolsOzoneServerGetConfig.QueryParams, opts?: ToolsOzoneServerGetConfig.CallOptions): Promise<ToolsOzoneServerGetConfig.Response>;
}
export declare class ToolsOzoneSetNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    addValues(data?: ToolsOzoneSetAddValues.InputSchema, opts?: ToolsOzoneSetAddValues.CallOptions): Promise<ToolsOzoneSetAddValues.Response>;
    deleteSet(data?: ToolsOzoneSetDeleteSet.InputSchema, opts?: ToolsOzoneSetDeleteSet.CallOptions): Promise<ToolsOzoneSetDeleteSet.Response>;
    deleteValues(data?: ToolsOzoneSetDeleteValues.InputSchema, opts?: ToolsOzoneSetDeleteValues.CallOptions): Promise<ToolsOzoneSetDeleteValues.Response>;
    getValues(params?: ToolsOzoneSetGetValues.QueryParams, opts?: ToolsOzoneSetGetValues.CallOptions): Promise<ToolsOzoneSetGetValues.Response>;
    querySets(params?: ToolsOzoneSetQuerySets.QueryParams, opts?: ToolsOzoneSetQuerySets.CallOptions): Promise<ToolsOzoneSetQuerySets.Response>;
    upsertSet(data?: ToolsOzoneSetUpsertSet.InputSchema, opts?: ToolsOzoneSetUpsertSet.CallOptions): Promise<ToolsOzoneSetUpsertSet.Response>;
}
export declare class ToolsOzoneSettingNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    listOptions(params?: ToolsOzoneSettingListOptions.QueryParams, opts?: ToolsOzoneSettingListOptions.CallOptions): Promise<ToolsOzoneSettingListOptions.Response>;
    removeOptions(data?: ToolsOzoneSettingRemoveOptions.InputSchema, opts?: ToolsOzoneSettingRemoveOptions.CallOptions): Promise<ToolsOzoneSettingRemoveOptions.Response>;
    upsertOption(data?: ToolsOzoneSettingUpsertOption.InputSchema, opts?: ToolsOzoneSettingUpsertOption.CallOptions): Promise<ToolsOzoneSettingUpsertOption.Response>;
}
export declare class ToolsOzoneSignatureNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    findCorrelation(params?: ToolsOzoneSignatureFindCorrelation.QueryParams, opts?: ToolsOzoneSignatureFindCorrelation.CallOptions): Promise<ToolsOzoneSignatureFindCorrelation.Response>;
    findRelatedAccounts(params?: ToolsOzoneSignatureFindRelatedAccounts.QueryParams, opts?: ToolsOzoneSignatureFindRelatedAccounts.CallOptions): Promise<ToolsOzoneSignatureFindRelatedAccounts.Response>;
    searchAccounts(params?: ToolsOzoneSignatureSearchAccounts.QueryParams, opts?: ToolsOzoneSignatureSearchAccounts.CallOptions): Promise<ToolsOzoneSignatureSearchAccounts.Response>;
}
export declare class ToolsOzoneTeamNS {
    _client: XrpcClient;
    constructor(client: XrpcClient);
    addMember(data?: ToolsOzoneTeamAddMember.InputSchema, opts?: ToolsOzoneTeamAddMember.CallOptions): Promise<ToolsOzoneTeamAddMember.Response>;
    deleteMember(data?: ToolsOzoneTeamDeleteMember.InputSchema, opts?: ToolsOzoneTeamDeleteMember.CallOptions): Promise<ToolsOzoneTeamDeleteMember.Response>;
    listMembers(params?: ToolsOzoneTeamListMembers.QueryParams, opts?: ToolsOzoneTeamListMembers.CallOptions): Promise<ToolsOzoneTeamListMembers.Response>;
    updateMember(data?: ToolsOzoneTeamUpdateMember.InputSchema, opts?: ToolsOzoneTeamUpdateMember.CallOptions): Promise<ToolsOzoneTeamUpdateMember.Response>;
}
//# sourceMappingURL=index.d.ts.map