import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface rating_checkpointAttributes {
  id: number;
  participant_id: number;
  participant_type: string;
  rating: number;
  valid_period_start: Date;
  valid_period_end: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type rating_checkpointPk = "id";
export type rating_checkpointId = rating_checkpoint[rating_checkpointPk];
export type rating_checkpointOptionalAttributes = "rating" | "created_at" | "updated_at" | "deleted_at";
export type rating_checkpointCreationAttributes = Optional<rating_checkpointAttributes, rating_checkpointOptionalAttributes>;

export class rating_checkpoint extends Model<rating_checkpointAttributes, rating_checkpointCreationAttributes> implements rating_checkpointAttributes {
  id!: number;
  participant_id!: number;
  participant_type!: string;
  rating!: number;
  valid_period_start!: Date;
  valid_period_end!: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof rating_checkpoint {
    return rating_checkpoint.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      participant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      participant_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      valid_period_start: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
      },
      valid_period_end: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      tableName: 'rating_checkpoints',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "rating_checkpoints_participant_id_participant_type_valid_period_start_valid_period_end_unique",
          unique: true,
          fields: [
            { name: "participant_id" },
            { name: "participant_type" },
            { name: "valid_period_start" },
            { name: "valid_period_end" },
          ]
        },
      ]
    });
  }
}
