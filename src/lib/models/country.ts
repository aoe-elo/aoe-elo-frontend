import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ard_player, ard_playerId } from './ard_player';
import type { player, playerId } from './player';
import type { team, teamId } from './team';
import type { user, userId } from './user';

export interface countryAttributes {
  id: number;
  capital?: string;
  citizenship?: string;
  country_code: string;
  currency?: string;
  currency_code?: string;
  currency_sub_unit?: string;
  currency_symbol?: string;
  currency_decimals?: number;
  full_name?: string;
  iso_3166_2: string;
  iso_3166_3: string;
  name: string;
  region_code: string;
  sub_region_code: string;
  eea: number;
  calling_code?: string;
  flag?: string;
}

export type countryPk = "id";
export type countryId = country[countryPk];
export type countryOptionalAttributes = "capital" | "citizenship" | "country_code" | "currency" | "currency_code" | "currency_sub_unit" | "currency_symbol" | "currency_decimals" | "full_name" | "iso_3166_2" | "iso_3166_3" | "name" | "region_code" | "sub_region_code" | "eea" | "calling_code" | "flag";
export type countryCreationAttributes = Optional<countryAttributes, countryOptionalAttributes>;

export class country extends Model<countryAttributes, countryCreationAttributes> implements countryAttributes {
  id!: number;
  capital?: string;
  citizenship?: string;
  country_code!: string;
  currency?: string;
  currency_code?: string;
  currency_sub_unit?: string;
  currency_symbol?: string;
  currency_decimals?: number;
  full_name?: string;
  iso_3166_2!: string;
  iso_3166_3!: string;
  name!: string;
  region_code!: string;
  sub_region_code!: string;
  eea!: number;
  calling_code?: string;
  flag?: string;

  // country hasMany ard_player via country_id
  ard_players!: ard_player[];
  getArd_players!: Sequelize.HasManyGetAssociationsMixin<ard_player>;
  setArd_players!: Sequelize.HasManySetAssociationsMixin<ard_player, ard_playerId>;
  addArd_player!: Sequelize.HasManyAddAssociationMixin<ard_player, ard_playerId>;
  addArd_players!: Sequelize.HasManyAddAssociationsMixin<ard_player, ard_playerId>;
  createArd_player!: Sequelize.HasManyCreateAssociationMixin<ard_player>;
  removeArd_player!: Sequelize.HasManyRemoveAssociationMixin<ard_player, ard_playerId>;
  removeArd_players!: Sequelize.HasManyRemoveAssociationsMixin<ard_player, ard_playerId>;
  hasArd_player!: Sequelize.HasManyHasAssociationMixin<ard_player, ard_playerId>;
  hasArd_players!: Sequelize.HasManyHasAssociationsMixin<ard_player, ard_playerId>;
  countArd_players!: Sequelize.HasManyCountAssociationsMixin;
  // country hasMany player via country_id
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
  // country hasMany team via country_id
  teams!: team[];
  getTeams!: Sequelize.HasManyGetAssociationsMixin<team>;
  setTeams!: Sequelize.HasManySetAssociationsMixin<team, teamId>;
  addTeam!: Sequelize.HasManyAddAssociationMixin<team, teamId>;
  addTeams!: Sequelize.HasManyAddAssociationsMixin<team, teamId>;
  createTeam!: Sequelize.HasManyCreateAssociationMixin<team>;
  removeTeam!: Sequelize.HasManyRemoveAssociationMixin<team, teamId>;
  removeTeams!: Sequelize.HasManyRemoveAssociationsMixin<team, teamId>;
  hasTeam!: Sequelize.HasManyHasAssociationMixin<team, teamId>;
  hasTeams!: Sequelize.HasManyHasAssociationsMixin<team, teamId>;
  countTeams!: Sequelize.HasManyCountAssociationsMixin;
  // country hasMany user via country_id
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof country {
    return country.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: true
      },
      citizenship: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country_code: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: true
      },
      currency_code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      currency_sub_unit: {
        type: DataTypes.STRING,
        allowNull: true
      },
      currency_symbol: {
        type: DataTypes.STRING,
        allowNull: true
      },
      currency_decimals: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      iso_3166_2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      iso_3166_3: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      region_code: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      sub_region_code: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      eea: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      calling_code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'countries',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          name: "countries_id_index",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
}
