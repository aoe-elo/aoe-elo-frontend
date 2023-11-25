import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface IFailedJobAttributes {
  id: number;
  uuid: string;
  connection: string;
  queue: string;
  payload: string;
  exception: string;
  failed_at: Date;
}

export type FailedJobPk = "id";
export type FailedJobId = FailedJob[FailedJobPk];
export type FailedJobOptionalAttributes = "failed_at";
export type FailedJobCreationAttributes = Optional<IFailedJobAttributes, FailedJobOptionalAttributes>;

export class FailedJob extends Model<IFailedJobAttributes, FailedJobCreationAttributes> implements IFailedJobAttributes {
  id!: number;
  uuid!: string;
  connection!: string;
  queue!: string;
  payload!: string;
  exception!: string;
  failed_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof FailedJob {
    return FailedJob.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      connection: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      queue: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      payload: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      exception: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      failed_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      sequelize,
      tableName: 'failed_jobs',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          name: "failed_jobs_uuid_unique",
          unique: true,
          fields: [
            { name: "uuid" },
          ]
        },
      ]
    });
  }
}
