import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { actionlog, type actionlogId } from './actionlog';
import type { country, countryId } from './country';
import type { discord_user, discord_userId } from './discord_user';
import type { github_user, github_userId } from './github_user';
import type { player, playerId } from './player';
import type { session, sessionId } from './session';
import type { steam_user, steam_userId } from './steam_user';
import type { twitch_user, twitch_userId } from './twitch_user';

export interface userAttributes {
  id: number;
  name: string;
  email?: string;
  country_id?: number;
  remember_token?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "email" | "country_id" | "remember_token" | "created_at" | "updated_at" | "deleted_at";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  name!: string;
  email?: string;
  country_id?: number;
  remember_token?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // user belongsTo country via country_id
  country!: country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<country, countryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<country>;
  // user hasMany actionlog via user_id
  actionlogs!: actionlog[];
  getActionlogs!: Sequelize.HasManyGetAssociationsMixin<actionlog>;
  setActionlogs!: Sequelize.HasManySetAssociationsMixin<actionlog, actionlogId>;
  addActionlog!: Sequelize.HasManyAddAssociationMixin<actionlog, actionlogId>;
  addActionlogs!: Sequelize.HasManyAddAssociationsMixin<actionlog, actionlogId>;
  createActionlog!: Sequelize.HasManyCreateAssociationMixin<actionlog>;
  removeActionlog!: Sequelize.HasManyRemoveAssociationMixin<actionlog, actionlogId>;
  removeActionlogs!: Sequelize.HasManyRemoveAssociationsMixin<actionlog, actionlogId>;
  hasActionlog!: Sequelize.HasManyHasAssociationMixin<actionlog, actionlogId>;
  hasActionlogs!: Sequelize.HasManyHasAssociationsMixin<actionlog, actionlogId>;
  countActionlogs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany discord_user via user_id
  discord_users!: discord_user[];
  getDiscord_users!: Sequelize.HasManyGetAssociationsMixin<discord_user>;
  setDiscord_users!: Sequelize.HasManySetAssociationsMixin<discord_user, discord_userId>;
  addDiscord_user!: Sequelize.HasManyAddAssociationMixin<discord_user, discord_userId>;
  addDiscord_users!: Sequelize.HasManyAddAssociationsMixin<discord_user, discord_userId>;
  createDiscord_user!: Sequelize.HasManyCreateAssociationMixin<discord_user>;
  removeDiscord_user!: Sequelize.HasManyRemoveAssociationMixin<discord_user, discord_userId>;
  removeDiscord_users!: Sequelize.HasManyRemoveAssociationsMixin<discord_user, discord_userId>;
  hasDiscord_user!: Sequelize.HasManyHasAssociationMixin<discord_user, discord_userId>;
  hasDiscord_users!: Sequelize.HasManyHasAssociationsMixin<discord_user, discord_userId>;
  countDiscord_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany github_user via user_id
  github_users!: github_user[];
  getGithub_users!: Sequelize.HasManyGetAssociationsMixin<github_user>;
  setGithub_users!: Sequelize.HasManySetAssociationsMixin<github_user, github_userId>;
  addGithub_user!: Sequelize.HasManyAddAssociationMixin<github_user, github_userId>;
  addGithub_users!: Sequelize.HasManyAddAssociationsMixin<github_user, github_userId>;
  createGithub_user!: Sequelize.HasManyCreateAssociationMixin<github_user>;
  removeGithub_user!: Sequelize.HasManyRemoveAssociationMixin<github_user, github_userId>;
  removeGithub_users!: Sequelize.HasManyRemoveAssociationsMixin<github_user, github_userId>;
  hasGithub_user!: Sequelize.HasManyHasAssociationMixin<github_user, github_userId>;
  hasGithub_users!: Sequelize.HasManyHasAssociationsMixin<github_user, github_userId>;
  countGithub_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany player via user_id
  players!: player[];
  getPlayers!: Sequelize.HasManyGetAssociationsMixin<player>;
  setPlayers!: Sequelize.HasManySetAssociationsMixin<player, playerId>;
  addPlayer!: Sequelize.HasManyAddAssociationMixin<player, playerId>;
  addPlayers!: Sequelize.HasManyAddAssociationsMixin<player, playerId>;
  createPlayer!: Sequelize.HasManyCreateAssociationMixin<player>;
  removePlayer!: Sequelize.HasManyRemoveAssociationMixin<player, playerId>;
  removePlayers!: Sequelize.HasManyRemoveAssociationsMixin<player, playerId>;
  hasPlayer!: Sequelize.HasManyHasAssociationMixin<player, playerId>;
  hasPlayers!: Sequelize.HasManyHasAssociationsMixin<player, playerId>;
  countPlayers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany session via user_id
  sessions!: session[];
  getSessions!: Sequelize.HasManyGetAssociationsMixin<session>;
  setSessions!: Sequelize.HasManySetAssociationsMixin<session, sessionId>;
  addSession!: Sequelize.HasManyAddAssociationMixin<session, sessionId>;
  addSessions!: Sequelize.HasManyAddAssociationsMixin<session, sessionId>;
  createSession!: Sequelize.HasManyCreateAssociationMixin<session>;
  removeSession!: Sequelize.HasManyRemoveAssociationMixin<session, sessionId>;
  removeSessions!: Sequelize.HasManyRemoveAssociationsMixin<session, sessionId>;
  hasSession!: Sequelize.HasManyHasAssociationMixin<session, sessionId>;
  hasSessions!: Sequelize.HasManyHasAssociationsMixin<session, sessionId>;
  countSessions!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany steam_user via user_id
  steam_users!: steam_user[];
  getSteam_users!: Sequelize.HasManyGetAssociationsMixin<steam_user>;
  setSteam_users!: Sequelize.HasManySetAssociationsMixin<steam_user, steam_userId>;
  addSteam_user!: Sequelize.HasManyAddAssociationMixin<steam_user, steam_userId>;
  addSteam_users!: Sequelize.HasManyAddAssociationsMixin<steam_user, steam_userId>;
  createSteam_user!: Sequelize.HasManyCreateAssociationMixin<steam_user>;
  removeSteam_user!: Sequelize.HasManyRemoveAssociationMixin<steam_user, steam_userId>;
  removeSteam_users!: Sequelize.HasManyRemoveAssociationsMixin<steam_user, steam_userId>;
  hasSteam_user!: Sequelize.HasManyHasAssociationMixin<steam_user, steam_userId>;
  hasSteam_users!: Sequelize.HasManyHasAssociationsMixin<steam_user, steam_userId>;
  countSteam_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany twitch_user via user_id
  twitch_users!: twitch_user[];
  getTwitch_users!: Sequelize.HasManyGetAssociationsMixin<twitch_user>;
  setTwitch_users!: Sequelize.HasManySetAssociationsMixin<twitch_user, twitch_userId>;
  addTwitch_user!: Sequelize.HasManyAddAssociationMixin<twitch_user, twitch_userId>;
  addTwitch_users!: Sequelize.HasManyAddAssociationsMixin<twitch_user, twitch_userId>;
  createTwitch_user!: Sequelize.HasManyCreateAssociationMixin<twitch_user>;
  removeTwitch_user!: Sequelize.HasManyRemoveAssociationMixin<twitch_user, twitch_userId>;
  removeTwitch_users!: Sequelize.HasManyRemoveAssociationsMixin<twitch_user, twitch_userId>;
  hasTwitch_user!: Sequelize.HasManyHasAssociationMixin<twitch_user, twitch_userId>;
  hasTwitch_users!: Sequelize.HasManyHasAssociationsMixin<twitch_user, twitch_userId>;
  countTwitch_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'countries',
          key: 'id'
        }
      },
      remember_token: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'users',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "users_email_unique",
          unique: true,
          fields: [
            { name: "email" },
          ]
        },
      ]
    });
  }
}

// Polymorphic Association
user.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\User' } });
