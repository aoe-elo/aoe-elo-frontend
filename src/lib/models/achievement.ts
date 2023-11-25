import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface IAchievementAttributes {
  id: number;
  name: string;
  name_short?: string;
  description?: string;
  image_path?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type AchievementPk = "id";
export type AchievementId = Achievement[AchievementPk];
export type AchievementOptionalAttributes = "name_short" | "description" | "image_path" | "created_at" | "updated_at" | "deleted_at";
export type AchievementCreationAttributes = Optional<IAchievementAttributes, AchievementOptionalAttributes>;

export class Achievement extends Model<IAchievementAttributes, AchievementCreationAttributes> implements IAchievementAttributes {
  declare id: number;
  declare name: string;
  declare name_short?: string;
  declare description?: string;
  declare image_path?: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  static initModel(sequelize: Sequelize.Sequelize): typeof Achievement {
    return Achievement.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      name_short: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      image_path: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: true
      }
    }, {
      sequelize,
      tableName: 'achievements',
      timestamps: true,
      paranoid: true,
      underscored: true,
      modelName: 'App\\Models\\Achievement',
      indexes: [
        {
          name: "achievements_name_name_short_image_path_unique",
          unique: true,
          fields: [
            { name: "name" },
            { name: "name_short" },
            { name: "image_path" },
          ]
        },
      ]
    });
  }
}
