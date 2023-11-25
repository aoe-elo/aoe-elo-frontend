import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Achievement, AchievementId } from './achievement';

export interface IAchievableAttributes {
  id: number;
  achievable_id: number;
  achievable_type: string;
  achievement_id?: number;
  hidden: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type AchievablePk = "id";
export type AchievableId = Achievable[AchievablePk];
export type AchievableOptionalAttributes = "achievement_id" | "hidden" | "created_at" | "updated_at" | "deleted_at";
export type AchievableCreationAttributes = Optional<IAchievableAttributes, AchievableOptionalAttributes>;

export class Achievable extends Model<IAchievableAttributes, AchievableCreationAttributes> implements IAchievableAttributes {
  declare id: number;
  declare achievable_id: number;
  declare achievable_type: string;
  declare achievement_id?: number;
  declare hidden: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // Achievable belongsTo Achievement via achievement_id
  achievement!: Achievement;
  getAchievement!: Sequelize.BelongsToGetAssociationMixin<Achievement>;
  setAchievement!: Sequelize.BelongsToSetAssociationMixin<Achievement, AchievementId>;
  createAchievement!: Sequelize.BelongsToCreateAssociationMixin<Achievement>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Achievable {
    return sequelize.define('Achievable', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      achievable_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      achievable_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      achievement_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'achievements',
          key: 'id'
        },
        unique: true
      },
      hidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      }
    }, {
      tableName: 'achievables',
      timestamps: true,
      paranoid: true,
      underscored: true,
      modelName: 'App\\Models\\Achievable',
      indexes: [
        {
          name: "achievables_achievement_id_achievable_id_achievable_type_unique",
          unique: true,
          fields: [
            { name: "achievement_id" },
            { name: "achievable_id" },
            { name: "achievable_type" },
          ]
        },
      ]
    }) as typeof Achievable;
  }
}
