import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { ArdPlayer, ArdPlayerId } from './ard_player';
import type { ArdTeam, ArdTeamId } from './ard_team';

export interface IArdPlayerArdTeamAttributes {
  id: number;
  ard_player_id?: number;
  ard_team_id?: number;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ArdPlayerArdTeamPk = "id";
export type ArdPlayerArdTeamId = ArdPlayerArdTeam[ArdPlayerArdTeamPk];
export type ArdPlayerArdTeamOptionalAttributes = "ard_player_id" | "ard_team_id" | "is_active" | "created_at" | "updated_at" | "deleted_at";
export type ArdPlayerArdTeamCreationAttributes = Optional<IArdPlayerArdTeamAttributes, ArdPlayerArdTeamOptionalAttributes>;

export class ArdPlayerArdTeam extends Model<IArdPlayerArdTeamAttributes, ArdPlayerArdTeamCreationAttributes> implements IArdPlayerArdTeamAttributes {
  declare id: number;
  declare ard_player_id?: number;
  declare ard_team_id?: number;
  declare is_active: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // ArdPlayerArdTeam belongsTo ArdPlayer via ard_player_id
  ard_player!: ArdPlayer;
  getArd_player!: Sequelize.BelongsToGetAssociationMixin<ArdPlayer>;
  setArd_player!: Sequelize.BelongsToSetAssociationMixin<ArdPlayer, ArdPlayerId>;
  createArd_player!: Sequelize.BelongsToCreateAssociationMixin<ArdPlayer>;
  // ArdPlayerArdTeam belongsTo ArdTeam via ard_team_id
  ard_team!: ArdTeam;
  getArd_team!: Sequelize.BelongsToGetAssociationMixin<ArdTeam>;
  setArd_team!: Sequelize.BelongsToSetAssociationMixin<ArdTeam, ArdTeamId>;
  createArd_team!: Sequelize.BelongsToCreateAssociationMixin<ArdTeam>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ArdPlayerArdTeam {
    return sequelize.define('ArdPlayerArdTeam', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ard_player_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ard_players',
          key: 'id'
        },
        unique: true
      },
      ard_team_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ard_teams',
          key: 'id'
        },
        unique: true
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
      }
    }, {
      tableName: 'ard_player_ard_team',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "ard_player_ard_team_ard_team_id_ard_player_id_unique",
          unique: true,
          fields: [
            { name: "ard_team_id" },
            { name: "ard_player_id" },
          ]
        },
      ]
    }) as typeof ArdPlayerArdTeam;
  }
}
