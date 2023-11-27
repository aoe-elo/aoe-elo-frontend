import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface INewsAttributes {
  id: number;
  title: string;
  pinned: number;
  abstract?: string;
  content: string;
  description?: string;
  tags?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type NewsPk = "id";
export type NewsId = News[NewsPk];
export type NewsOptionalAttributes = "pinned" | "abstract" | "description" | "tags" | "created_at" | "updated_at" | "deleted_at";
export type NewsCreationAttributes = Optional<INewsAttributes, NewsOptionalAttributes>;

export class News extends Model<INewsAttributes, NewsCreationAttributes> implements INewsAttributes {
  declare id: number;
  declare title: string;
  declare pinned: number;
  declare abstract?: string;
  declare content: string;
  declare description?: string;
  declare tags?: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof News {
    return sequelize.define('News', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      pinned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      abstract: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      tags: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      tableName: 'news',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }) as typeof News;
  }
}
