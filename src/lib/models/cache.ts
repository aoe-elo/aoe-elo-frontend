import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface ICacheAttributes {
  key: string;
  value: string;
  expiration: number;
}

export type CachePk = "key";
export type CacheId = Cache[CachePk];
export type CacheCreationAttributes = ICacheAttributes;

export class Cache extends Model<ICacheAttributes, CacheCreationAttributes> implements ICacheAttributes {
  key!: string;
  value!: string;
  expiration!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Cache {
    return Cache.init({
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      expiration: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'cache',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          name: "sqlite_autoindex_cache_1",
          unique: true,
          fields: [
            { name: "key" },
          ]
        },
      ]
    });
  }
}
