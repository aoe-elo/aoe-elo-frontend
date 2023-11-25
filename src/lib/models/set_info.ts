import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { LocationSetInfo, LocationSetInfoId } from './location_set_info';
import type { Set as match, SetId as matchId } from './set';

export interface ISetInfoAttributes {
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

export type SetInfoPk = "id";
export type SetInfoId = SetInfo[SetInfoPk];
export type SetInfoOptionalAttributes = "is_winner" | "created_at" | "updated_at" | "deleted_at";
export type SetInfoCreationAttributes = Optional<ISetInfoAttributes, SetInfoOptionalAttributes>;

export class SetInfo extends Model<ISetInfoAttributes, SetInfoCreationAttributes> implements ISetInfoAttributes {
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
  location_set_infos!: LocationSetInfo[];
  getLocation_set_infos!: Sequelize.HasManyGetAssociationsMixin<LocationSetInfo>;
  setLocation_set_infos!: Sequelize.HasManySetAssociationsMixin<LocationSetInfo, LocationSetInfoId>;
  addLocation_set_info!: Sequelize.HasManyAddAssociationMixin<LocationSetInfo, LocationSetInfoId>;
  addLocation_set_infos!: Sequelize.HasManyAddAssociationsMixin<LocationSetInfo, LocationSetInfoId>;
  createLocation_set_info!: Sequelize.HasManyCreateAssociationMixin<LocationSetInfo>;
  removeLocation_set_info!: Sequelize.HasManyRemoveAssociationMixin<LocationSetInfo, LocationSetInfoId>;
  removeLocation_set_infos!: Sequelize.HasManyRemoveAssociationsMixin<LocationSetInfo, LocationSetInfoId>;
  hasLocation_set_info!: Sequelize.HasManyHasAssociationMixin<LocationSetInfo, LocationSetInfoId>;
  hasLocation_set_infos!: Sequelize.HasManyHasAssociationsMixin<LocationSetInfo, LocationSetInfoId>;
  countLocation_set_infos!: Sequelize.HasManyCountAssociationsMixin;
  // set_info belongsTo set via set_id
  match!: match;
  getMatch!: Sequelize.BelongsToGetAssociationMixin<match>;
  setMatch!: Sequelize.BelongsToSetAssociationMixin<match, matchId>;
  createMatch!: Sequelize.BelongsToCreateAssociationMixin<match>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SetInfo {
    return SetInfo.init({
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
      underscored: true,
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
