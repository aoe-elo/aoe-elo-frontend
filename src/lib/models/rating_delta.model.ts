import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { Set as Match, SetId as MatchId } from "./set.model";

export interface IRatingDeltaAttributes {
	id: number;
	participant_id: number;
	participant_type: string;
	set_id: number;
	rating_delta: number;
	date_delta: Date;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type RatingDeltaPk = "id";
export type RatingDeltaId = RatingDelta[RatingDeltaPk];
export type RatingDeltaOptionalAttributes =
	| "rating_delta"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type RatingDeltaCreationAttributes = Optional<
	IRatingDeltaAttributes,
	RatingDeltaOptionalAttributes
>;

export class RatingDelta
	extends Model<IRatingDeltaAttributes, RatingDeltaCreationAttributes>
	implements IRatingDeltaAttributes
{
	declare id: number;
	declare participant_id: number;
	declare participant_type: string;
	declare set_id: number;
	declare rating_delta: number;
	declare date_delta: Date;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	// RatingDelta belongsTo Set via set_id
	match!: Match;
	getMatch!: Sequelize.BelongsToGetAssociationMixin<Match>;
	setMatch!: Sequelize.BelongsToSetAssociationMixin<Match, MatchId>;
	createMatch!: Sequelize.BelongsToCreateAssociationMixin<Match>;

	static initModel(sequelize: Sequelize.Sequelize): typeof RatingDelta {
		return sequelize.define(
			"RatingDelta",
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
				set_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: "sets",
						key: "id",
					},
					unique: true,
				},
				rating_delta: {
					type: DataTypes.INTEGER,
					allowNull: false,
					defaultValue: 0,
				},
				date_delta: {
					type: DataTypes.DATE,
					allowNull: false,
				},
			},
			{
				tableName: "rating_deltas",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "rating_deltas_participant_id_participant_type_set_id_unique",
						unique: true,
						fields: [
							{ name: "participant_id" },
							{ name: "participant_type" },
							{ name: "set_id" },
						],
					},
				],
			},
		) as typeof RatingDelta;
	}
}
