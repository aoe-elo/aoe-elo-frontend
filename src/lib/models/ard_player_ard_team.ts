import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ard_player, ard_playerId } from './ard_player';
import type { ard_team, ard_teamId } from './ard_team';

export interface ard_player_ard_teamAttributes {
  id: number;
  ard_player_id?: number;
  ard_team_id?: number;
  is_active: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ard_player_ard_teamPk = "id";
export type ard_player_ard_teamId = ard_player_ard_team[ard_player_ard_teamPk];
export type ard_player_ard_teamOptionalAttributes = "ard_player_id" | "ard_team_id" | "is_active" | "created_at" | "updated_at" | "deleted_at";
export type ard_player_ard_teamCreationAttributes = Optional<ard_player_ard_teamAttributes, ard_player_ard_teamOptionalAttributes>;

export class ard_player_ard_team extends Model<ard_player_ard_teamAttributes, ard_player_ard_teamCreationAttributes> implements ard_player_ard_teamAttributes {
  id!: number;
  ard_player_id?: number;
  ard_team_id?: number;
  is_active!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // ard_player_ard_team belongsTo ard_player via ard_player_id
  ard_player!: ard_player;
  getArd_player!: Sequelize.BelongsToGetAssociationMixin<ard_player>;
  setArd_player!: Sequelize.BelongsToSetAssociationMixin<ard_player, ard_playerId>;
  createArd_player!: Sequelize.BelongsToCreateAssociationMixin<ard_player>;
  // ard_player_ard_team belongsTo ard_team via ard_team_id
  ard_team!: ard_team;
  getArd_team!: Sequelize.BelongsToGetAssociationMixin<ard_team>;
  setArd_team!: Sequelize.BelongsToSetAssociationMixin<ard_team, ard_teamId>;
  createArd_team!: Sequelize.BelongsToCreateAssociationMixin<ard_team>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ard_player_ard_team {
    return ard_player_ard_team.init({
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
    sequelize,
    tableName: 'ard_player_ard_team',
    timestamps: true,
    paranoid: true,
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
  });
  }
}
