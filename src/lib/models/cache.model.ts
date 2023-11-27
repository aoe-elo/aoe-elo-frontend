import type * as Sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface ICacheAttributes {
	key: string;
	value: string;
	expiration: number;
}

export type CachePk = "key";
export type CacheId = Cache[CachePk];
export type CacheCreationAttributes = ICacheAttributes;

export class Cache
	extends Model<ICacheAttributes, CacheCreationAttributes>
	implements ICacheAttributes
{
	declare key: string;
	declare value: string;
	declare expiration: number;

	static initModel(sequelize: Sequelize.Sequelize): typeof Cache {
		return sequelize.define(
			"Cache",
			{
				key: {
					type: DataTypes.STRING,
					allowNull: false,
					primaryKey: true,
					unique: true,
				},
				value: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
				expiration: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{
				tableName: "cache",
				timestamps: false,
				underscored: true,
				indexes: [
					{
						name: "sqlite_autoindex_cache_1",
						unique: true,
						fields: [{ name: "key" }],
					},
				],
			},
		) as typeof Cache;
	}
}
