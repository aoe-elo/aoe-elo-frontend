import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { set, setId } from './set';
import type { stage, stageId } from './stage';

export interface stageableAttributes {
  id: number;
  stage_order?: number;
  stageable_id: number;
  stageable_type: string;
  stage_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type stageablePk = "id";
export type stageableId = stageable[stageablePk];
export type stageableOptionalAttributes = "stage_order" | "created_at" | "updated_at" | "deleted_at";
export type stageableCreationAttributes = Optional<stageableAttributes, stageableOptionalAttributes>;

export class stageable extends Model<stageableAttributes, stageableCreationAttributes> implements stageableAttributes {
  id!: number;
  stage_order?: number;
  stageable_id!: number;
  stageable_type!: string;
  stage_id!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // stageable hasMany set via stageable_id
  sets!: set[];
  getSets!: Sequelize.HasManyGetAssociationsMixin<set>;
  setSets!: Sequelize.HasManySetAssociationsMixin<set, setId>;
  addSet!: Sequelize.HasManyAddAssociationMixin<set, setId>;
  addSets!: Sequelize.HasManyAddAssociationsMixin<set, setId>;
  createSet!: Sequelize.HasManyCreateAssociationMixin<set>;
  removeSet!: Sequelize.HasManyRemoveAssociationMixin<set, setId>;
  removeSets!: Sequelize.HasManyRemoveAssociationsMixin<set, setId>;
  hasSet!: Sequelize.HasManyHasAssociationMixin<set, setId>;
  hasSets!: Sequelize.HasManyHasAssociationsMixin<set, setId>;
  countSets!: Sequelize.HasManyCountAssociationsMixin;
  // stageable belongsTo stage via stage_id
  stage!: stage;
  getStage!: Sequelize.BelongsToGetAssociationMixin<stage>;
  setStage!: Sequelize.BelongsToSetAssociationMixin<stage, stageId>;
  createStage!: Sequelize.BelongsToCreateAssociationMixin<stage>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stageable {
    return stageable.init({
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
    sequelize,
    tableName: 'stageables',
    timestamps: true,
    paranoid: true,
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
  });
  }
}
