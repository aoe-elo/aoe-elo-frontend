import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ard_player_ard_team, ard_player_ard_teamId } from './ard_player_ard_team';
import type { country, countryId } from './country';
import type { player, playerId } from './player';

export interface ard_playerAttributes {
  id: number;
  name: string;
  country_id?: number;
  aoeelo_id?: number;
  esports_earnings?: number;
  liquipedia_handle?: string;
  discord_id?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ard_playerPk = "id";
export type ard_playerId = ard_player[ard_playerPk];
export type ard_playerOptionalAttributes = "country_id" | "aoeelo_id" | "esports_earnings" | "liquipedia_handle" | "discord_id" | "created_at" | "updated_at" | "deleted_at";
export type ard_playerCreationAttributes = Optional<ard_playerAttributes, ard_playerOptionalAttributes>;

export class ard_player extends Model<ard_playerAttributes, ard_playerCreationAttributes> implements ard_playerAttributes {
  id!: number;
  name!: string;
  country_id?: number;
  aoeelo_id?: number;
  esports_earnings?: number;
  liquipedia_handle?: string;
  discord_id?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // ard_player hasMany ard_player_ard_team via ard_player_id
  ard_player_ard_teams!: ard_player_ard_team[];
  getArd_player_ard_teams!: Sequelize.HasManyGetAssociationsMixin<ard_player_ard_team>;
  setArd_player_ard_teams!: Sequelize.HasManySetAssociationsMixin<ard_player_ard_team, ard_player_ard_teamId>;
  addArd_player_ard_team!: Sequelize.HasManyAddAssociationMixin<ard_player_ard_team, ard_player_ard_teamId>;
  addArd_player_ard_teams!: Sequelize.HasManyAddAssociationsMixin<ard_player_ard_team, ard_player_ard_teamId>;
  createArd_player_ard_team!: Sequelize.HasManyCreateAssociationMixin<ard_player_ard_team>;
  removeArd_player_ard_team!: Sequelize.HasManyRemoveAssociationMixin<ard_player_ard_team, ard_player_ard_teamId>;
  removeArd_player_ard_teams!: Sequelize.HasManyRemoveAssociationsMixin<ard_player_ard_team, ard_player_ard_teamId>;
  hasArd_player_ard_team!: Sequelize.HasManyHasAssociationMixin<ard_player_ard_team, ard_player_ard_teamId>;
  hasArd_player_ard_teams!: Sequelize.HasManyHasAssociationsMixin<ard_player_ard_team, ard_player_ard_teamId>;
  countArd_player_ard_teams!: Sequelize.HasManyCountAssociationsMixin;
  // ard_player hasMany player via aoe_reference_data_player_id
  players!: player[];
  getPlayers!: Sequelize.HasManyGetAssociationsMixin<player>;
  setPlayers!: Sequelize.HasManySetAssociationsMixin<player, playerId>;
  addPlayer!: Sequelize.HasManyAddAssociationMixin<player, playerId>;
  addPlayers!: Sequelize.HasManyAddAssociationsMixin<player, playerId>;
  createPlayer!: Sequelize.HasManyCreateAssociationMixin<player>;
  removePlayer!: Sequelize.HasManyRemoveAssociationMixin<player, playerId>;
  removePlayers!: Sequelize.HasManyRemoveAssociationsMixin<player, playerId>;
  hasPlayer!: Sequelize.HasManyHasAssociationMixin<player, playerId>;
  hasPlayers!: Sequelize.HasManyHasAssociationsMixin<player, playerId>;
  countPlayers!: Sequelize.HasManyCountAssociationsMixin;
  // ard_player belongsTo country via country_id
  country!: country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<country, countryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<country>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ard_player {
    return ard_player.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'countries',
          key: 'id'
        }
      },
      aoeelo_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
      },
      esports_earnings: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
      },
      liquipedia_handle: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      discord_id: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      }
    }, {
      sequelize,
      tableName: 'ard_players',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "ard_players_id_unique",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "ard_players_aoeelo_id_unique",
          unique: true,
          fields: [
            { name: "aoeelo_id" },
          ]
        },
        {
          name: "ard_players_esports_earnings_unique",
          unique: true,
          fields: [
            { name: "esports_earnings" },
          ]
        },
        {
          name: "ard_players_liquipedia_handle_unique",
          unique: true,
          fields: [
            { name: "liquipedia_handle" },
          ]
        },
        {
          name: "ard_players_discord_id_unique",
          unique: true,
          fields: [
            { name: "discord_id" },
          ]
        },
      ]
    });
  }
}
