import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { elo_1v1_cache, elo_1v1_cacheId } from './elo_1v1_cache';
import type { rating_delta, rating_deltaId } from './rating_delta';
import type { set_info, set_infoId } from './set_info';
import type { stageable, stageableId } from './stageable';
import { actionlog } from './actionlog';

export interface setAttributes {
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

export type setPk = "id";
export type setId = set[setPk];
export type setOptionalAttributes = "is_tie" | "has_admin_win" | "played_at" | "use_played_at_dummy" | "best_of" | "aoe2cm2_civ_draft_link" | "aoe2cm2_map_draft_link" | "stageable_id" | "created_at" | "updated_at" | "deleted_at";
export type setCreationAttributes = Optional<setAttributes, setOptionalAttributes>;

export class set extends Model<setAttributes, setCreationAttributes> implements setAttributes {
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
  elo_1v1_caches!: elo_1v1_cache[];
  getElo_1v1_caches!: Sequelize.HasManyGetAssociationsMixin<elo_1v1_cache>;
  setElo_1v1_caches!: Sequelize.HasManySetAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  addElo_1v1_cache!: Sequelize.HasManyAddAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  addElo_1v1_caches!: Sequelize.HasManyAddAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  createElo_1v1_cache!: Sequelize.HasManyCreateAssociationMixin<elo_1v1_cache>;
  removeElo_1v1_cache!: Sequelize.HasManyRemoveAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  removeElo_1v1_caches!: Sequelize.HasManyRemoveAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  hasElo_1v1_cache!: Sequelize.HasManyHasAssociationMixin<elo_1v1_cache, elo_1v1_cacheId>;
  hasElo_1v1_caches!: Sequelize.HasManyHasAssociationsMixin<elo_1v1_cache, elo_1v1_cacheId>;
  countElo_1v1_caches!: Sequelize.HasManyCountAssociationsMixin;
  // set hasMany rating_delta via set_id
  rating_delta!: rating_delta[];
  getRating_delta!: Sequelize.HasManyGetAssociationsMixin<rating_delta>;
  setRating_delta!: Sequelize.HasManySetAssociationsMixin<rating_delta, rating_deltaId>;
  addRating_deltum!: Sequelize.HasManyAddAssociationMixin<rating_delta, rating_deltaId>;
  addRating_delta!: Sequelize.HasManyAddAssociationsMixin<rating_delta, rating_deltaId>;
  createRating_deltum!: Sequelize.HasManyCreateAssociationMixin<rating_delta>;
  removeRating_deltum!: Sequelize.HasManyRemoveAssociationMixin<rating_delta, rating_deltaId>;
  removeRating_delta!: Sequelize.HasManyRemoveAssociationsMixin<rating_delta, rating_deltaId>;
  hasRating_deltum!: Sequelize.HasManyHasAssociationMixin<rating_delta, rating_deltaId>;
  hasRating_delta!: Sequelize.HasManyHasAssociationsMixin<rating_delta, rating_deltaId>;
  countRating_delta!: Sequelize.HasManyCountAssociationsMixin;
  // set hasMany set_info via set_id
  set_infos!: set_info[];
  getSet_infos!: Sequelize.HasManyGetAssociationsMixin<set_info>;
  setSet_infos!: Sequelize.HasManySetAssociationsMixin<set_info, set_infoId>;
  addSet_info!: Sequelize.HasManyAddAssociationMixin<set_info, set_infoId>;
  addSet_infos!: Sequelize.HasManyAddAssociationsMixin<set_info, set_infoId>;
  createSet_info!: Sequelize.HasManyCreateAssociationMixin<set_info>;
  removeSet_info!: Sequelize.HasManyRemoveAssociationMixin<set_info, set_infoId>;
  removeSet_infos!: Sequelize.HasManyRemoveAssociationsMixin<set_info, set_infoId>;
  hasSet_info!: Sequelize.HasManyHasAssociationMixin<set_info, set_infoId>;
  hasSet_infos!: Sequelize.HasManyHasAssociationsMixin<set_info, set_infoId>;
  countSet_infos!: Sequelize.HasManyCountAssociationsMixin;
  // set belongsTo stageable via stageable_id
  stageable!: stageable;
  getStageable!: Sequelize.BelongsToGetAssociationMixin<stageable>;
  setStageable!: Sequelize.BelongsToSetAssociationMixin<stageable, stageableId>;
  createStageable!: Sequelize.BelongsToCreateAssociationMixin<stageable>;

  static initModel(sequelize: Sequelize.Sequelize): typeof set {
    return set.init({
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

// Polymorphic Association
set.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Set' } });
