import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { tournament, tournamentId } from './tournament';
import { actionlog } from './actionlog';

export interface atp_categoryAttributes {
  id: number;
  category: number;
  sub_category: string;
  base_value?: number;
  modifier: number;
  created_at?: Date;
  updated_at?: Date;
}

export type atp_categoryPk = "id";
export type atp_categoryId = atp_category[atp_categoryPk];
export type atp_categoryOptionalAttributes = "base_value" | "modifier" | "created_at" | "updated_at";
export type atp_categoryCreationAttributes = Optional<atp_categoryAttributes, atp_categoryOptionalAttributes>;

export class atp_category extends Model<atp_categoryAttributes, atp_categoryCreationAttributes> implements atp_categoryAttributes {
  id!: number;
  category!: number;
  sub_category!: string;
  base_value?: number;
  modifier!: number;
  created_at?: Date;
  updated_at?: Date;

  // atp_category hasMany tournament via atp_category_id
  tournaments!: tournament[];
  getTournaments!: Sequelize.HasManyGetAssociationsMixin<tournament>;
  setTournaments!: Sequelize.HasManySetAssociationsMixin<tournament, tournamentId>;
  addTournament!: Sequelize.HasManyAddAssociationMixin<tournament, tournamentId>;
  addTournaments!: Sequelize.HasManyAddAssociationsMixin<tournament, tournamentId>;
  createTournament!: Sequelize.HasManyCreateAssociationMixin<tournament>;
  removeTournament!: Sequelize.HasManyRemoveAssociationMixin<tournament, tournamentId>;
  removeTournaments!: Sequelize.HasManyRemoveAssociationsMixin<tournament, tournamentId>;
  hasTournament!: Sequelize.HasManyHasAssociationMixin<tournament, tournamentId>;
  hasTournaments!: Sequelize.HasManyHasAssociationsMixin<tournament, tournamentId>;
  countTournaments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof atp_category {
    return atp_category.init({
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
      sequelize,
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
    });
  }
}

// Polymorphic Association
atp_category.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\AtpCategory' } });
