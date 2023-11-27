import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface ICacheLockAttributes {
  key: string;
  owner: string;
  expiration: number;
}

export type CacheLockPk = "key";
export type CacheLockId = CacheLock[CacheLockPk];
export type CacheLockCreationAttributes = ICacheLockAttributes;

export class CacheLock extends Model<ICacheLockAttributes, CacheLockCreationAttributes> implements ICacheLockAttributes {
  declare key: string;
  declare owner: string;
  declare expiration: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof CacheLock {
    return sequelize.define('CacheLock', {
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
      tableName: 'cache_locks',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          name: "sqlite_autoindex_cache_locks_1",
          unique: true,
          fields: [
            { name: "key" },
          ]
        },
      ]
    }) as typeof CacheLock;
  }
}
