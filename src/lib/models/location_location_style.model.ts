import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { Location, LocationId } from "./location.model";
import type { LocationStyle, LocationStyleId } from "./location_style.model";

export interface ILocationLocationStyleAttributes {
	id: number;
	location_id?: number;
	location_style_id?: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type LocationLocationStylePk = "id";
export type LocationLocationStyleId =
	LocationLocationStyle[LocationLocationStylePk];
export type LocationLocationStyleOptionalAttributes =
	| "location_id"
	| "location_style_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type LocationLocationStyleCreationAttributes = Optional<
	ILocationLocationStyleAttributes,
	LocationLocationStyleOptionalAttributes
>;

export class LocationLocationStyle
	extends Model<
		ILocationLocationStyleAttributes,
		LocationLocationStyleCreationAttributes
	>
	implements ILocationLocationStyleAttributes
{
	declare id: number;
	declare location_id?: number;
	declare location_style_id?: number;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	// LocationLocationStyle belongsTo LocationStyle via location_style_id
	location_style!: LocationStyle;
	getLocation_style!: Sequelize.BelongsToGetAssociationMixin<LocationStyle>;
	setLocation_style!: Sequelize.BelongsToSetAssociationMixin<
		LocationStyle,
		LocationStyleId
	>;
	createLocation_style!: Sequelize.BelongsToCreateAssociationMixin<LocationStyle>;
	// LocationLocationStyle belongsTo Location via location_id
	location!: Location;
	getLocation!: Sequelize.BelongsToGetAssociationMixin<Location>;
	setLocation!: Sequelize.BelongsToSetAssociationMixin<Location, LocationId>;
	createLocation!: Sequelize.BelongsToCreateAssociationMixin<Location>;

	static initModel(
		sequelize: Sequelize.Sequelize,
	): typeof LocationLocationStyle {
		return sequelize.define(
			"LocationLocationStyle",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				location_id: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: "locations",
						key: "id",
					},
					unique: true,
				},
				location_style_id: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: "location_styles",
						key: "id",
					},
					unique: true,
				},
			},
			{
				tableName: "location_location_styles",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "location_location_styles_location_id_location_style_id_unique",
						unique: true,
						fields: [{ name: "location_id" }, { name: "location_style_id" }],
					},
				],
			},
		) as typeof LocationLocationStyle;
	}
}
