import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface stage_tournament_templateAttributes {
  id: number;
  name: string;
  short_name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type stage_tournament_templatePk = "id";
export type stage_tournament_templateId = stage_tournament_template[stage_tournament_templatePk];
export type stage_tournament_templateOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at";
export type stage_tournament_templateCreationAttributes = Optional<stage_tournament_templateAttributes, stage_tournament_templateOptionalAttributes>;

export class stage_tournament_template extends Model<stage_tournament_templateAttributes, stage_tournament_templateCreationAttributes> implements stage_tournament_templateAttributes {
  id!: number;
  name!: string;
  short_name!: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof stage_tournament_template {
    return stage_tournament_template.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      short_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'stage_tournament_templates',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "stage_tournament_templates_name_short_name_unique",
          unique: true,
          fields: [
            { name: "name" },
            { name: "short_name" },
          ]
        },
      ]
    });
  }
}
