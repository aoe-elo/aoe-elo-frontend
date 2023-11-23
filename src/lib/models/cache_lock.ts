import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface cache_lockAttributes {
  key: string;
  owner: string;
  expiration: number;
}

export type cache_lockPk = "key";
export type cache_lockId = cache_lock[cache_lockPk];
export type cache_lockCreationAttributes = cache_lockAttributes;

export class cache_lock extends Model<cache_lockAttributes, cache_lockCreationAttributes> implements cache_lockAttributes {
  key!: string;
  owner!: string;
  expiration!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cache_lock {
    return cache_lock.init({
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      expiration: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'cache_locks',
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_cache_locks_1",
          unique: true,
          fields: [
            { name: "key" },
          ]
        },
      ]
    });
  }
}
