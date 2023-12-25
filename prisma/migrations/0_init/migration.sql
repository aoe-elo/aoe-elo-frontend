-- CreateTable
CREATE TABLE `cache_most_visited` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `day` DATE NOT NULL,
    `page` TEXT NOT NULL,
    `entity_id` INTEGER UNSIGNED NULL,
    `visits` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `iso_key` VARCHAR(10) NOT NULL,
    `name` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `elo_1v1_cache` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `type` VARCHAR(255) NOT NULL DEFAULT 'match',
    `match_id` INTEGER UNSIGNED NULL,
    `player_id` INTEGER UNSIGNED NOT NULL,
    `elo_before` INTEGER UNSIGNED NOT NULL,
    `elo_after` INTEGER UNSIGNED NOT NULL,
    `match_time` DATE NOT NULL,
    `tournament_id` INTEGER UNSIGNED NULL,

    INDEX `match_id`(`match_id`),
    INDEX `match_time`(`match_time`),
    INDEX `player_id`(`player_id`),
    INDEX `tournament_id`(`tournament_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `extern_de_cache` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `steam_id` VARCHAR(40) NOT NULL,
    `time` DATETIME(0) NOT NULL,
    `rating` INTEGER UNSIGNED NOT NULL,
    `rank` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `extern_voobly_cache` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `voobly_id` INTEGER UNSIGNED NOT NULL,
    `ladder` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `rating` INTEGER UNSIGNED NOT NULL,
    `ranking` INTEGER UNSIGNED NULL,
    `time` DATETIME(0) NOT NULL,

    INDEX `voobly_id`(`voobly_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `extern_voobly_player_cache` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `voobly_id` INTEGER UNSIGNED NOT NULL,
    `rm_1v1` INTEGER UNSIGNED NOT NULL,
    `rm_tg` INTEGER UNSIGNED NOT NULL,
    `time` DATETIME(0) NOT NULL,

    INDEX `voobly_id`(`voobly_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match_1v1` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATE NULL,
    `tournament_id` INTEGER UNSIGNED NULL,
    `stage_id` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `player_1_id` INTEGER UNSIGNED NOT NULL,
    `player_2_id` INTEGER UNSIGNED NOT NULL,
    `score_1` INTEGER UNSIGNED NOT NULL,
    `score_2` INTEGER UNSIGNED NOT NULL,
    `create_user` INTEGER UNSIGNED NOT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `update_user` INTEGER UNSIGNED NOT NULL,
    `update_time` DATETIME(0) NOT NULL,

    INDEX `created_user`(`create_user`),
    INDEX `date`(`date`, `tournament_id`, `player_1_id`, `player_2_id`),
    INDEX `stage_id`(`stage_id`),
    INDEX `update_user`(`update_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `match_1v1_event` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATE NULL,
    `time` TIME(0) NULL,
    `tournament_id` INTEGER UNSIGNED NOT NULL,
    `stage_id` INTEGER UNSIGNED NOT NULL,
    `player_1_id` INTEGER UNSIGNED NULL,
    `player_2_id` INTEGER UNSIGNED NULL,
    `bo` INTEGER UNSIGNED NULL,
    `create_user` INTEGER UNSIGNED NOT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `update_user` INTEGER UNSIGNED NOT NULL,
    `update_time` DATETIME(0) NOT NULL,

    INDEX `create_user`(`create_user`),
    INDEX `stage_id`(`stage_id`),
    INDEX `tournament_id`(`player_1_id`, `player_2_id`),
    INDEX `tournament_id_2`(`tournament_id`),
    INDEX `update_user`(`update_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `meta_cache` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` INTEGER NOT NULL,
    `value_int` INTEGER NOT NULL,
    `value_float` DOUBLE NOT NULL,
    `value_str` TEXT NOT NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page_ip_info` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `time` DATETIME(0) NOT NULL,
    `ip` BIGINT NULL,
    `data` TEXT NULL,
    `longitude` DOUBLE NULL,
    `latitude` DOUBLE NULL,
    `country` VARCHAR(100) NULL,
    `country_code` VARCHAR(10) NULL,
    `city` TEXT NULL,
    `error` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `page_visit` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `time` DATETIME(0) NOT NULL,
    `session_key` VARCHAR(255) NULL,
    `hash` VARCHAR(100) NULL,
    `user` INTEGER UNSIGNED NULL,
    `ip` BIGINT NULL,
    `ip_info` INTEGER UNSIGNED NULL,
    `domain` VARCHAR(100) NULL,
    `path` TEXT NULL,
    `page` VARCHAR(255) NULL,
    `entity_id` INTEGER UNSIGNED NULL,

    INDEX `ip_info`(`ip_info`),
    INDEX `page`(`page`, `entity_id`),
    INDEX `session_key`(`session_key`),
    INDEX `user`(`user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `alias` VARCHAR(255) NOT NULL,
    `team_id` INTEGER UNSIGNED NULL,
    `country_key` VARCHAR(10) NULL,
    `initial_elo_1v1` INTEGER UNSIGNED NULL,
    `voobly_id` INTEGER UNSIGNED NULL,
    `steam_id` VARCHAR(40) NULL,
    `steam_id_failed` VARCHAR(40) NULL,
    `twitch` TEXT NULL,
    `youtube` TEXT NULL,
    `twitter` TEXT NULL,
    `facebook` TEXT NULL,
    `create_user` INTEGER UNSIGNED NOT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `update_user` INTEGER UNSIGNED NOT NULL,
    `update_time` DATETIME(0) NOT NULL,

    UNIQUE INDEX `name`(`name`),
    INDEX `create_user`(`create_user`),
    INDEX `team_id`(`team_id`),
    INDEX `update_user`(`update_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_bak` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `alias` VARCHAR(255) NOT NULL,
    `team_id` INTEGER UNSIGNED NULL,
    `country_key` VARCHAR(10) NULL,
    `initial_elo_1v1` INTEGER UNSIGNED NULL,
    `voobly_id` INTEGER UNSIGNED NULL,
    `steam_id` VARCHAR(40) NULL,
    `steam_id_failed` VARCHAR(40) NULL,
    `twitch` TEXT NULL,
    `youtube` TEXT NULL,
    `twitter` TEXT NULL,
    `facebook` TEXT NULL,
    `create_user` INTEGER UNSIGNED NOT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `update_user` INTEGER UNSIGNED NOT NULL,
    `update_time` DATETIME(0) NOT NULL,

    UNIQUE INDEX `name`(`name`),
    INDEX `create_user`(`create_user`),
    INDEX `team_id`(`team_id`),
    INDEX `update_user`(`update_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_cache` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `player_id` INTEGER UNSIGNED NOT NULL,
    `num_matches` INTEGER UNSIGNED NULL,
    `num_wins` INTEGER UNSIGNED NULL,
    `num_games` INTEGER UNSIGNED NULL,
    `tournament_ids` TEXT NULL,
    `last_match` INTEGER UNSIGNED NULL,
    `last_match_time` DATETIME(0) NULL,
    `rank` INTEGER UNSIGNED NULL,
    `elo` INTEGER UNSIGNED NULL,
    `elo_update` DATETIME(0) NULL,
    `elo_peak` INTEGER UNSIGNED NULL,
    `de_elo` INTEGER UNSIGNED NULL,
    `de_rank` INTEGER UNSIGNED NULL,
    `de_update` DATETIME(0) NULL,
    `voobly_elo` INTEGER UNSIGNED NULL,
    `voobly_rank` INTEGER UNSIGNED NULL,
    `voobly_update` DATETIME(0) NULL,

    UNIQUE INDEX `player_id`(`player_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player_info` (
    `id` INTEGER UNSIGNED NOT NULL,
    `player` INTEGER UNSIGNED NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `value_int` INTEGER NULL,
    `value_str` TEXT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `create_user` INTEGER UNSIGNED NOT NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stage` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `bracket` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `index` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `weight` FLOAT NOT NULL DEFAULT 1,
    `importance` INTEGER UNSIGNED NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscription` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `email` TEXT NOT NULL,
    `session` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `tag` VARCHAR(30) NOT NULL,
    `primary_color` VARCHAR(30) NULL,
    `secondary_color` VARCHAR(30) NULL,
    `create_user` INTEGER UNSIGNED NULL,
    `create_time` DATETIME(0) NULL,
    `update_user` INTEGER UNSIGNED NULL,
    `update_time` DATETIME(0) NULL,

    UNIQUE INDEX `name`(`name`),
    INDEX `create_user`(`create_user`),
    INDEX `update_user`(`update_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL,
    `user` INTEGER UNSIGNED NULL,
    `type` VARCHAR(255) NOT NULL,
    `done` INTEGER NOT NULL DEFAULT 0,
    `message` TEXT NOT NULL,
    `contact` TEXT NOT NULL,
    `hash` TEXT NOT NULL,
    `session` TEXT NOT NULL,

    INDEX `user`(`user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tournament` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `short` VARCHAR(100) NOT NULL,
    `start` DATE NULL,
    `end` DATE NULL,
    `weight` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `type` ENUM('cup', 'qualifier') NOT NULL DEFAULT 'cup',
    `prizemoney` INTEGER UNSIGNED NULL,
    `parent_id` INTEGER UNSIGNED NULL,
    `structure` ENUM('single-elemination', 'double-elimination', 'league', 'other', 'group', 'group-ko') NOT NULL,
    `evaluation` VARCHAR(30) NULL,
    `website` TEXT NULL,
    `comment` TEXT NULL,
    `create_user` INTEGER UNSIGNED NOT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `update_user` INTEGER UNSIGNED NOT NULL,
    `update_time` DATETIME(0) NOT NULL,

    INDEX `create_user`(`create_user`),
    INDEX `parent_id`(`parent_id`),
    INDEX `update_user`(`update_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tournament_info` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `create_user` INTEGER UNSIGNED NOT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `tournament_id` INTEGER UNSIGNED NOT NULL,
    `type` INTEGER UNSIGNED NOT NULL,
    `description` TEXT NOT NULL,
    `value` TEXT NOT NULL,

    INDEX `create_user`(`create_user`),
    INDEX `type`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tournament_info_bak` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `create_user` INTEGER UNSIGNED NOT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `tournament_id` INTEGER UNSIGNED NOT NULL,
    `type` INTEGER UNSIGNED NOT NULL,
    `description` TEXT NOT NULL,
    `value` TEXT NOT NULL,

    INDEX `create_user`(`create_user`),
    INDEX `type`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tournament_result` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tournament` INTEGER UNSIGNED NOT NULL,
    `player` INTEGER UNSIGNED NOT NULL,
    `type` INTEGER UNSIGNED NULL,
    `money` INTEGER UNSIGNED NULL,
    `source` TEXT NULL,
    `create_time` DATETIME(0) NOT NULL,
    `create_user` INTEGER UNSIGNED NOT NULL,

    INDEX `create_user`(`create_user`),
    INDEX `player`(`player`),
    INDEX `tournament`(`tournament`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `pass` VARCHAR(255) NOT NULL,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `allow_tournament` INTEGER UNSIGNED NULL DEFAULT 0,
    `allow_player` INTEGER UNSIGNED NULL DEFAULT 0,
    `allow_match` INTEGER NULL DEFAULT 0,
    `allow_see` INTEGER UNSIGNED NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

