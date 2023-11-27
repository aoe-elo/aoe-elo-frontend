import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Actionlog, ActionlogId } from './actionlog.model';

export interface IActionAttributes {
  id: number;
  name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ActionPk = "id";
export type ActionId = Action[ActionPk];
export type ActionOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at";
export type ActionCreationAttributes = Optional<IActionAttributes, ActionOptionalAttributes>;

export class Action extends Model<IActionAttributes, ActionCreationAttributes> implements IActionAttributes {
  declare id: number;
  declare name: string;
  declare description?: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // Action hasMany Actionlog via action_id
  actionlogs!: Actionlog[];
  getActionlogs!: Sequelize.HasManyGetAssociationsMixin<Actionlog>;
  setActionlogs!: Sequelize.HasManySetAssociationsMixin<Actionlog, ActionlogId>;
  addActionlog!: Sequelize.HasManyAddAssociationMixin<Actionlog, ActionlogId>;
  addActionlogs!: Sequelize.HasManyAddAssociationsMixin<Actionlog, ActionlogId>;
  createActionlog!: Sequelize.HasManyCreateAssociationMixin<Actionlog>;
  removeActionlog!: Sequelize.HasManyRemoveAssociationMixin<Actionlog, ActionlogId>;
  removeActionlogs!: Sequelize.HasManyRemoveAssociationsMixin<Actionlog, ActionlogId>;
  hasActionlog!: Sequelize.HasManyHasAssociationMixin<Actionlog, ActionlogId>;
  hasActionlogs!: Sequelize.HasManyHasAssociationsMixin<Actionlog, ActionlogId>;
  countActionlogs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Action {
    return sequelize.define('Action', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'actions',
      timestamps: true,
      paranoid: true,
      underscored: true,
      modelName: 'App\\Models\\Action',
    }) as typeof Action;
  }
}
