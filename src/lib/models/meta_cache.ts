import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface IMetaCacheAttributes {
  id: number;
  name: number;
  value_int: number;
  value_float: number;
  value_str: string;
}

export type MetaCachePk = "id";
export type MetaCacheId = MetaCache[MetaCachePk];
export type MetaCacheCreationAttributes = IMetaCacheAttributes;

export class MetaCache extends Model<IMetaCacheAttributes, MetaCacheCreationAttributes> implements IMetaCacheAttributes {
  id!: number;
  name!: number;
  value_int!: number;
  value_float!: number;
  value_str!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MetaCache {
    return MetaCache.init({
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
      timestamps: false,
      underscored: true,
    });
  }
}
