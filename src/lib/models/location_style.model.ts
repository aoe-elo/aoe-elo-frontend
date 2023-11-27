import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { LocationLocationStyle, LocationLocationStyleId } from './location_location_style.model';

export interface ILocationStyleAttributes {
  id: number;
  style: string;
  weight?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type LocationStylePk = "id";
export type LocationStyleId = LocationStyle[LocationStylePk];
export type LocationStyleOptionalAttributes = "weight" | "created_at" | "updated_at" | "deleted_at";
export type LocationStyleCreationAttributes = Optional<ILocationStyleAttributes, LocationStyleOptionalAttributes>;

export class LocationStyle extends Model<ILocationStyleAttributes, LocationStyleCreationAttributes> implements ILocationStyleAttributes {
  declare id: number;
  declare style: string;
  declare weight?: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // LocationStyle hasMany LocationLocationStyle via location_style_id
  location_location_styles!: LocationLocationStyle[];
  getLocation_location_styles!: Sequelize.HasManyGetAssociationsMixin<LocationLocationStyle>;
  setLocation_location_styles!: Sequelize.HasManySetAssociationsMixin<LocationLocationStyle, LocationLocationStyleId>;
  addLocation_location_style!: Sequelize.HasManyAddAssociationMixin<LocationLocationStyle, LocationLocationStyleId>;
  addLocation_location_styles!: Sequelize.HasManyAddAssociationsMixin<LocationLocationStyle, LocationLocationStyleId>;
  createLocation_location_style!: Sequelize.HasManyCreateAssociationMixin<LocationLocationStyle>;
  removeLocation_location_style!: Sequelize.HasManyRemoveAssociationMixin<LocationLocationStyle, LocationLocationStyleId>;
  removeLocation_location_styles!: Sequelize.HasManyRemoveAssociationsMixin<LocationLocationStyle, LocationLocationStyleId>;
  hasLocation_location_style!: Sequelize.HasManyHasAssociationMixin<LocationLocationStyle, LocationLocationStyleId>;
  hasLocation_location_styles!: Sequelize.HasManyHasAssociationsMixin<LocationLocationStyle, LocationLocationStyleId>;
  countLocation_location_styles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof LocationStyle {
    return sequelize.define('LocationStyle', {
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
      tableName: 'location_styles',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }) as typeof LocationStyle;
  }
}
