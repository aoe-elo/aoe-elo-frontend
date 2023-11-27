import type { Optional } from 'sequelize';
import ArdPlayer from './ard_player.model';
import Country from './country.model';
import User from './user.model';
import { AutoIncrement, Table, Column, Model, Default, PrimaryKey, Unique, AllowNull, DataType, BelongsTo, ForeignKey, DeletedAt, UpdatedAt, CreatedAt, BelongsToMany } from 'sequelize-typescript';
import Team from './team.model';
import PlayerTeam from './player_team.model';

export interface IPlayerAttributes {
  id: number;
  name: string;
  current_elo?: number;
  base_elo: number;
  current_atp?: number;
  base_atp: number;
  voobly_id_main?: string;
  relic_link_id_main?: string;
  steam_id_main?: string;
  liquipedia_handle?: string;
  discord_handle?: string;
  twitch_handle?: string;
  aoe_reference_data_player_id?: number;
  country_id?: number;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type PlayerPk = "id";
export type PlayerId = Player[PlayerPk];
export type PlayerOptionalAttributes = "current_elo" | "base_elo" | "current_atp" | "base_atp" | "voobly_id_main" | "relic_link_id_main" | "steam_id_main" | "liquipedia_handle" | "discord_handle" | "twitch_handle" | "aoe_reference_data_player_id" | "country_id" | "user_id" | "created_at" | "updated_at" | "deleted_at";
export type PlayerCreationAttributes = Optional<IPlayerAttributes, PlayerOptionalAttributes>;

@Table({
  tableName: 'players',
  underscored: true,
  indexes: [
    {
      name: "players_name_user_id_country_id_relic_link_id_main_steam_id_main_unique",
      unique: true,
      fields: [
        { name: "name" },
        { name: "user_id" },
        { name: "country_id" },
        { name: "relic_link_id_main" },
        { name: "steam_id_main" },
      ]
    },
    {
      name: "players_voobly_id_main_unique",
      unique: true,
      fields: [
        { name: "voobly_id_main" },
      ]
    },
    {
      name: "players_relic_link_id_main_unique",
      unique: true,
      fields: [
        { name: "relic_link_id_main" },
      ]
    },
    {
      name: "players_steam_id_main_unique",
      unique: true,
      fields: [
        { name: "steam_id_main" },
      ]
    },
    {
      name: "players_liquipedia_handle_unique",
      unique: true,
      fields: [
        { name: "liquipedia_handle" },
      ]
    },
    {
      name: "players_discord_handle_unique",
      unique: true,
      fields: [
        { name: "discord_handle" },
      ]
    },
    {
      name: "players_twitch_handle_unique",
      unique: true,
      fields: [
        { name: "twitch_handle" },
      ]
    },
  ]
})
export default class Player extends Model<IPlayerAttributes, PlayerCreationAttributes> implements IPlayerAttributes {
  @Column
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  declare id: number;

  @Column({
    type: DataType.TEXT,
  })
  @AllowNull(false)
  @Unique(true)
  declare name: string;

  @Column
  @AllowNull
  declare current_elo?: number;

  @Column
  @Default(1800)
  declare base_elo: number;

  @Column
  @AllowNull
  declare current_atp?: number;

  @Column
  @Default(1800)
  declare base_atp: number;

  @Column({
    type: DataType.TEXT,
  })
  @AllowNull
  declare voobly_id_main?: string;

  @Column({
    type: DataType.TEXT,
  })
  @AllowNull
  @Unique(true)
  declare relic_link_id_main?: string;

  @Column({
    type: DataType.TEXT,
  })
  @AllowNull
  @Unique(true)
  declare steam_id_main?: string;

  @Column({
    type: DataType.TEXT,
  })
  @AllowNull
  @Unique(true)
  declare liquipedia_handle?: string;

  @Column({
    type: DataType.TEXT,
  })
  @AllowNull
  @Unique(true)
  declare discord_handle?: string;

  @Column({
    type: DataType.TEXT,
  })
  @AllowNull
  @Unique(true)
  declare twitch_handle?: string;

  @Column
  @ForeignKey(() => ArdPlayer)
  @AllowNull
  declare aoe_reference_data_player_id?: number;

  @Column
  @ForeignKey(() => Country)
  @AllowNull
  declare country_id?: number;

  @ForeignKey(() => User)
  @AllowNull
  declare user_id?: number;

  @CreatedAt
  declare created_at?: Date;

  @UpdatedAt
  declare updated_at?: Date;

  @DeletedAt
  declare deleted_at?: Date;

  @BelongsTo(() => ArdPlayer)
  ard_player?: ArdPlayer;

  @BelongsTo(() => Country)
  country?: Country;

  @BelongsTo(() => User)
  user?: User;

  @BelongsToMany(() => Team, () => PlayerTeam)
  teams?: Array<Team & { PlayerTeam: PlayerTeam }>;
}
