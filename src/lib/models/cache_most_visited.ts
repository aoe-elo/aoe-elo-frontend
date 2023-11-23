import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface cache_most_visitedAttributes {
  id: number;
  page: string;
  entity_id?: number;
  visits: number;
  created_at?: Date;
  updated_at?: Date;
}

export type cache_most_visitedPk = "id";
export type cache_most_visitedId = cache_most_visited[cache_most_visitedPk];
export type cache_most_visitedOptionalAttributes = "entity_id" | "created_at" | "updated_at";
export type cache_most_visitedCreationAttributes = Optional<cache_most_visitedAttributes, cache_most_visitedOptionalAttributes>;

export class cache_most_visited extends Model<cache_most_visitedAttributes, cache_most_visitedCreationAttributes> implements cache_most_visitedAttributes {
  id!: number;
  page!: string;
  entity_id?: number;
  visits!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof cache_most_visited {
    return cache_most_visited.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      page: {
        type: DataTypes.STRING,
        allowNull: false
      },
      entity_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      visits: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'cache_most_visited',
      timestamps: true,
      underscored: true,
    });
  }
}
