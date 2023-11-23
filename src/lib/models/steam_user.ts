import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { user, userId } from './user';

export interface steam_userAttributes {
  id: number;
  steam_id: string;
  nickname?: string;
  name?: string;
  avatar?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type steam_userPk = "id";
export type steam_userId = steam_user[steam_userPk];
export type steam_userOptionalAttributes = "nickname" | "name" | "avatar" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type steam_userCreationAttributes = Optional<steam_userAttributes, steam_userOptionalAttributes>;

export class steam_user extends Model<steam_userAttributes, steam_userCreationAttributes> implements steam_userAttributes {
  id!: number;
  steam_id!: string;
  nickname?: string;
  name?: string;
  avatar?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // steam_user belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof steam_user {
    return steam_user.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      steam_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: true
      }
    }, {
      sequelize,
      tableName: 'steam_users',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "steam_users_user_id_steam_id_unique",
          unique: true,
          fields: [
            { name: "user_id" },
            { name: "steam_id" },
          ]
        },
        {
          name: "steam_users_steam_id_unique",
          unique: true,
          fields: [
            { name: "steam_id" },
          ]
        },
      ]
    });
  }
}
