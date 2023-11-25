import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { actionlog } from './actionlog';

export interface reviewAttributes {
  id: number;
  changes: string;
  status?: string;
  reviewable_id: number;
  reviewable_type: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type reviewPk = "id";
export type reviewId = review[reviewPk];
export type reviewOptionalAttributes = "status" | "created_at" | "updated_at" | "deleted_at";
export type reviewCreationAttributes = Optional<reviewAttributes, reviewOptionalAttributes>;

export class review extends Model<reviewAttributes, reviewCreationAttributes> implements reviewAttributes {
  id!: number;
  changes!: string;
  status?: string;
  reviewable_id!: number;
  reviewable_type!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof review {
    return review.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      changes: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "open"
      },
      reviewable_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      reviewable_type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'reviews',
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  }
}

// Polymorphic Association
review.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Review' } });
