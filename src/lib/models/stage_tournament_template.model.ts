import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IStageTournamentTemplateAttributes {
	id: number;
	name: string;
	short_name: string;
	description?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type StageTournamentTemplatePk = "id";
export type StageTournamentTemplateId =
	StageTournamentTemplate[StageTournamentTemplatePk];
export type StageTournamentTemplateOptionalAttributes =
	| "description"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type StageTournamentTemplateCreationAttributes = Optional<
	IStageTournamentTemplateAttributes,
	StageTournamentTemplateOptionalAttributes
>;

export class StageTournamentTemplate
	extends Model<
		IStageTournamentTemplateAttributes,
		StageTournamentTemplateCreationAttributes
	>
	implements IStageTournamentTemplateAttributes
{
	declare id: number;
	declare name: string;
	declare short_name: string;
	declare description?: string;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	static initModel(
		sequelize: Sequelize.Sequelize,
	): typeof StageTournamentTemplate {
		return sequelize.define(
			"StageTournamentTemplate",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				name: {
					type: DataTypes.TEXT,
					allowNull: false,
					unique: true,
				},
				short_name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				description: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
			},
			{
				tableName: "stage_tournament_templates",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "stage_tournament_templates_name_short_name_unique",
						unique: true,
						fields: [{ name: "name" }, { name: "short_name" }],
					},
				],
			},
		) as typeof StageTournamentTemplate;
	}
}
