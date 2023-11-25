import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ArdPlayerArdTeam, ArdPlayerArdTeamId } from './ard_player_ard_team';
import type { Team, TeamId } from './team';

export interface IArdTeamAttributes {
  id: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ArdTeamPk = "id";
export type ArdTeamId = ArdTeam[ArdTeamPk];
export type ArdTeamOptionalAttributes = "created_at" | "updated_at" | "deleted_at";
export type ArdTeamCreationAttributes = Optional<IArdTeamAttributes, ArdTeamOptionalAttributes>;

export class ArdTeam extends Model<IArdTeamAttributes, ArdTeamCreationAttributes> implements IArdTeamAttributes {
  declare id: number;
  declare name: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // ArdTeam hasMany ArdPlayerArdTeam via ard_team_id
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
  // ArdTeam hasMany Team via aoe_reference_data_team_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ArdTeam {
    return sequelize.define('ArdTeam', {
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
      }
    }, {
      tableName: 'ard_teams',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "ard_teams_id_unique",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    }) as typeof ArdTeam;
  }
}
