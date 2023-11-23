import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { tournament, tournamentId } from './tournament';

export interface tournament_resultAttributes {
  id: number;
  type?: number;
  prize_amount?: number;
  prize_currency: number;
  source?: string;
  participatory_id: number;
  participatory_type: string;
  tournament_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type tournament_resultPk = "id";
export type tournament_resultId = tournament_result[tournament_resultPk];
export type tournament_resultOptionalAttributes = "type" | "prize_amount" | "prize_currency" | "source" | "created_at" | "updated_at" | "deleted_at";
export type tournament_resultCreationAttributes = Optional<tournament_resultAttributes, tournament_resultOptionalAttributes>;

export class tournament_result extends Model<tournament_resultAttributes, tournament_resultCreationAttributes> implements tournament_resultAttributes {
  id!: number;
  type?: number;
  prize_amount?: number;
  prize_currency!: number;
  source?: string;
  participatory_id!: number;
  participatory_type!: string;
  tournament_id!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // tournament_result belongsTo tournament via tournament_id
  tournament!: tournament;
  getTournament!: Sequelize.BelongsToGetAssociationMixin<tournament>;
  setTournament!: Sequelize.BelongsToSetAssociationMixin<tournament, tournamentId>;
  createTournament!: Sequelize.BelongsToCreateAssociationMixin<tournament>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tournament_result {
    return tournament_result.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prize_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prize_currency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      source: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      participatory_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      participatory_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tournament_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tournaments',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'tournament_results',
      timestamps: true,
      paranoid: true,
      underscored: true,
    });
  }
}
