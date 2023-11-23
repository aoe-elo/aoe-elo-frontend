import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { stageable, stageableId } from './stageable';

export interface stageAttributes {
  id: number;
  name: string;
  bracket: number;
  default_order: number;
  weight: number;
  importance: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type stagePk = "id";
export type stageId = stage[stagePk];
export type stageOptionalAttributes = "bracket" | "default_order" | "weight" | "importance" | "created_at" | "updated_at" | "deleted_at";
export type stageCreationAttributes = Optional<stageAttributes, stageOptionalAttributes>;

export class stage extends Model<stageAttributes, stageCreationAttributes> implements stageAttributes {
  id!: number;
  name!: string;
  bracket!: number;
  default_order!: number;
  weight!: number;
  importance!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // stage hasMany stageable via stage_id
  stageables!: stageable[];
  getStageables!: Sequelize.HasManyGetAssociationsMixin<stageable>;
  setStageables!: Sequelize.HasManySetAssociationsMixin<stageable, stageableId>;
  addStageable!: Sequelize.HasManyAddAssociationMixin<stageable, stageableId>;
  addStageables!: Sequelize.HasManyAddAssociationsMixin<stageable, stageableId>;
  createStageable!: Sequelize.HasManyCreateAssociationMixin<stageable>;
  removeStageable!: Sequelize.HasManyRemoveAssociationMixin<stageable, stageableId>;
  removeStageables!: Sequelize.HasManyRemoveAssociationsMixin<stageable, stageableId>;
  hasStageable!: Sequelize.HasManyHasAssociationMixin<stageable, stageableId>;
  hasStageables!: Sequelize.HasManyHasAssociationsMixin<stageable, stageableId>;
  countStageables!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof stage {
    return stage.init({
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
    bracket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      unique: true
    },
    default_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      unique: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      unique: true
    },
    importance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      unique: true
    }
  }, {
    sequelize,
    tableName: 'stages',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "stages_name_bracket_default_order_weight_importance_unique",
        unique: true,
        fields: [
          { name: "name" },
          { name: "bracket" },
          { name: "default_order" },
          { name: "weight" },
          { name: "importance" },
        ]
      },
    ]
  });
  }
}
