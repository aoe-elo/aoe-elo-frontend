import type { Sequelize } from "sequelize";
import { achievable as _achievable } from "./achievable";
import type { achievableAttributes, achievableCreationAttributes } from "./achievable";
import { achievement as _achievement } from "./achievement";
import type { achievementAttributes, achievementCreationAttributes } from "./achievement";
import { actionlog as _actionlog } from "./actionlog";
import type { actionlogAttributes, actionlogCreationAttributes } from "./actionlog";
import { action as _action } from "./action";
import type { actionAttributes, actionCreationAttributes } from "./action";
import { ard_player_ard_team as _ard_player_ard_team } from "./ard_player_ard_team";
import type { ard_player_ard_teamAttributes, ard_player_ard_teamCreationAttributes } from "./ard_player_ard_team";
import { ard_player as _ard_player } from "./ard_player";
import type { ard_playerAttributes, ard_playerCreationAttributes } from "./ard_player";
import { ard_team as _ard_team } from "./ard_team";
import type { ard_teamAttributes, ard_teamCreationAttributes } from "./ard_team";
import { atp_category as _atp_category } from "./atp_category";
import type { atp_categoryAttributes, atp_categoryCreationAttributes } from "./atp_category";
import { cache as _cache } from "./cache";
import type { cacheAttributes, cacheCreationAttributes } from "./cache";
import { cache_lock as _cache_lock } from "./cache_lock";
import type { cache_lockAttributes, cache_lockCreationAttributes } from "./cache_lock";
import { cache_most_visited as _cache_most_visited } from "./cache_most_visited";
import type { cache_most_visitedAttributes, cache_most_visitedCreationAttributes } from "./cache_most_visited";
import { country as _country } from "./country";
import type { countryAttributes, countryCreationAttributes } from "./country";
import { discord_user as _discord_user } from "./discord_user";
import type { discord_userAttributes, discord_userCreationAttributes } from "./discord_user";
import { elo_1v1_cache as _elo_1v1_cache } from "./elo_1v1_cache";
import type { elo_1v1_cacheAttributes, elo_1v1_cacheCreationAttributes } from "./elo_1v1_cache";
import { extern_de_cache as _extern_de_cache } from "./extern_de_cache";
import type { extern_de_cacheAttributes, extern_de_cacheCreationAttributes } from "./extern_de_cache";
import { extern_voobly_cache as _extern_voobly_cache } from "./extern_voobly_cache";
import type { extern_voobly_cacheAttributes, extern_voobly_cacheCreationAttributes } from "./extern_voobly_cache";
import { extern_voobly_player_cache as _extern_voobly_player_cache } from "./extern_voobly_player_cache";
import type { extern_voobly_player_cacheAttributes, extern_voobly_player_cacheCreationAttributes } from "./extern_voobly_player_cache";
import { failed_job as _failed_job } from "./failed_job";
import type { failed_jobAttributes, failed_jobCreationAttributes } from "./failed_job";
import { github_user as _github_user } from "./github_user";
import type { github_userAttributes, github_userCreationAttributes } from "./github_user";
import { job as _job } from "./job";
import type { jobAttributes, jobCreationAttributes } from "./job";
import { location_location_style as _location_location_style } from "./location_location_style";
import type { location_location_styleAttributes, location_location_styleCreationAttributes } from "./location_location_style";
import { location_set_info as _location_set_info } from "./location_set_info";
import type { location_set_infoAttributes, location_set_infoCreationAttributes } from "./location_set_info";
import { location_style as _location_style } from "./location_style";
import type { location_styleAttributes, location_styleCreationAttributes } from "./location_style";
import { location as _location } from "./location";
import type { locationAttributes, locationCreationAttributes } from "./location";
import { meta_cache as _meta_cache } from "./meta_cache";
import type { meta_cacheAttributes, meta_cacheCreationAttributes } from "./meta_cache";
import { metadatum as _metadatum } from "./metadatum";
import type { metadatumAttributes, metadatumCreationAttributes } from "./metadatum";
import { migrationlog as _migrationlog } from "./migrationlog";
import type { migrationlogAttributes, migrationlogCreationAttributes } from "./migrationlog";
import { migration as _migration } from "./migration";
import type { migrationAttributes, migrationCreationAttributes } from "./migration";
import { model_has_permission as _model_has_permission } from "./model_has_permission";
import type { model_has_permissionAttributes, model_has_permissionCreationAttributes } from "./model_has_permission";
import { model_has_role as _model_has_role } from "./model_has_role";
import type { model_has_roleAttributes, model_has_roleCreationAttributes } from "./model_has_role";
import { news as _news } from "./news";
import type { newsAttributes, newsCreationAttributes } from "./news";
import { password_reset_token as _password_reset_token } from "./password_reset_token";
import type { password_reset_tokenAttributes, password_reset_tokenCreationAttributes } from "./password_reset_token";
import { permission as _permission } from "./permission";
import type { permissionAttributes, permissionCreationAttributes } from "./permission";
import { personal_access_token as _personal_access_token } from "./personal_access_token";
import type { personal_access_tokenAttributes, personal_access_tokenCreationAttributes } from "./personal_access_token";
import { player_team as _player_team } from "./player_team";
import type { player_teamAttributes, player_teamCreationAttributes } from "./player_team";
import { player as _player } from "./player";
import type { playerAttributes, playerCreationAttributes } from "./player";
import { rating_checkpoint as _rating_checkpoint } from "./rating_checkpoint";
import type { rating_checkpointAttributes, rating_checkpointCreationAttributes } from "./rating_checkpoint";
import { rating_delta as _rating_delta } from "./rating_delta";
import type { rating_deltaAttributes, rating_deltaCreationAttributes } from "./rating_delta";
import { review as _review } from "./review";
import type { reviewAttributes, reviewCreationAttributes } from "./review";
import { role_has_permission as _role_has_permission } from "./role_has_permission";
import type { role_has_permissionAttributes, role_has_permissionCreationAttributes } from "./role_has_permission";
import { role as _role } from "./role";
import type { roleAttributes, roleCreationAttributes } from "./role";
import { session as _session } from "./session";
import type { sessionAttributes, sessionCreationAttributes } from "./session";
import { set_info as _set_info } from "./set_info";
import type { set_infoAttributes, set_infoCreationAttributes } from "./set_info";
import { set as _set } from "./set";
import type { setAttributes, setCreationAttributes } from "./set";
import { stage_tournament_template as _stage_tournament_template } from "./stage_tournament_template";
import type { stage_tournament_templateAttributes, stage_tournament_templateCreationAttributes } from "./stage_tournament_template";
import { stageable as _stageable } from "./stageable";
import type { stageableAttributes, stageableCreationAttributes } from "./stageable";
import { stage as _stage } from "./stage";
import type { stageAttributes, stageCreationAttributes } from "./stage";
import { steam_user as _steam_user } from "./steam_user";
import type { steam_userAttributes, steam_userCreationAttributes } from "./steam_user";
import { team as _team } from "./team";
import type { teamAttributes, teamCreationAttributes } from "./team";
import { telemetry as _telemetry } from "./telemetry";
import type { telemetryAttributes, telemetryCreationAttributes } from "./telemetry";
import { tournament_result as _tournament_result } from "./tournament_result";
import type { tournament_resultAttributes, tournament_resultCreationAttributes } from "./tournament_result";
import { tournament as _tournament } from "./tournament";
import type { tournamentAttributes, tournamentCreationAttributes } from "./tournament";
import { twitch_user as _twitch_user } from "./twitch_user";
import type { twitch_userAttributes, twitch_userCreationAttributes } from "./twitch_user";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";

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
  achievableAttributes,
  achievableCreationAttributes,
  achievementAttributes,
  achievementCreationAttributes,
  actionlogAttributes,
  actionlogCreationAttributes,
  actionAttributes,
  actionCreationAttributes,
  ard_player_ard_teamAttributes,
  ard_player_ard_teamCreationAttributes,
  ard_playerAttributes,
  ard_playerCreationAttributes,
  ard_teamAttributes,
  ard_teamCreationAttributes,
  atp_categoryAttributes,
  atp_categoryCreationAttributes,
  cacheAttributes,
  cacheCreationAttributes,
  cache_lockAttributes,
  cache_lockCreationAttributes,
  cache_most_visitedAttributes,
  cache_most_visitedCreationAttributes,
  countryAttributes,
  countryCreationAttributes,
  discord_userAttributes,
  discord_userCreationAttributes,
  elo_1v1_cacheAttributes,
  elo_1v1_cacheCreationAttributes,
  extern_de_cacheAttributes,
  extern_de_cacheCreationAttributes,
  extern_voobly_cacheAttributes,
  extern_voobly_cacheCreationAttributes,
  extern_voobly_player_cacheAttributes,
  extern_voobly_player_cacheCreationAttributes,
  failed_jobAttributes,
  failed_jobCreationAttributes,
  github_userAttributes,
  github_userCreationAttributes,
  jobAttributes,
  jobCreationAttributes,
  location_location_styleAttributes,
  location_location_styleCreationAttributes,
  location_set_infoAttributes,
  location_set_infoCreationAttributes,
  location_styleAttributes,
  location_styleCreationAttributes,
  locationAttributes,
  locationCreationAttributes,
  meta_cacheAttributes,
  meta_cacheCreationAttributes,
  metadatumAttributes,
  metadatumCreationAttributes,
  migrationlogAttributes,
  migrationlogCreationAttributes,
  migrationAttributes,
  migrationCreationAttributes,
  model_has_permissionAttributes,
  model_has_permissionCreationAttributes,
  model_has_roleAttributes,
  model_has_roleCreationAttributes,
  newsAttributes,
  newsCreationAttributes,
  password_reset_tokenAttributes,
  password_reset_tokenCreationAttributes,
  permissionAttributes,
  permissionCreationAttributes,
  personal_access_tokenAttributes,
  personal_access_tokenCreationAttributes,
  player_teamAttributes,
  player_teamCreationAttributes,
  playerAttributes,
  playerCreationAttributes,
  rating_checkpointAttributes,
  rating_checkpointCreationAttributes,
  rating_deltaAttributes,
  rating_deltaCreationAttributes,
  reviewAttributes,
  reviewCreationAttributes,
  role_has_permissionAttributes,
  role_has_permissionCreationAttributes,
  roleAttributes,
  roleCreationAttributes,
  sessionAttributes,
  sessionCreationAttributes,
  set_infoAttributes,
  set_infoCreationAttributes,
  setAttributes,
  setCreationAttributes,
  stage_tournament_templateAttributes,
  stage_tournament_templateCreationAttributes,
  stageableAttributes,
  stageableCreationAttributes,
  stageAttributes,
  stageCreationAttributes,
  steam_userAttributes,
  steam_userCreationAttributes,
  teamAttributes,
  teamCreationAttributes,
  telemetryAttributes,
  telemetryCreationAttributes,
  tournament_resultAttributes,
  tournament_resultCreationAttributes,
  tournamentAttributes,
  tournamentCreationAttributes,
  twitch_userAttributes,
  twitch_userCreationAttributes,
  userAttributes,
  userCreationAttributes,
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
