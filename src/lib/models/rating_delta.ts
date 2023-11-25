import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { Set as match, SetId as matchId } from './set';

export interface IRatingDeltaAttributes {
  id: number;
  participant_id: number;
  participant_type: string;
  set_id: number;
  rating_delta: number;
  date_delta: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type RatingDeltaPk = "id";
export type RatingDeltaId = RatingDelta[RatingDeltaPk];
export type RatingDeltaOptionalAttributes = "rating_delta" | "created_at" | "updated_at" | "deleted_at";
export type RatingDeltaCreationAttributes = Optional<IRatingDeltaAttributes, RatingDeltaOptionalAttributes>;

export class RatingDelta extends Model<IRatingDeltaAttributes, RatingDeltaCreationAttributes> implements IRatingDeltaAttributes {
  id!: number;
  participant_id!: number;
  participant_type!: string;
  set_id!: number;
  rating_delta!: number;
  date_delta!: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // rating_delta belongsTo set via set_id
  match!: match;
  getMatch!: Sequelize.BelongsToGetAssociationMixin<match>;
  setMatch!: Sequelize.BelongsToSetAssociationMixin<match, matchId>;
  createMatch!: Sequelize.BelongsToCreateAssociationMixin<match>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RatingDelta {
    return RatingDelta.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      participant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      participant_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      set_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'sets',
          key: 'id'
        },
        unique: true
      },
      rating_delta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      date_delta: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'rating_deltas',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "rating_deltas_participant_id_participant_type_set_id_unique",
          unique: true,
          fields: [
            { name: "participant_id" },
            { name: "participant_type" },
            { name: "set_id" },
          ]
        },
      ]
    });
  }
}
