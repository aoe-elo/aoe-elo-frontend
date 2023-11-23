import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface cacheAttributes {
  key: string;
  value: string;
  expiration: number;
}

export type cachePk = "key";
export type cacheId = cache[cachePk];
export type cacheCreationAttributes = cacheAttributes;

export class cache extends Model<cacheAttributes, cacheCreationAttributes> implements cacheAttributes {
  key!: string;
  value!: string;
  expiration!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cache {
    return cache.init({
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
