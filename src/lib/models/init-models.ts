import type { Model, Sequelize } from "sequelize";
import { match } from "ts-pattern";

import { Achievable as _achievable } from "./achievable";
import type { IAchievableAttributes, AchievableCreationAttributes } from "./achievable";
import { Achievement as _achievement } from "./achievement";
import type { IAchievementAttributes, AchievementCreationAttributes } from "./achievement";
import { Actionlog as _actionlog } from "./actionlog";
import type { IActionlogAttributes, ActionlogCreationAttributes } from "./actionlog";
import { Action as _action } from "./action";
import type { IActionAttributes, ActionCreationAttributes } from "./action";
import { ArdPlayerArdTeam as _ard_player_ard_team } from "./ard_player_ard_team";
import type { IArdPlayerArdTeamAttributes, ArdPlayerArdTeamCreationAttributes } from "./ard_player_ard_team";
import { ArdPlayer as _ard_player } from "./ard_player";
import type { IArdPlayerAttributes, ArdPlayerCreationAttributes } from "./ard_player";
import { ArdTeam as _ard_team } from "./ard_team";
import type { IArdTeamAttributes, ArdTeamCreationAttributes } from "./ard_team";
import { AtpCategory as _atp_category } from "./atp_category";
import type { IAtpCategoryAttributes, AtpCategoryCreationAttributes } from "./atp_category";
import { Cache as _cache } from "./cache";
import type { ICacheAttributes, CacheCreationAttributes } from "./cache";
import { CacheLock as _cache_lock } from "./cache_lock";
import type { ICacheLockAttributes, CacheLockCreationAttributes } from "./cache_lock";
import { CacheMostVisited as _cache_most_visited } from "./cache_most_visited";
import type { ICacheMostVisitedAttributes, CacheMostVisitedCreationAttributes } from "./cache_most_visited";
import { Country as _country } from "./country";
import type { ICountryAttributes, CountryCreationAttributes } from "./country";
import { DiscordUser as _discord_user } from "./discord_user";
import type { IDiscordUserAttributes, DiscordUserCreationAttributes } from "./discord_user";
import { Elo1v1Cache as _elo_1v1_cache } from "./elo_1v1_cache";
import type { IElo1v1CacheAttributes, Elo1v1CacheCreationAttributes } from "./elo_1v1_cache";
import { ExternDeCache as _extern_de_cache } from "./extern_de_cache";
import type { IExternDeCacheAttributes, ExternDeCacheCreationAttributes } from "./extern_de_cache";
import { ExternVooblyCache as _extern_voobly_cache } from "./extern_voobly_cache";
import type { IExternVooblyCacheAttributes, ExternVooblyCacheCreationAttributes } from "./extern_voobly_cache";
import { ExternVooblyPlayerCache as _extern_voobly_player_cache } from "./extern_voobly_player_cache";
import type { IExternVooblyPlayerCacheAttributes, ExternVooblyPlayerCacheCreationAttributes } from "./extern_voobly_player_cache";
import { FailedJob as _failed_job } from "./failed_job";
import type { IFailedJobAttributes, FailedJobCreationAttributes } from "./failed_job";
import { GithubUser as _github_user } from "./github_user";
import type { IGithubUserAttributes, GithubUserCreationAttributes } from "./github_user";
import { Job as _job } from "./job";
import type { IJobAttributes, JobCreationAttributes } from "./job";
import { LocationLocationStyle as _location_location_style } from "./location_location_style";
import type { ILocationLocationStyleAttributes, LocationLocationStyleCreationAttributes } from "./location_location_style";
import { LocationSetInfo as _location_set_info } from "./location_set_info";
import type { ILocationSetInfoAttributes, LocationSetInfoCreationAttributes } from "./location_set_info";
import { LocationStyle as _location_style } from "./location_style";
import type { ILocationStyleAttributes, LocationStyleCreationAttributes } from "./location_style";
import { Location as _location } from "./location";
import type { ILocationAttributes, LocationCreationAttributes } from "./location";
import { MetaCache as _meta_cache } from "./meta_cache";
import type { IMetaCacheAttributes, MetaCacheCreationAttributes } from "./meta_cache";
import { Metadatum as _metadatum } from "./metadatum";
import type { IMetadatumAttributes, MetadatumCreationAttributes } from "./metadatum";
import { Migrationlog as _migrationlog } from "./migrationlog";
import type { IMigrationlogAttributes, MigrationlogCreationAttributes } from "./migrationlog";
import { Migration as _migration } from "./migration";
import type { IMigrationAttributes, MigrationCreationAttributes } from "./migration";
import { ModelHasPermission as _model_has_permission } from "./model_has_permission";
import type { IModelHasPermissionAttributes, ModelHasPermissionCreationAttributes } from "./model_has_permission";
import { ModelHasRole as _model_has_role } from "./model_has_role";
import type { IModelHasRoleAttributes, ModelHasRoleCreationAttributes } from "./model_has_role";
import { News as _news } from "./news";
import type { INewsAttributes, NewsCreationAttributes } from "./news";
import { PasswordResetToken as _password_reset_token } from "./password_reset_token";
import type { IPasswordResetTokenAttributes, PasswordResetTokenCreationAttributes } from "./password_reset_token";
import { Permission as _permission } from "./permission";
import type { IPermissionAttributes, PermissionCreationAttributes } from "./permission";
import { PersonalAccessToken as _personal_access_token } from "./personal_access_token";
import type { IPersonalAccessTokenAttributes, PersonalAccessTokenCreationAttributes } from "./personal_access_token";
import { PlayerTeam as _player_team } from "./player_team";
import type { IPlayerTeamAttributes, PlayerTeamCreationAttributes } from "./player_team";
import { Player as _player } from "./player";
import type { IPlayerAttributes, PlayerCreationAttributes } from "./player";
import { RatingCheckpoint as _rating_checkpoint } from "./rating_checkpoint";
import type { IRatingCheckpointAttributes, RatingCheckpointCreationAttributes } from "./rating_checkpoint";
import { RatingDelta as _rating_delta } from "./rating_delta";
import type { IRatingDeltaAttributes, RatingDeltaCreationAttributes } from "./rating_delta";
import { Review as _review } from "./review";
import type { IReviewAttributes, ReviewCreationAttributes } from "./review";
import { RoleHasPermission as _role_has_permission } from "./role_has_permission";
import type { IRoleHasPermissionAttributes, RoleHasPermissionCreationAttributes } from "./role_has_permission";
import { Role as _role } from "./role";
import type { IRoleAttributes, RoleCreationAttributes } from "./role";
import { Session as _session } from "./session";
import type { ISessionAttributes, SessionCreationAttributes } from "./session";
import { SetInfo as _set_info } from "./set_info";
import type { ISetInfoAttributes, SetInfoCreationAttributes } from "./set_info";
import { Set as _set } from "./set";
import type { ISetAttributes, SetCreationAttributes } from "./set";
import { StageTournamentTemplate as _stage_tournament_template } from "./stage_tournament_template";
import type { IStageTournamentTemplateAttributes, StageTournamentTemplateCreationAttributes } from "./stage_tournament_template";
import { Stageable as _stageable } from "./stageable";
import type { IStageableAttributes, StageableCreationAttributes } from "./stageable";
import { Stage as _stage } from "./stage";
import type { IStageAttributes, StageCreationAttributes } from "./stage";
import { SteamUser as _steam_user } from "./steam_user";
import type { ISteamUserAttributes, SteamUserCreationAttributes } from "./steam_user";
import { Team as _team } from "./team";
import type { ITeamAttributes, TeamCreationAttributes } from "./team";
import { Telemetry as _telemetry } from "./telemetry";
import type { ITelemetryAttributes, TelemetryCreationAttributes } from "./telemetry";
import { TournamentResult as _tournament_result } from "./tournament_result";
import type { ITournamentResultAttributes, TournamentResultCreationAttributes } from "./tournament_result";
import { Tournament as _tournament } from "./tournament";
import type { ITournamentAttributes, TournamentCreationAttributes } from "./tournament";
import { TwitchUser as _twitch_user } from "./twitch_user";
import type { ITwitchUserAttributes, TwitchUserCreationAttributes } from "./twitch_user";
import { User as _user } from "./user";
import type { IUserAttributes, UserCreationAttributes } from "./user";


export {
  _achievable as achievable,
  _achievement as achievement,
  _actionlog as actionlog,
  _action as action,
  _ard_player_ard_team as ard_player_ard_team,
  _ard_player as ard_player,
  _ard_team as ard_team,
  _atp_category as atp_category,
  _cache as cache,
  _cache_lock as cache_lock,
  _cache_most_visited as cache_most_visited,
  _country as country,
  _discord_user as discord_user,
  _elo_1v1_cache as elo_1v1_cache,
  _extern_de_cache as extern_de_cache,
  _extern_voobly_cache as extern_voobly_cache,
  _extern_voobly_player_cache as extern_voobly_player_cache,
  _failed_job as failed_job,
  _github_user as github_user,
  _job as job,
  _location_location_style as location_location_style,
  _location_set_info as location_set_info,
  _location_style as location_style,
  _location as location,
  _meta_cache as meta_cache,
  _metadatum as metadatum,
  _migrationlog as migrationlog,
  _migration as migration,
  _model_has_permission as model_has_permission,
  _model_has_role as model_has_role,
  _news as news,
  _password_reset_token as password_reset_token,
  _permission as permission,
  _personal_access_token as personal_access_token,
  _player_team as player_team,
  _player as player,
  _rating_checkpoint as rating_checkpoint,
  _rating_delta as rating_delta,
  _review as review,
  _role_has_permission as role_has_permission,
  _role as role,
  _session as session,
  _set_info as set_info,
  _set as set,
  _stage_tournament_template as stage_tournament_template,
  _stageable as stageable,
  _stage as stage,
  _steam_user as steam_user,
  _team as team,
  _telemetry as telemetry,
  _tournament_result as tournament_result,
  _tournament as tournament,
  _twitch_user as twitch_user,
  _user as user,
};

export type {
  IAchievableAttributes as achievableAttributes,
  AchievableCreationAttributes as achievableCreationAttributes,
  IAchievementAttributes as achievementAttributes,
  AchievementCreationAttributes as achievementCreationAttributes,
  IActionlogAttributes as actionlogAttributes,
  ActionlogCreationAttributes as actionlogCreationAttributes,
  IActionAttributes as actionAttributes,
  ActionCreationAttributes as actionCreationAttributes,
  IArdPlayerArdTeamAttributes as ard_player_ard_teamAttributes,
  ArdPlayerArdTeamCreationAttributes as ard_player_ard_teamCreationAttributes,
  IArdPlayerAttributes as ard_playerAttributes,
  ArdPlayerCreationAttributes as ard_playerCreationAttributes,
  IArdTeamAttributes as ard_teamAttributes,
  ArdTeamCreationAttributes as ard_teamCreationAttributes,
  IAtpCategoryAttributes as atp_categoryAttributes,
  AtpCategoryCreationAttributes as atp_categoryCreationAttributes,
  ICacheAttributes as cacheAttributes,
  CacheCreationAttributes as cacheCreationAttributes,
  ICacheLockAttributes as cache_lockAttributes,
  CacheLockCreationAttributes as cache_lockCreationAttributes,
  ICacheMostVisitedAttributes as cache_most_visitedAttributes,
  CacheMostVisitedCreationAttributes as cache_most_visitedCreationAttributes,
  ICountryAttributes as countryAttributes,
  CountryCreationAttributes as countryCreationAttributes,
  IDiscordUserAttributes as discord_userAttributes,
  DiscordUserCreationAttributes as discord_userCreationAttributes,
  IElo1v1CacheAttributes as elo_1v1_cacheAttributes,
  Elo1v1CacheCreationAttributes as elo_1v1_cacheCreationAttributes,
  IExternDeCacheAttributes as extern_de_cacheAttributes,
  ExternDeCacheCreationAttributes as extern_de_cacheCreationAttributes,
  IExternVooblyCacheAttributes as extern_voobly_cacheAttributes,
  ExternVooblyCacheCreationAttributes as extern_voobly_cacheCreationAttributes,
  IExternVooblyPlayerCacheAttributes as extern_voobly_player_cacheAttributes,
  ExternVooblyPlayerCacheCreationAttributes as extern_voobly_player_cacheCreationAttributes,
  IFailedJobAttributes as failed_jobAttributes,
  FailedJobCreationAttributes as failed_jobCreationAttributes,
  IGithubUserAttributes as github_userAttributes,
  GithubUserCreationAttributes as github_userCreationAttributes,
  IJobAttributes as jobAttributes,
  JobCreationAttributes as jobCreationAttributes,
  ILocationLocationStyleAttributes as location_location_styleAttributes,
  LocationLocationStyleCreationAttributes as location_location_styleCreationAttributes,
  ILocationSetInfoAttributes as location_set_infoAttributes,
  LocationSetInfoCreationAttributes as location_set_infoCreationAttributes,
  ILocationStyleAttributes as location_styleAttributes,
  LocationStyleCreationAttributes as location_styleCreationAttributes,
  ILocationAttributes as locationAttributes,
  LocationCreationAttributes as locationCreationAttributes,
  IMetaCacheAttributes as meta_cacheAttributes,
  MetaCacheCreationAttributes as meta_cacheCreationAttributes,
  IMetadatumAttributes as metadatumAttributes,
  MetadatumCreationAttributes as metadatumCreationAttributes,
  IMigrationlogAttributes as migrationlogAttributes,
  MigrationlogCreationAttributes as migrationlogCreationAttributes,
  IMigrationAttributes as migrationAttributes,
  MigrationCreationAttributes as migrationCreationAttributes,
  IModelHasPermissionAttributes as model_has_permissionAttributes,
  ModelHasPermissionCreationAttributes as model_has_permissionCreationAttributes,
  IModelHasRoleAttributes as model_has_roleAttributes,
  ModelHasRoleCreationAttributes as model_has_roleCreationAttributes,
  INewsAttributes as newsAttributes,
  NewsCreationAttributes as newsCreationAttributes,
  IPasswordResetTokenAttributes as password_reset_tokenAttributes,
  PasswordResetTokenCreationAttributes as password_reset_tokenCreationAttributes,
  IPermissionAttributes as permissionAttributes,
  PermissionCreationAttributes as permissionCreationAttributes,
  IPersonalAccessTokenAttributes as personal_access_tokenAttributes,
  PersonalAccessTokenCreationAttributes as personal_access_tokenCreationAttributes,
  IPlayerTeamAttributes as player_teamAttributes,
  PlayerTeamCreationAttributes as player_teamCreationAttributes,
  IPlayerAttributes as playerAttributes,
  PlayerCreationAttributes as playerCreationAttributes,
  IRatingCheckpointAttributes as rating_checkpointAttributes,
  RatingCheckpointCreationAttributes as rating_checkpointCreationAttributes,
  IRatingDeltaAttributes as rating_deltaAttributes,
  RatingDeltaCreationAttributes as rating_deltaCreationAttributes,
  IReviewAttributes as reviewAttributes,
  ReviewCreationAttributes as reviewCreationAttributes,
  IRoleHasPermissionAttributes as role_has_permissionAttributes,
  RoleHasPermissionCreationAttributes as role_has_permissionCreationAttributes,
  IRoleAttributes as roleAttributes,
  RoleCreationAttributes as roleCreationAttributes,
  ISessionAttributes as sessionAttributes,
  SessionCreationAttributes as sessionCreationAttributes,
  ISetInfoAttributes as set_infoAttributes,
  SetInfoCreationAttributes as set_infoCreationAttributes,
  ISetAttributes as setAttributes,
  SetCreationAttributes as setCreationAttributes,
  IStageTournamentTemplateAttributes as stage_tournament_templateAttributes,
  StageTournamentTemplateCreationAttributes as stage_tournament_templateCreationAttributes,
  IStageableAttributes as stageableAttributes,
  StageableCreationAttributes as stageableCreationAttributes,
  IStageAttributes as stageAttributes,
  StageCreationAttributes as stageCreationAttributes,
  ISteamUserAttributes as steam_userAttributes,
  SteamUserCreationAttributes as steam_userCreationAttributes,
  ITeamAttributes as teamAttributes,
  TeamCreationAttributes as teamCreationAttributes,
  ITelemetryAttributes as telemetryAttributes,
  TelemetryCreationAttributes as telemetryCreationAttributes,
  ITournamentResultAttributes as tournament_resultAttributes,
  TournamentResultCreationAttributes as tournament_resultCreationAttributes,
  ITournamentAttributes as tournamentAttributes,
  TournamentCreationAttributes as tournamentCreationAttributes,
  ITwitchUserAttributes as twitch_userAttributes,
  TwitchUserCreationAttributes as twitch_userCreationAttributes,
  IUserAttributes as userAttributes,
  UserCreationAttributes as userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const achievable = _achievable.initModel(sequelize);
  const achievement = _achievement.initModel(sequelize);
  const actionlog = _actionlog.initModel(sequelize);
  const action = _action.initModel(sequelize);
  const ard_player_ard_team = _ard_player_ard_team.initModel(sequelize);
  const ard_player = _ard_player.initModel(sequelize);
  const ard_team = _ard_team.initModel(sequelize);
  const atp_category = _atp_category.initModel(sequelize);
  const cache = _cache.initModel(sequelize);
  const cache_lock = _cache_lock.initModel(sequelize);
  const cache_most_visited = _cache_most_visited.initModel(sequelize);
  const country = _country.initModel(sequelize);
  const discord_user = _discord_user.initModel(sequelize);
  const elo_1v1_cache = _elo_1v1_cache.initModel(sequelize);
  const extern_de_cache = _extern_de_cache.initModel(sequelize);
  const extern_voobly_cache = _extern_voobly_cache.initModel(sequelize);
  const extern_voobly_player_cache = _extern_voobly_player_cache.initModel(sequelize);
  const failed_job = _failed_job.initModel(sequelize);
  const github_user = _github_user.initModel(sequelize);
  const job = _job.initModel(sequelize);
  const location_location_style = _location_location_style.initModel(sequelize);
  const location_set_info = _location_set_info.initModel(sequelize);
  const location_style = _location_style.initModel(sequelize);
  const location = _location.initModel(sequelize);
  const meta_cache = _meta_cache.initModel(sequelize);
  const metadatum = _metadatum.initModel(sequelize);
  const migrationlog = _migrationlog.initModel(sequelize);
  const migration = _migration.initModel(sequelize);
  const model_has_permission = _model_has_permission.initModel(sequelize);
  const model_has_role = _model_has_role.initModel(sequelize);
  const news = _news.initModel(sequelize);
  const password_reset_token = _password_reset_token.initModel(sequelize);
  const permission = _permission.initModel(sequelize);
  const personal_access_token = _personal_access_token.initModel(sequelize);
  const player_team = _player_team.initModel(sequelize);
  const player = _player.initModel(sequelize);
  const rating_checkpoint = _rating_checkpoint.initModel(sequelize);
  const rating_delta = _rating_delta.initModel(sequelize);
  const review = _review.initModel(sequelize);
  const role_has_permission = _role_has_permission.initModel(sequelize);
  const role = _role.initModel(sequelize);
  const session = _session.initModel(sequelize);
  const set_info = _set_info.initModel(sequelize);
  const set = _set.initModel(sequelize);
  const stage_tournament_template = _stage_tournament_template.initModel(sequelize);
  const stageable = _stageable.initModel(sequelize);
  const stage = _stage.initModel(sequelize);
  const steam_user = _steam_user.initModel(sequelize);
  const team = _team.initModel(sequelize);
  const telemetry = _telemetry.initModel(sequelize);
  const tournament_result = _tournament_result.initModel(sequelize);
  const tournament = _tournament.initModel(sequelize);
  const twitch_user = _twitch_user.initModel(sequelize);
  const user = _user.initModel(sequelize);

  achievable.belongsTo(achievement, { as: "achievement", foreignKey: "achievement_id" });
  achievement.hasMany(achievable, { as: "achievables", foreignKey: "achievement_id" });
  actionlog.belongsTo(action, { as: "action", foreignKey: "action_id" });
  action.hasMany(actionlog, { as: "actionlogs", foreignKey: "action_id" });
  ard_player_ard_team.belongsTo(ard_player, { as: "ard_player", foreignKey: "ard_player_id" });
  ard_player.hasMany(ard_player_ard_team, { as: "ard_player_ard_teams", foreignKey: "ard_player_id" });
  player.belongsTo(ard_player, { as: "aoe_reference_data_player", foreignKey: "aoe_reference_data_player_id" });
  ard_player.hasMany(player, { as: "players", foreignKey: "aoe_reference_data_player_id" });
  ard_player_ard_team.belongsTo(ard_team, { as: "ard_team", foreignKey: "ard_team_id" });
  ard_team.hasMany(ard_player_ard_team, { as: "ard_player_ard_teams", foreignKey: "ard_team_id" });
  team.belongsTo(ard_team, { as: "aoe_reference_data_team", foreignKey: "aoe_reference_data_team_id" });
  ard_team.hasMany(team, { as: "teams", foreignKey: "aoe_reference_data_team_id" });
  tournament.belongsTo(atp_category, { as: "atp_category", foreignKey: "atp_category_id" });
  atp_category.hasMany(tournament, { as: "tournaments", foreignKey: "atp_category_id" });
  ard_player.belongsTo(country, { as: "country", foreignKey: "country_id" });
  country.hasMany(ard_player, { as: "ard_players", foreignKey: "country_id" });
  player.belongsTo(country, { as: "country", foreignKey: "country_id" });
  country.hasMany(player, { as: "players", foreignKey: "country_id" });
  team.belongsTo(country, { as: "country", foreignKey: "country_id" });
  country.hasMany(team, { as: "teams", foreignKey: "country_id" });
  user.belongsTo(country, { as: "country", foreignKey: "country_id" });
  country.hasMany(user, { as: "users", foreignKey: "country_id" });
  location_location_style.belongsTo(location_style, { as: "location_style", foreignKey: "location_style_id" });
  location_style.hasMany(location_location_style, { as: "location_location_styles", foreignKey: "location_style_id" });
  location_location_style.belongsTo(location, { as: "location", foreignKey: "location_id" });
  location.hasMany(location_location_style, { as: "location_location_styles", foreignKey: "location_id" });
  location_set_info.belongsTo(location, { as: "location", foreignKey: "location_id" });
  location.hasMany(location_set_info, { as: "location_set_infos", foreignKey: "location_id" });
  model_has_permission.belongsTo(permission, { as: "permission", foreignKey: "permission_id" });
  permission.hasMany(model_has_permission, { as: "model_has_permissions", foreignKey: "permission_id" });
  role_has_permission.belongsTo(permission, { as: "permission", foreignKey: "permission_id" });
  permission.hasMany(role_has_permission, { as: "role_has_permissions", foreignKey: "permission_id" });
  elo_1v1_cache.belongsTo(player, { as: "player", foreignKey: "player_id" });
  player.hasMany(elo_1v1_cache, { as: "elo_1v1_caches", foreignKey: "player_id" });
  player_team.belongsTo(player, { as: "player", foreignKey: "player_id" });
  player.hasMany(player_team, { as: "player_teams", foreignKey: "player_id" });
  model_has_role.belongsTo(role, { as: "role", foreignKey: "role_id" });
  role.hasMany(model_has_role, { as: "model_has_roles", foreignKey: "role_id" });
  role_has_permission.belongsTo(role, { as: "role", foreignKey: "role_id" });
  role.hasMany(role_has_permission, { as: "role_has_permissions", foreignKey: "role_id" });
  location_set_info.belongsTo(set_info, { as: "set_info", foreignKey: "set_info_id" });
  set_info.hasMany(location_set_info, { as: "location_set_infos", foreignKey: "set_info_id" });
  elo_1v1_cache.belongsTo(set, { as: "set", foreignKey: "set_id" });
  set.hasMany(elo_1v1_cache, { as: "elo_1v1_caches", foreignKey: "set_id" });
  rating_delta.belongsTo(set, { as: "set", foreignKey: "set_id" });
  set.hasMany(rating_delta, { as: "rating_delta", foreignKey: "set_id" });
  set_info.belongsTo(set, { as: "set", foreignKey: "set_id" });
  set.hasMany(set_info, { as: "set_infos", foreignKey: "set_id" });
  set.belongsTo(stageable, { as: "stageable", foreignKey: "stageable_id" });
  stageable.hasMany(set, { as: "sets", foreignKey: "stageable_id" });
  stageable.belongsTo(stage, { as: "stage", foreignKey: "stage_id" });
  stage.hasMany(stageable, { as: "stageables", foreignKey: "stage_id" });
  player_team.belongsTo(team, { as: "team", foreignKey: "team_id" });
  team.hasMany(player_team, { as: "player_teams", foreignKey: "team_id" });
  elo_1v1_cache.belongsTo(tournament, { as: "tournament", foreignKey: "tournament_id" });
  tournament.hasMany(elo_1v1_cache, { as: "elo_1v1_caches", foreignKey: "tournament_id" });
  tournament_result.belongsTo(tournament, { as: "tournament", foreignKey: "tournament_id" });
  tournament.hasMany(tournament_result, { as: "tournament_results", foreignKey: "tournament_id" });
  actionlog.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(actionlog, { as: "actionlogs", foreignKey: "user_id" });
  discord_user.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(discord_user, { as: "discord_users", foreignKey: "user_id" });
  github_user.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(github_user, { as: "github_users", foreignKey: "user_id" });
  player.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(player, { as: "players", foreignKey: "user_id" });
  session.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(session, { as: "sessions", foreignKey: "user_id" });
  steam_user.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(steam_user, { as: "steam_users", foreignKey: "user_id" });
  twitch_user.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(twitch_user, { as: "twitch_users", foreignKey: "user_id" });


  // Polymorphic Associations

  // Actionlog
  actionlog.belongsTo(achievement, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(ard_player, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(ard_team, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(atp_category, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(country, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(location, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(location_style, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(metadatum, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(news, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(player, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(review, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(set, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(stage, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(team, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(tournament, { foreignKey: "loggable_id", constraints: false });
  actionlog.belongsTo(user, { foreignKey: "loggable_id", constraints: false });
  achievement.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Achievement' } });
  ard_player.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\ArdPlayer' } });
  ard_team.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\ArdTeam' } });
  atp_category.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\AtpCategory' } });
  country.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Country' } });
  location.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Location' } });
  location_style.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\LocationStyle' } });
  metadatum.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Metadatum' } });
  news.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\News' } });
  player.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Player' } });
  review.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Review' } });
  set.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Set' } });
  stage.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Stage' } });
  team.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Team' } });
  tournament.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Tournament' } });
  user.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\User' } });

  // Metadata
  metadatum.belongsTo(tournament, { foreignKey: "metadatable_id", constraints: false });
  metadatum.belongsTo(player, { foreignKey: "metadatable_id", constraints: false });
  metadatum.belongsTo(ard_player, { foreignKey: "metadatable_id", constraints: false });
  metadatum.belongsTo(review, { foreignKey: "metadatable_id", constraints: false });

  actionlog.addHook("afterFind", findResult => {
    // If findResult is null return early
    if (findResult === null) return;

    if (!Array.isArray(findResult)) findResult = [findResult] as Model<IActionlogAttributes, ActionlogCreationAttributes>[];
    for (const instance of findResult) {
      console.log(instance.uniqno);
      match(instance.loggable_type)
        .with("achievement", () => instance.loggable_type = instance.achievement)
        .with("ard_player", () => instance.loggable_type = instance.ard_player)
        .with("ard_team", () => instance.loggable_type = instance.ard_team)
        .with("atp_category", () => instance.loggable_type = instance.atp_category)
        .with("country", () => instance.loggable_type = instance.country)
        .with("location", () => instance.loggable_type = instance.location)
        .with("location_style", () => instance.loggable_type = instance.location_style)
        .with("metadatum", () => instance.loggable_type = instance.metadatum)
        .with("news", () => instance.loggable_type = instance.news)
        .with("player", () => instance.loggable_type = instance.player)
        .with("review", () => instance.loggable_type = instance.review)
        .with("set", () => instance.loggable_type = instance.set)
        .with("stage", () => instance.loggable_type = instance.stage)
        .with("team", () => instance.loggable_type = instance.team)
        .with("tournament", () => instance.loggable_type = instance.tournament)
        .with("user", () => instance.loggable_type = instance.user)
        .otherwise(() => instance.loggable_type = null)
        // .exhaustive() => doesn't work, check!
        ;
    }

    // TODO!: Needed?
    // To prevent mistakes:
    // delete instance.image;
    // delete instance.dataValues.image;
    // delete instance.video;
    // delete instance.dataValues.video;

  });


  return {
    achievable: achievable,
    achievement: achievement,
    actionlog: actionlog,
    action: action,
    ard_player_ard_team: ard_player_ard_team,
    ard_player: ard_player,
    ard_team: ard_team,
    atp_category: atp_category,
    cache: cache,
    cache_lock: cache_lock,
    cache_most_visited: cache_most_visited,
    country: country,
    discord_user: discord_user,
    elo_1v1_cache: elo_1v1_cache,
    extern_de_cache: extern_de_cache,
    extern_voobly_cache: extern_voobly_cache,
    extern_voobly_player_cache: extern_voobly_player_cache,
    failed_job: failed_job,
    github_user: github_user,
    job: job,
    location_location_style: location_location_style,
    location_set_info: location_set_info,
    location_style: location_style,
    location: location,
    meta_cache: meta_cache,
    metadatum: metadatum,
    migrationlog: migrationlog,
    migration: migration,
    model_has_permission: model_has_permission,
    model_has_role: model_has_role,
    news: news,
    password_reset_token: password_reset_token,
    permission: permission,
    personal_access_token: personal_access_token,
    player_team: player_team,
    player: player,
    rating_checkpoint: rating_checkpoint,
    rating_delta: rating_delta,
    review: review,
    role_has_permission: role_has_permission,
    role: role,
    session: session,
    set_info: set_info,
    set: set,
    stage_tournament_template: stage_tournament_template,
    stageable: stageable,
    stage: stage,
    steam_user: steam_user,
    team: team,
    telemetry: telemetry,
    tournament_result: tournament_result,
    tournament: tournament,
    twitch_user: twitch_user,
    user: user,
  };
}
