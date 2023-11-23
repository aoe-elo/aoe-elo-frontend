import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface extern_voobly_player_cacheAttributes {
  id: number;
  voobly_id: number;
  rm_1v1: number;
  rm_tg: number;
  created_at?: Date;
  updated_at?: Date;
}

export type extern_voobly_player_cachePk = "id";
export type extern_voobly_player_cacheId = extern_voobly_player_cache[extern_voobly_player_cachePk];
export type extern_voobly_player_cacheOptionalAttributes = "created_at" | "updated_at";
export type extern_voobly_player_cacheCreationAttributes = Optional<extern_voobly_player_cacheAttributes, extern_voobly_player_cacheOptionalAttributes>;

export class extern_voobly_player_cache extends Model<extern_voobly_player_cacheAttributes, extern_voobly_player_cacheCreationAttributes> implements extern_voobly_player_cacheAttributes {
  id!: number;
  voobly_id!: number;
  rm_1v1!: number;
  rm_tg!: number;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof extern_voobly_player_cache {
    return extern_voobly_player_cache.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      voobly_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rm_1v1: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rm_tg: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'extern_voobly_player_cache',
      timestamps: true,
      underscored: true,
    });
  }
}
