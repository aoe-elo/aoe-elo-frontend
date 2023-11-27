import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IJobAttributes {
	id: number;
	queue: string;
	payload: string;
	attempts: number;
	reserved_at?: number;
	available_at: number;
	created_at: number;
}

export type JobPk = "id";
export type JobId = Job[JobPk];
export type JobOptionalAttributes = "reserved_at" | "created_at";
export type JobCreationAttributes = Optional<
	IJobAttributes,
	JobOptionalAttributes
>;

export class Job
	extends Model<IJobAttributes, JobCreationAttributes>
	implements IJobAttributes
{
	declare id: number;
	declare queue: string;
	declare payload: string;
	declare attempts: number;
	declare reserved_at?: number;
	declare available_at: number;
	declare created_at: number;

	static initModel(sequelize: Sequelize.Sequelize): typeof Job {
		return sequelize.define(
			"Job",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				queue: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				payload: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
				attempts: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				reserved_at: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				available_at: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				created_at: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{
				tableName: "jobs",
				timestamps: true,
				underscored: true,
				indexes: [
					{
						name: "jobs_queue_index",
						fields: [{ name: "queue" }],
					},
				],
			},
		) as typeof Job;
	}
}
