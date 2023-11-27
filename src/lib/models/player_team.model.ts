import type { Optional } from "sequelize";
import Player from "./player.model";
import Team from "./team.model";
import {
	AutoIncrement,
	Table,
	Column,
	Model,
	Default,
	PrimaryKey,
	AllowNull,
	DataType,
	ForeignKey,
	DeletedAt,
	UpdatedAt,
	CreatedAt,
} from "sequelize-typescript";

export interface IPlayerTeamAttributes {
	id: number;
	joined_at?: Date;
	left_at?: Date;
	is_active?: number;
	player_id: number;
	team_id: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type PlayerTeamPk = "id";
export type PlayerTeamId = PlayerTeam[PlayerTeamPk];
export type PlayerTeamOptionalAttributes =
	| "joined_at"
	| "left_at"
	| "is_active"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type PlayerTeamCreationAttributes = Optional<
	IPlayerTeamAttributes,
	PlayerTeamOptionalAttributes
>;

@Table({
	tableName: "player_team",
	timestamps: true,
	paranoid: true,
	underscored: true,
	indexes: [
		{
			name: "player_team_player_id_team_id_joined_at_left_at_unique",
			unique: true,
			fields: [
				{ name: "player_id" },
				{ name: "team_id" },
				{ name: "joined_at" },
				{ name: "left_at" },
			],
		},
	],
})
export default class PlayerTeam
	extends Model<IPlayerTeamAttributes, PlayerTeamCreationAttributes>
	implements IPlayerTeamAttributes
{
	// TODO!: Check/Drop unique constraints
	@Column
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	declare id: number;

	@Column
	@AllowNull
	declare joined_at?: Date;

	@Column
	@AllowNull
	declare left_at?: Date;

	@Column({
		type: DataType.BOOLEAN,
	})
	@Default(1)
	@AllowNull(true)
	declare is_active?: number;

	@Column
	@ForeignKey(() => Player)
	@AllowNull
	declare player_id: number;

	@Column
	@ForeignKey(() => Team)
	@AllowNull
	declare team_id: number;

	@CreatedAt
	declare created_at?: Date;

	@UpdatedAt
	declare updated_at?: Date;

	@DeletedAt
	declare deleted_at?: Date;
}
