import type { Optional } from "sequelize";
import AtpCategory from "./atp_category.model";
import {
	AutoIncrement,
	Table,
	Column,
	Model,
	Default,
	PrimaryKey,
	Unique,
	AllowNull,
	DataType,
	ForeignKey,
	DeletedAt,
	UpdatedAt,
	CreatedAt,
} from "sequelize-typescript";

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
export default class Tournament
	extends Model<ITournamentAttributes, TournamentCreationAttributes>
	implements ITournamentAttributes
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

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	@Unique(true)
	declare short_name: string;

	@Column
	declare started_at?: Date;

	@Column
	declare ended_at?: Date;

	@Column
	@Default(1)
	declare weight: number;

	@Column
	@Default(1)
	declare game_mode: number;

	@Column
	@Default(1)
	declare format_type: number;

	@Column
	@Default(1)
	declare event_type: number;

	@Column
	@AllowNull
	declare prize_pool?: number;

	@Column
	@Default(1)
	declare prize_currency: number;

	@Column
	@Default(1)
	declare structure: number;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	@Unique(true)
	declare evaluation?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	@Unique(true)
	declare website_link?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	@Unique(true)
	declare liquipedia_link?: string;

	@ForeignKey(() => AtpCategory)
	@AllowNull
	declare atp_category_id?: number;

	@CreatedAt
	declare created_at?: Date;

	@UpdatedAt
	declare updated_at?: Date;

	@DeletedAt
	declare deleted_at?: Date;
}
