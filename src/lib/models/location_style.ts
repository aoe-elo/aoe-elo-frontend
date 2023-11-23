import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { location_location_style, location_location_styleId } from './location_location_style';

export interface location_styleAttributes {
  id: number;
  style: string;
  weight?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type location_stylePk = "id";
export type location_styleId = location_style[location_stylePk];
export type location_styleOptionalAttributes = "weight" | "created_at" | "updated_at" | "deleted_at";
export type location_styleCreationAttributes = Optional<location_styleAttributes, location_styleOptionalAttributes>;

export class location_style extends Model<location_styleAttributes, location_styleCreationAttributes> implements location_styleAttributes {
  id!: number;
  style!: string;
  weight?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // location_style hasMany location_location_style via location_style_id
  location_location_styles!: location_location_style[];
  getLocation_location_styles!: Sequelize.HasManyGetAssociationsMixin<location_location_style>;
  setLocation_location_styles!: Sequelize.HasManySetAssociationsMixin<location_location_style, location_location_styleId>;
  addLocation_location_style!: Sequelize.HasManyAddAssociationMixin<location_location_style, location_location_styleId>;
  addLocation_location_styles!: Sequelize.HasManyAddAssociationsMixin<location_location_style, location_location_styleId>;
  createLocation_location_style!: Sequelize.HasManyCreateAssociationMixin<location_location_style>;
  removeLocation_location_style!: Sequelize.HasManyRemoveAssociationMixin<location_location_style, location_location_styleId>;
  removeLocation_location_styles!: Sequelize.HasManyRemoveAssociationsMixin<location_location_style, location_location_styleId>;
  hasLocation_location_style!: Sequelize.HasManyHasAssociationMixin<location_location_style, location_location_styleId>;
  hasLocation_location_styles!: Sequelize.HasManyHasAssociationsMixin<location_location_style, location_location_styleId>;
  countLocation_location_styles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof location_style {
    return location_style.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      style: {
        type: DataTypes.STRING,
        allowNull: false
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10
      }
    }, {
      sequelize,
      tableName: 'location_styles',
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  }
}
