import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface IMigrationlogAttributes {
  id: number;
  migratory_id: number;
  migratory_type: string;
  save_confirmed?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type MigrationlogPk = "id";
export type MigrationlogId = Migrationlog[MigrationlogPk];
export type MigrationlogOptionalAttributes = "save_confirmed" | "created_at" | "updated_at";
export type MigrationlogCreationAttributes = Optional<IMigrationlogAttributes, MigrationlogOptionalAttributes>;

export class Migrationlog extends Model<IMigrationlogAttributes, MigrationlogCreationAttributes> implements IMigrationlogAttributes {
  declare id: number;
  declare migratory_id: number;
  declare migratory_type: string;
  declare save_confirmed?: number;
  declare created_at?: Date;
  declare updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Migrationlog {
    return sequelize.define('Migrationlog', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      migratory_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      migratory_type: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      save_confirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      }
    }, {
      tableName: 'migrationlog',
      timestamps: true,
      underscored: true,
    }) as typeof Migrationlog;
  }
}
