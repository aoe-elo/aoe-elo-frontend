import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { user, userId } from './user';

export interface discord_userAttributes {
  id: number;
  discord_id: string;
  nickname?: string;
  name?: string;
  email?: string;
  avatar?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type discord_userPk = "id";
export type discord_userId = discord_user[discord_userPk];
export type discord_userOptionalAttributes = "nickname" | "name" | "email" | "avatar" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type discord_userCreationAttributes = Optional<discord_userAttributes, discord_userOptionalAttributes>;

export class discord_user extends Model<discord_userAttributes, discord_userCreationAttributes> implements discord_userAttributes {
  id!: number;
  discord_id!: string;
  nickname?: string;
  name?: string;
  email?: string;
  avatar?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // discord_user belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof discord_user {
    return discord_user.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      discord_id: {
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
        allowNull: true,
        unique: true
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
      tableName: 'discord_users',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "discord_users_user_id_discord_id_unique",
          unique: true,
          fields: [
            { name: "user_id" },
            { name: "discord_id" },
          ]
        },
        {
          name: "discord_users_discord_id_unique",
          unique: true,
          fields: [
            { name: "discord_id" },
          ]
        },
        {
          name: "discord_users_email_unique",
          unique: true,
          fields: [
            { name: "email" },
          ]
        },
      ]
    });
  }
}
