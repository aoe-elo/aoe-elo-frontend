import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Set, SetId } from './set.model';
import type { Stage, StageId } from './stage.model';

export interface IStageableAttributes {
  id: number;
  stage_order?: number;
  stageable_id: number;
  stageable_type: string;
  stage_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type StageablePk = "id";
export type StageableId = Stageable[StageablePk];
export type StageableOptionalAttributes = "stage_order" | "created_at" | "updated_at" | "deleted_at";
export type StageableCreationAttributes = Optional<IStageableAttributes, StageableOptionalAttributes>;

export class Stageable extends Model<IStageableAttributes, StageableCreationAttributes> implements IStageableAttributes {
  declare id: number;
  declare stage_order?: number;
  declare stageable_id: number;
  declare stageable_type: string;
  declare stage_id: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  // Stageable hasMany Set via stageable_id
  sets!: Set[];
  getSets!: Sequelize.HasManyGetAssociationsMixin<Set>;
  setSets!: Sequelize.HasManySetAssociationsMixin<Set, SetId>;
  addSet!: Sequelize.HasManyAddAssociationMixin<Set, SetId>;
  addSets!: Sequelize.HasManyAddAssociationsMixin<Set, SetId>;
  createSet!: Sequelize.HasManyCreateAssociationMixin<Set>;
  removeSet!: Sequelize.HasManyRemoveAssociationMixin<Set, SetId>;
  removeSets!: Sequelize.HasManyRemoveAssociationsMixin<Set, SetId>;
  hasSet!: Sequelize.HasManyHasAssociationMixin<Set, SetId>;
  hasSets!: Sequelize.HasManyHasAssociationsMixin<Set, SetId>;
  countSets!: Sequelize.HasManyCountAssociationsMixin;
  // Stageable belongsTo Stage via stage_id
  stage!: Stage;
  getStage!: Sequelize.BelongsToGetAssociationMixin<Stage>;
  setStage!: Sequelize.BelongsToSetAssociationMixin<Stage, StageId>;
  createStage!: Sequelize.BelongsToCreateAssociationMixin<Stage>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Stageable {
    return sequelize.define('Stageable', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      stage_order: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      stageable_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      stageable_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'stages',
          key: 'id'
        },
        unique: true
      }
    }, {
      tableName: 'stageables',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "stageables_stage_id_stageable_id_stageable_type_unique",
          unique: true,
          fields: [
            { name: "stage_id" },
            { name: "stageable_id" },
            { name: "stageable_type" },
          ]
        },
      ]
    }) as typeof Stageable;
  }
}
