import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Location, LocationId } from './location.model';
import type { SetInfo, SetInfoId } from './set_info.model';

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
  declare id: number;
  declare set_info_id?: number;
  declare location_id?: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // LocationSetInfo belongsTo Location via location_id
  location!: Location;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<Location>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<Location, LocationId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<Location>;
  // LocationSetInfo belongsTo SetInfo via set_info_id
  setInfo!: SetInfo;
  getSetInfo!: Sequelize.BelongsToGetAssociationMixin<SetInfo>;
  setSetInfo!: Sequelize.BelongsToSetAssociationMixin<SetInfo, SetInfoId>;
  createSetInfo!: Sequelize.BelongsToCreateAssociationMixin<SetInfo>;

  static initModel(sequelize: Sequelize.Sequelize): typeof LocationSetInfo {
    return sequelize.define('LocationSetInfo', {
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
      tableName: 'location_set_info',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }) as typeof LocationSetInfo;
  }
}
