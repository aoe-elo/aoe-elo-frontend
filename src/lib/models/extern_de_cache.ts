import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface extern_de_cacheAttributes {
  id: number;
  relic_link_id?: string;
  rating: number;
  rank: number;
  created_at?: Date;
  updated_at?: Date;
}

export type extern_de_cachePk = "id";
export type extern_de_cacheId = extern_de_cache[extern_de_cachePk];
export type extern_de_cacheOptionalAttributes = "relic_link_id" | "created_at" | "updated_at";
export type extern_de_cacheCreationAttributes = Optional<extern_de_cacheAttributes, extern_de_cacheOptionalAttributes>;

export class extern_de_cache extends Model<extern_de_cacheAttributes, extern_de_cacheCreationAttributes> implements extern_de_cacheAttributes {
  id!: number;
  relic_link_id?: string;
  rating!: number;
  rank!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof extern_de_cache {
    return extern_de_cache.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    relic_link_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'extern_de_cache',
    timestamps: true
  });
  }
}
