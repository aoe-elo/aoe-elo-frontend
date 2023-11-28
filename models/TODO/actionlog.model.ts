import { uppercaseFirst } from "$lib/util";
import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import { match } from "ts-pattern";
import type { User, UserId } from "../user.model";
import type { Action, ActionId } from "./action.model";

export interface IActionlogAttributes {
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

export type ActionlogPk = "id";
export type ActionlogId = Actionlog[ActionlogPk];
export type ActionlogOptionalAttributes =
	| "summary"
	| "loggable_id"
	| "created_at"
	| "updated_at"
	| "deleted_at";
export type ActionlogCreationAttributes = Optional<
	IActionlogAttributes,
	ActionlogOptionalAttributes
>;

export class Actionlog
	extends Model<IActionlogAttributes, ActionlogCreationAttributes>
	implements IActionlogAttributes
{
	declare id: number;
	declare user_id: number;
	declare action_id: number;
	declare summary?: string;
	declare loggable_id?: number;
	declare loggable_type: string;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	// Actionlog belongsTo Action via action_id
	action!: Action;
	getAction!: Sequelize.BelongsToGetAssociationMixin<Action>;
	setAction!: Sequelize.BelongsToSetAssociationMixin<Action, ActionId>;
	createAction!: Sequelize.BelongsToCreateAssociationMixin<Action>;
	// Actionlog belongsTo User via user_id
	user!: User;
	getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
	setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
	createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

	// TODO!: Support polymorphic lazy loading
	// TODO!: Needs to have another logic, because the loggable_type is not a model
	// TODO!: Create lookup table for loggable_type
	// needs to map 'App\\Models\\ArdPlayer' => 'ArdPlayer'

	// https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/#polymorphic-lazy-loading

	getLoggable(options?: object): any {
		console.log(`getLoggable: ${this.loggable_type}`);
		if (!this.loggable_type) return Promise.resolve(null);
		// strip the namespace 'App\Model\'from the loggable_type
		const model_name = this.loggable_type.replace(/^App\\Models\\/, "");
		const mixinMethodName = `get${uppercaseFirst(model_name)}`;
		return this[mixinMethodName](options);
	}

	static initModel(sequelize: Sequelize.Sequelize): typeof Actionlog {
		return sequelize.define(
			"Actionlog",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				user_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: "users",
						key: "id",
					},
					unique: true,
				},
				action_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
					references: {
						model: "actions",
						key: "id",
					},
				},
				summary: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
				loggable_id: {
					type: DataTypes.INTEGER,
					allowNull: true,
					unique: true,
				},
				loggable_type: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
			},
			{
				tableName: "actionlog",
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
						],
					},
				],
			},
		) as typeof Actionlog;
	}
}

Actionlog.addHook("afterFind", (findResult) => {
	// If findResult is null return early
	if (findResult === null) return;

	if (!Array.isArray(findResult))
		findResult = [findResult] as Model<
			IActionlogAttributes,
			ActionlogCreationAttributes
		>[];
	for (const instance of findResult) {
		console.log(instance);
		match(instance.loggable_type)
			.with("App\\Models\\ArdPlayer", () => {
				if (instance.ArdPlayer !== undefined) return;
				instance.loggable_type = instance.ArdPlayer;
			})
			.with("App\\Models\\Country", () => {
				console.log("Country");
				if (instance.Country !== undefined) {
					instance.loggable_type = instance.Country;
				}
			})
			// TODO!: Add all other types
			// .with("achievement", () => instance.loggable_type = instance.achievement)
			// .with("ard_player", () => instance.loggable_type = instance.ard_player)
			// .with("ard_team", () => instance.loggable_type = instance.ard_team)
			// .with("atp_category", () => instance.loggable_type = instance.atp_category)
			// .with("country", () => instance.loggable_type = instance.country)
			// .with("location", () => instance.loggable_type = instance.location)
			// .with("location_style", () => instance.loggable_type = instance.location_style)
			// .with("metadatum", () => instance.loggable_type = instance.metadatum)
			// .with("news", () => instance.loggable_type = instance.news)
			// .with("player", () => instance.loggable_type = instance.player)
			// .with("review", () => instance.loggable_type = instance.review)
			// .with("set", () => instance.loggable_type = instance.set)
			// .with("stage", () => instance.loggable_type = instance.stage)
			// .with("team", () => instance.loggable_type = instance.team)
			// .with("tournament", () => instance.loggable_type = instance.tournament)
			// .with("user", () => instance.loggable_type = instance.user)
			.otherwise(() => (instance.loggable_type = null));
	}

	// TODO!: Needed?
	// To prevent mistakes:
	// delete instance.image;
	// delete instance.dataValues.image;
	// delete instance.video;
	// delete instance.dataValues.video;
});
