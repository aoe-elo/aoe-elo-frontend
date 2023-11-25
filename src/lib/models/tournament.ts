import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { AtpCategory, AtpCategoryId } from './atp_category';
import type { Elo1V1Cache, Elo1V1CacheId } from './elo_1v1_cache';
import type { TournamentResult, TournamentResultId } from './tournament_result';

export interface ITournamentAttributes {
  id: number;
  name: string;
  short_name: string;
  started_at?: Date;
  ended_at?: Date;
  weight: number;
  game_mode: number;
  format_type: number;
  event_type: number;
  prize_pool?: number;
  prize_currency: number;
  structure: number;
  evaluation?: string;
  website_link?: string;
  liquipedia_link?: string;
  atp_category_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type TournamentPk = "id";
export type TournamentId = Tournament[TournamentPk];
export type TournamentOptionalAttributes = "started_at" | "ended_at" | "weight" | "game_mode" | "format_type" | "event_type" | "prize_pool" | "prize_currency" | "structure" | "evaluation" | "website_link" | "liquipedia_link" | "atp_category_id" | "created_at" | "updated_at" | "deleted_at";
export type TournamentCreationAttributes = Optional<ITournamentAttributes, TournamentOptionalAttributes>;

export class Tournament extends Model<ITournamentAttributes, TournamentCreationAttributes> implements ITournamentAttributes {
  declare id: number;
  declare name: string;
  declare short_name: string;
  declare started_at?: Date;
  declare ended_at?: Date;
  declare weight: number;
  declare game_mode: number;
  declare format_type: number;
  declare event_type: number;
  declare prize_pool?: number;
  declare prize_currency: number;
  declare structure: number;
  declare evaluation?: string;
  declare website_link?: string;
  declare liquipedia_link?: string;
  declare atp_category_id?: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // Tournament belongsTo AtpCategory via atp_category_id
  atp_category!: AtpCategory;
  getAtp_category!: Sequelize.BelongsToGetAssociationMixin<AtpCategory>;
  setAtp_category!: Sequelize.BelongsToSetAssociationMixin<AtpCategory, AtpCategoryId>;
  createAtp_category!: Sequelize.BelongsToCreateAssociationMixin<AtpCategory>;
  // Tournament hasMany Elo1V1Cache via tournament_id
  elo_1_v_1_caches!: Elo1V1Cache[];
  getElo_1_v_1_caches!: Sequelize.HasManyGetAssociationsMixin<Elo1V1Cache>;
  setElo_1_v_1_caches!: Sequelize.HasManySetAssociationsMixin<Elo1V1Cache, Elo1V1CacheId>;
  addElo_1_v_1_cach!: Sequelize.HasManyAddAssociationMixin<Elo1V1Cache, Elo1V1CacheId>;
  addElo_1_v_1_caches!: Sequelize.HasManyAddAssociationsMixin<Elo1V1Cache, Elo1V1CacheId>;
  createElo_1_v_1_cach!: Sequelize.HasManyCreateAssociationMixin<Elo1V1Cache>;
  removeElo_1_v_1_cach!: Sequelize.HasManyRemoveAssociationMixin<Elo1V1Cache, Elo1V1CacheId>;
  removeElo_1_v_1_caches!: Sequelize.HasManyRemoveAssociationsMixin<Elo1V1Cache, Elo1V1CacheId>;
  hasElo_1_v_1_cach!: Sequelize.HasManyHasAssociationMixin<Elo1V1Cache, Elo1V1CacheId>;
  hasElo_1_v_1_caches!: Sequelize.HasManyHasAssociationsMixin<Elo1V1Cache, Elo1V1CacheId>;
  countElo_1_v_1_caches!: Sequelize.HasManyCountAssociationsMixin;
  // Tournament hasMany TournamentResult via tournament_id
  tournament_results!: TournamentResult[];
  getTournament_results!: Sequelize.HasManyGetAssociationsMixin<TournamentResult>;
  setTournament_results!: Sequelize.HasManySetAssociationsMixin<TournamentResult, TournamentResultId>;
  addTournament_result!: Sequelize.HasManyAddAssociationMixin<TournamentResult, TournamentResultId>;
  addTournament_results!: Sequelize.HasManyAddAssociationsMixin<TournamentResult, TournamentResultId>;
  createTournament_result!: Sequelize.HasManyCreateAssociationMixin<TournamentResult>;
  removeTournament_result!: Sequelize.HasManyRemoveAssociationMixin<TournamentResult, TournamentResultId>;
  removeTournament_results!: Sequelize.HasManyRemoveAssociationsMixin<TournamentResult, TournamentResultId>;
  hasTournament_result!: Sequelize.HasManyHasAssociationMixin<TournamentResult, TournamentResultId>;
  hasTournament_results!: Sequelize.HasManyHasAssociationsMixin<TournamentResult, TournamentResultId>;
  countTournament_results!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Tournament {
    return sequelize.define('Tournament', {
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
      short_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      started_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      ended_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      game_mode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      format_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      event_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      prize_pool: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prize_currency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      structure: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      evaluation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      website_link: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      liquipedia_link: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      atp_category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'atp_categories',
          key: 'id'
        },
        unique: true
      }
    }, {
      tableName: 'tournaments',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "tournaments_name_atp_category_id_liquipedia_link_short_name_unique",
          unique: true,
          fields: [
            { name: "name" },
            { name: "atp_category_id" },
            { name: "liquipedia_link" },
            { name: "short_name" },
          ]
        },
      ]
    }) as typeof Tournament;
  }
}
