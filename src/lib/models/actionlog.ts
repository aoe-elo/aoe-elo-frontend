import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { uppercaseFirst } from '$lib/util';

export interface IActionlogAttributes {
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

export type ActionlogPk = "id";
export type ActionlogId = Actionlog[ActionlogPk];
export type ActionlogOptionalAttributes = "summary" | "loggable_id" | "created_at" | "updated_at" | "deleted_at";
export type ActionlogCreationAttributes = Optional<IActionlogAttributes, ActionlogOptionalAttributes>;

export class Actionlog extends Model<IActionlogAttributes, ActionlogCreationAttributes> implements IActionlogAttributes {
  declare id: number;
  declare user_id: number;
  declare action_id: number;
  declare summary?: string;
  declare loggable_id?: number;
  declare loggable_type: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // TODO!: Support polymorphic lazy loading
  // TODO!: Needs to have another logic, because the loggable_type is not a model
  // TODO!: Create lookup table for loggable_type
  // needs to map 'App\\Models\\ArdPlayer' => 'ArdPlayer'

  // https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/#polymorphic-lazy-loading

  getLoggable(options: object | undefined) {
    console.log(`getLoggable: ${this.loggable_type}`);
    if (!this.loggable_type) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.loggable_type)}`;
    return this[mixinMethodName](options);
  }

  static initModel(sequelize: Sequelize.Sequelize): typeof Actionlog {
    return Actionlog.init({
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
      underscored: true,
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
