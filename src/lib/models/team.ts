import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ard_team, ard_teamId } from './ard_team';
import type { country, countryId } from './country';
import type { player_team, player_teamId } from './player_team';

export interface teamAttributes {
  id: number;
  name: string;
  tag: string;
  current_elo?: number;
  base_elo: number;
  current_atp?: number;
  base_atp: number;
  primary_color?: string;
  secondary_color?: string;
  aoe_reference_data_team_id?: number;
  country_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type teamPk = "id";
export type teamId = team[teamPk];
export type teamOptionalAttributes = "current_elo" | "base_elo" | "current_atp" | "base_atp" | "primary_color" | "secondary_color" | "aoe_reference_data_team_id" | "country_id" | "created_at" | "updated_at" | "deleted_at";
export type teamCreationAttributes = Optional<teamAttributes, teamOptionalAttributes>;

export class team extends Model<teamAttributes, teamCreationAttributes> implements teamAttributes {
  id!: number;
  name!: string;
  tag!: string;
  current_elo?: number;
  base_elo!: number;
  current_atp?: number;
  base_atp!: number;
  primary_color?: string;
  secondary_color?: string;
  aoe_reference_data_team_id?: number;
  country_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // team belongsTo ard_team via aoe_reference_data_team_id
  aoe_reference_data_team!: ard_team;
  getAoe_reference_data_team!: Sequelize.BelongsToGetAssociationMixin<ard_team>;
  setAoe_reference_data_team!: Sequelize.BelongsToSetAssociationMixin<ard_team, ard_teamId>;
  createAoe_reference_data_team!: Sequelize.BelongsToCreateAssociationMixin<ard_team>;
  // team belongsTo country via country_id
  country!: country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<country, countryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<country>;
  // team hasMany player_team via team_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof team {
    return team.init({
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
    tag: {
      type: DataTypes.STRING,
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
    primary_color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    secondary_color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aoe_reference_data_team_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ard_teams',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'countries',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'teams',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "teams_name_tag_unique",
        unique: true,
        fields: [
          { name: "name" },
          { name: "tag" },
        ]
      },
    ]
  });
  }
}
