import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IPasswordResetTokenAttributes {
	email: string;
	token: string;
	created_at?: Date;
}

export type PasswordResetTokenPk = "email";
export type PasswordResetTokenId = PasswordResetToken[PasswordResetTokenPk];
export type PasswordResetTokenOptionalAttributes = "created_at";
export type PasswordResetTokenCreationAttributes = Optional<
	IPasswordResetTokenAttributes,
	PasswordResetTokenOptionalAttributes
>;

export class PasswordResetToken
	extends Model<
		IPasswordResetTokenAttributes,
		PasswordResetTokenCreationAttributes
	>
	implements IPasswordResetTokenAttributes
{
	declare email: string;
	declare token: string;
	declare created_at?: Date;

	static initModel(sequelize: Sequelize.Sequelize): typeof PasswordResetToken {
		return sequelize.define(
			"PasswordResetToken",
			{
				email: {
					type: DataTypes.STRING,
					allowNull: false,
					primaryKey: true,
					unique: true,
				},
				token: {
					type: DataTypes.STRING,
					allowNull: false,
				},
			},
			{
				tableName: "password_reset_tokens",
				timestamps: true,
				underscored: true,
				indexes: [
					{
						name: "sqlite_autoindex_password_reset_tokens_1",
						unique: true,
						fields: [{ name: "email" }],
					},
				],
			},
		) as typeof PasswordResetToken;
	}
}
