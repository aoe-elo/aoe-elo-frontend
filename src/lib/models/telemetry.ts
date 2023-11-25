import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface ITelemetryAttributes {
  id: number;
  created_at?: Date;
  updated_at?: Date;
}

export type TelemetryPk = "id";
export type TelemetryId = Telemetry[TelemetryPk];
export type TelemetryOptionalAttributes = "created_at" | "updated_at";
export type TelemetryCreationAttributes = Optional<ITelemetryAttributes, TelemetryOptionalAttributes>;

export class Telemetry extends Model<ITelemetryAttributes, TelemetryCreationAttributes> implements ITelemetryAttributes {
  id!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Telemetry {
    return Telemetry.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }, {
      sequelize,
      tableName: 'telemetry',
      timestamps: true,
      underscored: true
    });
  }
}
