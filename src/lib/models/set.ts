import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Elo1V1Cache, Elo1V1CacheId } from './elo_1v1_cache';
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
  aoe_2_cm_2_civ_draft_link?: string;
  aoe_2_cm_2_map_draft_link?: string;
  stageable_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type SetPk = "id";
export type SetId = Set[SetPk];
export type SetOptionalAttributes = "is_tie" | "has_admin_win" | "played_at" | "use_played_at_dummy" | "best_of" | "aoe_2_cm_2_civ_draft_link" | "aoe_2_cm_2_map_draft_link" | "stageable_id" | "created_at" | "updated_at" | "deleted_at";
export type SetCreationAttributes = Optional<ISetAttributes, SetOptionalAttributes>;

export class Set extends Model<ISetAttributes, SetCreationAttributes> implements ISetAttributes {
  declare id: number;
  declare is_tie: number;
  declare has_admin_win: number;
  declare played_at?: Date;
  declare use_played_at_dummy: number;
  declare best_of?: number;
  declare aoe_2_cm_2_civ_draft_link?: string;
  declare aoe_2_cm_2_map_draft_link?: string;
  declare stageable_id?: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // Set hasMany Elo1V1Cache via set_id
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
  // Set hasMany RatingDelta via set_id
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
  // Set hasMany SetInfo via set_id
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
  // Set belongsTo Stageable via stageable_id
  stageable!: Stageable;
  getStageable!: Sequelize.BelongsToGetAssociationMixin<Stageable>;
  setStageable!: Sequelize.BelongsToSetAssociationMixin<Stageable, StageableId>;
  createStageable!: Sequelize.BelongsToCreateAssociationMixin<Stageable>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Set {
    return sequelize.define('Set', {
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
      aoe_2_cm_2_civ_draft_link: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true,
        field: 'aoe2cm2_civ_draft_link'
      },
      aoe_2_cm_2_map_draft_link: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true,
        field: 'aoe2cm2_map_draft_link'
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
    }) as typeof Set;
  }
}
