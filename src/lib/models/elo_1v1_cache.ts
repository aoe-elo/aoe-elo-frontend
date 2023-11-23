import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { player, playerId } from './player';
import type { set, setId } from './set';
import type { tournament, tournamentId } from './tournament';

export interface elo_1v1_cacheAttributes {
  id: number;
  type: string;
  elo_before: number;
  elo_after: number;
  match_time: Date;
  player_id: number;
  tournament_id?: number;
  set_id?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type elo_1v1_cachePk = "id";
export type elo_1v1_cacheId = elo_1v1_cache[elo_1v1_cachePk];
export type elo_1v1_cacheOptionalAttributes = "type" | "tournament_id" | "set_id" | "created_at" | "updated_at";
export type elo_1v1_cacheCreationAttributes = Optional<elo_1v1_cacheAttributes, elo_1v1_cacheOptionalAttributes>;

export class elo_1v1_cache extends Model<elo_1v1_cacheAttributes, elo_1v1_cacheCreationAttributes> implements elo_1v1_cacheAttributes {
  id!: number;
  type!: string;
  elo_before!: number;
  elo_after!: number;
  match_time!: Date;
  player_id!: number;
  tournament_id?: number;
  set_id?: number;
  created_at?: Date;
  updated_at?: Date;

  // elo_1v1_cache belongsTo player via player_id
  player!: player;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<player>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<player, playerId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<player>;
  // elo_1v1_cache belongsTo set via set_id
  set!: set;
  getSet!: Sequelize.BelongsToGetAssociationMixin<set>;
  setSet!: Sequelize.BelongsToSetAssociationMixin<set, setId>;
  createSet!: Sequelize.BelongsToCreateAssociationMixin<set>;
  // elo_1v1_cache belongsTo tournament via tournament_id
  tournament!: tournament;
  getTournament!: Sequelize.BelongsToGetAssociationMixin<tournament>;
  setTournament!: Sequelize.BelongsToSetAssociationMixin<tournament, tournamentId>;
  createTournament!: Sequelize.BelongsToCreateAssociationMixin<tournament>;

  static initModel(sequelize: Sequelize.Sequelize): typeof elo_1v1_cache {
    return elo_1v1_cache.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "match"
    },
    elo_before: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    elo_after: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    match_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    tournament_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tournaments',
        key: 'id'
      }
    },
    set_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'elo_1v1_cache',
    timestamps: true
  });
  }
}
