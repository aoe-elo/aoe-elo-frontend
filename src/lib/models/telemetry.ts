import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface telemetryAttributes {
  id: number;
  created_at?: Date;
  updated_at?: Date;
}

export type telemetryPk = "id";
export type telemetryId = telemetry[telemetryPk];
export type telemetryOptionalAttributes = "created_at" | "updated_at";
export type telemetryCreationAttributes = Optional<telemetryAttributes, telemetryOptionalAttributes>;

export class telemetry extends Model<telemetryAttributes, telemetryCreationAttributes> implements telemetryAttributes {
  id!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof telemetry {
    return telemetry.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }, {
      sequelize,
      tableName: 'telemetry',
      timestamps: true
    });
  }
}
