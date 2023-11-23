import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { location_location_style, location_location_styleId } from './location_location_style';
import type { location_set_info, location_set_infoId } from './location_set_info';

export interface locationAttributes {
  id: number;
  name: string;
  name_short?: string;
  liquipedia_link?: string;
  aoe2map_link?: string;
  aoe2map_uuid?: string;
  image_path?: string;
  preview_image_path?: string;
  keywords?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type locationPk = "id";
export type locationId = location[locationPk];
export type locationOptionalAttributes = "name_short" | "liquipedia_link" | "aoe2map_link" | "aoe2map_uuid" | "image_path" | "preview_image_path" | "keywords" | "created_at" | "updated_at" | "deleted_at";
export type locationCreationAttributes = Optional<locationAttributes, locationOptionalAttributes>;

export class location extends Model<locationAttributes, locationCreationAttributes> implements locationAttributes {
  id!: number;
  name!: string;
  name_short?: string;
  liquipedia_link?: string;
  aoe2map_link?: string;
  aoe2map_uuid?: string;
  image_path?: string;
  preview_image_path?: string;
  keywords?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // location hasMany location_location_style via location_id
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
  // location hasMany location_set_info via location_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof location {
    return location.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      name_short: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      liquipedia_link: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      aoe2map_link: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      aoe2map_uuid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image_path: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      preview_image_path: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      },
      keywords: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'locations',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "locations_name_name_short_image_path_preview_image_path_unique",
          unique: true,
          fields: [
            { name: "name" },
            { name: "name_short" },
            { name: "image_path" },
            { name: "preview_image_path" },
          ]
        },
      ]
    });
  }
}
