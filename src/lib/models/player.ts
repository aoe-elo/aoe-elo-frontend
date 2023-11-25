import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ArdPlayer, ArdPlayerId } from './ard_player';
import type { Country, CountryId } from './country';
import type { Elo1v1Cache, Elo1v1CacheId } from './elo_1v1_cache';
import type { PlayerTeam, PlayerTeamId } from './player_team';
import type { User, UserId } from './user';

export interface IPlayerAttributes {
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

export type PlayerPk = "id";
export type PlayerId = Player[PlayerPk];
export type PlayerOptionalAttributes = "current_elo" | "base_elo" | "current_atp" | "base_atp" | "voobly_id_main" | "relic_link_id_main" | "steam_id_main" | "liquipedia_handle" | "discord_handle" | "twitch_handle" | "aoe_reference_data_player_id" | "country_id" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type PlayerCreationAttributes = Optional<IPlayerAttributes, PlayerOptionalAttributes>;

export class Player extends Model<IPlayerAttributes, PlayerCreationAttributes> implements IPlayerAttributes {
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
  aoe_reference_data_player!: ArdPlayer;
  getAoe_reference_data_player!: Sequelize.BelongsToGetAssociationMixin<ArdPlayer>;
  setAoe_reference_data_player!: Sequelize.BelongsToSetAssociationMixin<ArdPlayer, ArdPlayerId>;
  createAoe_reference_data_player!: Sequelize.BelongsToCreateAssociationMixin<ArdPlayer>;
  // player belongsTo country via country_id
  country!: Country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<Country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<Country, CountryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<Country>;
  // player hasMany elo_1v1_cache via player_id
  elo_1v1_caches!: Elo1v1Cache[];
  getElo_1v1_caches!: Sequelize.HasManyGetAssociationsMixin<Elo1v1Cache>;
  setElo_1v1_caches!: Sequelize.HasManySetAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  addElo_1v1_cache!: Sequelize.HasManyAddAssociationMixin<Elo1v1Cache, Elo1v1CacheId>;
  addElo_1v1_caches!: Sequelize.HasManyAddAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  createElo_1v1_cache!: Sequelize.HasManyCreateAssociationMixin<Elo1v1Cache>;
  removeElo_1v1_cache!: Sequelize.HasManyRemoveAssociationMixin<Elo1v1Cache, Elo1v1CacheId>;
  removeElo_1v1_caches!: Sequelize.HasManyRemoveAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  hasElo_1v1_cache!: Sequelize.HasManyHasAssociationMixin<Elo1v1Cache, Elo1v1CacheId>;
  hasElo_1v1_caches!: Sequelize.HasManyHasAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  countElo_1v1_caches!: Sequelize.HasManyCountAssociationsMixin;
  // player hasMany player_team via player_id
  player_teams!: PlayerTeam[];
  getPlayer_teams!: Sequelize.HasManyGetAssociationsMixin<PlayerTeam>;
  setPlayer_teams!: Sequelize.HasManySetAssociationsMixin<PlayerTeam, PlayerTeamId>;
  addPlayer_team!: Sequelize.HasManyAddAssociationMixin<PlayerTeam, PlayerTeamId>;
  addPlayer_teams!: Sequelize.HasManyAddAssociationsMixin<PlayerTeam, PlayerTeamId>;
  createPlayer_team!: Sequelize.HasManyCreateAssociationMixin<PlayerTeam>;
  removePlayer_team!: Sequelize.HasManyRemoveAssociationMixin<PlayerTeam, PlayerTeamId>;
  removePlayer_teams!: Sequelize.HasManyRemoveAssociationsMixin<PlayerTeam, PlayerTeamId>;
  hasPlayer_team!: Sequelize.HasManyHasAssociationMixin<PlayerTeam, PlayerTeamId>;
  hasPlayer_teams!: Sequelize.HasManyHasAssociationsMixin<PlayerTeam, PlayerTeamId>;
  countPlayer_teams!: Sequelize.HasManyCountAssociationsMixin;
  // player belongsTo user via user_id
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Player {
    return Player.init({
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
