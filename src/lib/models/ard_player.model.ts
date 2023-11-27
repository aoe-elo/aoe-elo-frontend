import type { Optional } from "sequelize";
import ArdPlayerArdTeam from "./ard_player_ard_team.model";
import ArdTeam from "./ard_team.model";
import Country from "./country.model";
import Player from "./player.model";
import {
	AutoIncrement,
	Table,
	Column,
	Model,
	PrimaryKey,
	Unique,
	AllowNull,
	DataType,
	BelongsTo,
	ForeignKey,
	DeletedAt,
	UpdatedAt,
	CreatedAt,
	HasOne,
	BelongsToMany,
} from "sequelize-typescript";

export interface IArdPlayerAttributes {
	id: number;
	name: string;
	country_id?: number;
	aoeelo_id?: number;
	esports_earnings?: number;
	liquipedia_handle?: string;
	discord_id?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type ArdPlayerPk = "id";
export type ArdPlayerId = ArdPlayer[ArdPlayerPk];
export type ArdPlayerOptionalAttributes =
	| "country_id"
	| "aoeelo_id"
	| "esports_earnings"
	| "liquipedia_handle"
	| "discord_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type ArdPlayerCreationAttributes = Optional<
	IArdPlayerAttributes,
	ArdPlayerOptionalAttributes
>;

@Table({
	tableName: "ard_players",
	modelName: "App\\Models\\ArdPlayer",
	underscored: true,
	indexes: [
		{
			name: "ard_players_id_unique",
			unique: true,
			fields: [{ name: "id" }],
		},
		{
			name: "ard_players_aoeelo_id_unique",
			unique: true,
			fields: [{ name: "aoeelo_id" }],
		},
		{
			name: "ard_players_esports_earnings_unique",
			unique: true,
			fields: [{ name: "esports_earnings" }],
		},
		{
			name: "ard_players_liquipedia_handle_unique",
			unique: true,
			fields: [{ name: "liquipedia_handle" }],
		},
		{
			name: "ard_players_discord_id_unique",
			unique: true,
			fields: [{ name: "discord_id" }],
		},
	],
})
export default class ArdPlayer
	extends Model<IArdPlayerAttributes, ArdPlayerCreationAttributes>
	implements IArdPlayerAttributes
{
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
	@ForeignKey(() => Country)
	@AllowNull
	declare country_id?: number;

	@Column
	@ForeignKey(() => Player)
	@AllowNull
	declare aoeelo_id?: number;

	@Column
	@Unique(true)
	@AllowNull
	declare esports_earnings?: number;

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
	declare discord_id?: string;

	@CreatedAt
	declare created_at?: Date;

	@UpdatedAt
	declare updated_at?: Date;

	@DeletedAt
	declare deleted_at?: Date;

	@HasOne(() => Player)
	player?: Player;

	@BelongsTo(() => Country, { foreignKey: "country_id", as: "country" })
	country?: Country;

	@BelongsToMany(
		() => ArdTeam,
		() => ArdPlayerArdTeam,
	)
	teams?: Array<ArdTeam & { ArdPlayerArdTeam: ArdPlayerArdTeam }>;
}
