import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { role, roleId } from './role';

export interface model_has_roleAttributes {
  role_id: number;
  model_type: string;
  model_id: number;
}

export type model_has_rolePk = "role_id" | "model_type" | "model_id";
export type model_has_roleId = model_has_role[model_has_rolePk];
export type model_has_roleCreationAttributes = model_has_roleAttributes;

export class model_has_role extends Model<model_has_roleAttributes, model_has_roleCreationAttributes> implements model_has_roleAttributes {
  role_id!: number;
  model_type!: string;
  model_id!: number;

  // model_has_role belongsTo role via role_id
  role!: role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof model_has_role {
    return model_has_role.init({
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
      sequelize,
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
    });
  }
}
