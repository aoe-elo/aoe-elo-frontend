import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { tournament } from './tournament';
import { player } from './player';
import { ard_player } from './ard_player';
import { review } from './review';
import { actionlog } from './actionlog';

export interface metadatumAttributes {
  id: number;
  key: string;
  sub_key?: string;
  type_of_value: string;
  boolean_value?: number;
  integer_value?: number;
  smallint_value?: number;
  datetime_value?: Date;
  str50_value?: string;
  str100_value?: string;
  str255_value?: string;
  text_value?: string;
  json_value?: string;
  metadatable_id: number;
  metadatable_type: string;
  is_verified: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type metadatumPk = "id";
export type metadatumId = metadatum[metadatumPk];
export type metadatumOptionalAttributes = "sub_key" | "boolean_value" | "integer_value" | "smallint_value" | "datetime_value" | "str50_value" | "str100_value" | "str255_value" | "text_value" | "json_value" | "is_verified" | "created_at" | "updated_at" | "deleted_at";
export type metadatumCreationAttributes = Optional<metadatumAttributes, metadatumOptionalAttributes>;

export class metadatum extends Model<metadatumAttributes, metadatumCreationAttributes> implements metadatumAttributes {
  id!: number;
  key!: string;
  sub_key?: string;
  type_of_value!: string;
  boolean_value?: number;
  integer_value?: number;
  smallint_value?: number;
  datetime_value?: Date;
  str50_value?: string;
  str100_value?: string;
  str255_value?: string;
  text_value?: string;
  json_value?: string;
  metadatable_id!: number;
  metadatable_type!: string;
  is_verified!: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof metadatum {
    return metadatum.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      sub_key: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      type_of_value: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      boolean_value: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      integer_value: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      smallint_value: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      datetime_value: {
        type: DataTypes.DATE,
        allowNull: true
      },
      str50_value: {
        type: DataTypes.STRING,
        allowNull: true
      },
      str100_value: {
        type: DataTypes.STRING,
        allowNull: true
      },
      str255_value: {
        type: DataTypes.STRING,
        allowNull: true
      },
      text_value: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      json_value: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      metadatable_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      metadatable_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      }
    }, {
      sequelize,
      tableName: 'metadata',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "metadata_metadatable_id_metadatable_type_key_sub_key_type_of_value_unique",
          unique: true,
          fields: [
            { name: "metadatable_id" },
            { name: "metadatable_type" },
            { name: "key" },
            { name: "sub_key" },
            { name: "type_of_value" },
          ]
        },
      ]
    });
  }
}

// Polymorphic Associations
metadatum.belongsTo(tournament, { foreignKey: "metadatable_id", constraints: false });
metadatum.belongsTo(player, { foreignKey: "metadatable_id", constraints: false });
metadatum.belongsTo(ard_player, { foreignKey: "metadatable_id", constraints: false });
metadatum.belongsTo(review, { foreignKey: "metadatable_id", constraints: false });

metadatum.hasMany(actionlog, { foreignKey: 'loggable_id', constraints: false, scope: { loggable_type: 'App\\Models\\Metadatum' } });
