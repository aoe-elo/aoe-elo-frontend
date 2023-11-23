import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { set, setId } from './set';

export interface rating_deltaAttributes {
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

export type rating_deltaPk = "id";
export type rating_deltaId = rating_delta[rating_deltaPk];
export type rating_deltaOptionalAttributes = "rating_delta" | "created_at" | "updated_at" | "deleted_at";
export type rating_deltaCreationAttributes = Optional<rating_deltaAttributes, rating_deltaOptionalAttributes>;

export class rating_delta extends Model<rating_deltaAttributes, rating_deltaCreationAttributes> implements rating_deltaAttributes {
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
  set!: set;
  getSet!: Sequelize.BelongsToGetAssociationMixin<set>;
  setSet!: Sequelize.BelongsToSetAssociationMixin<set, setId>;
  createSet!: Sequelize.BelongsToCreateAssociationMixin<set>;

  static initModel(sequelize: Sequelize.Sequelize): typeof rating_delta {
    return rating_delta.init({
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
