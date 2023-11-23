import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ard_player_ard_team, ard_player_ard_teamId } from './ard_player_ard_team';
import type { team, teamId } from './team';

export interface ard_teamAttributes {
  id: number;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ard_teamPk = "id";
export type ard_teamId = ard_team[ard_teamPk];
export type ard_teamOptionalAttributes = "created_at" | "updated_at" | "deleted_at";
export type ard_teamCreationAttributes = Optional<ard_teamAttributes, ard_teamOptionalAttributes>;

export class ard_team extends Model<ard_teamAttributes, ard_teamCreationAttributes> implements ard_teamAttributes {
  id!: number;
  name!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // ard_team hasMany ard_player_ard_team via ard_team_id
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
  // ard_team hasMany team via aoe_reference_data_team_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ard_team {
    return ard_team.init({
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
      sequelize,
      tableName: 'ard_teams',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "ard_teams_id_unique",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
}
