import type * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface IMigrationAttributes {
  id: number;
  migration: string;
  batch: number;
}

export type MigrationPk = "id";
export type MigrationId = Migration[MigrationPk];
export type MigrationCreationAttributes = IMigrationAttributes;

export class Migration extends Model<IMigrationAttributes, MigrationCreationAttributes> implements IMigrationAttributes {
  id!: number;
  migration!: string;
  batch!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Migration {
    return Migration.init({
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
      timestamps: false,
      underscored: true,
    });
  }
}
