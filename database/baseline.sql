-- CreateTable
CREATE TABLE "achievables" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "achievable_id" INTEGER NOT NULL,
    "achievable_type" TEXT NOT NULL,
    "achievement_id" INTEGER,
    "hidden" tinyint(1) NOT NULL DEFAULT '0',
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "achievables_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "achievements" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "achievements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_short" TEXT,
    "description" TEXT,
    "image_path" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "actionlog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "action_id" INTEGER NOT NULL,
    "summary" TEXT,
    "loggable_id" INTEGER,
    "loggable_type" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "actionlog_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "actions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "actionlog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "actions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "ard_player_ard_team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ard_player_id" INTEGER,
    "ard_team_id" INTEGER,
    "is_active" tinyint(1) NOT NULL DEFAULT '1',
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "ard_player_ard_team_ard_team_id_fkey" FOREIGN KEY ("ard_team_id") REFERENCES "ard_teams" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "ard_player_ard_team_ard_player_id_fkey" FOREIGN KEY ("ard_player_id") REFERENCES "ard_players" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "ard_players" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "country_id" INTEGER,
    "aoeelo_id" INTEGER,
    "esports_earnings" INTEGER,
    "liquipedia_handle" TEXT,
    "discord_id" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "ard_players_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "ard_teams" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "atp_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" INTEGER NOT NULL,
    "sub_category" TEXT NOT NULL,
    "base_value" INTEGER,
    "modifier" INTEGER NOT NULL DEFAULT 10,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "cache" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL,
    "expiration" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "cache_locks" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "owner" TEXT NOT NULL,
    "expiration" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "cache_most_visited" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "page" TEXT NOT NULL,
    "entity_id" INTEGER,
    "visits" INTEGER NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "countries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "capital" TEXT,
    "citizenship" TEXT,
    "country_code" TEXT NOT NULL DEFAULT '',
    "currency" TEXT,
    "currency_code" TEXT,
    "currency_sub_unit" TEXT,
    "currency_symbol" TEXT,
    "currency_decimals" INTEGER,
    "full_name" TEXT,
    "iso_3166_2" TEXT NOT NULL DEFAULT '',
    "iso_3166_3" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "region_code" TEXT NOT NULL DEFAULT '',
    "sub_region_code" TEXT NOT NULL DEFAULT '',
    "eea" tinyint(1) NOT NULL DEFAULT '0',
    "calling_code" TEXT,
    "flag" TEXT
);

-- CreateTable
CREATE TABLE "discord_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "discord_id" TEXT NOT NULL,
    "nickname" TEXT,
    "name" TEXT,
    "email" TEXT,
    "avatar" TEXT,
    "user_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "discord_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "elo_1v1_cache" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL DEFAULT 'match',
    "elo_before" INTEGER NOT NULL,
    "elo_after" INTEGER NOT NULL,
    "match_time" DATETIME NOT NULL,
    "player_id" INTEGER NOT NULL,
    "tournament_id" INTEGER,
    "set_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    CONSTRAINT "elo_1v1_cache_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "sets" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "elo_1v1_cache_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "tournaments" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "elo_1v1_cache_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "extern_de_cache" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "relic_link_id" TEXT,
    "rating" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "extern_voobly_cache" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "voobly_id" INTEGER NOT NULL,
    "ladder" INTEGER NOT NULL DEFAULT 1,
    "rating" INTEGER NOT NULL,
    "rank" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "extern_voobly_player_cache" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "voobly_id" INTEGER NOT NULL,
    "rm_1v1" INTEGER NOT NULL,
    "rm_tg" INTEGER NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "failed_jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "connection" TEXT NOT NULL,
    "queue" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "exception" TEXT NOT NULL,
    "failed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "github_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "github_id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "github_token" TEXT,
    "github_refresh_token" TEXT,
    "user_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "github_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "queue" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL,
    "reserved_at" INTEGER,
    "available_at" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "location_location_styles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location_id" INTEGER,
    "location_style_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "location_location_styles_location_style_id_fkey" FOREIGN KEY ("location_style_id") REFERENCES "location_styles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "location_location_styles_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "location_set_info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "set_info_id" INTEGER,
    "location_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "location_set_info_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "location_set_info_set_info_id_fkey" FOREIGN KEY ("set_info_id") REFERENCES "set_info" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "location_styles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "style" TEXT NOT NULL,
    "weight" INTEGER DEFAULT 10,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "locations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_short" TEXT,
    "liquipedia_link" TEXT,
    "aoe2map_link" TEXT,
    "aoe2map_uuid" TEXT,
    "image_path" TEXT,
    "preview_image_path" TEXT,
    "keywords" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "meta_cache" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" INTEGER NOT NULL,
    "value_int" INTEGER NOT NULL,
    "value_float" REAL NOT NULL,
    "value_str" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "metadata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "sub_key" TEXT,
    "type_of_value" TEXT NOT NULL,
    "boolean_value" tinyint(1),
    "integer_value" INTEGER,
    "smallint_value" INTEGER,
    "datetime_value" DATETIME,
    "str50_value" TEXT,
    "str100_value" TEXT,
    "str255_value" TEXT,
    "text_value" TEXT,
    "json_value" TEXT,
    "metadatable_id" INTEGER NOT NULL,
    "metadatable_type" TEXT NOT NULL,
    "is_verified" tinyint(1) NOT NULL DEFAULT '0',
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "migrationlog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "migratory_id" INTEGER NOT NULL,
    "migratory_type" TEXT NOT NULL,
    "save_confirmed" tinyint(1) DEFAULT '0',
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "migration" TEXT NOT NULL,
    "batch" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "model_has_permissions" (
    "permission_id" INTEGER NOT NULL,
    "model_type" TEXT NOT NULL,
    "model_id" INTEGER NOT NULL,

    PRIMARY KEY ("permission_id", "model_id", "model_type"),
    CONSTRAINT "model_has_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permissions" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "model_has_roles" (
    "role_id" INTEGER NOT NULL,
    "model_type" TEXT NOT NULL,
    "model_id" INTEGER NOT NULL,

    PRIMARY KEY ("role_id", "model_id", "model_type"),
    CONSTRAINT "model_has_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "news" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "pinned" tinyint(1) NOT NULL DEFAULT '0',
    "abstract" TEXT,
    "content" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "created_at" DATETIME
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "guard_name" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "personal_access_tokens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tokenable_type" TEXT NOT NULL,
    "tokenable_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "abilities" TEXT,
    "last_used_at" DATETIME,
    "expires_at" DATETIME,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "player_team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "joined_at" DATETIME,
    "left_at" DATETIME,
    "is_active" tinyint(1) DEFAULT '1',
    "player_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "player_team_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "player_team_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "current_elo" INTEGER,
    "base_elo" INTEGER NOT NULL DEFAULT 1800,
    "current_atp" INTEGER,
    "base_atp" INTEGER NOT NULL DEFAULT 1800,
    "voobly_id_main" TEXT,
    "relic_link_id_main" TEXT,
    "steam_id_main" TEXT,
    "liquipedia_handle" TEXT,
    "discord_handle" TEXT,
    "twitch_handle" TEXT,
    "aoe_reference_data_player_id" INTEGER,
    "country_id" INTEGER,
    "user_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "players_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "players_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "players_aoe_reference_data_player_id_fkey" FOREIGN KEY ("aoe_reference_data_player_id") REFERENCES "ard_players" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "rating_checkpoints" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "participant_id" INTEGER NOT NULL,
    "participant_type" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "valid_period_start" DATETIME NOT NULL,
    "valid_period_end" DATETIME NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "rating_deltas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "participant_id" INTEGER NOT NULL,
    "participant_type" TEXT NOT NULL,
    "set_id" INTEGER NOT NULL,
    "rating_delta" INTEGER NOT NULL DEFAULT 0,
    "date_delta" DATETIME NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "rating_deltas_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "sets" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "changes" TEXT NOT NULL,
    "status" TEXT DEFAULT 'open',
    "reviewable_id" INTEGER NOT NULL,
    "reviewable_type" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "role_has_permissions" (
    "permission_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    PRIMARY KEY ("permission_id", "role_id"),
    CONSTRAINT "role_has_permissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT "role_has_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permissions" ("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "guard_name" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" INTEGER,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "payload" TEXT NOT NULL,
    "last_activity" INTEGER NOT NULL,
    CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "set_info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "score" INTEGER NOT NULL,
    "is_winner" tinyint(1) NOT NULL DEFAULT '0',
    "adjusted_score" INTEGER NOT NULL,
    "participatory_id" INTEGER NOT NULL,
    "participatory_type" TEXT NOT NULL,
    "set_id" INTEGER NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "set_info_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "sets" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "sets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "is_tie" tinyint(1) NOT NULL DEFAULT '0',
    "has_admin_win" tinyint(1) NOT NULL DEFAULT '0',
    "played_at" DATETIME,
    "use_played_at_dummy" tinyint(1) NOT NULL DEFAULT '0',
    "best_of" INTEGER,
    "aoe2cm2_civ_draft_link" TEXT,
    "aoe2cm2_map_draft_link" TEXT,
    "stageable_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "sets_stageable_id_fkey" FOREIGN KEY ("stageable_id") REFERENCES "stageables" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "stage_tournament_templates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "stageables" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stage_order" INTEGER,
    "stageable_id" INTEGER NOT NULL,
    "stageable_type" TEXT NOT NULL,
    "stage_id" INTEGER NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "stageables_stage_id_fkey" FOREIGN KEY ("stage_id") REFERENCES "stages" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "stages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "bracket" INTEGER NOT NULL DEFAULT 1,
    "default_order" INTEGER NOT NULL DEFAULT 1,
    "weight" INTEGER NOT NULL DEFAULT 10,
    "importance" INTEGER NOT NULL DEFAULT 1,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME
);

-- CreateTable
CREATE TABLE "steam_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "steam_id" TEXT NOT NULL,
    "nickname" TEXT,
    "name" TEXT,
    "avatar" TEXT,
    "user_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "steam_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "current_elo" INTEGER,
    "base_elo" INTEGER NOT NULL DEFAULT 1800,
    "current_atp" INTEGER,
    "base_atp" INTEGER NOT NULL DEFAULT 1800,
    "primary_color" TEXT,
    "secondary_color" TEXT,
    "aoe_reference_data_team_id" INTEGER,
    "country_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "teams_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "teams_aoe_reference_data_team_id_fkey" FOREIGN KEY ("aoe_reference_data_team_id") REFERENCES "ard_teams" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "telemetry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "tournament_results" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" INTEGER,
    "prize_amount" INTEGER,
    "prize_currency" INTEGER NOT NULL DEFAULT 1,
    "source" TEXT,
    "participatory_id" INTEGER NOT NULL,
    "participatory_type" TEXT NOT NULL,
    "tournament_id" INTEGER NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "tournament_results_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "tournaments" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "tournaments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "started_at" DATETIME,
    "ended_at" DATETIME,
    "weight" INTEGER NOT NULL DEFAULT 1,
    "game_mode" INTEGER NOT NULL DEFAULT 1,
    "format_type" INTEGER NOT NULL DEFAULT 1,
    "event_type" INTEGER NOT NULL DEFAULT 1,
    "prize_pool" INTEGER,
    "prize_currency" INTEGER NOT NULL DEFAULT 1,
    "structure" INTEGER NOT NULL DEFAULT 1,
    "evaluation" TEXT,
    "website_link" TEXT,
    "liquipedia_link" TEXT,
    "atp_category_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "tournaments_atp_category_id_fkey" FOREIGN KEY ("atp_category_id") REFERENCES "atp_categories" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "twitch_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "twitch_id" TEXT NOT NULL,
    "nickname" TEXT,
    "name" TEXT,
    "email" TEXT,
    "avatar" TEXT,
    "user_id" INTEGER,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "twitch_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "country_id" INTEGER,
    "remember_token" TEXT,
    "created_at" DATETIME,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    CONSTRAINT "users_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
CREATE UNIQUE INDEX "achievables_achievement_id_achievable_id_achievable_type_unique" ON "achievables"("achievement_id", "achievable_id", "achievable_type");

-- CreateIndex
CREATE UNIQUE INDEX "achievements_name_name_short_image_path_unique" ON "achievements"("name", "name_short", "image_path");

-- CreateIndex
CREATE UNIQUE INDEX "actionlog_user_id_loggable_id_loggable_type_created_at_updated_at_unique" ON "actionlog"("user_id", "loggable_id", "loggable_type", "created_at", "updated_at");

-- CreateIndex
CREATE UNIQUE INDEX "ard_player_ard_team_ard_team_id_ard_player_id_unique" ON "ard_player_ard_team"("ard_team_id", "ard_player_id");

-- CreateIndex
CREATE UNIQUE INDEX "ard_players_id_unique" ON "ard_players"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ard_players_aoeelo_id_unique" ON "ard_players"("aoeelo_id");

-- CreateIndex
CREATE UNIQUE INDEX "ard_players_esports_earnings_unique" ON "ard_players"("esports_earnings");

-- CreateIndex
CREATE UNIQUE INDEX "ard_players_liquipedia_handle_unique" ON "ard_players"("liquipedia_handle");

-- CreateIndex
CREATE UNIQUE INDEX "ard_players_discord_id_unique" ON "ard_players"("discord_id");

-- CreateIndex
CREATE UNIQUE INDEX "ard_teams_id_unique" ON "ard_teams"("id");

-- CreateIndex
CREATE UNIQUE INDEX "atp_categories_category_sub_category_unique" ON "atp_categories"("category", "sub_category");

-- CreateIndex
CREATE INDEX "countries_id_index" ON "countries"("id");

-- CreateIndex
CREATE UNIQUE INDEX "discord_users_discord_id_unique" ON "discord_users"("discord_id");

-- CreateIndex
CREATE UNIQUE INDEX "discord_users_email_unique" ON "discord_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "discord_users_user_id_discord_id_unique" ON "discord_users"("user_id", "discord_id");

-- CreateIndex
CREATE UNIQUE INDEX "failed_jobs_uuid_unique" ON "failed_jobs"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "github_users_github_id_unique" ON "github_users"("github_id");

-- CreateIndex
CREATE UNIQUE INDEX "github_users_user_id_github_id_unique" ON "github_users"("user_id", "github_id");

-- CreateIndex
CREATE INDEX "jobs_queue_index" ON "jobs"("queue");

-- CreateIndex
CREATE UNIQUE INDEX "location_location_styles_location_id_location_style_id_unique" ON "location_location_styles"("location_id", "location_style_id");

-- CreateIndex
CREATE UNIQUE INDEX "locations_name_name_short_image_path_preview_image_path_unique" ON "locations"("name", "name_short", "image_path", "preview_image_path");

-- CreateIndex
CREATE UNIQUE INDEX "metadata_metadatable_id_metadatable_type_key_sub_key_type_of_value_unique" ON "metadata"("metadatable_id", "metadatable_type", "key", "sub_key", "type_of_value");

-- CreateIndex
CREATE INDEX "model_has_permissions_model_id_model_type_index" ON "model_has_permissions"("model_id", "model_type");

-- CreateIndex
CREATE INDEX "model_has_roles_model_id_model_type_index" ON "model_has_roles"("model_id", "model_type");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_guard_name_unique" ON "permissions"("name", "guard_name");

-- CreateIndex
CREATE UNIQUE INDEX "personal_access_tokens_token_unique" ON "personal_access_tokens"("token");

-- CreateIndex
CREATE INDEX "personal_access_tokens_tokenable_type_tokenable_id_index" ON "personal_access_tokens"("tokenable_type", "tokenable_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_team_player_id_team_id_joined_at_left_at_unique" ON "player_team"("player_id", "team_id", "joined_at", "left_at");

-- CreateIndex
CREATE UNIQUE INDEX "players_voobly_id_main_unique" ON "players"("voobly_id_main");

-- CreateIndex
CREATE UNIQUE INDEX "players_relic_link_id_main_unique" ON "players"("relic_link_id_main");

-- CreateIndex
CREATE UNIQUE INDEX "players_steam_id_main_unique" ON "players"("steam_id_main");

-- CreateIndex
CREATE UNIQUE INDEX "players_liquipedia_handle_unique" ON "players"("liquipedia_handle");

-- CreateIndex
CREATE UNIQUE INDEX "players_discord_handle_unique" ON "players"("discord_handle");

-- CreateIndex
CREATE UNIQUE INDEX "players_twitch_handle_unique" ON "players"("twitch_handle");

-- CreateIndex
CREATE UNIQUE INDEX "players_name_user_id_country_id_relic_link_id_main_steam_id_main_unique" ON "players"("name", "user_id", "country_id", "relic_link_id_main", "steam_id_main");

-- CreateIndex
CREATE UNIQUE INDEX "rating_checkpoints_participant_id_participant_type_valid_period_start_valid_period_end_unique" ON "rating_checkpoints"("participant_id", "participant_type", "valid_period_start", "valid_period_end");

-- CreateIndex
CREATE UNIQUE INDEX "rating_deltas_participant_id_participant_type_set_id_unique" ON "rating_deltas"("participant_id", "participant_type", "set_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_guard_name_unique" ON "roles"("name", "guard_name");

-- CreateIndex
CREATE INDEX "sessions_last_activity_index" ON "sessions"("last_activity");

-- CreateIndex
CREATE UNIQUE INDEX "set_info_set_id_participatory_id_participatory_type_unique" ON "set_info"("set_id", "participatory_id", "participatory_type");

-- CreateIndex
CREATE UNIQUE INDEX "sets_aoe2cm2_civ_draft_link_unique" ON "sets"("aoe2cm2_civ_draft_link");

-- CreateIndex
CREATE UNIQUE INDEX "sets_aoe2cm2_map_draft_link_unique" ON "sets"("aoe2cm2_map_draft_link");

-- CreateIndex
CREATE UNIQUE INDEX "stage_tournament_templates_name_short_name_unique" ON "stage_tournament_templates"("name", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "stageables_stage_id_stageable_id_stageable_type_unique" ON "stageables"("stage_id", "stageable_id", "stageable_type");

-- CreateIndex
CREATE UNIQUE INDEX "stages_name_bracket_default_order_weight_importance_unique" ON "stages"("name", "bracket", "default_order", "weight", "importance");

-- CreateIndex
CREATE UNIQUE INDEX "steam_users_steam_id_unique" ON "steam_users"("steam_id");

-- CreateIndex
CREATE UNIQUE INDEX "steam_users_user_id_steam_id_unique" ON "steam_users"("user_id", "steam_id");

-- CreateIndex
CREATE UNIQUE INDEX "teams_name_tag_unique" ON "teams"("name", "tag");

-- CreateIndex
CREATE UNIQUE INDEX "tournaments_name_atp_category_id_liquipedia_link_short_name_unique" ON "tournaments"("name", "atp_category_id", "liquipedia_link", "short_name");

-- CreateIndex
CREATE UNIQUE INDEX "twitch_users_twitch_id_unique" ON "twitch_users"("twitch_id");

-- CreateIndex
CREATE UNIQUE INDEX "twitch_users_user_id_twitch_id_unique" ON "twitch_users"("user_id", "twitch_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_unique" ON "users"("email");

