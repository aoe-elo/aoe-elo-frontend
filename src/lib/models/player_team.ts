import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { player, playerId } from './player';
import type { team, teamId } from './team';

export interface player_teamAttributes {
  id: number;
  joined_at?: Date;
  left_at?: Date;
  is_active?: number;
  player_id: number;
  team_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type player_teamPk = "id";
export type player_teamId = player_team[player_teamPk];
export type player_teamOptionalAttributes = "joined_at" | "left_at" | "is_active" | "created_at" | "updated_at" | "deleted_at";
export type player_teamCreationAttributes = Optional<player_teamAttributes, player_teamOptionalAttributes>;

export class player_team extends Model<player_teamAttributes, player_teamCreationAttributes> implements player_teamAttributes {
  id!: number;
  joined_at?: Date;
  left_at?: Date;
  is_active?: number;
  player_id!: number;
  team_id!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // player_team belongsTo player via player_id
  player!: player;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<player>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<player, playerId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<player>;
  // player_team belongsTo team via team_id
  team!: team;
  getTeam!: Sequelize.BelongsToGetAssociationMixin<team>;
  setTeam!: Sequelize.BelongsToSetAssociationMixin<team, teamId>;
  createTeam!: Sequelize.BelongsToCreateAssociationMixin<team>;

  static initModel(sequelize: Sequelize.Sequelize): typeof player_team {
    return player_team.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      joined_at: {
        type: DataTypes.DATE,
        allowNull: true,
        unique: true
      },
      left_at: {
        type: DataTypes.DATE,
        allowNull: true,
        unique: true
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1
      },
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'players',
          key: 'id'
        },
        unique: true
      },
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id'
        },
        unique: true
      }
    }, {
      sequelize,
      tableName: 'player_team',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "player_team_player_id_team_id_joined_at_left_at_unique",
          unique: true,
          fields: [
            { name: "player_id" },
            { name: "team_id" },
            { name: "joined_at" },
            { name: "left_at" },
          ]
        },
      ]
    });
  }
}
