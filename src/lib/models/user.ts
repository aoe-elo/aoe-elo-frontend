import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { Actionlog, type ActionlogId } from './actionlog';
import type { Country, CountryId } from './country';
import type { DiscordUser, DiscordUserId } from './discord_user';
import type { GithubUser, GithubUserId } from './github_user';
import type { Player, PlayerId } from './player';
import type { Session, SessionId } from './session';
import type { SteamUser, SteamUserId } from './steam_user';
import type { TwitchUser, TwitchUserId } from './twitch_user';

export interface IUserAttributes {
  id: number;
  name: string;
  email?: string;
  country_id?: number;
  remember_token?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "email" | "country_id" | "remember_token" | "created_at" | "updated_at" | "deleted_at";
export type UserCreationAttributes = Optional<IUserAttributes, UserOptionalAttributes>;

export class User extends Model<IUserAttributes, UserCreationAttributes> implements IUserAttributes {
  id!: number;
  name!: string;
  email?: string;
  country_id?: number;
  remember_token?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // user belongsTo country via country_id
  country!: Country;
  getCountry!: Sequelize.BelongsToGetAssociationMixin<Country>;
  setCountry!: Sequelize.BelongsToSetAssociationMixin<Country, CountryId>;
  createCountry!: Sequelize.BelongsToCreateAssociationMixin<Country>;
  // user hasMany actionlog via user_id
  actionlogs!: Actionlog[];
  getActionlogs!: Sequelize.HasManyGetAssociationsMixin<Actionlog>;
  setActionlogs!: Sequelize.HasManySetAssociationsMixin<Actionlog, ActionlogId>;
  addActionlog!: Sequelize.HasManyAddAssociationMixin<Actionlog, ActionlogId>;
  addActionlogs!: Sequelize.HasManyAddAssociationsMixin<Actionlog, ActionlogId>;
  createActionlog!: Sequelize.HasManyCreateAssociationMixin<Actionlog>;
  removeActionlog!: Sequelize.HasManyRemoveAssociationMixin<Actionlog, ActionlogId>;
  removeActionlogs!: Sequelize.HasManyRemoveAssociationsMixin<Actionlog, ActionlogId>;
  hasActionlog!: Sequelize.HasManyHasAssociationMixin<Actionlog, ActionlogId>;
  hasActionlogs!: Sequelize.HasManyHasAssociationsMixin<Actionlog, ActionlogId>;
  countActionlogs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany discord_user via user_id
  discord_users!: DiscordUser[];
  getDiscord_users!: Sequelize.HasManyGetAssociationsMixin<DiscordUser>;
  setDiscord_users!: Sequelize.HasManySetAssociationsMixin<DiscordUser, DiscordUserId>;
  addDiscord_user!: Sequelize.HasManyAddAssociationMixin<DiscordUser, DiscordUserId>;
  addDiscord_users!: Sequelize.HasManyAddAssociationsMixin<DiscordUser, DiscordUserId>;
  createDiscord_user!: Sequelize.HasManyCreateAssociationMixin<DiscordUser>;
  removeDiscord_user!: Sequelize.HasManyRemoveAssociationMixin<DiscordUser, DiscordUserId>;
  removeDiscord_users!: Sequelize.HasManyRemoveAssociationsMixin<DiscordUser, DiscordUserId>;
  hasDiscord_user!: Sequelize.HasManyHasAssociationMixin<DiscordUser, DiscordUserId>;
  hasDiscord_users!: Sequelize.HasManyHasAssociationsMixin<DiscordUser, DiscordUserId>;
  countDiscord_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany github_user via user_id
  github_users!: GithubUser[];
  getGithub_users!: Sequelize.HasManyGetAssociationsMixin<GithubUser>;
  setGithub_users!: Sequelize.HasManySetAssociationsMixin<GithubUser, GithubUserId>;
  addGithub_user!: Sequelize.HasManyAddAssociationMixin<GithubUser, GithubUserId>;
  addGithub_users!: Sequelize.HasManyAddAssociationsMixin<GithubUser, GithubUserId>;
  createGithub_user!: Sequelize.HasManyCreateAssociationMixin<GithubUser>;
  removeGithub_user!: Sequelize.HasManyRemoveAssociationMixin<GithubUser, GithubUserId>;
  removeGithub_users!: Sequelize.HasManyRemoveAssociationsMixin<GithubUser, GithubUserId>;
  hasGithub_user!: Sequelize.HasManyHasAssociationMixin<GithubUser, GithubUserId>;
  hasGithub_users!: Sequelize.HasManyHasAssociationsMixin<GithubUser, GithubUserId>;
  countGithub_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany player via user_id
  players!: Player[];
  getPlayers!: Sequelize.HasManyGetAssociationsMixin<Player>;
  setPlayers!: Sequelize.HasManySetAssociationsMixin<Player, PlayerId>;
  addPlayer!: Sequelize.HasManyAddAssociationMixin<Player, PlayerId>;
  addPlayers!: Sequelize.HasManyAddAssociationsMixin<Player, PlayerId>;
  createPlayer!: Sequelize.HasManyCreateAssociationMixin<Player>;
  removePlayer!: Sequelize.HasManyRemoveAssociationMixin<Player, PlayerId>;
  removePlayers!: Sequelize.HasManyRemoveAssociationsMixin<Player, PlayerId>;
  hasPlayer!: Sequelize.HasManyHasAssociationMixin<Player, PlayerId>;
  hasPlayers!: Sequelize.HasManyHasAssociationsMixin<Player, PlayerId>;
  countPlayers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany session via user_id
  sessions!: Session[];
  getSessions!: Sequelize.HasManyGetAssociationsMixin<Session>;
  setSessions!: Sequelize.HasManySetAssociationsMixin<Session, SessionId>;
  addSession!: Sequelize.HasManyAddAssociationMixin<Session, SessionId>;
  addSessions!: Sequelize.HasManyAddAssociationsMixin<Session, SessionId>;
  createSession!: Sequelize.HasManyCreateAssociationMixin<Session>;
  removeSession!: Sequelize.HasManyRemoveAssociationMixin<Session, SessionId>;
  removeSessions!: Sequelize.HasManyRemoveAssociationsMixin<Session, SessionId>;
  hasSession!: Sequelize.HasManyHasAssociationMixin<Session, SessionId>;
  hasSessions!: Sequelize.HasManyHasAssociationsMixin<Session, SessionId>;
  countSessions!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany steam_user via user_id
  steam_users!: SteamUser[];
  getSteam_users!: Sequelize.HasManyGetAssociationsMixin<SteamUser>;
  setSteam_users!: Sequelize.HasManySetAssociationsMixin<SteamUser, SteamUserId>;
  addSteam_user!: Sequelize.HasManyAddAssociationMixin<SteamUser, SteamUserId>;
  addSteam_users!: Sequelize.HasManyAddAssociationsMixin<SteamUser, SteamUserId>;
  createSteam_user!: Sequelize.HasManyCreateAssociationMixin<SteamUser>;
  removeSteam_user!: Sequelize.HasManyRemoveAssociationMixin<SteamUser, SteamUserId>;
  removeSteam_users!: Sequelize.HasManyRemoveAssociationsMixin<SteamUser, SteamUserId>;
  hasSteam_user!: Sequelize.HasManyHasAssociationMixin<SteamUser, SteamUserId>;
  hasSteam_users!: Sequelize.HasManyHasAssociationsMixin<SteamUser, SteamUserId>;
  countSteam_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany twitch_user via user_id
  twitch_users!: TwitchUser[];
  getTwitch_users!: Sequelize.HasManyGetAssociationsMixin<TwitchUser>;
  setTwitch_users!: Sequelize.HasManySetAssociationsMixin<TwitchUser, TwitchUserId>;
  addTwitch_user!: Sequelize.HasManyAddAssociationMixin<TwitchUser, TwitchUserId>;
  addTwitch_users!: Sequelize.HasManyAddAssociationsMixin<TwitchUser, TwitchUserId>;
  createTwitch_user!: Sequelize.HasManyCreateAssociationMixin<TwitchUser>;
  removeTwitch_user!: Sequelize.HasManyRemoveAssociationMixin<TwitchUser, TwitchUserId>;
  removeTwitch_users!: Sequelize.HasManyRemoveAssociationsMixin<TwitchUser, TwitchUserId>;
  hasTwitch_user!: Sequelize.HasManyHasAssociationMixin<TwitchUser, TwitchUserId>;
  hasTwitch_users!: Sequelize.HasManyHasAssociationsMixin<TwitchUser, TwitchUserId>;
  countTwitch_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    return User.init({
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
