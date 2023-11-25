import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface IReviewAttributes {
  id: number;
  changes: string;
  status?: string;
  reviewable_id: number;
  reviewable_type: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ReviewPk = "id";
export type ReviewId = Review[ReviewPk];
export type ReviewOptionalAttributes = "status" | "created_at" | "updated_at" | "deleted_at";
export type ReviewCreationAttributes = Optional<IReviewAttributes, ReviewOptionalAttributes>;

export class Review extends Model<IReviewAttributes, ReviewCreationAttributes> implements IReviewAttributes {
  id!: number;
  changes!: string;
  status?: string;
  reviewable_id!: number;
  reviewable_type!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Review {
    return Review.init({
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
