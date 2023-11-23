import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface newsAttributes {
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

export type newsPk = "id";
export type newsId = news[newsPk];
export type newsOptionalAttributes = "pinned" | "abstract" | "description" | "tags" | "created_at" | "updated_at" | "deleted_at";
export type newsCreationAttributes = Optional<newsAttributes, newsOptionalAttributes>;

export class news extends Model<newsAttributes, newsCreationAttributes> implements newsAttributes {
  id!: number;
  title!: string;
  pinned!: number;
  abstract?: string;
  content!: string;
  description?: string;
  tags?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof news {
    return news.init({
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
    sequelize,
    tableName: 'news',
    timestamps: true,
    paranoid: true
  });
  }
}
