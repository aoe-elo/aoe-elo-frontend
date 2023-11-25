import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Permission, PermissionId } from './permission';

export interface IModelHasPermissionAttributes {
  permission_id: number;
  model_type: string;
  model_id: number;
}

export type ModelHasPermissionPk = "permission_id" | "model_type" | "model_id";
export type ModelHasPermissionId = ModelHasPermission[ModelHasPermissionPk];
export type ModelHasPermissionCreationAttributes = IModelHasPermissionAttributes;

export class ModelHasPermission extends Model<IModelHasPermissionAttributes, ModelHasPermissionCreationAttributes> implements IModelHasPermissionAttributes {
  permission_id!: number;
  model_type!: string;
  model_id!: number;

  // ModelHasPermission belongsTo permission via permission_id
  permission!: Permission;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<Permission>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<Permission, PermissionId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<Permission>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ModelHasPermission {
    return ModelHasPermission.init({
      permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'permissions',
          key: 'id'
        },
        unique: true
      },
      model_type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }, {
      sequelize,
      tableName: 'ModelHasPermissions',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          name: "sqlite_autoindex_ModelHasPermissions_1",
          unique: true,
          fields: [
            { name: "permission_id" },
            { name: "model_id" },
            { name: "model_type" },
          ]
        },
        {
          name: "ModelHasPermissions_model_id_model_type_index",
          fields: [
            { name: "model_id" },
            { name: "model_type" },
          ]
        },
      ]
    });
  }
}
