import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { location_style, location_styleId } from './location_style';
import type { location, locationId } from './location';

export interface location_location_styleAttributes {
  id: number;
  location_id?: number;
  location_style_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type location_location_stylePk = "id";
export type location_location_styleId = location_location_style[location_location_stylePk];
export type location_location_styleOptionalAttributes = "location_id" | "location_style_id" | "created_at" | "updated_at" | "deleted_at";
export type location_location_styleCreationAttributes = Optional<location_location_styleAttributes, location_location_styleOptionalAttributes>;

export class location_location_style extends Model<location_location_styleAttributes, location_location_styleCreationAttributes> implements location_location_styleAttributes {
  id!: number;
  location_id?: number;
  location_style_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // location_location_style belongsTo location_style via location_style_id
  location_style!: location_style;
  getLocation_style!: Sequelize.BelongsToGetAssociationMixin<location_style>;
  setLocation_style!: Sequelize.BelongsToSetAssociationMixin<location_style, location_styleId>;
  createLocation_style!: Sequelize.BelongsToCreateAssociationMixin<location_style>;
  // location_location_style belongsTo location via location_id
  location!: location;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<location>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<location, locationId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<location>;

  static initModel(sequelize: Sequelize.Sequelize): typeof location_location_style {
    return location_location_style.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'locations',
          key: 'id'
        },
        unique: true
      },
      location_style_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'location_styles',
          key: 'id'
        },
        unique: true
      }
    }, {
      sequelize,
      tableName: 'location_location_styles',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "location_location_styles_location_id_location_style_id_unique",
          unique: true,
          fields: [
            { name: "location_id" },
            { name: "location_style_id" },
          ]
        },
      ]
    });
  }
}
