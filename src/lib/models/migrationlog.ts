import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface migrationlogAttributes {
  id: number;
  migratory_id: number;
  migratory_type: string;
  save_confirmed?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type migrationlogPk = "id";
export type migrationlogId = migrationlog[migrationlogPk];
export type migrationlogOptionalAttributes = "save_confirmed" | "created_at" | "updated_at";
export type migrationlogCreationAttributes = Optional<migrationlogAttributes, migrationlogOptionalAttributes>;

export class migrationlog extends Model<migrationlogAttributes, migrationlogCreationAttributes> implements migrationlogAttributes {
  id!: number;
  migratory_id!: number;
  migratory_type!: string;
  save_confirmed?: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof migrationlog {
    return migrationlog.init({
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
      sequelize,
      tableName: 'migrationlog',
      timestamps: true
    });
  }
}
