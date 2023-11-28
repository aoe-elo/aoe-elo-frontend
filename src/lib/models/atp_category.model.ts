import type { Optional } from "sequelize";
import {
	AllowNull,
	AutoIncrement,
	Column,
	CreatedAt,
	DataType,
	Default,
	HasMany,
	Model,
	PrimaryKey,
	Table,
	Unique,
	UpdatedAt,
} from "sequelize-typescript";
import { Tournament } from "./tournament.model";

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
export class AtpCategory
	extends Model<IAtpCategoryAttributes, AtpCategoryCreationAttributes>
	implements IAtpCategoryAttributes
{
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@AllowNull(false)
	@Unique(true)
	@Column({
		type: DataType.INTEGER,
	})
	declare category: number;

	@AllowNull(false)
	@Unique(true)
	@Column({
		type: DataType.TEXT,
	})
	declare sub_category: string;

	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare base_value?: number;

	@Default(10)
	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare modifier: number;

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

	@HasMany(() => Tournament, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
	tournaments: Tournament[] = [];
}
