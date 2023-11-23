import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface password_reset_tokenAttributes {
  email: string;
  token: string;
  created_at?: Date;
}

export type password_reset_tokenPk = "email";
export type password_reset_tokenId = password_reset_token[password_reset_tokenPk];
export type password_reset_tokenOptionalAttributes = "created_at";
export type password_reset_tokenCreationAttributes = Optional<password_reset_tokenAttributes, password_reset_tokenOptionalAttributes>;

export class password_reset_token extends Model<password_reset_tokenAttributes, password_reset_tokenCreationAttributes> implements password_reset_tokenAttributes {
  email!: string;
  token!: string;
  created_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof password_reset_token {
    return password_reset_token.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'password_reset_tokens',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_password_reset_tokens_1",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}
