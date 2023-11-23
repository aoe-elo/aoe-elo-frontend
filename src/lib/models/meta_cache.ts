import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface meta_cacheAttributes {
  id: number;
  name: number;
  value_int: number;
  value_float: number;
  value_str: string;
}

export type meta_cachePk = "id";
export type meta_cacheId = meta_cache[meta_cachePk];
export type meta_cacheCreationAttributes = meta_cacheAttributes;

export class meta_cache extends Model<meta_cacheAttributes, meta_cacheCreationAttributes> implements meta_cacheAttributes {
  id!: number;
  name!: number;
  value_int!: number;
  value_float!: number;
  value_str!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof meta_cache {
    return meta_cache.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      value_int: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      value_float: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      value_str: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'meta_cache',
      timestamps: false
    });
  }
}
