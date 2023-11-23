import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { action, actionId } from './action';
import type { user, userId } from './user';

export interface actionlogAttributes {
  id: number;
  user_id: number;
  action_id: number;
  summary?: string;
  loggable_id?: number;
  loggable_type: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type actionlogPk = "id";
export type actionlogId = actionlog[actionlogPk];
export type actionlogOptionalAttributes = "summary" | "loggable_id" | "created_at" | "updated_at" | "deleted_at";
export type actionlogCreationAttributes = Optional<actionlogAttributes, actionlogOptionalAttributes>;

export class actionlog extends Model<actionlogAttributes, actionlogCreationAttributes> implements actionlogAttributes {
  id!: number;
  user_id!: number;
  action_id!: number;
  summary?: string;
  loggable_id?: number;
  loggable_type!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // actionlog belongsTo action via action_id
  action!: action;
  getAction!: Sequelize.BelongsToGetAssociationMixin<action>;
  setAction!: Sequelize.BelongsToSetAssociationMixin<action, actionId>;
  createAction!: Sequelize.BelongsToCreateAssociationMixin<action>;
  // actionlog belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof actionlog {
    return actionlog.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: true
      },
      action_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'actions',
          key: 'id'
        }
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      loggable_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
      },
      loggable_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      tableName: 'actionlog',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "actionlog_user_id_loggable_id_loggable_type_created_at_updated_at_unique",
          unique: true,
          fields: [
            { name: "user_id" },
            { name: "loggable_id" },
            { name: "loggable_type" },
            { name: "created_at" },
            { name: "updated_at" },
          ]
        },
      ]
    });
  }
}
