import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { AtpCategory, AtpCategoryId } from './atp_category';
import type { Elo1v1Cache, Elo1v1CacheId } from './elo_1v1_cache';
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
  id!: number;
  name!: string;
  short_name!: string;
  started_at?: Date;
  ended_at?: Date;
  weight!: number;
  game_mode!: number;
  format_type!: number;
  event_type!: number;
  prize_pool?: number;
  prize_currency!: number;
  structure!: number;
  evaluation?: string;
  website_link?: string;
  liquipedia_link?: string;
  atp_category_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // tournament belongsTo atp_category via atp_category_id
  atp_category!: AtpCategory;
  getAtp_category!: Sequelize.BelongsToGetAssociationMixin<AtpCategory>;
  setAtp_category!: Sequelize.BelongsToSetAssociationMixin<AtpCategory, AtpCategoryId>;
  createAtp_category!: Sequelize.BelongsToCreateAssociationMixin<AtpCategory>;
  // tournament hasMany elo_1v1_cache via tournament_id
  elo_1v1_caches!: Elo1v1Cache[];
  getElo_1v1_caches!: Sequelize.HasManyGetAssociationsMixin<Elo1v1Cache>;
  setElo_1v1_caches!: Sequelize.HasManySetAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  addElo_1v1_cache!: Sequelize.HasManyAddAssociationMixin<Elo1v1Cache, Elo1v1CacheId>;
  addElo_1v1_caches!: Sequelize.HasManyAddAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  createElo_1v1_cache!: Sequelize.HasManyCreateAssociationMixin<Elo1v1Cache>;
  removeElo_1v1_cache!: Sequelize.HasManyRemoveAssociationMixin<Elo1v1Cache, Elo1v1CacheId>;
  removeElo_1v1_caches!: Sequelize.HasManyRemoveAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  hasElo_1v1_cache!: Sequelize.HasManyHasAssociationMixin<Elo1v1Cache, Elo1v1CacheId>;
  hasElo_1v1_caches!: Sequelize.HasManyHasAssociationsMixin<Elo1v1Cache, Elo1v1CacheId>;
  countElo_1v1_caches!: Sequelize.HasManyCountAssociationsMixin;
  // tournament hasMany tournament_result via tournament_id
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
  // tournament belongsToMany metadata via metadatable_id and metadatable_type
  // metadata!: metadatum[];
  // getMetadata!: Sequelize.BelongsToManyGetAssociationsMixin<metadatum>;
  // setMetadata!: Sequelize.BelongsToManySetAssociationsMixin<metadatum, metadatumId>;
  // addMetadatum!: Sequelize.BelongsToManyAddAssociationMixin<metadatum, metadatumId>;
  // addMetadata!: Sequelize.BelongsToManyAddAssociationsMixin<metadatum, metadatumId>;


  static initModel(sequelize: Sequelize.Sequelize): typeof Tournament {
    return Tournament.init({
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
      sequelize,
      modelName: 'tournament',
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
    });
  }
}
