import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IExternDeCacheAttributes {
	id: number;
	relic_link_id?: string;
	rating: number;
	rank: number;
	created_at?: Date;
	updated_at?: Date;
}

export type ExternDeCachePk = "id";
export type ExternDeCacheId = ExternDeCache[ExternDeCachePk];
export type ExternDeCacheOptionalAttributes =
	| "relic_link_id"
	| "created_at"
	| "updated_at";
export type ExternDeCacheCreationAttributes = Optional<
	IExternDeCacheAttributes,
	ExternDeCacheOptionalAttributes
>;

export class ExternDeCache
	extends Model<IExternDeCacheAttributes, ExternDeCacheCreationAttributes>
	implements IExternDeCacheAttributes
{
	declare id: number;
	declare relic_link_id?: string;
	declare rating: number;
	declare rank: number;
	declare created_at?: Date;
	declare updated_at?: Date;

	static initModel(sequelize: Sequelize.Sequelize): typeof ExternDeCache {
		return sequelize.define(
			"ExternDeCache",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				relic_link_id: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				rating: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				rank: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{
				tableName: "extern_de_cache",
				timestamps: true,
				underscored: true,
			},
		) as typeof ExternDeCache;
	}
}
