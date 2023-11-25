import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Player, PlayerId } from './player';
import type { Team, TeamId } from './team';

export interface IPlayerTeamAttributes {
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

export type PlayerTeamPk = "id";
export type PlayerTeamId = PlayerTeam[PlayerTeamPk];
export type PlayerTeamOptionalAttributes = "joined_at" | "left_at" | "is_active" | "created_at" | "updated_at" | "deleted_at";
export type PlayerTeamCreationAttributes = Optional<IPlayerTeamAttributes, PlayerTeamOptionalAttributes>;

export class PlayerTeam extends Model<IPlayerTeamAttributes, PlayerTeamCreationAttributes> implements IPlayerTeamAttributes {
  declare id: number;
  declare joined_at?: Date;
  declare left_at?: Date;
  declare is_active?: number;
  declare player_id: number;
  declare team_id: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // PlayerTeam belongsTo Player via player_id
  player!: Player;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<Player>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<Player, PlayerId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<Player>;
  // PlayerTeam belongsTo Team via team_id
  team!: Team;
  getTeam!: Sequelize.BelongsToGetAssociationMixin<Team>;
  setTeam!: Sequelize.BelongsToSetAssociationMixin<Team, TeamId>;
  createTeam!: Sequelize.BelongsToCreateAssociationMixin<Team>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PlayerTeam {
    return sequelize.define('PlayerTeam', {
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
      tableName: 'player_team',
      timestamps: true,
      paranoid: true,
      underscored: true,
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
    }) as typeof PlayerTeam;
  }
}
