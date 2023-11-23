import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { permission, permissionId } from './permission';

export interface model_has_permissionAttributes {
  permission_id: number;
  model_type: string;
  model_id: number;
}

export type model_has_permissionPk = "permission_id" | "model_type" | "model_id";
export type model_has_permissionId = model_has_permission[model_has_permissionPk];
export type model_has_permissionCreationAttributes = model_has_permissionAttributes;

export class model_has_permission extends Model<model_has_permissionAttributes, model_has_permissionCreationAttributes> implements model_has_permissionAttributes {
  permission_id!: number;
  model_type!: string;
  model_id!: number;

  // model_has_permission belongsTo permission via permission_id
  permission!: permission;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<permission>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<permission, permissionId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<permission>;

  static initModel(sequelize: Sequelize.Sequelize): typeof model_has_permission {
    return model_has_permission.init({
      permission_id: {
        autoIncrement: true,
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
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }, {
      sequelize,
      tableName: 'model_has_permissions',
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_model_has_permissions_1",
          unique: true,
          fields: [
            { name: "permission_id" },
            { name: "model_id" },
            { name: "model_type" },
          ]
        },
        {
          name: "model_has_permissions_model_id_model_type_index",
          fields: [
            { name: "model_id" },
            { name: "model_type" },
          ]
        },
      ]
    });
  }
}
