import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ard_player, ard_playerId } from './ard_player';
import type { country, countryId } from './country';
import type { elo_1v1_cache, elo_1v1_cacheId } from './elo_1v1_cache';
import type { player_team, player_teamId } from './player_team';
import type { user, userId } from './user';
import { actionlog } from './actionlog';

export interface playerAttributes {
  id: number;
  name: string;
  current_elo?: number;
  base_elo: number;
  current_atp?: number;
  base_atp: number;
  voobly_id_main?: string;
  relic_link_id_main?: string;
  steam_id_main?: string;
  liquipedia_handle?: string;
  discord_handle?: string;
  twitch_handle?: string;
  aoe_reference_data_player_id?: number;
  country_id?: number;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type playerPk = "id";
export type playerId = player[playerPk];
export type playerOptionalAttributes = "current_elo" | "base_elo" | "current_atp" | "base_atp" | "voobly_id_main" | "relic_link_id_main" | "steam_id_main" | "liquipedia_handle" | "discord_handle" | "twitch_handle" | "aoe_reference_data_player_id" | "country_id" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type playerCreationAttributes = Optional<playerAttributes, playerOptionalAttributes>;

export class player extends Model<playerAttributes, playerCreationAttributes> implements playerAttributes {
  id!: number;
  name!: string;
  current_elo?: number;
  base_elo!: number;
  current_atp?: number;
  base_atp!: number;
  voobly_id_main?: string;
  relic_link_id_main?: string;
  steam_id_main?: string;
  liquipedia_handle?: string;
  discord_handle?: string;
  twitch_handle?: string;
  aoe_reference_data_player_id?: number;
  country_id?: number;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // player belongsTo ard_player via aoe_reference_data_player_id
  aoe_reference_data_player!: ard_player;
  getAoe_reference_data_player!: Sequelize.BelongsToGetAssociationMixin<ard_player>;
  setAoe_reference_data_player!: Sequelize.BelongsToSetAssociationMixin<ard_player, ard_playerId>;
  createAoe_reference_data_player!: Sequelize.BelongsToCreateAssociationMixin<ard_player>;
  // player belongsTo country via country_id
  country!: country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<country, countryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<country>;
  // player hasMany elo_1v1_cache via player_id
  elo_1v1_caches!: elo_1v1_cache[];
  getElo_1v1_caches!: Sequelize.HasManyGetAssociationsMixin<elo_1v1_cache>;
  setElo_1v1_caches!: Sequelize.HasManySetAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  addElo_1v1_cache!: Sequelize.HasManyAddAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  addElo_1v1_caches!: Sequelize.HasManyAddAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  createElo_1v1_cache!: Sequelize.HasManyCreateAssociationMixin<elo_1v1_cache>;
  removeElo_1v1_cache!: Sequelize.HasManyRemoveAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  removeElo_1v1_caches!: Sequelize.HasManyRemoveAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  hasElo_1v1_cache!: Sequelize.HasManyHasAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  hasElo_1v1_caches!: Sequelize.HasManyHasAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  countElo_1v1_caches!: Sequelize.HasManyCountAssociationsMixin;
  // player hasMany player_team via player_id
  player_teams!: player_team[];
  getPlayer_teams!: Sequelize.HasManyGetAssociationsMixin<player_team>;
  setPlayer_teams!: Sequelize.HasManySetAssociationsMixin<player_team, player_teamId>;
  addPlayer_team!: Sequelize.HasManyAddAssociationMixin<player_team, player_teamId>;
  addPlayer_teams!: Sequelize.HasManyAddAssociationsMixin<player_team, player_teamId>;
  createPlayer_team!: Sequelize.HasManyCreateAssociationMixin<player_team>;
  removePlayer_team!: Sequelize.HasManyRemoveAssociationMixin<player_team, player_teamId>;
  removePlayer_teams!: Sequelize.HasManyRemoveAssociationsMixin<player_team, player_teamId>;
  hasPlayer_team!: Sequelize.HasManyHasAssociationMixin<player_team, player_teamId>;
  hasPlayer_teams!: Sequelize.HasManyHasAssociationsMixin<player_team, player_teamId>;
  countPlayer_teams!: Sequelize.HasManyCountAssociationsMixin;
  // player belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof player {
    return player.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      current_elo: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      base_elo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1800
      },
      current_atp: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      base_atp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1800
      },
      voobly_id_main: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      relic_link_id_main: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      steam_id_main: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      liquipedia_handle: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      discord_handle: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      twitch_handle: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      aoe_reference_data_player_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ard_players',
          key: 'id'
        }
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'countries',
          key: 'id'
        },
        unique: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: true
      }
    }, {
      sequelize,
      tableName: 'players',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "players_name_user_id_country_id_relic_link_id_main_steam_id_main_unique",
          unique: true,
          fields: [
            { name: "name" },
            { name: "user_id" },
            { name: "country_id" },
            { name: "relic_link_id_main" },
            { name: "steam_id_main" },
          ]
        },
        {
          name: "players_voobly_id_main_unique",
          unique: true,
          fields: [
            { name: "voobly_id_main" },
          ]
        },
        {
          name: "players_relic_link_id_main_unique",
          unique: true,
          fields: [
            { name: "relic_link_id_main" },
          ]
        },
        {
          name: "players_steam_id_main_unique",
          unique: true,
          fields: [
            { name: "steam_id_main" },
          ]
        },
        {
          name: "players_liquipedia_handle_unique",
          unique: true,
          fields: [
            { name: "liquipedia_handle" },
          ]
        },
        {
          name: "players_discord_handle_unique",
          unique: true,
          fields: [
            { name: "discord_handle" },
          ]
        },
        {
          name: "players_twitch_handle_unique",
          unique: true,
          fields: [
            { name: "twitch_handle" },
          ]
        },
      ]
    });
  }
}

// Polymorphic Association
player.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Player' } });
