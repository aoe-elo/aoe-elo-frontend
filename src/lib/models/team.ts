import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ArdTeam, ArdTeamId } from './ard_team';
import type { Country, CountryId } from './country';
import type { PlayerTeam, PlayerTeamId } from './player_team';

export interface ITeamAttributes {
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

export type TeamPk = "id";
export type TeamId = Team[TeamPk];
export type TeamOptionalAttributes = "current_elo" | "base_elo" | "current_atp" | "base_atp" | "primary_color" | "secondary_color" | "aoe_reference_data_team_id" | "country_id" | "created_at" | "updated_at" | "deleted_at";
export type TeamCreationAttributes = Optional<ITeamAttributes, TeamOptionalAttributes>;

export class Team extends Model<ITeamAttributes, TeamCreationAttributes> implements ITeamAttributes {
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
  aoe_reference_data_team!: ArdTeam;
  getAoe_reference_data_team!: Sequelize.BelongsToGetAssociationMixin<ArdTeam>;
  setAoe_reference_data_team!: Sequelize.BelongsToSetAssociationMixin<ArdTeam, ArdTeamId>;
  createAoe_reference_data_team!: Sequelize.BelongsToCreateAssociationMixin<ArdTeam>;
  // team belongsTo country via country_id
  country!: Country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<Country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<Country, CountryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<Country>;
  // team hasMany player_team via team_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Team {
    return Team.init({
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
      underscored: true,
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
