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
import { ArdPlayer } from "./ard_player.model";
import { ArdTeam } from "./ard_team.model";

export interface IArdPlayerArdTeamAttributes {
	id: number;
	ard_player_id?: number;
	ard_team_id?: number;
	is_active: boolean;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type ArdPlayerArdTeamPk = "id";
export type ArdPlayerArdTeamId = ArdPlayerArdTeam[ArdPlayerArdTeamPk];
export type ArdPlayerArdTeamOptionalAttributes =
	| "ard_player_id"
	| "ard_team_id"
	| "is_active"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type ArdPlayerArdTeamCreationAttributes = Optional<
	IArdPlayerArdTeamAttributes,
	ArdPlayerArdTeamOptionalAttributes
>;

@Table({
	tableName: "ard_player_ard_team",
	underscored: true,
	indexes: [
		{
			name: "ard_player_ard_team_ard_team_id_ard_player_id_unique",
			unique: true,
			fields: [{ name: "ard_team_id" }, { name: "ard_player_id" }],
		},
	],
})
export class ArdPlayerArdTeam
	extends Model<IArdPlayerArdTeamAttributes, ArdPlayerArdTeamCreationAttributes>
	implements IArdPlayerArdTeamAttributes
{
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@ForeignKey(() => ArdPlayer)
	@Unique(true)
	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare ard_player_id?: number;

	@ForeignKey(() => ArdTeam)
	@AllowNull
	@Unique(true)
	@Column({
		type: DataType.INTEGER,
	})
	declare ard_team_id?: number;

	@Default(1)
	@AllowNull(false)
	@Column({
		type: DataType.BOOLEAN,
	})
	declare is_active: boolean;

	@CreatedAt
	@Column({
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
