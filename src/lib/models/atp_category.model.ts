import type { Optional } from "sequelize";
import Tournament from "./tournament.model";
import {
	AutoIncrement,
	Table,
	Column,
	Model,
	Default,
	PrimaryKey,
	Unique,
	AllowNull,
	DataType,
	HasMany,
	UpdatedAt,
	CreatedAt,
} from "sequelize-typescript";

export interface IAtpCategoryAttributes {
	id: number;
	category: number;
	sub_category: string;
	base_value?: number;
	modifier: number;
	created_at?: Date;
	updated_at?: Date;
}

export type AtpCategoryPk = "id";
export type AtpCategoryId = AtpCategory[AtpCategoryPk];
export type AtpCategoryOptionalAttributes =
	| "base_value"
	| "modifier"
	| "created_at"
	| "updated_at";
export type AtpCategoryCreationAttributes = Optional<
	IAtpCategoryAttributes,
	AtpCategoryOptionalAttributes
>;

@Table({
	tableName: "atp_categories",
	underscored: true,
	indexes: [
		{
			name: "atp_categories_category_sub_category_unique",
			unique: true,
			fields: [{ name: "category" }, { name: "sub_category" }],
		},
	],
})
export default class AtpCategory
	extends Model<IAtpCategoryAttributes, AtpCategoryCreationAttributes>
	implements IAtpCategoryAttributes
{
	@Column
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	declare id: number;

	@Column
	@AllowNull(false)
	@Unique(true)
	declare category: number;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull(false)
	@Unique(true)
	declare sub_category: string;

	@Column
	@AllowNull
	declare base_value?: number;

	@Column
	@AllowNull
	@Default(10)
	declare modifier: number;

	@CreatedAt
	declare created_at?: Date;

	@UpdatedAt
	declare updated_at?: Date;

	@HasMany(() => Tournament, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
	tournaments: Tournament[] = [];
}
