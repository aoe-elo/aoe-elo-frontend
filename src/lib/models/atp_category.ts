import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Tournament, TournamentId } from './tournament';

export interface IAtpCategoryAttributes {
  id: number;
  category: number;
  sub_category: string;
  base_value?: number;
  modifier: number;
  created_at?: Date;
  updated_at?: Date;
}

export type AtpCategoryPk = "id";
export type AtpCategoryId = AtpCategory[AtpCategoryPk];
export type AtpCategoryOptionalAttributes = "base_value" | "modifier" | "created_at" | "updated_at";
export type AtpCategoryCreationAttributes = Optional<IAtpCategoryAttributes, AtpCategoryOptionalAttributes>;

export class AtpCategory extends Model<IAtpCategoryAttributes, AtpCategoryCreationAttributes> implements IAtpCategoryAttributes {
  declare id: number;
  declare category: number;
  declare sub_category: string;
  declare base_value?: number;
  declare modifier: number;
  declare created_at?: Date;
  declare updated_at?: Date;

  // AtpCategory hasMany Tournament via atp_category_id
  tournaments!: Tournament[];
  getTournaments!: Sequelize.HasManyGetAssociationsMixin<Tournament>;
  setTournaments!: Sequelize.HasManySetAssociationsMixin<Tournament, TournamentId>;
  addTournament!: Sequelize.HasManyAddAssociationMixin<Tournament, TournamentId>;
  addTournaments!: Sequelize.HasManyAddAssociationsMixin<Tournament, TournamentId>;
  createTournament!: Sequelize.HasManyCreateAssociationMixin<Tournament>;
  removeTournament!: Sequelize.HasManyRemoveAssociationMixin<Tournament, TournamentId>;
  removeTournaments!: Sequelize.HasManyRemoveAssociationsMixin<Tournament, TournamentId>;
  hasTournament!: Sequelize.HasManyHasAssociationMixin<Tournament, TournamentId>;
  hasTournaments!: Sequelize.HasManyHasAssociationsMixin<Tournament, TournamentId>;
  countTournaments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AtpCategory {
    return sequelize.define('AtpCategory', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      sub_category: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      base_value: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      modifier: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10
      }
    }, {
      tableName: 'atp_categories',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          name: "atp_categories_category_sub_category_unique",
          unique: true,
          fields: [
            { name: "category" },
            { name: "sub_category" },
          ]
        },
      ]
    }) as typeof AtpCategory;
  }
}
