import type { Optional } from "sequelize";
import {
	AllowNull,
	AutoIncrement,
	BelongsToMany,
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	HasMany,
	HasOne,
	Model,
	PrimaryKey,
	Table,
	UpdatedAt,
} from "sequelize-typescript";
import { ArdPlayer } from "./ard_player.model";
import { ArdPlayerArdTeam } from "./ard_player_ard_team.model";
import { Team } from "./team.model";

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
export class ArdTeam
	extends Model<IArdTeamAttributes, ArdTeamCreationAttributes>
	implements IArdTeamAttributes
{
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@AllowNull(false)
	@Column({
		type: DataType.TEXT,
	})
	declare name: string;

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

	@BelongsToMany(
		() => ArdPlayer,
		() => ArdPlayerArdTeam,
	)
	players?: Array<ArdPlayer & { ArdPlayerArdTeam: ArdPlayerArdTeam }>;

	@HasOne(() => Team)
	team?: Team;
}
