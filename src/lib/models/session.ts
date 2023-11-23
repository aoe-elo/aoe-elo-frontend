import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { user, userId } from './user';

export interface sessionAttributes {
  id: string;
  user_id?: number;
  ip_address?: string;
  user_agent?: string;
  payload: string;
  last_activity: number;
}

export type sessionPk = "id";
export type sessionId = session[sessionPk];
export type sessionOptionalAttributes = "user_id" | "ip_address" | "user_agent";
export type sessionCreationAttributes = Optional<sessionAttributes, sessionOptionalAttributes>;

export class session extends Model<sessionAttributes, sessionCreationAttributes> implements sessionAttributes {
  id!: string;
  user_id?: number;
  ip_address?: string;
  user_agent?: string;
  payload!: string;
  last_activity!: number;

  // session belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof session {
    return session.init({
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      ip_address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_agent: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      payload: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      last_activity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'sessions',
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_sessions_1",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "sessions_last_activity_index",
          fields: [
            { name: "last_activity" },
          ]
        },
      ]
    });
  }
}
