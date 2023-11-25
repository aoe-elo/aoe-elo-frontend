import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Player, PlayerId } from './player';
import type { Set as match, SetId as matchId } from './set';
import type { Tournament, TournamentId } from './tournament';

export interface IElo1v1CacheAttributes {
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

export type Elo1v1CachePk = "id";
export type Elo1v1CacheId = Elo1v1Cache[Elo1v1CachePk];
export type Elo1v1CacheOptionalAttributes = "type" | "tournament_id" | "set_id" | "created_at" | "updated_at";
export type Elo1v1CacheCreationAttributes = Optional<IElo1v1CacheAttributes, Elo1v1CacheOptionalAttributes>;

export class Elo1v1Cache extends Model<IElo1v1CacheAttributes, Elo1v1CacheCreationAttributes> implements IElo1v1CacheAttributes {
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
  player!: Player;
  getPlayer!: Sequelize.BelongsToGetAssociationMixin<Player>;
  setPlayer!: Sequelize.BelongsToSetAssociationMixin<Player, PlayerId>;
  createPlayer!: Sequelize.BelongsToCreateAssociationMixin<Player>;
  // elo_1v1_cache belongsTo set via set_id
  match!: match;
  getMatch!: Sequelize.BelongsToGetAssociationMixin<match>;
  setMatch!: Sequelize.BelongsToSetAssociationMixin<match, matchId>;
  createMatch!: Sequelize.BelongsToCreateAssociationMixin<match>;
  // elo_1v1_cache belongsTo tournament via tournament_id
  tournament!: Tournament;
  getTournament!: Sequelize.BelongsToGetAssociationMixin<Tournament>;
  setTournament!: Sequelize.BelongsToSetAssociationMixin<Tournament, TournamentId>;
  createTournament!: Sequelize.BelongsToCreateAssociationMixin<Tournament>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Elo1v1Cache {
    return Elo1v1Cache.init({
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
      timestamps: true,
      underscored: true,
    });
  }
}
