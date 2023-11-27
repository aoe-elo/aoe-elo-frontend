import type { Optional } from "sequelize";
import ArdPlayer from "./ard_player.model";
import Player from "./player.model";
import Team from "./team.model";
import User from "./user.model";
import {
	AutoIncrement,
	Table,
	Column,
	Model,
	Default,
	PrimaryKey,
	AllowNull,
	DataType,
	HasMany,
} from "sequelize-typescript";

export interface ICountryAttributes {
	id: number;
	capital?: string;
	citizenship?: string;
	country_code: string;
	currency?: string;
	currency_code?: string;
	currency_sub_unit?: string;
	currency_symbol?: string;
	currency_decimals?: number;
	full_name?: string;
	iso_3166_2: string;
	iso_3166_3: string;
	name: string;
	region_code: string;
	sub_region_code: string;
	eea: number;
	calling_code?: string;
	flag?: string;
}

export type CountryPk = "id";
export type CountryId = Country[CountryPk];
export type CountryOptionalAttributes =
	| "capital"
	| "citizenship"
	| "country_code"
	| "currency"
	| "currency_code"
	| "currency_sub_unit"
	| "currency_symbol"
	| "currency_decimals"
	| "full_name"
	| "iso_3166_2"
	| "iso_3166_3"
	| "name"
	| "region_code"
	| "sub_region_code"
	| "eea"
	| "calling_code"
	| "flag";
export type CountryCreationAttributes = Optional<
	ICountryAttributes,
	CountryOptionalAttributes
>;

@Table({
	tableName: "countries",
	underscored: true,
	indexes: [
		{
			name: "countries_id_index",
			fields: [{ name: "id" }],
		},
	],
})
export default class Country
	extends Model<ICountryAttributes, CountryCreationAttributes>
	implements ICountryAttributes
{
	@Column
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	declare id: number;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare capital?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare citizenship?: string;

	@Column({
		type: DataType.TEXT,
	})
	@Default("")
	declare country_code: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare currency?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare currency_code?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare currency_sub_unit?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare currency_symbol?: string;

	@Column
	@AllowNull
	declare currency_decimals?: number;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare full_name?: string;

	@Column({
		type: DataType.TEXT,
	})
	@Default("")
	declare iso_3166_2: string;

	@Column({
		type: DataType.TEXT,
	})
	@Default("")
	declare iso_3166_3: string;

	@Column({
		type: DataType.TEXT,
	})
	@Default("")
	declare name: string;

	@Column({
		type: DataType.TEXT,
	})
	@Default("")
	declare region_code: string;

	@Column({
		type: DataType.TEXT,
	})
	@Default("")
	declare sub_region_code: string;

	@Column
	@Default(0)
	declare eea: number;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare calling_code?: string;

	@Column({
		type: DataType.TEXT,
	})
	@AllowNull
	declare flag?: string;

	@HasMany(() => ArdPlayer)
	ard_players: ArdPlayer[] = [];

	@HasMany(() => Player)
	players: Player[] = [];

	@HasMany(() => Team)
	teams: Team[] = [];

	@HasMany(() => User)
	users: User[] = [];
}
