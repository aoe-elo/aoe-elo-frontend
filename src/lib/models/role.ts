import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { model_has_role, model_has_roleId } from './model_has_role';
import type { role_has_permission, role_has_permissionId } from './role_has_permission';

export interface roleAttributes {
  id: number;
  name: string;
  guard_name: string;
  created_at?: Date;
  updated_at?: Date;
}

export type rolePk = "id";
export type roleId = role[rolePk];
export type roleOptionalAttributes = "created_at" | "updated_at";
export type roleCreationAttributes = Optional<roleAttributes, roleOptionalAttributes>;

export class role extends Model<roleAttributes, roleCreationAttributes> implements roleAttributes {
  id!: number;
  name!: string;
  guard_name!: string;
  created_at?: Date;
  updated_at?: Date;

  // role hasMany model_has_role via role_id
  model_has_roles!: model_has_role[];
  getModel_has_roles!: Sequelize.HasManyGetAssociationsMixin<model_has_role>;
  setModel_has_roles!: Sequelize.HasManySetAssociationsMixin<model_has_role, model_has_roleId>;
  addModel_has_role!: Sequelize.HasManyAddAssociationMixin<model_has_role, model_has_roleId>;
  addModel_has_roles!: Sequelize.HasManyAddAssociationsMixin<model_has_role, model_has_roleId>;
  createModel_has_role!: Sequelize.HasManyCreateAssociationMixin<model_has_role>;
  removeModel_has_role!: Sequelize.HasManyRemoveAssociationMixin<model_has_role, model_has_roleId>;
  removeModel_has_roles!: Sequelize.HasManyRemoveAssociationsMixin<model_has_role, model_has_roleId>;
  hasModel_has_role!: Sequelize.HasManyHasAssociationMixin<model_has_role, model_has_roleId>;
  hasModel_has_roles!: Sequelize.HasManyHasAssociationsMixin<model_has_role, model_has_roleId>;
  countModel_has_roles!: Sequelize.HasManyCountAssociationsMixin;
  // role hasMany role_has_permission via role_id
  role_has_permissions!: role_has_permission[];
  getRole_has_permissions!: Sequelize.HasManyGetAssociationsMixin<role_has_permission>;
  setRole_has_permissions!: Sequelize.HasManySetAssociationsMixin<role_has_permission, role_has_permissionId>;
  addRole_has_permission!: Sequelize.HasManyAddAssociationMixin<role_has_permission, role_has_permissionId>;
  addRole_has_permissions!: Sequelize.HasManyAddAssociationsMixin<role_has_permission, role_has_permissionId>;
  createRole_has_permission!: Sequelize.HasManyCreateAssociationMixin<role_has_permission>;
  removeRole_has_permission!: Sequelize.HasManyRemoveAssociationMixin<role_has_permission, role_has_permissionId>;
  removeRole_has_permissions!: Sequelize.HasManyRemoveAssociationsMixin<role_has_permission, role_has_permissionId>;
  hasRole_has_permission!: Sequelize.HasManyHasAssociationMixin<role_has_permission, role_has_permissionId>;
  hasRole_has_permissions!: Sequelize.HasManyHasAssociationsMixin<role_has_permission, role_has_permissionId>;
  countRole_has_permissions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof role {
    return role.init({
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
      guard_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      tableName: 'roles',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          name: "roles_name_guard_name_unique",
          unique: true,
          fields: [
            { name: "name" },
            { name: "guard_name" },
          ]
        },
      ]
    });
  }
}
