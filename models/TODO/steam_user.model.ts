import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { User, UserId } from "../user.model";

export interface ISteamUserAttributes {
	id: number;
	steam_id: string;
	nickname?: string;
	name?: string;
	avatar?: string;
	user_id?: number;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export type SteamUserPk = "id";
export type SteamUserId = SteamUser[SteamUserPk];
export type SteamUserOptionalAttributes =
	| "nickname"
	| "name"
	| "avatar"
	| "user_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type SteamUserCreationAttributes = Optional<
	ISteamUserAttributes,
	SteamUserOptionalAttributes
>;

export class SteamUser
	extends Model<ISteamUserAttributes, SteamUserCreationAttributes>
	implements ISteamUserAttributes
{
	declare id: number;
	declare steam_id: string;
	declare nickname?: string;
	declare name?: string;
	declare avatar?: string;
	declare user_id?: number;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	// SteamUser belongsTo User via user_id
	user!: User;
	getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
	setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
	createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

	static initModel(sequelize: Sequelize.Sequelize): typeof SteamUser {
		return sequelize.define(
			"SteamUser",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				steam_id: {
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
				tableName: "steam_users",
				timestamps: true,
				paranoid: true,
				underscored: true,
				indexes: [
					{
						name: "steam_users_user_id_steam_id_unique",
						unique: true,
						fields: [{ name: "user_id" }, { name: "steam_id" }],
					},
					{
						name: "steam_users_steam_id_unique",
						unique: true,
						fields: [{ name: "steam_id" }],
					},
				],
			},
		) as typeof SteamUser;
	}
}
