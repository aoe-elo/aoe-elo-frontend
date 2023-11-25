import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Stageable, StageableId } from './stageable';

export interface IStageAttributes {
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

export type StagePk = "id";
export type StageId = Stage[StagePk];
export type StageOptionalAttributes = "bracket" | "default_order" | "weight" | "importance" | "created_at" | "updated_at" | "deleted_at";
export type StageCreationAttributes = Optional<IStageAttributes, StageOptionalAttributes>;

export class Stage extends Model<IStageAttributes, StageCreationAttributes> implements IStageAttributes {
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
  stageables!: Stageable[];
  getStageables!: Sequelize.HasManyGetAssociationsMixin<Stageable>;
  setStageables!: Sequelize.HasManySetAssociationsMixin<Stageable, StageableId>;
  addStageable!: Sequelize.HasManyAddAssociationMixin<Stageable, StageableId>;
  addStageables!: Sequelize.HasManyAddAssociationsMixin<Stageable, StageableId>;
  createStageable!: Sequelize.HasManyCreateAssociationMixin<Stageable>;
  removeStageable!: Sequelize.HasManyRemoveAssociationMixin<Stageable, StageableId>;
  removeStageables!: Sequelize.HasManyRemoveAssociationsMixin<Stageable, StageableId>;
  hasStageable!: Sequelize.HasManyHasAssociationMixin<Stageable, StageableId>;
  hasStageables!: Sequelize.HasManyHasAssociationsMixin<Stageable, StageableId>;
  countStageables!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Stage {
    return Stage.init({
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
      underscored: true,
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
