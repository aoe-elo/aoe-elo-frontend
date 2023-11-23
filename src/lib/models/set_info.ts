import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { location_set_info, location_set_infoId } from './location_set_info';
import type { set, setId } from './set';

export interface set_infoAttributes {
  id: number;
  score: number;
  is_winner: number;
  adjusted_score: number;
  participatory_id: number;
  participatory_type: string;
  set_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type set_infoPk = "id";
export type set_infoId = set_info[set_infoPk];
export type set_infoOptionalAttributes = "is_winner" | "created_at" | "updated_at" | "deleted_at";
export type set_infoCreationAttributes = Optional<set_infoAttributes, set_infoOptionalAttributes>;

export class set_info extends Model<set_infoAttributes, set_infoCreationAttributes> implements set_infoAttributes {
  id!: number;
  score!: number;
  is_winner!: number;
  adjusted_score!: number;
  participatory_id!: number;
  participatory_type!: string;
  set_id!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // set_info hasMany location_set_info via set_info_id
  location_set_infos!: location_set_info[];
  getLocation_set_infos!: Sequelize.HasManyGetAssociationsMixin<location_set_info>;
  setLocation_set_infos!: Sequelize.HasManySetAssociationsMixin<location_set_info, location_set_infoId>;
  addLocation_set_info!: Sequelize.HasManyAddAssociationMixin<location_set_info, location_set_infoId>;
  addLocation_set_infos!: Sequelize.HasManyAddAssociationsMixin<location_set_info, location_set_infoId>;
  createLocation_set_info!: Sequelize.HasManyCreateAssociationMixin<location_set_info>;
  removeLocation_set_info!: Sequelize.HasManyRemoveAssociationMixin<location_set_info, location_set_infoId>;
  removeLocation_set_infos!: Sequelize.HasManyRemoveAssociationsMixin<location_set_info, location_set_infoId>;
  hasLocation_set_info!: Sequelize.HasManyHasAssociationMixin<location_set_info, location_set_infoId>;
  hasLocation_set_infos!: Sequelize.HasManyHasAssociationsMixin<location_set_info, location_set_infoId>;
  countLocation_set_infos!: Sequelize.HasManyCountAssociationsMixin;
  // set_info belongsTo set via set_id
  set!: set;
  getSet!: Sequelize.BelongsToGetAssociationMixin<set>;
  setSet!: Sequelize.BelongsToSetAssociationMixin<set, setId>;
  createSet!: Sequelize.BelongsToCreateAssociationMixin<set>;

  static initModel(sequelize: Sequelize.Sequelize): typeof set_info {
    return set_info.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_winner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    adjusted_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    participatory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    participatory_type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sets',
        key: 'id'
      },
      unique: true
    }
  }, {
    sequelize,
    tableName: 'set_info',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "set_info_set_id_participatory_id_participatory_type_unique",
        unique: true,
        fields: [
          { name: "set_id" },
          { name: "participatory_id" },
          { name: "participatory_type" },
        ]
      },
    ]
  });
  }
}
