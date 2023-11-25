import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ArdPlayer, ArdPlayerId } from './ard_player';
import type { Player, PlayerId } from './player';
import type { Team, TeamId } from './team';
import type { User, UserId } from './user';

export interface ICountryAttributes {
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

export type CountryPk = "id";
export type CountryId = Country[CountryPk];
export type CountryOptionalAttributes = "capital" | "citizenship" | "country_code" | "currency" | "currency_code" | "currency_sub_unit" | "currency_symbol" | "currency_decimals" | "full_name" | "iso_3166_2" | "iso_3166_3" | "name" | "region_code" | "sub_region_code" | "eea" | "calling_code" | "flag";
export type CountryCreationAttributes = Optional<ICountryAttributes, CountryOptionalAttributes>;

export class Country extends Model<ICountryAttributes, CountryCreationAttributes> implements ICountryAttributes {
  declare id: number;
  declare capital?: string;
  declare citizenship?: string;
  declare country_code: string;
  declare currency?: string;
  declare currency_code?: string;
  declare currency_sub_unit?: string;
  declare currency_symbol?: string;
  declare currency_decimals?: number;
  declare full_name?: string;
  declare iso_3166_2: string;
  declare iso_3166_3: string;
  declare name: string;
  declare region_code: string;
  declare sub_region_code: string;
  declare eea: number;
  declare calling_code?: string;
  declare flag?: string;

  // Country hasMany ArdPlayer via country_id
  ard_players!: ArdPlayer[];
  getArd_players!: Sequelize.HasManyGetAssociationsMixin<ArdPlayer>;
  setArd_players!: Sequelize.HasManySetAssociationsMixin<ArdPlayer, ArdPlayerId>;
  addArd_player!: Sequelize.HasManyAddAssociationMixin<ArdPlayer, ArdPlayerId>;
  addArd_players!: Sequelize.HasManyAddAssociationsMixin<ArdPlayer, ArdPlayerId>;
  createArd_player!: Sequelize.HasManyCreateAssociationMixin<ArdPlayer>;
  removeArd_player!: Sequelize.HasManyRemoveAssociationMixin<ArdPlayer, ArdPlayerId>;
  removeArd_players!: Sequelize.HasManyRemoveAssociationsMixin<ArdPlayer, ArdPlayerId>;
  hasArd_player!: Sequelize.HasManyHasAssociationMixin<ArdPlayer, ArdPlayerId>;
  hasArd_players!: Sequelize.HasManyHasAssociationsMixin<ArdPlayer, ArdPlayerId>;
  countArd_players!: Sequelize.HasManyCountAssociationsMixin;
  // Country hasMany Player via country_id
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
  // Country hasMany Team via country_id
  teams!: Team[];
  getTeams!: Sequelize.HasManyGetAssociationsMixin<Team>;
  setTeams!: Sequelize.HasManySetAssociationsMixin<Team, TeamId>;
  addTeam!: Sequelize.HasManyAddAssociationMixin<Team, TeamId>;
  addTeams!: Sequelize.HasManyAddAssociationsMixin<Team, TeamId>;
  createTeam!: Sequelize.HasManyCreateAssociationMixin<Team>;
  removeTeam!: Sequelize.HasManyRemoveAssociationMixin<Team, TeamId>;
  removeTeams!: Sequelize.HasManyRemoveAssociationsMixin<Team, TeamId>;
  hasTeam!: Sequelize.HasManyHasAssociationMixin<Team, TeamId>;
  hasTeams!: Sequelize.HasManyHasAssociationsMixin<Team, TeamId>;
  countTeams!: Sequelize.HasManyCountAssociationsMixin;
  // Country hasMany User via country_id
  users!: User[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<User>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<User, UserId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<User, UserId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<User, UserId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<User>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<User, UserId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<User, UserId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<User, UserId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<User, UserId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Country {
    return sequelize.define('Country', {
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
    }) as typeof Country;
  }
}
