import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface IExternVooblyCacheAttributes {
  id: number;
  voobly_id: number;
  ladder: number;
  rating: number;
  rank?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type ExternVooblyCachePk = "id";
export type ExternVooblyCacheId = ExternVooblyCache[ExternVooblyCachePk];
export type ExternVooblyCacheOptionalAttributes = "ladder" | "rank" | "created_at" | "updated_at";
export type ExternVooblyCacheCreationAttributes = Optional<IExternVooblyCacheAttributes, ExternVooblyCacheOptionalAttributes>;

export class ExternVooblyCache extends Model<IExternVooblyCacheAttributes, ExternVooblyCacheCreationAttributes> implements IExternVooblyCacheAttributes {
  id!: number;
  voobly_id!: number;
  ladder!: number;
  rating!: number;
  rank?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ExternVooblyCache {
    return ExternVooblyCache.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      voobly_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ladder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rank: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'extern_voobly_cache',
      timestamps: true,
      underscored: true,
    });
  }
}
