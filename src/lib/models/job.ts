import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface jobAttributes {
  id: number;
  queue: string;
  payload: string;
  attempts: number;
  reserved_at?: number;
  available_at: number;
  created_at: number;
}

export type jobPk = "id";
export type jobId = job[jobPk];
export type jobOptionalAttributes = "reserved_at" | "created_at";
export type jobCreationAttributes = Optional<jobAttributes, jobOptionalAttributes>;

export class job extends Model<jobAttributes, jobCreationAttributes> implements jobAttributes {
  id!: number;
  queue!: string;
  payload!: string;
  attempts!: number;
  reserved_at?: number;
  available_at!: number;
  created_at!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof job {
    return job.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        queue: {
          type: DataTypes.STRING,
          allowNull: false
        },
        payload: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        attempts: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        reserved_at: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        available_at: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        created_at: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'jobs',
        timestamps: true,
        underscored: true,
        indexes: [
          {
            name: "jobs_queue_index",
            fields: [
              { name: "queue" },
            ]
          },
        ]
      });
  }
}
