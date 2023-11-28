import type { Optional } from "sequelize";
import {
	AllowNull,
	AutoIncrement,
	Column,
	DataType,
	Default,
	HasMany,
	Model,
	PrimaryKey,
	Table,
} from "sequelize-typescript";
import { ArdPlayer } from "./ard_player.model";
import { Player } from "./player.model";
import { Team } from "./team.model";
import { User } from "./user.model";

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
	timestamps: false,
	paranoid: false,
	underscored: true,
	indexes: [
		{
			name: "countries_id_index",
			fields: [{ name: "id" }],
		},
	],
})
export class Country
	extends Model<ICountryAttributes, CountryCreationAttributes>
	implements ICountryAttributes
{
	@PrimaryKey
	@AutoIncrement
	@AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare capital?: string;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare citizenship?: string;

	@Default("")
	@Column({
		type: DataType.TEXT,
	})
	declare country_code: string;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare currency?: string;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare currency_code?: string;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare currency_sub_unit?: string;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare currency_symbol?: string;

	@AllowNull
	@Column({
		type: DataType.INTEGER,
	})
	declare currency_decimals?: number;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare full_name?: string;

	@Default("")
	@Column({
		type: DataType.TEXT,
	})
	declare iso_3166_2: string;

	@Default("")
	@Column({
		type: DataType.TEXT,
	})
	declare iso_3166_3: string;

	@Default("")
	@Column({
		type: DataType.TEXT,
	})
	declare name: string;

	@Default("")
	@Column({
		type: DataType.TEXT,
	})
	declare region_code: string;

	@Default("")
	@Column({
		type: DataType.TEXT,
	})
	declare sub_region_code: string;

	@Default(0)
	@Column({
		type: DataType.INTEGER,
	})
	declare eea: number;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
	declare calling_code?: string;

	@AllowNull
	@Column({
		type: DataType.TEXT,
	})
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
