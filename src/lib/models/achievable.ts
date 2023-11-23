import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { achievement, achievementId } from './achievement';

export interface achievableAttributes {
  id: number;
  achievable_id: number;
  achievable_type: string;
  achievement_id?: number;
  hidden: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type achievablePk = "id";
export type achievableId = achievable[achievablePk];
export type achievableOptionalAttributes = "achievement_id" | "hidden" | "created_at" | "updated_at" | "deleted_at";
export type achievableCreationAttributes = Optional<achievableAttributes, achievableOptionalAttributes>;

export class achievable extends Model<achievableAttributes, achievableCreationAttributes> implements achievableAttributes {
  id!: number;
  achievable_id!: number;
  achievable_type!: string;
  achievement_id?: number;
  hidden!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // achievable belongsTo achievement via achievement_id
  achievement!: achievement;
  getAchievement!: Sequelize.BelongsToGetAssociationMixin<achievement>;
  setAchievement!: Sequelize.BelongsToSetAssociationMixin<achievement, achievementId>;
  createAchievement!: Sequelize.BelongsToCreateAssociationMixin<achievement>;

  static initModel(sequelize: Sequelize.Sequelize): typeof achievable {
    return achievable.init({
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
    sequelize,
    tableName: 'achievables',
    timestamps: true,
    paranoid: true,
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
  });
  }
}
