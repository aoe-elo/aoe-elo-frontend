import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type {
	ModelHasPermission,
	ModelHasPermissionId,
} from "./model_has_permission.model";
import type {
	RoleHasPermission,
	RoleHasPermissionId,
} from "./role_has_permission.model";

export interface IPermissionAttributes {
	id: number;
	name: string;
	guard_name: string;
	created_at?: Date;
	updated_at?: Date;
}

export type PermissionPk = "id";
export type PermissionId = Permission[PermissionPk];
export type PermissionOptionalAttributes = "created_at" | "updated_at";
export type PermissionCreationAttributes = Optional<
	IPermissionAttributes,
	PermissionOptionalAttributes
>;

export class Permission
	extends Model<IPermissionAttributes, PermissionCreationAttributes>
	implements IPermissionAttributes
{
	declare id: number;
	declare name: string;
	declare guard_name: string;
	declare created_at?: Date;
	declare updated_at?: Date;

	// Permission hasMany ModelHasPermission via permission_id
	model_has_permissions!: ModelHasPermission[];
	getModel_has_permissions!: Sequelize.HasManyGetAssociationsMixin<ModelHasPermission>;
	setModel_has_permissions!: Sequelize.HasManySetAssociationsMixin<
		ModelHasPermission,
		ModelHasPermissionId
	>;
	addModel_has_permission!: Sequelize.HasManyAddAssociationMixin<
		ModelHasPermission,
		ModelHasPermissionId
	>;
	addModel_has_permissions!: Sequelize.HasManyAddAssociationsMixin<
		ModelHasPermission,
		ModelHasPermissionId
	>;
	createModel_has_permission!: Sequelize.HasManyCreateAssociationMixin<ModelHasPermission>;
	removeModel_has_permission!: Sequelize.HasManyRemoveAssociationMixin<
		ModelHasPermission,
		ModelHasPermissionId
	>;
	removeModel_has_permissions!: Sequelize.HasManyRemoveAssociationsMixin<
		ModelHasPermission,
		ModelHasPermissionId
	>;
	hasModel_has_permission!: Sequelize.HasManyHasAssociationMixin<
		ModelHasPermission,
		ModelHasPermissionId
	>;
	hasModel_has_permissions!: Sequelize.HasManyHasAssociationsMixin<
		ModelHasPermission,
		ModelHasPermissionId
	>;
	countModel_has_permissions!: Sequelize.HasManyCountAssociationsMixin;
	// Permission hasMany RoleHasPermission via permission_id
	role_has_permissions!: RoleHasPermission[];
	getRole_has_permissions!: Sequelize.HasManyGetAssociationsMixin<RoleHasPermission>;
	setRole_has_permissions!: Sequelize.HasManySetAssociationsMixin<
		RoleHasPermission,
		RoleHasPermissionId
	>;
	addRole_has_permission!: Sequelize.HasManyAddAssociationMixin<
		RoleHasPermission,
		RoleHasPermissionId
	>;
	addRole_has_permissions!: Sequelize.HasManyAddAssociationsMixin<
		RoleHasPermission,
		RoleHasPermissionId
	>;
	createRole_has_permission!: Sequelize.HasManyCreateAssociationMixin<RoleHasPermission>;
	removeRole_has_permission!: Sequelize.HasManyRemoveAssociationMixin<
		RoleHasPermission,
		RoleHasPermissionId
	>;
	removeRole_has_permissions!: Sequelize.HasManyRemoveAssociationsMixin<
		RoleHasPermission,
		RoleHasPermissionId
	>;
	hasRole_has_permission!: Sequelize.HasManyHasAssociationMixin<
		RoleHasPermission,
		RoleHasPermissionId
	>;
	hasRole_has_permissions!: Sequelize.HasManyHasAssociationsMixin<
		RoleHasPermission,
		RoleHasPermissionId
	>;
	countRole_has_permissions!: Sequelize.HasManyCountAssociationsMixin;

	static initModel(sequelize: Sequelize.Sequelize): typeof Permission {
		return sequelize.define(
			"Permission",
			{
				id: {
					autoIncrement: true,
					type: DataTypes.INTEGER,
					allowNull: false,
					primaryKey: true,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
				guard_name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
				},
			},
			{
				tableName: "permissions",
				timestamps: true,
				underscored: true,
				indexes: [
					{
						name: "permissions_name_guard_name_unique",
						unique: true,
						fields: [{ name: "name" }, { name: "guard_name" }],
					},
				],
			},
		) as typeof Permission;
	}
}
