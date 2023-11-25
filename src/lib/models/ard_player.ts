import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ArdPlayerArdTeam, ArdPlayerArdTeamId } from './ard_player_ard_team';
import type { Country, CountryId } from './country';
import type { Player, PlayerId } from './player';

export interface IArdPlayerAttributes {
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

export type ArdPlayerPk = "id";
export type ArdPlayerId = ArdPlayer[ArdPlayerPk];
export type ArdPlayerOptionalAttributes = "country_id" | "aoeelo_id" | "esports_earnings" | "liquipedia_handle" | "discord_id" | "created_at" | "updated_at" | "deleted_at";
export type ArdPlayerCreationAttributes = Optional<IArdPlayerAttributes, ArdPlayerOptionalAttributes>;

export class ArdPlayer extends Model<IArdPlayerAttributes, ArdPlayerCreationAttributes> implements IArdPlayerAttributes {
  declare id: number;
  declare name: string;
  declare country_id?: number;
  declare aoeelo_id?: number;
  declare esports_earnings?: number;
  declare liquipedia_handle?: string;
  declare discord_id?: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // ArdPlayer hasMany ArdPlayerArdTeam via ard_player_id
  ard_player_ard_teams!: ArdPlayerArdTeam[];
  getArd_player_ard_teams!: Sequelize.HasManyGetAssociationsMixin<ArdPlayerArdTeam>;
  setArd_player_ard_teams!: Sequelize.HasManySetAssociationsMixin<ArdPlayerArdTeam, ArdPlayerArdTeamId>;
  addArd_player_ard_team!: Sequelize.HasManyAddAssociationMixin<ArdPlayerArdTeam, ArdPlayerArdTeamId>;
  addArd_player_ard_teams!: Sequelize.HasManyAddAssociationsMixin<ArdPlayerArdTeam, ArdPlayerArdTeamId>;
  createArd_player_ard_team!: Sequelize.HasManyCreateAssociationMixin<ArdPlayerArdTeam>;
  removeArd_player_ard_team!: Sequelize.HasManyRemoveAssociationMixin<ArdPlayerArdTeam, ArdPlayerArdTeamId>;
  removeArd_player_ard_teams!: Sequelize.HasManyRemoveAssociationsMixin<ArdPlayerArdTeam, ArdPlayerArdTeamId>;
  hasArd_player_ard_team!: Sequelize.HasManyHasAssociationMixin<ArdPlayerArdTeam, ArdPlayerArdTeamId>;
  hasArd_player_ard_teams!: Sequelize.HasManyHasAssociationsMixin<ArdPlayerArdTeam, ArdPlayerArdTeamId>;
  countArd_player_ard_teams!: Sequelize.HasManyCountAssociationsMixin;
  // ArdPlayer hasMany Player via aoe_reference_data_player_id
  players!: Player[];
  getPlayers!: Sequelize.HasManyGetAssociationsMixin<Player>;
  setPlayers!: Sequelize.HasManySetAssociationsMixin<Player, PlayerId>;
  addPlayer!: Sequelize.HasManyAddAssociationMixin<Player, PlayerId>;
  addPlayers!: Sequelize.HasManyAddAssociationsMixin<Player, PlayerId>;
  createPlayer!: Sequelize.HasManyCreateAssociationMixin<Player>;
  removePlayer!: Sequelize.HasManyRemoveAssociationMixin<Player, PlayerId>;
  removePlayers!: Sequelize.HasManyRemoveAssociationsMixin<Player, PlayerId>;
  hasPlayer!: Sequelize.HasManyHasAssociationMixin<Player, PlayerId>;
  hasPlayers!: Sequelize.HasManyHasAssociationsMixin<Player, PlayerId>;
  countPlayers!: Sequelize.HasManyCountAssociationsMixin;
  // ArdPlayer belongsTo Country via country_id
  country!: Country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<Country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<Country, CountryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<Country>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ArdPlayer {
    return sequelize.define('ArdPlayer', {
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
      tableName: 'ard_players',
      modelName: 'App\\Models\\ArdPlayer',
      timestamps: true,
      paranoid: true,
      underscored: true,
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
    }) as typeof ArdPlayer;
  }
}
