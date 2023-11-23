import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface migrationAttributes {
  id: number;
  migration: string;
  batch: number;
}

export type migrationPk = "id";
export type migrationId = migration[migrationPk];
export type migrationCreationAttributes = migrationAttributes;

export class migration extends Model<migrationAttributes, migrationCreationAttributes> implements migrationAttributes {
  id!: number;
  migration!: string;
  batch!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof migration {
    return migration.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      migration: {
        type: DataTypes.STRING,
        allowNull: false
      },
      batch: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'migrations',
      timestamps: false
    });
  }
}
