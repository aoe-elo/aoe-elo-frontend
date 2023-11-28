import type { Optional } from "sequelize";
import {
	AllowNull,
	AutoIncrement,
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
import { AtpCategory } from "./atp_category.model";

export interface ITournamentAttributes {
	id: number;
	name: string;
	short_name: string;
	started_at?: Date;
	ended_at?: Date;
	weight: number;
	game_mode: number;
	format_type: number;
	event_type: number;
	prize_pool?: number;
	prize_currency: number;
	structure: number;
	evaluation?: string;
	website_link?: string;
	liquipedia_link?: string;
	atp_category_id?: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type TournamentPk = "id";
export type TournamentId = Tournament[TournamentPk];
export type TournamentOptionalAttributes =
	| "started_at"
	| "ended_at"
	| "weight"
	| "game_mode"
	| "format_type"
	| "event_type"
	| "prize_pool"
	| "prize_currency"
	| "structure"
	| "evaluation"
	| "website_link"
	| "liquipedia_link"
	| "atp_category_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type TournamentCreationAttributes = Optional<
	ITournamentAttributes,
	TournamentOptionalAttributes
>;

@Table({
	tableName: "tournaments",
	underscored: true,
	indexes: [
		{
			name: "tournaments_name_atp_category_id_liquipedia_link_short_name_unique",
			unique: true,
			fields: [
				{ name: "name" },
				{ name: "atp_category_id" },
				{ name: "liquipedia_link" },
				{ name: "short_name" },
			],
		},
	],
})
export class Tournament
	extends Model<ITournamentAttributes, TournamentCreationAttributes>
	implements ITournamentAttributes
{
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@Unique(true)
	@AllowNull(false)
	@Column({
		type: DataType.TEXT,
	})
	declare name: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare short_name: string;

	@Column({
		type: DataType.DATE,
	})
	declare started_at?: Date;

	@Column({
		type: DataType.DATE,
	})
	declare ended_at?: Date;

	@Default(1)
	@Column({
		type: DataType.INTEGER,
	})
	declare weight: number;

	@Default(1)
	@Column({
		type: DataType.INTEGER,
	})
	declare game_mode: number;

	@Default(1)
	@Column({
		type: DataType.INTEGER,
	})
	declare format_type: number;

	@Default(1)
	@Column({
		type: DataType.INTEGER,
	})
	declare event_type: number;

	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare prize_pool?: number;

	@Default(1)
	@Column({
		type: DataType.INTEGER,
	})
	declare prize_currency: number;

	@Default(1)
	@Column({
		type: DataType.INTEGER,
	})
	declare structure: number;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare evaluation?: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare website_link?: string;

	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare liquipedia_link?: string;

	@AllowNull
	@ForeignKey(() => AtpCategory)
	@Column({
		type: DataType.INTEGER,
	})
	declare atp_category_id?: number;

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
}
