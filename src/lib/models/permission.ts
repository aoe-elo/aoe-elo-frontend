import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { model_has_permission, model_has_permissionId } from './model_has_permission';
import type { role_has_permission, role_has_permissionId } from './role_has_permission';

export interface permissionAttributes {
  id: number;
  name: string;
  guard_name: string;
  created_at?: Date;
  updated_at?: Date;
}

export type permissionPk = "id";
export type permissionId = permission[permissionPk];
export type permissionOptionalAttributes = "created_at" | "updated_at";
export type permissionCreationAttributes = Optional<permissionAttributes, permissionOptionalAttributes>;

export class permission extends Model<permissionAttributes, permissionCreationAttributes> implements permissionAttributes {
  id!: number;
  name!: string;
  guard_name!: string;
  created_at?: Date;
  updated_at?: Date;

  // permission hasMany model_has_permission via permission_id
  model_has_permissions!: model_has_permission[];
  getModel_has_permissions!: Sequelize.HasManyGetAssociationsMixin<model_has_permission>;
  setModel_has_permissions!: Sequelize.HasManySetAssociationsMixin<model_has_permission, model_has_permissionId>;
  addModel_has_permission!: Sequelize.HasManyAddAssociationMixin<model_has_permission, model_has_permissionId>;
  addModel_has_permissions!: Sequelize.HasManyAddAssociationsMixin<model_has_permission, model_has_permissionId>;
  createModel_has_permission!: Sequelize.HasManyCreateAssociationMixin<model_has_permission>;
  removeModel_has_permission!: Sequelize.HasManyRemoveAssociationMixin<model_has_permission, model_has_permissionId>;
  removeModel_has_permissions!: Sequelize.HasManyRemoveAssociationsMixin<model_has_permission, model_has_permissionId>;
  hasModel_has_permission!: Sequelize.HasManyHasAssociationMixin<model_has_permission, model_has_permissionId>;
  hasModel_has_permissions!: Sequelize.HasManyHasAssociationsMixin<model_has_permission, model_has_permissionId>;
  countModel_has_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // permission hasMany role_has_permission via permission_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof permission {
    return permission.init({
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
      tableName: 'permissions',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          name: "permissions_name_guard_name_unique",
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
