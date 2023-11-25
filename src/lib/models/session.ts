import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { User, UserId } from './user';

export interface ISessionAttributes {
  id: string;
  user_id?: number;
  ip_address?: string;
  user_agent?: string;
  payload: string;
  last_activity: number;
}

export type SessionPk = "id";
export type SessionId = Session[SessionPk];
export type SessionOptionalAttributes = "user_id" | "ip_address" | "user_agent";
export type SessionCreationAttributes = Optional<ISessionAttributes, SessionOptionalAttributes>;

export class Session extends Model<ISessionAttributes, SessionCreationAttributes> implements ISessionAttributes {
  id!: string;
  user_id?: number;
  ip_address?: string;
  user_agent?: string;
  payload!: string;
  last_activity!: number;

  // session belongsTo user via user_id
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Session {
    return Session.init({
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
      underscored: true,
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
