import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Location, LocationId } from './location';
import type { SetInfo, SetInfoId } from './set_info';

export interface ILocationSetInfoAttributes {
  id: number;
  set_info_id?: number;
  location_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type LocationSetInfoPk = "id";
export type LocationSetInfoId = LocationSetInfo[LocationSetInfoPk];
export type LocationSetInfoOptionalAttributes = "set_info_id" | "location_id" | "created_at" | "updated_at" | "deleted_at";
export type LocationSetInfoCreationAttributes = Optional<ILocationSetInfoAttributes, LocationSetInfoOptionalAttributes>;

export class LocationSetInfo extends Model<ILocationSetInfoAttributes, LocationSetInfoCreationAttributes> implements ILocationSetInfoAttributes {
  id!: number;
  set_info_id?: number;
  location_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // location_set_info belongsTo location via location_id
  location!: Location;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<Location>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<Location, LocationId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<Location>;
  // location_set_info belongsTo set_info via set_info_id
  set_info!: SetInfo;
  getSet_info!: Sequelize.BelongsToGetAssociationMixin<SetInfo>;
  setSet_info!: Sequelize.BelongsToSetAssociationMixin<SetInfo, SetInfoId>;
  createSet_info!: Sequelize.BelongsToCreateAssociationMixin<SetInfo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof LocationSetInfo {
    return LocationSetInfo.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      set_info_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'set_info',
          key: 'id'
        }
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'locations',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'location_set_info',
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  }
}
