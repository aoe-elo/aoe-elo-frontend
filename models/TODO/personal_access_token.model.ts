import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IPersonalAccessTokenAttributes {
	id: number;
	tokenable_type: string;
	tokenable_id: number;
	name: string;
	token: string;
	abilities?: string;
	last_used_at?: Date;
	expires_at?: Date;
	created_at?: Date;
	updated_at?: Date;
}

export type PersonalAccessTokenPk = "id";
export type PersonalAccessTokenId = PersonalAccessToken[PersonalAccessTokenPk];
export type PersonalAccessTokenOptionalAttributes =
	| "abilities"
	| "last_used_at"
	| "expires_at"
	| "created_at"
	| "updated_at";
export type PersonalAccessTokenCreationAttributes = Optional<
	IPersonalAccessTokenAttributes,
	PersonalAccessTokenOptionalAttributes
>;

export class PersonalAccessToken
	extends Model<
		IPersonalAccessTokenAttributes,
		PersonalAccessTokenCreationAttributes
	>
	implements IPersonalAccessTokenAttributes
{
	declare id: number;
	declare tokenable_type: string;
	declare tokenable_id: number;
	declare name: string;
	declare token: string;
	declare abilities?: string;
	declare last_used_at?: Date;
	declare expires_at?: Date;
	declare created_at?: Date;
	declare updated_at?: Date;

	static initModel(sequelize: Sequelize.Sequelize): typeof PersonalAccessToken {
		return sequelize.define(
			"PersonalAccessToken",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				tokenable_type: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				tokenable_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				token: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				abilities: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
				last_used_at: {
					type: DataTypes.DATE,
					allowNull: true,
				},
				expires_at: {
					type: DataTypes.DATE,
					allowNull: true,
				},
			},
			{
				tableName: "personal_access_tokens",
				timestamps: true,
				underscored: true,
				indexes: [
					{
						name: "personal_access_tokens_tokenable_type_tokenable_id_index",
						fields: [{ name: "tokenable_type" }, { name: "tokenable_id" }],
					},
					{
						name: "personal_access_tokens_token_unique",
						unique: true,
						fields: [{ name: "token" }],
					},
				],
			},
		) as typeof PersonalAccessToken;
	}
}
