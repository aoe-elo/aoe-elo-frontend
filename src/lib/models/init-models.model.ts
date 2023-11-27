import type { Model, Sequelize } from "sequelize-typescript";
import { match } from "ts-pattern";

import { Achievable as _Achievable } from "./achievable.model";
import type {
	IAchievableAttributes,
	AchievableCreationAttributes,
} from "./achievable.model";
import { Achievement as _Achievement } from "./achievement.model";
import type {
	IAchievementAttributes,
	AchievementCreationAttributes,
} from "./achievement.model";
import { Actionlog as _Actionlog } from "./actionlog.model";
import type {
	IActionlogAttributes,
	ActionlogCreationAttributes,
} from "./actionlog.model";
import { Action as _Action } from "./action.model";
import type {
	IActionAttributes,
	ActionCreationAttributes,
} from "./action.model";
import { ArdPlayerArdTeam as _ArdPlayerArdTeam } from "./ard_player_ard_team.model";
import type {
	IArdPlayerArdTeamAttributes,
	ArdPlayerArdTeamCreationAttributes,
} from "./ard_player_ard_team.model";
import { ArdPlayer as _ArdPlayer } from "./ard_player.model";
import type {
	IArdPlayerAttributes,
	ArdPlayerCreationAttributes,
} from "./ard_player.model";
import { ArdTeam as _ArdTeam } from "./ard_team.model";
import type {
	IArdTeamAttributes,
	ArdTeamCreationAttributes,
} from "./ard_team.model";
import { AtpCategory as _AtpCategory } from "./atp_category.model";
import type {
	IAtpCategoryAttributes,
	AtpCategoryCreationAttributes,
} from "./atp_category.model";
import { Cache as _Cache } from "./cache.model";
import type { ICacheAttributes, CacheCreationAttributes } from "./cache.model";
import { CacheLock as _CacheLock } from "./cache_lock.model";
import type {
	ICacheLockAttributes,
	CacheLockCreationAttributes,
} from "./cache_lock.model";
import { CacheMostVisited as _CacheMostVisited } from "./cache_most_visited.model";
import type {
	ICacheMostVisitedAttributes,
	CacheMostVisitedCreationAttributes,
} from "./cache_most_visited.model";
import { Country as _Country } from "./country.model";
import type {
	ICountryAttributes,
	CountryCreationAttributes,
} from "./country.model";
import { DiscordUser as _DiscordUser } from "./discord_user.model";
import type {
	IDiscordUserAttributes,
	DiscordUserCreationAttributes,
} from "./discord_user.model";
import { Elo1V1Cache as _Elo1V1Cache } from "./elo_1v1_cache.model";
import type {
	IElo1V1CacheAttributes,
	Elo1V1CacheCreationAttributes,
} from "./elo_1v1_cache.model";
import { ExternDeCache as _ExternDeCache } from "./extern_de_cache.model";
import type {
	IExternDeCacheAttributes,
	ExternDeCacheCreationAttributes,
} from "./extern_de_cache.model";
import { ExternVooblyCache as _ExternVooblyCache } from "./extern_voobly_cache.model";
import type {
	IExternVooblyCacheAttributes,
	ExternVooblyCacheCreationAttributes,
} from "./extern_voobly_cache.model";
import { ExternVooblyPlayerCache as _ExternVooblyPlayerCache } from "./extern_voobly_player_cache.model";
import type {
	IExternVooblyPlayerCacheAttributes,
	ExternVooblyPlayerCacheCreationAttributes,
} from "./extern_voobly_player_cache.model";
import { FailedJob as _FailedJob } from "./failed_job.model";
import type {
	IFailedJobAttributes,
	FailedJobCreationAttributes,
} from "./failed_job.model";
import { GithubUser as _GithubUser } from "./github_user.model";
import type {
	IGithubUserAttributes,
	GithubUserCreationAttributes,
} from "./github_user.model";
import { Job as _Job } from "./job.model";
import type { IJobAttributes, JobCreationAttributes } from "./job.model";
import { LocationLocationStyle as _LocationLocationStyle } from "./location_location_style.model";
import type {
	ILocationLocationStyleAttributes,
	LocationLocationStyleCreationAttributes,
} from "./location_location_style.model";
import { LocationSetInfo as _LocationSetInfo } from "./location_set_info.model";
import type {
	ILocationSetInfoAttributes,
	LocationSetInfoCreationAttributes,
} from "./location_set_info.model";
import { LocationStyle as _LocationStyle } from "./location_style.model";
import type {
	ILocationStyleAttributes,
	LocationStyleCreationAttributes,
} from "./location_style.model";
import { Location as _Location } from "./location.model";
import type {
	ILocationAttributes,
	LocationCreationAttributes,
} from "./location.model";
import { MetaCache as _MetaCache } from "./meta_cache.model";
import type {
	IMetaCacheAttributes,
	MetaCacheCreationAttributes,
} from "./meta_cache.model";
import { Metadatum as _Metadatum } from "./metadatum.model";
import type {
	IMetadatumAttributes,
	MetadatumCreationAttributes,
} from "./metadatum.model";
import { Migrationlog as _Migrationlog } from "./migrationlog.model";
import type {
	IMigrationlogAttributes,
	MigrationlogCreationAttributes,
} from "./migrationlog.model";
import { ModelHasPermission as _ModelHasPermission } from "./model_has_permission.model";
import type {
	IModelHasPermissionAttributes,
	ModelHasPermissionCreationAttributes,
} from "./model_has_permission.model";
import { ModelHasRole as _ModelHasRole } from "./model_has_role.model";
import type {
	IModelHasRoleAttributes,
	ModelHasRoleCreationAttributes,
} from "./model_has_role.model";
import { News as _News } from "./news.model";
import type { INewsAttributes, NewsCreationAttributes } from "./news.model";
import { PasswordResetToken as _PasswordResetToken } from "./password_reset_token.model";
import type {
	IPasswordResetTokenAttributes,
	PasswordResetTokenCreationAttributes,
} from "./password_reset_token.model";
import { Permission as _Permission } from "./permission.model";
import type {
	IPermissionAttributes,
	PermissionCreationAttributes,
} from "./permission.model";
import { PersonalAccessToken as _PersonalAccessToken } from "./personal_access_token.model";
import type {
	IPersonalAccessTokenAttributes,
	PersonalAccessTokenCreationAttributes,
} from "./personal_access_token.model";
import { PlayerTeam as _PlayerTeam } from "./player_team.model";
import type {
	IPlayerTeamAttributes,
	PlayerTeamCreationAttributes,
} from "./player_team.model";
import { Player as _Player } from "./player.model";
import type {
	IPlayerAttributes,
	PlayerCreationAttributes,
} from "./player.model";
import { RatingCheckpoint as _RatingCheckpoint } from "./rating_checkpoint.model";
import type {
	IRatingCheckpointAttributes,
	RatingCheckpointCreationAttributes,
} from "./rating_checkpoint.model";
import { RatingDelta as _RatingDelta } from "./rating_delta.model";
import type {
	IRatingDeltaAttributes,
	RatingDeltaCreationAttributes,
} from "./rating_delta.model";
import { Review as _Review } from "./review.model";
import type {
	IReviewAttributes,
	ReviewCreationAttributes,
} from "./review.model";
import { RoleHasPermission as _RoleHasPermission } from "./role_has_permission.model";
import type {
	IRoleHasPermissionAttributes,
	RoleHasPermissionCreationAttributes,
} from "./role_has_permission.model";
import { Role as _Role } from "./role.model";
import type { IRoleAttributes, RoleCreationAttributes } from "./role.model";
import { Session as _Session } from "./session.model";
import type {
	ISessionAttributes,
	SessionCreationAttributes,
} from "./session.model";
import { SetInfo as _SetInfo } from "./set_info.model";
import type {
	ISetInfoAttributes,
	SetInfoCreationAttributes,
} from "./set_info.model";
import { Set as _Set } from "./set.model";
import type { ISetAttributes, SetCreationAttributes } from "./set.model";
import { StageTournamentTemplate as _StageTournamentTemplate } from "./stage_tournament_template.model";
import type {
	IStageTournamentTemplateAttributes,
	StageTournamentTemplateCreationAttributes,
} from "./stage_tournament_template.model";
import { Stageable as _Stageable } from "./stageable.model";
import type {
	IStageableAttributes,
	StageableCreationAttributes,
} from "./stageable.model";
import { Stage as _Stage } from "./stage.model";
import type { IStageAttributes, StageCreationAttributes } from "./stage.model";
import { SteamUser as _SteamUser } from "./steam_user.model";
import type {
	ISteamUserAttributes,
	SteamUserCreationAttributes,
} from "./steam_user.model";
import { Team as _Team } from "./team.model";
import type { ITeamAttributes, TeamCreationAttributes } from "./team.model";
import { Telemetry as _Telemetry } from "./telemetry.model";
import type {
	ITelemetryAttributes,
	TelemetryCreationAttributes,
} from "./telemetry.model";
import { TournamentResult as _TournamentResult } from "./tournament_result.model";
import type {
	ITournamentResultAttributes,
	TournamentResultCreationAttributes,
} from "./tournament_result.model";
import { Tournament as _Tournament } from "./tournament.model";
import type {
	ITournamentAttributes,
	TournamentCreationAttributes,
} from "./tournament.model";
import { TwitchUser as _TwitchUser } from "./twitch_user.model";
import type {
	ITwitchUserAttributes,
	TwitchUserCreationAttributes,
} from "./twitch_user.model";
import { User as _User } from "./user.model";
import type { IUserAttributes, UserCreationAttributes } from "./user.model";

export {
	_Achievable as Achievable,
	_Achievement as Achievement,
	_Actionlog as Actionlog,
	_Action as Action,
	_ArdPlayerArdTeam as ArdPlayerArdTeam,
	_ArdPlayer as ArdPlayer,
	_ArdTeam as ArdTeam,
	_AtpCategory as AtpCategory,
	_Cache as Cache,
	_CacheLock as CacheLock,
	_CacheMostVisited as CacheMostVisited,
	_Country as Country,
	_DiscordUser as DiscordUser,
	_Elo1V1Cache as Elo1V1Cache,
	_ExternDeCache as ExternDeCache,
	_ExternVooblyCache as ExternVooblyCache,
	_ExternVooblyPlayerCache as ExternVooblyPlayerCache,
	_FailedJob as FailedJob,
	_GithubUser as GithubUser,
	_Job as Job,
	_LocationLocationStyle as LocationLocationStyle,
	_LocationSetInfo as LocationSetInfo,
	_LocationStyle as LocationStyle,
	_Location as Location,
	_MetaCache as MetaCache,
	_Metadatum as Metadatum,
	_Migrationlog as Migrationlog,
	_ModelHasPermission as ModelHasPermission,
	_ModelHasRole as ModelHasRole,
	_News as News,
	_PasswordResetToken as PasswordResetToken,
	_Permission as Permission,
	_PersonalAccessToken as PersonalAccessToken,
	_PlayerTeam as PlayerTeam,
	_Player as Player,
	_RatingCheckpoint as RatingCheckpoint,
	_RatingDelta as RatingDelta,
	_Review as Review,
	_RoleHasPermission as RoleHasPermission,
	_Role as Role,
	_Session as Session,
	_SetInfo as SetInfo,
	_Set as Set,
	_StageTournamentTemplate as StageTournamentTemplate,
	_Stageable as Stageable,
	_Stage as Stage,
	_SteamUser as SteamUser,
	_Team as Team,
	_Telemetry as Telemetry,
	_TournamentResult as TournamentResult,
	_Tournament as Tournament,
	_TwitchUser as TwitchUser,
	_User as User,
};

export type {
	IAchievableAttributes as AchievableAttributes,
	AchievableCreationAttributes,
	IAchievementAttributes as AchievementAttributes,
	AchievementCreationAttributes,
	IActionlogAttributes as ActionlogAttributes,
	ActionlogCreationAttributes,
	IActionAttributes as ActionAttributes,
	ActionCreationAttributes,
	IArdPlayerArdTeamAttributes as ArdPlayerArdTeamAttributes,
	ArdPlayerArdTeamCreationAttributes,
	IArdPlayerAttributes as ArdPlayerAttributes,
	ArdPlayerCreationAttributes,
	IArdTeamAttributes as ArdTeamAttributes,
	ArdTeamCreationAttributes,
	IAtpCategoryAttributes as AtpCategoryAttributes,
	AtpCategoryCreationAttributes,
	ICacheAttributes as CacheAttributes,
	CacheCreationAttributes,
	ICacheLockAttributes as CacheLockAttributes,
	CacheLockCreationAttributes,
	ICacheMostVisitedAttributes as CacheMostVisitedAttributes,
	CacheMostVisitedCreationAttributes,
	ICountryAttributes as CountryAttributes,
	CountryCreationAttributes,
	IDiscordUserAttributes as DiscordUserAttributes,
	DiscordUserCreationAttributes,
	IElo1V1CacheAttributes as Elo1V1CacheAttributes,
	Elo1V1CacheCreationAttributes,
	IExternDeCacheAttributes as ExternDeCacheAttributes,
	ExternDeCacheCreationAttributes,
	IExternVooblyCacheAttributes as ExternVooblyCacheAttributes,
	ExternVooblyCacheCreationAttributes,
	IExternVooblyPlayerCacheAttributes as ExternVooblyPlayerCacheAttributes,
	ExternVooblyPlayerCacheCreationAttributes,
	IFailedJobAttributes as FailedJobAttributes,
	FailedJobCreationAttributes,
	IGithubUserAttributes as GithubUserAttributes,
	GithubUserCreationAttributes,
	IJobAttributes as JobAttributes,
	JobCreationAttributes,
	ILocationLocationStyleAttributes as LocationLocationStyleAttributes,
	LocationLocationStyleCreationAttributes,
	ILocationSetInfoAttributes as LocationSetInfoAttributes,
	LocationSetInfoCreationAttributes,
	ILocationStyleAttributes as LocationStyleAttributes,
	LocationStyleCreationAttributes,
	ILocationAttributes as LocationAttributes,
	LocationCreationAttributes,
	IMetaCacheAttributes as MetaCacheAttributes,
	MetaCacheCreationAttributes,
	IMetadatumAttributes as MetadatumAttributes,
	MetadatumCreationAttributes,
	IMigrationlogAttributes as MigrationlogAttributes,
	MigrationlogCreationAttributes,
	IModelHasPermissionAttributes as ModelHasPermissionAttributes,
	ModelHasPermissionCreationAttributes,
	IModelHasRoleAttributes as ModelHasRoleAttributes,
	ModelHasRoleCreationAttributes,
	INewsAttributes as NewsAttributes,
	NewsCreationAttributes,
	IPasswordResetTokenAttributes as PasswordResetTokenAttributes,
	PasswordResetTokenCreationAttributes,
	IPermissionAttributes as PermissionAttributes,
	PermissionCreationAttributes,
	IPersonalAccessTokenAttributes as PersonalAccessTokenAttributes,
	PersonalAccessTokenCreationAttributes,
	IPlayerTeamAttributes as PlayerTeamAttributes,
	PlayerTeamCreationAttributes,
	IPlayerAttributes as PlayerAttributes,
	PlayerCreationAttributes,
	IRatingCheckpointAttributes as RatingCheckpointAttributes,
	RatingCheckpointCreationAttributes,
	IRatingDeltaAttributes as RatingDeltaAttributes,
	RatingDeltaCreationAttributes,
	IReviewAttributes as ReviewAttributes,
	ReviewCreationAttributes,
	IRoleHasPermissionAttributes as RoleHasPermissionAttributes,
	RoleHasPermissionCreationAttributes,
	IRoleAttributes as RoleAttributes,
	RoleCreationAttributes,
	ISessionAttributes as SessionAttributes,
	SessionCreationAttributes,
	ISetInfoAttributes as SetInfoAttributes,
	SetInfoCreationAttributes,
	ISetAttributes as SetAttributes,
	SetCreationAttributes,
	IStageTournamentTemplateAttributes as StageTournamentTemplateAttributes,
	StageTournamentTemplateCreationAttributes,
	IStageableAttributes as StageableAttributes,
	StageableCreationAttributes,
	IStageAttributes as StageAttributes,
	StageCreationAttributes,
	ISteamUserAttributes as SteamUserAttributes,
	SteamUserCreationAttributes,
	ITeamAttributes as TeamAttributes,
	TeamCreationAttributes,
	ITelemetryAttributes as TelemetryAttributes,
	TelemetryCreationAttributes,
	ITournamentResultAttributes as TournamentResultAttributes,
	TournamentResultCreationAttributes,
	ITournamentAttributes as TournamentAttributes,
	TournamentCreationAttributes,
	ITwitchUserAttributes as TwitchUserAttributes,
	TwitchUserCreationAttributes,
	IUserAttributes as UserAttributes,
	UserCreationAttributes,
};

export type ModelReturnType = {
	Achievable: typeof _Achievable;
	Achievement: typeof _Achievement;
	Actionlog: typeof _Actionlog;
	Action: typeof _Action;
	ArdPlayerArdTeam: typeof _ArdPlayerArdTeam;
	ArdPlayer: typeof _ArdPlayer;
	ArdTeam: typeof _ArdTeam;
	AtpCategory: typeof _AtpCategory;
	Cache: typeof _Cache;
	CacheLock: typeof _CacheLock;
	CacheMostVisited: typeof _CacheMostVisited;
	Country: typeof _Country;
	DiscordUser: typeof _DiscordUser;
	Elo1V1Cache: typeof _Elo1V1Cache;
	ExternDeCache: typeof _ExternDeCache;
	ExternVooblyCache: typeof _ExternVooblyCache;
	ExternVooblyPlayerCache: typeof _ExternVooblyPlayerCache;
	FailedJob: typeof _FailedJob;
	GithubUser: typeof _GithubUser;
	Job: typeof _Job;
	LocationLocationStyle: typeof _LocationLocationStyle;
	LocationSetInfo: typeof _LocationSetInfo;
	LocationStyle: typeof _LocationStyle;
	Location: typeof _Location;
	MetaCache: typeof _MetaCache;
	Metadatum: typeof _Metadatum;
	Migrationlog: typeof _Migrationlog;
	ModelHasPermission: typeof _ModelHasPermission;
	ModelHasRole: typeof _ModelHasRole;
	News: typeof _News;
	PasswordResetToken: typeof _PasswordResetToken;
	Permission: typeof _Permission;
	PersonalAccessToken: typeof _PersonalAccessToken;
	PlayerTeam: typeof _PlayerTeam;
	Player: typeof _Player;
	RatingCheckpoint: typeof _RatingCheckpoint;
	RatingDelta: typeof _RatingDelta;
	Review: typeof _Review;
	RoleHasPermission: typeof _RoleHasPermission;
	Role: typeof _Role;
	Session: typeof _Session;
	SetInfo: typeof _SetInfo;
	Set: typeof _Set;
	StageTournamentTemplate: typeof _StageTournamentTemplate;
	Stageable: typeof _Stageable;
	Stage: typeof _Stage;
	SteamUser: typeof _SteamUser;
	Team: typeof _Team;
	Telemetry: typeof _Telemetry;
	TournamentResult: typeof _TournamentResult;
	Tournament: typeof _Tournament;
	TwitchUser: typeof _TwitchUser;
	User: typeof _User;
};

export function initModels(sequelize: Sequelize): ModelReturnType {
	const Achievable = _Achievable.initModel(sequelize);
	const Achievement = _Achievement.initModel(sequelize);
	const Actionlog = _Actionlog.initModel(sequelize);
	const Action = _Action.initModel(sequelize);
	const ArdPlayerArdTeam = _ArdPlayerArdTeam.initModel(sequelize);
	const ArdPlayer = _ArdPlayer.initModel(sequelize);
	const ArdTeam = _ArdTeam.initModel(sequelize);
	const AtpCategory = _AtpCategory.initModel(sequelize);
	const Cache = _Cache.initModel(sequelize);
	const CacheLock = _CacheLock.initModel(sequelize);
	const CacheMostVisited = _CacheMostVisited.initModel(sequelize);
	const Country = _Country.initModel(sequelize);
	const DiscordUser = _DiscordUser.initModel(sequelize);
	const Elo1V1Cache = _Elo1V1Cache.initModel(sequelize);
	const ExternDeCache = _ExternDeCache.initModel(sequelize);
	const ExternVooblyCache = _ExternVooblyCache.initModel(sequelize);
	const ExternVooblyPlayerCache = _ExternVooblyPlayerCache.initModel(sequelize);
	const FailedJob = _FailedJob.initModel(sequelize);
	const GithubUser = _GithubUser.initModel(sequelize);
	const Job = _Job.initModel(sequelize);
	const LocationLocationStyle = _LocationLocationStyle.initModel(sequelize);
	const LocationSetInfo = _LocationSetInfo.initModel(sequelize);
	const LocationStyle = _LocationStyle.initModel(sequelize);
	const Location = _Location.initModel(sequelize);
	const MetaCache = _MetaCache.initModel(sequelize);
	const Metadatum = _Metadatum.initModel(sequelize);
	const Migrationlog = _Migrationlog.initModel(sequelize);
	const ModelHasPermission = _ModelHasPermission.initModel(sequelize);
	const ModelHasRole = _ModelHasRole.initModel(sequelize);
	const News = _News.initModel(sequelize);
	const PasswordResetToken = _PasswordResetToken.initModel(sequelize);
	const Permission = _Permission.initModel(sequelize);
	const PersonalAccessToken = _PersonalAccessToken.initModel(sequelize);
	const PlayerTeam = _PlayerTeam.initModel(sequelize);
	const Player = _Player.initModel(sequelize);
	const RatingCheckpoint = _RatingCheckpoint.initModel(sequelize);
	const RatingDelta = _RatingDelta.initModel(sequelize);
	const Review = _Review.initModel(sequelize);
	const RoleHasPermission = _RoleHasPermission.initModel(sequelize);
	const Role = _Role.initModel(sequelize);
	const Session = _Session.initModel(sequelize);
	const SetInfo = _SetInfo.initModel(sequelize);
	const Set = _Set.initModel(sequelize);
	const StageTournamentTemplate = _StageTournamentTemplate.initModel(sequelize);
	const Stageable = _Stageable.initModel(sequelize);
	const Stage = _Stage.initModel(sequelize);
	const SteamUser = _SteamUser.initModel(sequelize);
	const Team = _Team.initModel(sequelize);
	const Telemetry = _Telemetry.initModel(sequelize);
	const TournamentResult = _TournamentResult.initModel(sequelize);
	const Tournament = _Tournament.initModel(sequelize);
	const TwitchUser = _TwitchUser.initModel(sequelize);
	const User = _User.initModel(sequelize);

	Achievable.belongsTo(Achievement, {
		as: "achievement",
		foreignKey: "achievement_id",
	});
	Achievement.hasMany(Achievable, {
		as: "achievables",
		foreignKey: "achievement_id",
	});
	Actionlog.belongsTo(Action, { as: "action", foreignKey: "action_id" });
	Action.hasMany(Actionlog, { as: "actionlogs", foreignKey: "action_id" });
	ArdPlayerArdTeam.belongsTo(ArdPlayer, {
		as: "ard_player",
		foreignKey: "ard_player_id",
	});
	ArdPlayer.hasMany(ArdPlayerArdTeam, {
		as: "ard_player_ard_teams",
		foreignKey: "ard_player_id",
	});
	Player.belongsTo(ArdPlayer, {
		as: "aoe_reference_data_player",
		foreignKey: "aoe_reference_data_player_id",
	});
	ArdPlayer.hasMany(Player, {
		as: "players",
		foreignKey: "aoe_reference_data_player_id",
	});
	ArdPlayerArdTeam.belongsTo(ArdTeam, {
		as: "ard_team",
		foreignKey: "ard_team_id",
	});
	ArdTeam.hasMany(ArdPlayerArdTeam, {
		as: "ard_player_ard_teams",
		foreignKey: "ard_team_id",
	});
	Team.belongsTo(ArdTeam, {
		as: "aoe_reference_data_team",
		foreignKey: "aoe_reference_data_team_id",
	});
	ArdTeam.hasMany(Team, {
		as: "teams",
		foreignKey: "aoe_reference_data_team_id",
	});
	Tournament.belongsTo(AtpCategory, {
		as: "atp_category",
		foreignKey: "atp_category_id",
	});
	AtpCategory.hasMany(Tournament, {
		as: "tournaments",
		foreignKey: "atp_category_id",
	});
	ArdPlayer.belongsTo(Country, { as: "country", foreignKey: "country_id" });
	Country.hasMany(ArdPlayer, { as: "ard_players", foreignKey: "country_id" });
	Player.belongsTo(Country, { as: "country", foreignKey: "country_id" });
	Country.hasMany(Player, { as: "players", foreignKey: "country_id" });
	Team.belongsTo(Country, { as: "country", foreignKey: "country_id" });
	Country.hasMany(Team, { as: "teams", foreignKey: "country_id" });
	User.belongsTo(Country, { as: "country", foreignKey: "country_id" });
	Country.hasMany(User, { as: "users", foreignKey: "country_id" });
	LocationLocationStyle.belongsTo(LocationStyle, {
		as: "location_style",
		foreignKey: "location_style_id",
	});
	LocationStyle.hasMany(LocationLocationStyle, {
		as: "location_location_styles",
		foreignKey: "location_style_id",
	});
	LocationLocationStyle.belongsTo(Location, {
		as: "location",
		foreignKey: "location_id",
	});
	Location.hasMany(LocationLocationStyle, {
		as: "location_location_styles",
		foreignKey: "location_id",
	});
	LocationSetInfo.belongsTo(Location, {
		as: "location",
		foreignKey: "location_id",
	});
	Location.hasMany(LocationSetInfo, {
		as: "location_set_infos",
		foreignKey: "location_id",
	});
	ModelHasPermission.belongsTo(Permission, {
		as: "permission",
		foreignKey: "permission_id",
	});
	Permission.hasMany(ModelHasPermission, {
		as: "model_has_permissions",
		foreignKey: "permission_id",
	});
	RoleHasPermission.belongsTo(Permission, {
		as: "permission",
		foreignKey: "permission_id",
	});
	Permission.hasMany(RoleHasPermission, {
		as: "role_has_permissions",
		foreignKey: "permission_id",
	});
	Elo1V1Cache.belongsTo(Player, { as: "player", foreignKey: "player_id" });
	Player.hasMany(Elo1V1Cache, {
		as: "elo_1_v_1_caches",
		foreignKey: "player_id",
	});
	PlayerTeam.belongsTo(Player, { as: "player", foreignKey: "player_id" });
	Player.hasMany(PlayerTeam, { as: "player_teams", foreignKey: "player_id" });
	ModelHasRole.belongsTo(Role, { as: "role", foreignKey: "role_id" });
	Role.hasMany(ModelHasRole, { as: "model_has_roles", foreignKey: "role_id" });
	RoleHasPermission.belongsTo(Role, { as: "role", foreignKey: "role_id" });
	Role.hasMany(RoleHasPermission, {
		as: "role_has_permissions",
		foreignKey: "role_id",
	});
	LocationSetInfo.belongsTo(SetInfo, {
		as: "set_info",
		foreignKey: "set_info_id",
	});
	SetInfo.hasMany(LocationSetInfo, {
		as: "location_set_infos",
		foreignKey: "set_info_id",
	});
	Elo1V1Cache.belongsTo(Set, { as: "set", foreignKey: "set_id" });
	Set.hasMany(Elo1V1Cache, { as: "elo_1_v_1_caches", foreignKey: "set_id" });
	RatingDelta.belongsTo(Set, { as: "set", foreignKey: "set_id" });
	Set.hasMany(RatingDelta, { as: "rating_delta", foreignKey: "set_id" });
	SetInfo.belongsTo(Set, { as: "set", foreignKey: "set_id" });
	Set.hasMany(SetInfo, { as: "set_infos", foreignKey: "set_id" });
	Set.belongsTo(Stageable, { as: "stageable", foreignKey: "stageable_id" });
	Stageable.hasMany(Set, { as: "sets", foreignKey: "stageable_id" });
	Stageable.belongsTo(Stage, { as: "stage", foreignKey: "stage_id" });
	Stage.hasMany(Stageable, { as: "stageables", foreignKey: "stage_id" });
	PlayerTeam.belongsTo(Team, { as: "team", foreignKey: "team_id" });
	Team.hasMany(PlayerTeam, { as: "player_teams", foreignKey: "team_id" });
	Elo1V1Cache.belongsTo(Tournament, {
		as: "tournament",
		foreignKey: "tournament_id",
	});
	Tournament.hasMany(Elo1V1Cache, {
		as: "elo_1_v_1_caches",
		foreignKey: "tournament_id",
	});
	TournamentResult.belongsTo(Tournament, {
		as: "tournament",
		foreignKey: "tournament_id",
	});
	Tournament.hasMany(TournamentResult, {
		as: "tournament_results",
		foreignKey: "tournament_id",
	});
	Actionlog.belongsTo(User, { as: "user", foreignKey: "user_id" });
	User.hasMany(Actionlog, { as: "actionlogs", foreignKey: "user_id" });
	DiscordUser.belongsTo(User, { as: "user", foreignKey: "user_id" });
	User.hasMany(DiscordUser, { as: "discord_users", foreignKey: "user_id" });
	GithubUser.belongsTo(User, { as: "user", foreignKey: "user_id" });
	User.hasMany(GithubUser, { as: "github_users", foreignKey: "user_id" });
	Player.belongsTo(User, { as: "user", foreignKey: "user_id" });
	User.hasMany(Player, { as: "players", foreignKey: "user_id" });
	Session.belongsTo(User, { as: "user", foreignKey: "user_id" });
	User.hasMany(Session, { as: "sessions", foreignKey: "user_id" });
	SteamUser.belongsTo(User, { as: "user", foreignKey: "user_id" });
	User.hasMany(SteamUser, { as: "steam_users", foreignKey: "user_id" });
	TwitchUser.belongsTo(User, { as: "user", foreignKey: "user_id" });
	User.hasMany(TwitchUser, { as: "twitch_users", foreignKey: "user_id" });

	// Polymorphic Associations

	// Actionlog
	Actionlog.belongsTo(Achievement, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	Achievement.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Achievement" },
	});
	Actionlog.belongsTo(ArdPlayer, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	ArdPlayer.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\ArdPlayer" },
	});
	Actionlog.belongsTo(ArdTeam, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	ArdTeam.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\ArdTeam" },
	});
	Actionlog.belongsTo(AtpCategory, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	AtpCategory.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\AtpCategory" },
	});
	Actionlog.belongsTo(Country, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	Country.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Country" },
	});
	Actionlog.belongsTo(Location, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	Location.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Location" },
	});
	Actionlog.belongsTo(LocationStyle, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	LocationStyle.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\LocationStyle" },
	});
	Actionlog.belongsTo(Metadatum, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	Metadatum.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Metadatum" },
	});
	Actionlog.belongsTo(News, { foreignKey: "loggable_id", constraints: false });
	News.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\News" },
	});
	Actionlog.belongsTo(Player, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	Player.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Player" },
	});
	Actionlog.belongsTo(Review, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	Review.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Review" },
	});
	Actionlog.belongsTo(Set, { foreignKey: "loggable_id", constraints: false });
	Set.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Set" },
	});
	Actionlog.belongsTo(Stage, { foreignKey: "loggable_id", constraints: false });
	Stage.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Stage" },
	});
	Actionlog.belongsTo(Team, { foreignKey: "loggable_id", constraints: false });
	Team.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Team" },
	});
	Actionlog.belongsTo(Tournament, {
		foreignKey: "loggable_id",
		constraints: false,
	});
	Tournament.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\Tournament" },
	});
	Actionlog.belongsTo(User, { foreignKey: "loggable_id", constraints: false });
	User.hasMany(Actionlog, {
		foreignKey: "loggable_id",
		constraints: false,
		scope: { loggable_type: "App\\Models\\User" },
	});

	// Metadata
	// Metadatum.belongsTo(Tournament, { foreignKey: "metadatable_id", constraints: false });
	// Metadatum.belongsTo(Player, { foreignKey: "metadatable_id", constraints: false });
	// Metadatum.belongsTo(ArdPlayer, { foreignKey: "metadatable_id", constraints: false });
	// Metadatum.belongsTo(Review, { foreignKey: "metadatable_id", constraints: false });

	Actionlog.addHook("afterFind", (findResult) => {
		// If findResult is null return early
		if (findResult === null) return;

		if (!Array.isArray(findResult))
			findResult = [findResult] as Model<
				IActionlogAttributes,
				ActionlogCreationAttributes
			>[];
		for (const instance of findResult) {
			console.log(instance);
			match(instance.loggable_type)
				.with("App\\Models\\ArdPlayer", () => {
					if (instance.ArdPlayer !== undefined) return;
					instance.loggable_type = instance.ArdPlayer;
				})
				.with("App\\Models\\Country", () => {
					console.log("Country");
					if (instance.Country !== undefined) {
						instance.loggable_type = instance.Country;
					}
				})
				// TODO!: Add all other types
				// .with("achievement", () => instance.loggable_type = instance.achievement)
				// .with("ard_player", () => instance.loggable_type = instance.ard_player)
				// .with("ard_team", () => instance.loggable_type = instance.ard_team)
				// .with("atp_category", () => instance.loggable_type = instance.atp_category)
				// .with("country", () => instance.loggable_type = instance.country)
				// .with("location", () => instance.loggable_type = instance.location)
				// .with("location_style", () => instance.loggable_type = instance.location_style)
				// .with("metadatum", () => instance.loggable_type = instance.metadatum)
				// .with("news", () => instance.loggable_type = instance.news)
				// .with("player", () => instance.loggable_type = instance.player)
				// .with("review", () => instance.loggable_type = instance.review)
				// .with("set", () => instance.loggable_type = instance.set)
				// .with("stage", () => instance.loggable_type = instance.stage)
				// .with("team", () => instance.loggable_type = instance.team)
				// .with("tournament", () => instance.loggable_type = instance.tournament)
				// .with("user", () => instance.loggable_type = instance.user)
				.otherwise(() => (instance.loggable_type = null));
		}

		// TODO!: Needed?
		// To prevent mistakes:
		// delete instance.image;
		// delete instance.dataValues.image;
		// delete instance.video;
		// delete instance.dataValues.video;
	});

	return {
		Achievable: Achievable,
		Achievement: Achievement,
		Actionlog: Actionlog,
		Action: Action,
		ArdPlayerArdTeam: ArdPlayerArdTeam,
		ArdPlayer: ArdPlayer,
		ArdTeam: ArdTeam,
		AtpCategory: AtpCategory,
		Cache: Cache,
		CacheLock: CacheLock,
		CacheMostVisited: CacheMostVisited,
		Country: Country,
		DiscordUser: DiscordUser,
		Elo1V1Cache: Elo1V1Cache,
		ExternDeCache: ExternDeCache,
		ExternVooblyCache: ExternVooblyCache,
		ExternVooblyPlayerCache: ExternVooblyPlayerCache,
		FailedJob: FailedJob,
		GithubUser: GithubUser,
		Job: Job,
		LocationLocationStyle: LocationLocationStyle,
		LocationSetInfo: LocationSetInfo,
		LocationStyle: LocationStyle,
		Location: Location,
		MetaCache: MetaCache,
		Metadatum: Metadatum,
		Migrationlog: Migrationlog,
		ModelHasPermission: ModelHasPermission,
		ModelHasRole: ModelHasRole,
		News: News,
		PasswordResetToken: PasswordResetToken,
		Permission: Permission,
		PersonalAccessToken: PersonalAccessToken,
		PlayerTeam: PlayerTeam,
		Player: Player,
		RatingCheckpoint: RatingCheckpoint,
		RatingDelta: RatingDelta,
		Review: Review,
		RoleHasPermission: RoleHasPermission,
		Role: Role,
		Session: Session,
		SetInfo: SetInfo,
		Set: Set,
		StageTournamentTemplate: StageTournamentTemplate,
		Stageable: Stageable,
		Stage: Stage,
		SteamUser: SteamUser,
		Team: Team,
		Telemetry: Telemetry,
		TournamentResult: TournamentResult,
		Tournament: Tournament,
		TwitchUser: TwitchUser,
		User: User,
	};
}
