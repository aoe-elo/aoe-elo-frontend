import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { Action } from "$models/TODO/action.model";
import type { Actionlog, ActionlogId } from "$models/TODO/actionlog.model";
import type { User } from "$models/user.model";

type IActionlogRepositoryInterface<ActionlogId, ActionlogData> =
	IBaseRepositoryInterface<ActionlogId, ActionlogData>;

export class ActionlogRepository
	implements IActionlogRepositoryInterface<ActionlogId, Actionlog>
{
	constructor(
		private readonly model: typeof Actionlog,
		private readonly action: typeof Action,
		private readonly user: typeof User,
	) {}

	getAll(): Promise<Actionlog[]> {
		return this.model.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Actionlog[]> {
		return this.model.findAll({
			offset,
			limit,
			include: [
				{
					model: this.action,
					as: "action",
					attributes: ["name", "description"],
				},
				{ model: this.user, as: "user", attributes: ["id", "name"] },
			],
		});
	}

	getById(id: ActionlogId): Promise<Actionlog | null> {
		return this.model.findByPk(id);
	}

	create(
		details: Partial<Actionlog>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ActionlogId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: ActionlogId,
		new_details: Partial<Actionlog>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: ActionlogId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockActionlogRepository
	implements IActionlogRepositoryInterface<ActionlogId, Actionlog>
{
	constructor(/* empty */) {}

	getAll(): Promise<Actionlog[]> {
		throw new Error("Method not implemented.");
	}

	getAllPaginated(offset: number, limit = 25): Promise<Actionlog[]> {
		throw new Error("Method not implemented.");
	}

	getById(id: ActionlogId): Promise<Actionlog | null> {
		throw new Error("Method not implemented.");
	}

	create(
		details: Partial<Actionlog>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ActionlogId> {
		return Promise.resolve(1);
	}

	update(
		id: ActionlogId,
		new_details: Partial<Actionlog>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: ActionlogId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
