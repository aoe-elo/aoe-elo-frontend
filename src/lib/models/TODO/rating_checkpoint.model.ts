import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IRatingCheckpointAttributes {
	id: number;
	participant_id: number;
	participant_type: string;
	rating: number;
	valid_period_start: Date;
	valid_period_end: Date;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type RatingCheckpointPk = "id";
export type RatingCheckpointId = RatingCheckpoint[RatingCheckpointPk];
export type RatingCheckpointOptionalAttributes =
	| "rating"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type RatingCheckpointCreationAttributes = Optional<
	IRatingCheckpointAttributes,
	RatingCheckpointOptionalAttributes
>;

export class RatingCheckpoint
	extends Model<IRatingCheckpointAttributes, RatingCheckpointCreationAttributes>
	implements IRatingCheckpointAttributes
{
	declare id: number;
	declare participant_id: number;
	declare participant_type: string;
	declare rating: number;
	declare valid_period_start: Date;
	declare valid_period_end: Date;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	static initModel(sequelize: Sequelize.Sequelize): typeof RatingCheckpoint {
		return sequelize.define(
			"RatingCheckpoint",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				participant_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					unique: true,
				},
				participant_type: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				rating: {
					type: DataTypes.INTEGER,
					allowNull: false,
					defaultValue: 0,
				},
				valid_period_start: {
					type: DataTypes.DATE,
					allowNull: false,
					unique: true,
				},
				valid_period_end: {
					type: DataTypes.DATE,
					allowNull: false,
					unique: true,
				},
			},
			{
				tableName: "rating_checkpoints",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "rating_checkpoints_participant_id_participant_type_valid_period_start_valid_period_end_unique",
						unique: true,
						fields: [
							{ name: "participant_id" },
							{ name: "participant_type" },
							{ name: "valid_period_start" },
							{ name: "valid_period_end" },
						],
					},
				],
			},
		) as typeof RatingCheckpoint;
	}
}
