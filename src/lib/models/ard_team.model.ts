import type { Optional } from "sequelize";
import ArdPlayerArdTeam from "./ard_player_ard_team.model";
import Team from "./team.model";
import ArdPlayer from "./ard_player.model";
import {
	AutoIncrement,
	BelongsToMany,
	Table,
	Column,
	Model,
	PrimaryKey,
	AllowNull,
	DataType,
	BelongsTo,
	DeletedAt,
	UpdatedAt,
	CreatedAt,
} from "sequelize-typescript";

export interface IArdTeamAttributes {
	id: number;
	name: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type ArdTeamPk = "id";
export type ArdTeamId = ArdTeam[ArdTeamPk];
export type ArdTeamOptionalAttributes =
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type ArdTeamCreationAttributes = Optional<
	IArdTeamAttributes,
	ArdTeamOptionalAttributes
>;
@Table({
	tableName: "ard_teams",
	underscored: true,
	indexes: [
		{
			name: "ard_teams_id_unique",
			unique: true,
			fields: [{ name: "id" }],
		},
	],
})
export default class ArdTeam
	extends Model<IArdTeamAttributes, ArdTeamCreationAttributes>
	implements IArdTeamAttributes
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
	declare name: string;

	@CreatedAt
	declare created_at?: Date;

	@UpdatedAt
	declare updated_at?: Date;

	@DeletedAt
	declare deleted_at?: Date;

	@BelongsToMany(
		() => ArdPlayer,
		() => ArdPlayerArdTeam,
	)
	players?: Array<ArdPlayer & { ArdPlayerArdTeam: ArdPlayerArdTeam }>;

	@BelongsTo(() => Team)
	team?: Team;
}
