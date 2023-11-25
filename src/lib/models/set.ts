import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Elo1v1Cache, Elo1v1CacheId } from './elo_1v1_cache';
import type { RatingDelta, RatingDeltaId } from './rating_delta';
import type { SetInfo, SetInfoId } from './set_info';
import type { Stageable, StageableId } from './stageable';

export interface ISetAttributes {
  id: number;
  is_tie: number;
  has_admin_win: number;
  played_at?: Date;
  use_played_at_dummy: number;
  best_of?: number;
  aoe2cm2_civ_draft_link?: string;
  aoe2cm2_map_draft_link?: string;
  stageable_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type SetPk = "id";
export type SetId = Set[SetPk];
export type SetOptionalAttributes = "is_tie" | "has_admin_win" | "played_at" | "use_played_at_dummy" | "best_of" | "aoe2cm2_civ_draft_link" | "aoe2cm2_map_draft_link" | "stageable_id" | "created_at" | "updated_at" | "deleted_at";
export type SetCreationAttributes = Optional<ISetAttributes, SetOptionalAttributes>;

export class Set extends Model<ISetAttributes, SetCreationAttributes> implements ISetAttributes {
  id!: number;
  is_tie!: number;
  has_admin_win!: number;
  played_at?: Date;
  use_played_at_dummy!: number;
  best_of?: number;
  aoe2cm2_civ_draft_link?: string;
  aoe2cm2_map_draft_link?: string;
  stageable_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // set hasMany elo_1v1_cache via set_id
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
  // set hasMany rating_delta via set_id
  rating_delta!: RatingDelta[];
  getRating_delta!: Sequelize.HasManyGetAssociationsMixin<RatingDelta>;
  setRating_delta!: Sequelize.HasManySetAssociationsMixin<RatingDelta, RatingDeltaId>;
  addRating_deltum!: Sequelize.HasManyAddAssociationMixin<RatingDelta, RatingDeltaId>;
  addRating_delta!: Sequelize.HasManyAddAssociationsMixin<RatingDelta, RatingDeltaId>;
  createRating_deltum!: Sequelize.HasManyCreateAssociationMixin<RatingDelta>;
  removeRating_deltum!: Sequelize.HasManyRemoveAssociationMixin<RatingDelta, RatingDeltaId>;
  removeRating_delta!: Sequelize.HasManyRemoveAssociationsMixin<RatingDelta, RatingDeltaId>;
  hasRating_deltum!: Sequelize.HasManyHasAssociationMixin<RatingDelta, RatingDeltaId>;
  hasRating_delta!: Sequelize.HasManyHasAssociationsMixin<RatingDelta, RatingDeltaId>;
  countRating_delta!: Sequelize.HasManyCountAssociationsMixin;
  // set hasMany set_info via set_id
  set_infos!: SetInfo[];
  getSet_infos!: Sequelize.HasManyGetAssociationsMixin<SetInfo>;
  setSet_infos!: Sequelize.HasManySetAssociationsMixin<SetInfo, SetInfoId>;
  addSet_info!: Sequelize.HasManyAddAssociationMixin<SetInfo, SetInfoId>;
  addSet_infos!: Sequelize.HasManyAddAssociationsMixin<SetInfo, SetInfoId>;
  createSet_info!: Sequelize.HasManyCreateAssociationMixin<SetInfo>;
  removeSet_info!: Sequelize.HasManyRemoveAssociationMixin<SetInfo, SetInfoId>;
  removeSet_infos!: Sequelize.HasManyRemoveAssociationsMixin<SetInfo, SetInfoId>;
  hasSet_info!: Sequelize.HasManyHasAssociationMixin<SetInfo, SetInfoId>;
  hasSet_infos!: Sequelize.HasManyHasAssociationsMixin<SetInfo, SetInfoId>;
  countSet_infos!: Sequelize.HasManyCountAssociationsMixin;
  // set belongsTo stageable via stageable_id
  stageable!: Stageable;
  getStageable!: Sequelize.BelongsToGetAssociationMixin<Stageable>;
  setStageable!: Sequelize.BelongsToSetAssociationMixin<Stageable, StageableId>;
  createStageable!: Sequelize.BelongsToCreateAssociationMixin<Stageable>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Set {
    return Set.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      is_tie: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      has_admin_win: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      played_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      use_played_at_dummy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      best_of: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      aoe2cm2_civ_draft_link: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      aoe2cm2_map_draft_link: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      stageable_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'stageables',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'sets',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "sets_aoe2cm2_civ_draft_link_unique",
          unique: true,
          fields: [
            { name: "aoe2cm2_civ_draft_link" },
          ]
        },
        {
          name: "sets_aoe2cm2_map_draft_link_unique",
          unique: true,
          fields: [
            { name: "aoe2cm2_map_draft_link" },
          ]
        },
      ]
    });
  }
}
