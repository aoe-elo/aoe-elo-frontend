import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { user, userId } from './user';

export interface github_userAttributes {
  id: number;
  github_id: string;
  name?: string;
  email?: string;
  github_token?: string;
  github_refresh_token?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type github_userPk = "id";
export type github_userId = github_user[github_userPk];
export type github_userOptionalAttributes = "name" | "email" | "github_token" | "github_refresh_token" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type github_userCreationAttributes = Optional<github_userAttributes, github_userOptionalAttributes>;

export class github_user extends Model<github_userAttributes, github_userCreationAttributes> implements github_userAttributes {
  id!: number;
  github_id!: string;
  name?: string;
  email?: string;
  github_token?: string;
  github_refresh_token?: string;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // github_user belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof github_user {
    return github_user.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      github_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      github_token: {
        type: DataTypes.STRING,
        allowNull: true
      },
      github_refresh_token: {
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
      tableName: 'github_users',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "github_users_user_id_github_id_unique",
          unique: true,
          fields: [
            { name: "user_id" },
            { name: "github_id" },
          ]
        },
        {
          name: "github_users_github_id_unique",
          unique: true,
          fields: [
            { name: "github_id" },
          ]
        },
      ]
    });
  }
}
