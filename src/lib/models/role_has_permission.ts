import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { permission, permissionId } from './permission';
import type { role, roleId } from './role';

export interface role_has_permissionAttributes {
  permission_id: number;
  role_id: number;
}

export type role_has_permissionPk = "permission_id" | "role_id";
export type role_has_permissionId = role_has_permission[role_has_permissionPk];
export type role_has_permissionCreationAttributes = role_has_permissionAttributes;

export class role_has_permission extends Model<role_has_permissionAttributes, role_has_permissionCreationAttributes> implements role_has_permissionAttributes {
  permission_id!: number;
  role_id!: number;

  // role_has_permission belongsTo permission via permission_id
  permission!: permission;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<permission>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<permission, permissionId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<permission>;
  // role_has_permission belongsTo role via role_id
  role!: role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_has_permission {
    return role_has_permission.init({
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
      role_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        },
        unique: true
      }
    }, {
      sequelize,
      tableName: 'role_has_permissions',
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_role_has_permissions_1",
          unique: true,
          fields: [
            { name: "permission_id" },
            { name: "role_id" },
          ]
        },
      ]
    });
  }
}
