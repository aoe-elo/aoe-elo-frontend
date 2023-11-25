import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Role, RoleId } from './role';

export interface IModelHasRoleAttributes {
  role_id: number;
  model_type: string;
  model_id: number;
}

export type ModelHasRolePk = "role_id" | "model_type" | "model_id";
export type ModelHasRoleId = ModelHasRole[ModelHasRolePk];
export type ModelHasRoleCreationAttributes = IModelHasRoleAttributes;

export class ModelHasRole extends Model<IModelHasRoleAttributes, ModelHasRoleCreationAttributes> implements IModelHasRoleAttributes {
  declare role_id: number;
  declare model_type: string;
  declare model_id: number;

  // ModelHasRole belongsTo Role via role_id
  role!: Role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<Role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ModelHasRole {
    return sequelize.define('ModelHasRole', {
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
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
      tableName: 'model_has_roles',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          name: "sqlite_autoindex_model_has_roles_1",
          unique: true,
          fields: [
            { name: "role_id" },
            { name: "model_id" },
            { name: "model_type" },
          ]
        },
        {
          name: "model_has_roles_model_id_model_type_index",
          fields: [
            { name: "model_id" },
            { name: "model_type" },
          ]
        },
      ]
    }) as typeof ModelHasRole;
  }
}
