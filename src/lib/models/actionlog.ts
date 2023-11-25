import type * as Sequelize from 'sequelize';
import type { Optional } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { action, actionId } from './action';
import { user, type userId } from './user';
import { achievement } from './achievement';
import { tournament } from './tournament';
import { player } from './player';
import { ard_player } from './ard_player';
import { review } from './review';
import { location } from './location';
import { metadatum } from './metadatum';
import { news } from './news';
import { set } from './set';
import { stage } from './stage';
import { team } from './team';
import { ard_team } from './ard_team';
import { atp_category } from './atp_category';
import { country } from './country';
import { location_style } from './location_style';



export interface actionlogAttributes {
  id: number;
  user_id: number;
  action_id: number;
  summary?: string;
  loggable_id?: number;
  loggable_type: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type actionlogPk = "id";
export type actionlogId = actionlog[actionlogPk];
export type actionlogOptionalAttributes = "summary" | "loggable_id" | "created_at" | "updated_at" | "deleted_at";
export type actionlogCreationAttributes = Optional<actionlogAttributes, actionlogOptionalAttributes>;

export class actionlog extends Model<actionlogAttributes, actionlogCreationAttributes> implements actionlogAttributes {
  id!: number;
  user_id!: number;
  action_id!: number;
  summary?: string;
  loggable_id?: number;
  loggable_type!: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // actionlog belongsTo action via action_id
  action!: action;
  getAction!: Sequelize.BelongsToGetAssociationMixin<action>;
  setAction!: Sequelize.BelongsToSetAssociationMixin<action, actionId>;
  createAction!: Sequelize.BelongsToCreateAssociationMixin<action>;
  // actionlog belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  // TODO!: Support polymorphic lazy loading
  // https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/#polymorphic-lazy-loading
  //
  // getLoggable(options) {
  //   if (!this.loggable_type) return Promise.resolve(null);
  //   const mixinMethodName = `get${uppercaseFirst(this.loggable_type)}`;
  //   return this[mixinMethodName](options);
  // }

  static initModel(sequelize: Sequelize.Sequelize): typeof actionlog {
    return actionlog.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: true
      },
      action_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'actions',
          key: 'id'
        }
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      loggable_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
      },
      loggable_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      tableName: 'actionlog',
      timestamps: true,
      paranoid: true,
      underscored: true,
      indexes: [
        {
          name: "actionlog_user_id_loggable_id_loggable_type_created_at_updated_at_unique",
          unique: true,
          fields: [
            { name: "user_id" },
            { name: "loggable_id" },
            { name: "loggable_type" },
            { name: "created_at" },
            { name: "updated_at" },
          ]
        },
      ]
    });
  }
}

// Polymorphic associations
actionlog.belongsTo(achievement, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(ard_player, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(ard_team, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(atp_category, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(country, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(location, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(location_style, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(metadatum, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(news, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(player, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(review, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(set, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(stage, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(team, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(tournament, { foreignKey: "loggable_id", constraints: false });
actionlog.belongsTo(user, { foreignKey: "loggable_id", constraints: false });

actionlog.addHook("afterFind", findResult => {
  if (!Array.isArray(findResult)) findResult = [findResult];
  for (const instance of findResult) {
    if (instance.commentableType === "image" && instance.image !== undefined) {
      instance.commentable = instance.image;
    } else if (instance.commentableType === "video" && instance.video !== undefined) {
      instance.commentable = instance.video;
    }
    // To prevent mistakes:
    delete instance.image;
    delete instance.dataValues.image;
    delete instance.video;
    delete instance.dataValues.video;
  }
});