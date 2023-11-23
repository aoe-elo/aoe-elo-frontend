import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { actionlog, actionlogId } from './actionlog';

export interface actionAttributes {
  id: number;
  name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type actionPk = "id";
export type actionId = action[actionPk];
export type actionOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at";
export type actionCreationAttributes = Optional<actionAttributes, actionOptionalAttributes>;

export class action extends Model<actionAttributes, actionCreationAttributes> implements actionAttributes {
  id!: number;
  name!: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // action hasMany actionlog via action_id
  actionlogs!: actionlog[];
  getActionlogs!: Sequelize.HasManyGetAssociationsMixin<actionlog>;
  setActionlogs!: Sequelize.HasManySetAssociationsMixin<actionlog, actionlogId>;
  addActionlog!: Sequelize.HasManyAddAssociationMixin<actionlog, actionlogId>;
  addActionlogs!: Sequelize.HasManyAddAssociationsMixin<actionlog, actionlogId>;
  createActionlog!: Sequelize.HasManyCreateAssociationMixin<actionlog>;
  removeActionlog!: Sequelize.HasManyRemoveAssociationMixin<actionlog, actionlogId>;
  removeActionlogs!: Sequelize.HasManyRemoveAssociationsMixin<actionlog, actionlogId>;
  hasActionlog!: Sequelize.HasManyHasAssociationMixin<actionlog, actionlogId>;
  hasActionlogs!: Sequelize.HasManyHasAssociationsMixin<actionlog, actionlogId>;
  countActionlogs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof action {
    return action.init({
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
      sequelize,
      tableName: 'actions',
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  }
}
