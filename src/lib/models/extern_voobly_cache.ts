import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface extern_voobly_cacheAttributes {
  id: number;
  voobly_id: number;
  ladder: number;
  rating: number;
  rank?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type extern_voobly_cachePk = "id";
export type extern_voobly_cacheId = extern_voobly_cache[extern_voobly_cachePk];
export type extern_voobly_cacheOptionalAttributes = "ladder" | "rank" | "created_at" | "updated_at";
export type extern_voobly_cacheCreationAttributes = Optional<extern_voobly_cacheAttributes, extern_voobly_cacheOptionalAttributes>;

export class extern_voobly_cache extends Model<extern_voobly_cacheAttributes, extern_voobly_cacheCreationAttributes> implements extern_voobly_cacheAttributes {
  id!: number;
  voobly_id!: number;
  ladder!: number;
  rating!: number;
  rank?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof extern_voobly_cache {
    return extern_voobly_cache.init({
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
      timestamps: true
    });
  }
}
