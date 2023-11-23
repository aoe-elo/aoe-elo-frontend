import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { achievable, achievableId } from './achievable';

export interface achievementAttributes {
  id: number;
  name: string;
  name_short?: string;
  description?: string;
  image_path?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type achievementPk = "id";
export type achievementId = achievement[achievementPk];
export type achievementOptionalAttributes = "name_short" | "description" | "image_path" | "created_at" | "updated_at" | "deleted_at";
export type achievementCreationAttributes = Optional<achievementAttributes, achievementOptionalAttributes>;

export class achievement extends Model<achievementAttributes, achievementCreationAttributes> implements achievementAttributes {
  id!: number;
  name!: string;
  name_short?: string;
  description?: string;
  image_path?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // achievement hasMany achievable via achievement_id
  achievables!: achievable[];
  getAchievables!: Sequelize.HasManyGetAssociationsMixin<achievable>;
  setAchievables!: Sequelize.HasManySetAssociationsMixin<achievable, achievableId>;
  addAchievable!: Sequelize.HasManyAddAssociationMixin<achievable, achievableId>;
  addAchievables!: Sequelize.HasManyAddAssociationsMixin<achievable, achievableId>;
  createAchievable!: Sequelize.HasManyCreateAssociationMixin<achievable>;
  removeAchievable!: Sequelize.HasManyRemoveAssociationMixin<achievable, achievableId>;
  removeAchievables!: Sequelize.HasManyRemoveAssociationsMixin<achievable, achievableId>;
  hasAchievable!: Sequelize.HasManyHasAssociationMixin<achievable, achievableId>;
  hasAchievables!: Sequelize.HasManyHasAssociationsMixin<achievable, achievableId>;
  countAchievables!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof achievement {
    return achievement.init({
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
