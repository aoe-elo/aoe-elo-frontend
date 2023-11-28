import type { Optional } from "sequelize";
import {
	AllowNull,
	AutoIncrement,
	BelongsTo,
	BelongsToMany,
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	ForeignKey,
	HasOne,
	Model,
	PrimaryKey,
	Table,
	Unique,
	UpdatedAt,
} from "sequelize-typescript";
import { ArdPlayerArdTeam } from "./ard_player_ard_team.model";
import { ArdTeam } from "./ard_team.model";
import { Country } from "./country.model";
import { Player } from "./player.model";

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
export class ArdPlayer
	extends Model<IArdPlayerAttributes, ArdPlayerCreationAttributes>
	implements IArdPlayerAttributes
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
	@ForeignKey(() => Country)
	@Column({
		type: DataType.INTEGER,
	})
	declare country_id?: number;

	@AllowNull
	@ForeignKey(() => Player)
	@Column({
		type: DataType.INTEGER,
	})
	declare aoeelo_id?: number;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.INTEGER,
	})
	declare esports_earnings?: number;

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
	declare discord_id?: string;

	@CreatedAt
	@Column({
		type: DataType.DATE,
	})
	declare created_at?: Date;

	@UpdatedAt
	@Column({
		type: DataType.DATE,
	})
	declare updated_at?: Date;

	@DeletedAt
	@Column({
		type: DataType.DATE,
	})
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
