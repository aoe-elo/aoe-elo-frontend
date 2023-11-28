import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { Tournament, TournamentId } from "../tournament.model";

export interface ITournamentResultAttributes {
	id: number;
	type?: number;
	prize_amount?: number;
	prize_currency: number;
	source?: string;
	participatory_id: number;
	participatory_type: string;
	tournament_id: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type TournamentResultPk = "id";
export type TournamentResultId = TournamentResult[TournamentResultPk];
export type TournamentResultOptionalAttributes =
	| "type"
	| "prize_amount"
	| "prize_currency"
	| "source"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type TournamentResultCreationAttributes = Optional<
	ITournamentResultAttributes,
	TournamentResultOptionalAttributes
>;

export class TournamentResult
	extends Model<ITournamentResultAttributes, TournamentResultCreationAttributes>
	implements ITournamentResultAttributes
{
	declare id: number;
	declare type?: number;
	declare prize_amount?: number;
	declare prize_currency: number;
	declare source?: string;
	declare participatory_id: number;
	declare participatory_type: string;
	declare tournament_id: number;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	// TournamentResult belongsTo Tournament via tournament_id
	tournament!: Tournament;
	getTournament!: Sequelize.BelongsToGetAssociationMixin<Tournament>;
	setTournament!: Sequelize.BelongsToSetAssociationMixin<
		Tournament,
		TournamentId
	>;
	createTournament!: Sequelize.BelongsToCreateAssociationMixin<Tournament>;

	static initModel(sequelize: Sequelize.Sequelize): typeof TournamentResult {
		return sequelize.define(
			"TournamentResult",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				type: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				prize_amount: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				prize_currency: {
					type: DataTypes.INTEGER,
					allowNull: false,
					defaultValue: 1,
				},
				source: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
				participatory_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				participatory_type: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				tournament_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: "tournaments",
						key: "id",
					},
				},
			},
			{
				tableName: "tournament_results",
				timestamps: true,
				paranoid: true,
				underscored: true,
			},
		) as typeof TournamentResult;
	}
}
