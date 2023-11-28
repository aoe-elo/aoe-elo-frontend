import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type {
	LocationLocationStyle,
	LocationLocationStyleId,
} from "./location_location_style.model";
import type {
	LocationSetInfo,
	LocationSetInfoId,
} from "./location_set_info.model";

export interface ILocationAttributes {
	id: number;
	name: string;
	name_short?: string;
	liquipedia_link?: string;
	aoe_2_map_link?: string;
	aoe_2_map_uuid?: string;
	image_path?: string;
	preview_image_path?: string;
	keywords?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type LocationPk = "id";
export type LocationId = Location[LocationPk];
export type LocationOptionalAttributes =
	| "name_short"
	| "liquipedia_link"
	| "aoe_2_map_link"
	| "aoe_2_map_uuid"
	| "image_path"
	| "preview_image_path"
	| "keywords"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type LocationCreationAttributes = Optional<
	ILocationAttributes,
	LocationOptionalAttributes
>;

export class Location
	extends Model<ILocationAttributes, LocationCreationAttributes>
	implements ILocationAttributes
{
	declare id: number;
	declare name: string;
	declare name_short?: string;
	declare liquipedia_link?: string;
	declare aoe_2_map_link?: string;
	declare aoe_2_map_uuid?: string;
	declare image_path?: string;
	declare preview_image_path?: string;
	declare keywords?: string;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	// Location hasMany LocationLocationStyle via location_id
	location_location_styles!: LocationLocationStyle[];
	getLocation_location_styles!: Sequelize.HasManyGetAssociationsMixin<LocationLocationStyle>;
	setLocation_location_styles!: Sequelize.HasManySetAssociationsMixin<
		LocationLocationStyle,
		LocationLocationStyleId
	>;
	addLocation_location_style!: Sequelize.HasManyAddAssociationMixin<
		LocationLocationStyle,
		LocationLocationStyleId
	>;
	addLocation_location_styles!: Sequelize.HasManyAddAssociationsMixin<
		LocationLocationStyle,
		LocationLocationStyleId
	>;
	createLocation_location_style!: Sequelize.HasManyCreateAssociationMixin<LocationLocationStyle>;
	removeLocation_location_style!: Sequelize.HasManyRemoveAssociationMixin<
		LocationLocationStyle,
		LocationLocationStyleId
	>;
	removeLocation_location_styles!: Sequelize.HasManyRemoveAssociationsMixin<
		LocationLocationStyle,
		LocationLocationStyleId
	>;
	hasLocation_location_style!: Sequelize.HasManyHasAssociationMixin<
		LocationLocationStyle,
		LocationLocationStyleId
	>;
	hasLocation_location_styles!: Sequelize.HasManyHasAssociationsMixin<
		LocationLocationStyle,
		LocationLocationStyleId
	>;
	countLocation_location_styles!: Sequelize.HasManyCountAssociationsMixin;
	// Location hasMany LocationSetInfo via location_id
	location_set_infos!: LocationSetInfo[];
	getLocation_set_infos!: Sequelize.HasManyGetAssociationsMixin<LocationSetInfo>;
	setLocation_set_infos!: Sequelize.HasManySetAssociationsMixin<
		LocationSetInfo,
		LocationSetInfoId
	>;
	addLocation_set_info!: Sequelize.HasManyAddAssociationMixin<
		LocationSetInfo,
		LocationSetInfoId
	>;
	addLocation_set_infos!: Sequelize.HasManyAddAssociationsMixin<
		LocationSetInfo,
		LocationSetInfoId
	>;
	createLocation_set_info!: Sequelize.HasManyCreateAssociationMixin<LocationSetInfo>;
	removeLocation_set_info!: Sequelize.HasManyRemoveAssociationMixin<
		LocationSetInfo,
		LocationSetInfoId
	>;
	removeLocation_set_infos!: Sequelize.HasManyRemoveAssociationsMixin<
		LocationSetInfo,
		LocationSetInfoId
	>;
	hasLocation_set_info!: Sequelize.HasManyHasAssociationMixin<
		LocationSetInfo,
		LocationSetInfoId
	>;
	hasLocation_set_infos!: Sequelize.HasManyHasAssociationsMixin<
		LocationSetInfo,
		LocationSetInfoId
	>;
	countLocation_set_infos!: Sequelize.HasManyCountAssociationsMixin;

	static initModel(sequelize: Sequelize.Sequelize): typeof Location {
		return sequelize.define(
			"Location",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				name_short: {
					type: DataTypes.STRING,
					allowNull: true,
					unique: true,
				},
				liquipedia_link: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
				aoe_2_map_link: {
					type: DataTypes.TEXT,
					allowNull: true,
					field: "aoe2map_link",
				},
				aoe_2_map_uuid: {
					type: DataTypes.STRING,
					allowNull: true,
					field: "aoe2map_uuid",
				},
				image_path: {
					type: DataTypes.TEXT,
					allowNull: true,
					unique: true,
				},
				preview_image_path: {
					type: DataTypes.TEXT,
					allowNull: true,
					unique: true,
				},
				keywords: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
			},
			{
				tableName: "locations",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "locations_name_name_short_image_path_preview_image_path_unique",
						unique: true,
						fields: [
							{ name: "name" },
							{ name: "name_short" },
							{ name: "image_path" },
							{ name: "preview_image_path" },
						],
					},
				],
			},
		) as typeof Location;
	}
}
