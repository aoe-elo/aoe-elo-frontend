import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { atp_category, atp_categoryId } from './atp_category';
import type { elo_1v1_cache, elo_1v1_cacheId } from './elo_1v1_cache';
import type { tournament_result, tournament_resultId } from './tournament_result';

export interface tournamentAttributes {
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

export type tournamentPk = "id";
export type tournamentId = tournament[tournamentPk];
export type tournamentOptionalAttributes = "started_at" | "ended_at" | "weight" | "game_mode" | "format_type" | "event_type" | "prize_pool" | "prize_currency" | "structure" | "evaluation" | "website_link" | "liquipedia_link" | "atp_category_id" | "created_at" | "updated_at" | "deleted_at";
export type tournamentCreationAttributes = Optional<tournamentAttributes, tournamentOptionalAttributes>;

export class tournament extends Model<tournamentAttributes, tournamentCreationAttributes> implements tournamentAttributes {
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
  atp_category!: atp_category;
  getAtp_category!: Sequelize.BelongsToGetAssociationMixin<atp_category>;
  setAtp_category!: Sequelize.BelongsToSetAssociationMixin<atp_category, atp_categoryId>;
  createAtp_category!: Sequelize.BelongsToCreateAssociationMixin<atp_category>;
  // tournament hasMany elo_1v1_cache via tournament_id
  elo_1v1_caches!: elo_1v1_cache[];
  getElo_1v1_caches!: Sequelize.HasManyGetAssociationsMixin<elo_1v1_cache>;
  setElo_1v1_caches!: Sequelize.HasManySetAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  addElo_1v1_cach!: Sequelize.HasManyAddAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  addElo_1v1_caches!: Sequelize.HasManyAddAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  createElo_1v1_cach!: Sequelize.HasManyCreateAssociationMixin<elo_1v1_cache>;
  removeElo_1v1_cach!: Sequelize.HasManyRemoveAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  removeElo_1v1_caches!: Sequelize.HasManyRemoveAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  hasElo_1v1_cach!: Sequelize.HasManyHasAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  hasElo_1v1_caches!: Sequelize.HasManyHasAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  countElo_1v1_caches!: Sequelize.HasManyCountAssociationsMixin;
  // tournament hasMany tournament_result via tournament_id
  tournament_results!: tournament_result[];
  getTournament_results!: Sequelize.HasManyGetAssociationsMixin<tournament_result>;
  setTournament_results!: Sequelize.HasManySetAssociationsMixin<tournament_result, tournament_resultId>;
  addTournament_result!: Sequelize.HasManyAddAssociationMixin<tournament_result, tournament_resultId>;
  addTournament_results!: Sequelize.HasManyAddAssociationsMixin<tournament_result, tournament_resultId>;
  createTournament_result!: Sequelize.HasManyCreateAssociationMixin<tournament_result>;
  removeTournament_result!: Sequelize.HasManyRemoveAssociationMixin<tournament_result, tournament_resultId>;
  removeTournament_results!: Sequelize.HasManyRemoveAssociationsMixin<tournament_result, tournament_resultId>;
  hasTournament_result!: Sequelize.HasManyHasAssociationMixin<tournament_result, tournament_resultId>;
  hasTournament_results!: Sequelize.HasManyHasAssociationsMixin<tournament_result, tournament_resultId>;
  countTournament_results!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tournament {
    return tournament.init({
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
    tableName: 'tournaments',
    timestamps: true,
    paranoid: true,
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
