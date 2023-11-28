import type { Optional } from "sequelize";
import {
	AllowNull,
	AutoIncrement,
	BelongsTo,
	BelongsToMany,
	Column,
	CreatedAt,
	DataType,
	Default,
	DeletedAt,
	ForeignKey,
	Model,
	PrimaryKey,
	Table,
	Unique,
	UpdatedAt,
} from "sequelize-typescript";
import { ArdPlayer } from "./ard_player.model";
import { Country } from "./country.model";
import { PlayerTeam } from "./player_team.model";
import { Team } from "./team.model";
import { User } from "./user.model";

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
export type PlayerOptionalAttributes =
	| "current_elo"
	| "base_elo"
	| "current_atp"
	| "base_atp"
	| "voobly_id_main"
	| "relic_link_id_main"
	| "steam_id_main"
	| "liquipedia_handle"
	| "discord_handle"
	| "twitch_handle"
	| "aoe_reference_data_player_id"
	| "country_id"
	| "user_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type PlayerCreationAttributes = Optional<
	IPlayerAttributes,
	PlayerOptionalAttributes
>;

@Table({
	tableName: "players",
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
			],
		},
		{
			name: "players_voobly_id_main_unique",
			unique: true,
			fields: [{ name: "voobly_id_main" }],
		},
		{
			name: "players_relic_link_id_main_unique",
			unique: true,
			fields: [{ name: "relic_link_id_main" }],
		},
		{
			name: "players_steam_id_main_unique",
			unique: true,
			fields: [{ name: "steam_id_main" }],
		},
		{
			name: "players_liquipedia_handle_unique",
			unique: true,
			fields: [{ name: "liquipedia_handle" }],
		},
		{
			name: "players_discord_handle_unique",
			unique: true,
			fields: [{ name: "discord_handle" }],
		},
		{
			name: "players_twitch_handle_unique",
			unique: true,
			fields: [{ name: "twitch_handle" }],
		},
	],
})
export class Player
	extends Model<IPlayerAttributes, PlayerCreationAttributes>
	implements IPlayerAttributes
{
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@AllowNull(false)
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare name: string;

	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare current_elo?: number;

	@Default(1800)
	@Column({
		type: DataType.INTEGER,
	})
	declare base_elo: number;

	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare current_atp?: number;

	@Default(1800)
	@Column({
		type: DataType.INTEGER,
	})
	declare base_atp: number;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare voobly_id_main?: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare relic_link_id_main?: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare steam_id_main?: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare liquipedia_handle?: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare discord_handle?: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare twitch_handle?: string;

	@AllowNull
	@ForeignKey(() => ArdPlayer)
	@Column({
		type: DataType.INTEGER,
	})
	declare aoe_reference_data_player_id?: number;

	@AllowNull
	@ForeignKey(() => Country)
	@Column({
		type: DataType.INTEGER,
	})
	declare country_id?: number;

	@ForeignKey(() => User)
	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare user_id?: number;

	@CreatedAt
	@Column({
		type: DataType.DATE,
	})({
		type: DataType.DATE,
	})
	declare created_at?: Date;

	@UpdatedAt
	@Column({
		type: DataType.DATE,
	})({
		type: DataType.DATE,
	})
	declare updated_at?: Date;

	@DeletedAt
	@Column({
		type: DataType.DATE,
	})({
		type: DataType.DATE,
	})
	declare deleted_at?: Date;

	@BelongsTo(() => ArdPlayer)
	ard_player?: ArdPlayer;

	@BelongsTo(() => Country)
	country?: Country;

	@BelongsTo(() => User)
	user?: User;

	@BelongsToMany(
		() => Team,
		() => PlayerTeam,
	)
	teams?: Array<Team & { PlayerTeam: PlayerTeam }>;
}
