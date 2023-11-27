import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface ICacheMostVisitedAttributes {
  id: number;
  page: string;
  entity_id?: number;
  visits: number;
  created_at?: Date;
  updated_at?: Date;
}

export type CacheMostVisitedPk = "id";
export type CacheMostVisitedId = CacheMostVisited[CacheMostVisitedPk];
export type CacheMostVisitedOptionalAttributes = "entity_id" | "created_at" | "updated_at";
export type CacheMostVisitedCreationAttributes = Optional<ICacheMostVisitedAttributes, CacheMostVisitedOptionalAttributes>;

export class CacheMostVisited extends Model<ICacheMostVisitedAttributes, CacheMostVisitedCreationAttributes> implements ICacheMostVisitedAttributes {
  declare id: number;
  declare page: string;
  declare entity_id?: number;
  declare visits: number;
  declare created_at?: Date;
  declare updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof CacheMostVisited {
    return sequelize.define('CacheMostVisited', {
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
      tableName: 'cache_most_visited',
      timestamps: true,
      underscored: true,
    }) as typeof CacheMostVisited;
  }
}
