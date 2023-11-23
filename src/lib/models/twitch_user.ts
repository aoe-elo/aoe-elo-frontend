import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { user, userId } from './user';

export interface twitch_userAttributes {
  id: number;
  twitch_id: string;
  nickname?: string;
  name?: string;
  email?: string;
  avatar?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type twitch_userPk = "id";
export type twitch_userId = twitch_user[twitch_userPk];
export type twitch_userOptionalAttributes = "nickname" | "name" | "email" | "avatar" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type twitch_userCreationAttributes = Optional<twitch_userAttributes, twitch_userOptionalAttributes>;

export class twitch_user extends Model<twitch_userAttributes, twitch_userCreationAttributes> implements twitch_userAttributes {
  id!: number;
  twitch_id!: string;
  nickname?: string;
  name?: string;
  email?: string;
  avatar?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // twitch_user belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof twitch_user {
    return twitch_user.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      twitch_id: {
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
      email: {
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
      tableName: 'twitch_users',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "twitch_users_user_id_twitch_id_unique",
          unique: true,
          fields: [
            { name: "user_id" },
            { name: "twitch_id" },
          ]
        },
        {
          name: "twitch_users_twitch_id_unique",
          unique: true,
          fields: [
            { name: "twitch_id" },
          ]
        },
      ]
    });
  }
}
