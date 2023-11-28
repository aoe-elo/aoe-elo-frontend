import type * as Sequelize from "sequelize";
import type { Optional } from "sequelize";
import { DataTypes, Model } from "sequelize";
import type { ModelHasRole, ModelHasRoleId } from "./model_has_role.model";
import type {
	RoleHasPermission,
	RoleHasPermissionId,
} from "./role_has_permission.model";

export interface IRoleAttributes {
	id: number;
	name: string;
	guard_name: string;
	created_at?: Date;
	updated_at?: Date;
}

export type RolePk = "id";
export type RoleId = Role[RolePk];
export type RoleOptionalAttributes = "created_at" | "updated_at";
export type RoleCreationAttributes = Optional<
	IRoleAttributes,
	RoleOptionalAttributes
>;

export class Role
	extends Model<IRoleAttributes, RoleCreationAttributes>
	implements IRoleAttributes
{
	declare id: number;
	declare name: string;
	declare guard_name: string;
	declare created_at?: Date;
	declare updated_at?: Date;

	// Role hasMany ModelHasRole via role_id
	model_has_roles!: ModelHasRole[];
	getModel_has_roles!: Sequelize.HasManyGetAssociationsMixin<ModelHasRole>;
	setModel_has_roles!: Sequelize.HasManySetAssociationsMixin<
		ModelHasRole,
		ModelHasRoleId
	>;
	addModel_has_role!: Sequelize.HasManyAddAssociationMixin<
		ModelHasRole,
		ModelHasRoleId
	>;
	addModel_has_roles!: Sequelize.HasManyAddAssociationsMixin<
		ModelHasRole,
		ModelHasRoleId
	>;
	createModel_has_role!: Sequelize.HasManyCreateAssociationMixin<ModelHasRole>;
	removeModel_has_role!: Sequelize.HasManyRemoveAssociationMixin<
		ModelHasRole,
		ModelHasRoleId
	>;
	removeModel_has_roles!: Sequelize.HasManyRemoveAssociationsMixin<
		ModelHasRole,
		ModelHasRoleId
	>;
	hasModel_has_role!: Sequelize.HasManyHasAssociationMixin<
		ModelHasRole,
		ModelHasRoleId
	>;
	hasModel_has_roles!: Sequelize.HasManyHasAssociationsMixin<
		ModelHasRole,
		ModelHasRoleId
	>;
	countModel_has_roles!: Sequelize.HasManyCountAssociationsMixin;
	// Role hasMany RoleHasPermission via role_id
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

	static initModel(sequelize: Sequelize.Sequelize): typeof Role {
		return sequelize.define(
			"Role",
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
				tableName: "roles",
				timestamps: true,
				underscored: true,
				indexes: [
					{
						name: "roles_name_guard_name_unique",
						unique: true,
						fields: [{ name: "name" }, { name: "guard_name" }],
					},
				],
			},
		) as typeof Role;
	}
}
