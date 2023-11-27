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
import ArdTeam from "./ard_team.model";
import Country from "./country.model";
import Player from "./player.model";
import PlayerTeam from "./player_team.model";

export interface ITeamAttributes {
	id: number;
	name: string;
	tag: string;
	current_elo?: number;
	base_elo: number;
	current_atp?: number;
	base_atp: number;
	primary_color?: string;
	secondary_color?: string;
	aoe_reference_data_team_id?: number;
	country_id?: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type TeamPk = "id";
export type TeamId = Team[TeamPk];
export type TeamOptionalAttributes =
	| "current_elo"
	| "base_elo"
	| "current_atp"
	| "base_atp"
	| "primary_color"
	| "secondary_color"
	| "aoe_reference_data_team_id"
	| "country_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type TeamCreationAttributes = Optional<
	ITeamAttributes,
	TeamOptionalAttributes
>;

@Table({
	tableName: "teams",
	underscored: true,
	indexes: [
		{
			name: "teams_name_tag_unique",
			unique: true,
			fields: [{ name: "name" }, { name: "tag" }],
		},
	],
})
export default class Team
	extends Model<ITeamAttributes, TeamCreationAttributes>
	implements ITeamAttributes
{
	@Column
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	declare id: number;

	@Column({
		type: DataType.TEXT,
	})
	@Unique(true)
	declare name: string;

	@Column({
		type: DataType.TEXT,
	})
	@Unique
	declare tag: string;

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
	declare primary_color?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare secondary_color?: string;

	@Column
	@ForeignKey(() => ArdTeam)
	@AllowNull
	declare aoe_reference_data_team_id?: number;

	@Column
	@ForeignKey(() => Country)
	@AllowNull
	declare country_id?: number;

	@CreatedAt
	declare created_at?: Date;

	@UpdatedAt
	declare updated_at?: Date;

	@DeletedAt
	declare deleted_at?: Date;

	@BelongsTo(() => ArdTeam)
	ard_team?: ArdTeam;

	@BelongsToMany(
		() => Player,
		() => PlayerTeam,
	)
	players?: Array<Player & { PlayerTeam: PlayerTeam }>;
}
