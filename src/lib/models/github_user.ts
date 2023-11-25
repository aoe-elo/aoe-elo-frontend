import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { User, UserId } from './user';

export interface IGithubUserAttributes {
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

export type GithubUserPk = "id";
export type GithubUserId = GithubUser[GithubUserPk];
export type GithubUserOptionalAttributes = "name" | "email" | "github_token" | "github_refresh_token" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type GithubUserCreationAttributes = Optional<IGithubUserAttributes, GithubUserOptionalAttributes>;

export class GithubUser extends Model<IGithubUserAttributes, GithubUserCreationAttributes> implements IGithubUserAttributes {
  declare id: number;
  declare github_id: string;
  declare name?: string;
  declare email?: string;
  declare github_token?: string;
  declare github_refresh_token?: string;
  declare user_id?: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // GithubUser belongsTo User via user_id
  user!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GithubUser {
    return sequelize.define('GithubUser', {
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
    }) as typeof GithubUser;
  }
}
