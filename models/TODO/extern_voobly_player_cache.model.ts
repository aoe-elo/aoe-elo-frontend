import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";

export interface IExternVooblyPlayerCacheAttributes {
	id: number;
	voobly_id: number;
	rm_1_v_1: number;
	rm_tg: number;
	created_at?: Date;
	updated_at?: Date;
}

export type ExternVooblyPlayerCachePk = "id";
export type ExternVooblyPlayerCacheId =
	ExternVooblyPlayerCache[ExternVooblyPlayerCachePk];
export type ExternVooblyPlayerCacheOptionalAttributes =
	| "created_at"
	| "updated_at";
export type ExternVooblyPlayerCacheCreationAttributes = Optional<
	IExternVooblyPlayerCacheAttributes,
	ExternVooblyPlayerCacheOptionalAttributes
>;

export class ExternVooblyPlayerCache
	extends Model<
		IExternVooblyPlayerCacheAttributes,
		ExternVooblyPlayerCacheCreationAttributes
	>
	implements IExternVooblyPlayerCacheAttributes
{
	declare id: number;
	declare voobly_id: number;
	declare rm_1_v_1: number;
	declare rm_tg: number;
	declare created_at?: Date;
	declare updated_at?: Date;

	static initModel(
		sequelize: Sequelize.Sequelize,
	): typeof ExternVooblyPlayerCache {
		return sequelize.define(
			"ExternVooblyPlayerCache",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				voobly_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				rm_1_v_1: {
					type: DataTypes.INTEGER,
					allowNull: false,
					field: "rm_1v1",
				},
				rm_tg: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{
				tableName: "extern_voobly_player_cache",
				timestamps: true,
				underscored: true,
			},
		) as typeof ExternVooblyPlayerCache;
	}
}
