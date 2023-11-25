import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Player, PlayerId } from './player';
import type { Set as Match, SetId as MatchId } from './set';
import type { Tournament, TournamentId } from './tournament';

export interface IElo1V1CacheAttributes {
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

export type Elo1V1CachePk = "id";
export type Elo1V1CacheId = Elo1V1Cache[Elo1V1CachePk];
export type Elo1V1CacheOptionalAttributes = "type" | "tournament_id" | "set_id" | "created_at" | "updated_at";
export type Elo1V1CacheCreationAttributes = Optional<IElo1V1CacheAttributes, Elo1V1CacheOptionalAttributes>;

export class Elo1V1Cache extends Model<IElo1V1CacheAttributes, Elo1V1CacheCreationAttributes> implements IElo1V1CacheAttributes {
  declare id: number;
  declare type: string;
  declare elo_before: number;
  declare elo_after: number;
  declare match_time: Date;
  declare player_id: number;
  declare tournament_id?: number;
  declare set_id?: number;
  declare created_at?: Date;
  declare updated_at?: Date;

  // Elo1V1Cache belongsTo Player via player_id
  player!: Player;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<Player>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<Player, PlayerId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<Player>;
  // Elo1V1Cache belongsTo Set via set_id
  match!: Match;
  getMatch!: Sequelize.BelongsToGetAssociationMixin<Match>;
  setMatch!: Sequelize.BelongsToSetAssociationMixin<Match, MatchId>;
  createMatch!: Sequelize.BelongsToCreateAssociationMixin<Match>;
  // Elo1V1Cache belongsTo Tournament via tournament_id
  tournament!: Tournament;
  getTournament!: Sequelize.BelongsToGetAssociationMixin<Tournament>;
  setTournament!: Sequelize.BelongsToSetAssociationMixin<Tournament, TournamentId>;
  createTournament!: Sequelize.BelongsToCreateAssociationMixin<Tournament>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Elo1V1Cache {
    return sequelize.define('Elo1V1Cache', {
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
      tableName: 'elo_1v1_cache',
      timestamps: true,
      underscored: true,
    }) as typeof Elo1V1Cache;
  }
}
