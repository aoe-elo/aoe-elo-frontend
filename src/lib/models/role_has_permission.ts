import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Permission, PermissionId } from './permission';
import type { Role, RoleId } from './role';

export interface IRoleHasPermissionAttributes {
  permission_id: number;
  role_id: number;
}

export type RoleHasPermissionPk = "permission_id" | "role_id";
export type RoleHasPermissionId = RoleHasPermission[RoleHasPermissionPk];
export type RoleHasPermissionCreationAttributes = IRoleHasPermissionAttributes;

export class RoleHasPermission extends Model<IRoleHasPermissionAttributes, RoleHasPermissionCreationAttributes> implements IRoleHasPermissionAttributes {
  declare permission_id: number;
  declare role_id: number;

  // RoleHasPermission belongsTo Permission via permission_id
  permission!: Permission;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<Permission>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<Permission, PermissionId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<Permission>;
  // RoleHasPermission belongsTo Role via role_id
  role!: Role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<Role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RoleHasPermission {
    return sequelize.define('RoleHasPermission', {
      permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'permissions',
          key: 'id'
        },
        unique: true
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        },
        unique: true
      }
    }, {
      tableName: 'role_has_permissions',
      timestamps: false,
      underscored: true,
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
    }) as typeof RoleHasPermission;
  }
}
