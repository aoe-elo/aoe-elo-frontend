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
	UpdatedAt,
} from "sequelize-typescript";
import { Player } from "./player.model";
import { Team } from "./team.model";

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
export class PlayerTeam
	extends Model<IPlayerTeamAttributes, PlayerTeamCreationAttributes>
	implements IPlayerTeamAttributes
{
	// TODO!: Check/Drop unique constraints
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@AllowNull
	@Column({
		type: DataType.DATE,
	})
	declare joined_at?: Date;

	@AllowNull
	@Column({
		type: DataType.DATE,
	})
	declare left_at?: Date;

	@Default(1)
	@AllowNull(true)
	@Column({
		type: DataType.BOOLEAN,
	})
	declare is_active?: number;

	@ForeignKey(() => Player)
	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare player_id: number;

	@ForeignKey(() => Team)
	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare team_id: number;

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
}
