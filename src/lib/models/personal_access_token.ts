import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface personal_access_tokenAttributes {
  id: number;
  tokenable_type: string;
  tokenable_id: number;
  name: string;
  token: string;
  abilities?: string;
  last_used_at?: Date;
  expires_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type personal_access_tokenPk = "id";
export type personal_access_tokenId = personal_access_token[personal_access_tokenPk];
export type personal_access_tokenOptionalAttributes = "abilities" | "last_used_at" | "expires_at" | "created_at" | "updated_at";
export type personal_access_tokenCreationAttributes = Optional<personal_access_tokenAttributes, personal_access_tokenOptionalAttributes>;

export class personal_access_token extends Model<personal_access_tokenAttributes, personal_access_tokenCreationAttributes> implements personal_access_tokenAttributes {
  id!: number;
  tokenable_type!: string;
  tokenable_id!: number;
  name!: string;
  token!: string;
  abilities?: string;
  last_used_at?: Date;
  expires_at?: Date;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof personal_access_token {
    return personal_access_token.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tokenable_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tokenable_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    abilities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_used_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'personal_access_tokens',
    timestamps: true,
    indexes: [
      {
        name: "personal_access_tokens_tokenable_type_tokenable_id_index",
        fields: [
          { name: "tokenable_type" },
          { name: "tokenable_id" },
        ]
      },
      {
        name: "personal_access_tokens_token_unique",
        unique: true,
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
  }
}
