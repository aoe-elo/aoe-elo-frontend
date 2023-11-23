import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { location, locationId } from './location';
import type { set_info, set_infoId } from './set_info';

export interface location_set_infoAttributes {
  id: number;
  set_info_id?: number;
  location_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type location_set_infoPk = "id";
export type location_set_infoId = location_set_info[location_set_infoPk];
export type location_set_infoOptionalAttributes = "set_info_id" | "location_id" | "created_at" | "updated_at" | "deleted_at";
export type location_set_infoCreationAttributes = Optional<location_set_infoAttributes, location_set_infoOptionalAttributes>;

export class location_set_info extends Model<location_set_infoAttributes, location_set_infoCreationAttributes> implements location_set_infoAttributes {
  id!: number;
  set_info_id?: number;
  location_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // location_set_info belongsTo location via location_id
  location!: location;
  getLocation!: Sequelize.BelongsToGetAssociationMixin<location>;
  setLocation!: Sequelize.BelongsToSetAssociationMixin<location, locationId>;
  createLocation!: Sequelize.BelongsToCreateAssociationMixin<location>;
  // location_set_info belongsTo set_info via set_info_id
  set_info!: set_info;
  getSet_info!: Sequelize.BelongsToGetAssociationMixin<set_info>;
  setSet_info!: Sequelize.BelongsToSetAssociationMixin<set_info, set_infoId>;
  createSet_info!: Sequelize.BelongsToCreateAssociationMixin<set_info>;

  static initModel(sequelize: Sequelize.Sequelize): typeof location_set_info {
    return location_set_info.init({
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
      paranoid: true
    });
  }
}
