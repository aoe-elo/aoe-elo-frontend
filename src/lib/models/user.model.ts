import type { Optional } from "sequelize";
import Country from "./country.model";
import {
	AutoIncrement,
	Table,
	Column,
	Model,
	PrimaryKey,
	Unique,
	AllowNull,
	DataType,
	BelongsTo,
	ForeignKey,
	DeletedAt,
	UpdatedAt,
	CreatedAt,
} from "sequelize-typescript";

export interface IUserAttributes {
	id: number;
	name: string;
	email?: string;
	country_id?: number;
	remember_token?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes =
	| "email"
	| "country_id"
	| "remember_token"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type UserCreationAttributes = Optional<
	IUserAttributes,
	UserOptionalAttributes
>;

@Table({
	tableName: "users",
	underscored: true,
	indexes: [
		{
			name: "users_email_unique",
			unique: true,
			fields: [{ name: "email" }],
		},
	],
})
export default class User
	extends Model<IUserAttributes, UserCreationAttributes>
	implements IUserAttributes
{
	@Column
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	declare id: number;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull(false)
	@Unique
	declare name: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	@Unique
	declare email?: string;

	@Column
	@ForeignKey(() => Country)
	@AllowNull
	declare country_id?: number;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare remember_token?: string;

	@CreatedAt
	declare created_at?: Date;

	@UpdatedAt
	declare updated_at?: Date;

	@DeletedAt
	declare deleted_at?: Date;

	@BelongsTo(() => Country, { onDelete: "RESTRICT", onUpdate: "CASCADE" })
	country?: Country;

	// TODO!: Has Many Github/Twitch/Steam/Discord users
}
