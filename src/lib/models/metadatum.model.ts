import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IMetadatumAttributes {
	id: number;
	key: string;
	sub_key?: string;
	type_of_value: string;
	boolean_value?: number;
	integer_value?: number;
	smallint_value?: number;
	datetime_value?: Date;
	str_50_value?: string;
	str_100_value?: string;
	str_255_value?: string;
	text_value?: string;
	json_value?: string;
	metadatable_id: number;
	metadatable_type: string;
	is_verified: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type MetadatumPk = "id";
export type MetadatumId = Metadatum[MetadatumPk];
export type MetadatumOptionalAttributes =
	| "sub_key"
	| "boolean_value"
	| "integer_value"
	| "smallint_value"
	| "datetime_value"
	| "str_50_value"
	| "str_100_value"
	| "str_255_value"
	| "text_value"
	| "json_value"
	| "is_verified"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type MetadatumCreationAttributes = Optional<
	IMetadatumAttributes,
	MetadatumOptionalAttributes
>;

export class Metadatum
	extends Model<IMetadatumAttributes, MetadatumCreationAttributes>
	implements IMetadatumAttributes
{
	declare id: number;
	declare key: string;
	declare sub_key?: string;
	declare type_of_value: string;
	declare boolean_value?: number;
	declare integer_value?: number;
	declare smallint_value?: number;
	declare datetime_value?: Date;
	declare str_50_value?: string;
	declare str_100_value?: string;
	declare str_255_value?: string;
	declare text_value?: string;
	declare json_value?: string;
	declare metadatable_id: number;
	declare metadatable_type: string;
	declare is_verified: number;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	static initModel(sequelize: Sequelize.Sequelize): typeof Metadatum {
		return sequelize.define(
			"Metadatum",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				key: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				sub_key: {
					type: DataTypes.STRING,
					allowNull: true,
					unique: true,
				},
				type_of_value: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				boolean_value: {
					type: DataTypes.BOOLEAN,
					allowNull: true,
				},
				integer_value: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				smallint_value: {
					type: DataTypes.INTEGER,
					allowNull: true,
				},
				datetime_value: {
					type: DataTypes.DATE,
					allowNull: true,
				},
				str_50_value: {
					type: DataTypes.STRING,
					allowNull: true,
					field: "str50_value",
				},
				str_100_value: {
					type: DataTypes.STRING,
					allowNull: true,
					field: "str100_value",
				},
				str_255_value: {
					type: DataTypes.STRING,
					allowNull: true,
					field: "str255_value",
				},
				text_value: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
				json_value: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
				metadatable_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					unique: true,
				},
				metadatable_type: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				is_verified: {
					type: DataTypes.BOOLEAN,
					allowNull: false,
					defaultValue: 0,
				},
			},
			{
				tableName: "metadata",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "metadata_metadatable_id_metadatable_type_key_sub_key_type_of_value_unique",
						unique: true,
						fields: [
							{ name: "metadatable_id" },
							{ name: "metadatable_type" },
							{ name: "key" },
							{ name: "sub_key" },
							{ name: "type_of_value" },
						],
					},
				],
			},
		) as typeof Metadatum;
	}
}
