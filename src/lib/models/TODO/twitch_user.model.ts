import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { User, UserId } from "../user.model";

export interface ITwitchUserAttributes {
	id: number;
	twitch_id: string;
	nickname?: string;
	name?: string;
	email?: string;
	avatar?: string;
	user_id?: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type TwitchUserPk = "id";
export type TwitchUserId = TwitchUser[TwitchUserPk];
export type TwitchUserOptionalAttributes =
	| "nickname"
	| "name"
	| "email"
	| "avatar"
	| "user_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type TwitchUserCreationAttributes = Optional<
	ITwitchUserAttributes,
	TwitchUserOptionalAttributes
>;

export class TwitchUser
	extends Model<ITwitchUserAttributes, TwitchUserCreationAttributes>
	implements ITwitchUserAttributes
{
	declare id: number;
	declare twitch_id: string;
	declare nickname?: string;
	declare name?: string;
	declare email?: string;
	declare avatar?: string;
	declare user_id?: number;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	// TwitchUser belongsTo User via user_id
	user!: User;
	getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
	setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
	createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

	static initModel(sequelize: Sequelize.Sequelize): typeof TwitchUser {
		return sequelize.define(
			"TwitchUser",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				twitch_id: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				nickname: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				email: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				avatar: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				user_id: {
					type: DataTypes.INTEGER,
					allowNull: true,
					references: {
						model: "users",
						key: "id",
					},
					unique: true,
				},
			},
			{
				tableName: "twitch_users",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "twitch_users_user_id_twitch_id_unique",
						unique: true,
						fields: [{ name: "user_id" }, { name: "twitch_id" }],
					},
					{
						name: "twitch_users_twitch_id_unique",
						unique: true,
						fields: [{ name: "twitch_id" }],
					},
				],
			},
		) as typeof TwitchUser;
	}
}
