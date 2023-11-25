import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { User, UserId } from './user';

export interface IDiscordUserAttributes {
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

export type DiscordUserPk = "id";
export type DiscordUserId = DiscordUser[DiscordUserPk];
export type DiscordUserOptionalAttributes = "nickname" | "name" | "email" | "avatar" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type DiscordUserCreationAttributes = Optional<IDiscordUserAttributes, DiscordUserOptionalAttributes>;

export class DiscordUser extends Model<IDiscordUserAttributes, DiscordUserCreationAttributes> implements IDiscordUserAttributes {
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
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof DiscordUser {
    return DiscordUser.init({
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
