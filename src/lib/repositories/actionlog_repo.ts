import type { ActionlogId, Actionlog } from "$models/actionlog.model";
import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { Action } from "$models/action.model";
import type User from "$models/user.model";

interface IActionlogRepositoryInterface<ActionlogId, ActionlogData> extends IBaseRepositoryInterface<ActionlogId, ActionlogData> { }

export class ActionlogRepository implements IActionlogRepositoryInterface<ActionlogId, Actionlog> {

    constructor(private readonly model: typeof Actionlog, private readonly action: typeof Action, private readonly user: typeof User) { }

    async getAll(): Promise<Actionlog[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<Actionlog[]> {
        return this.model.findAll({ offset, limit, include: [{ model: this.action, as: 'action', attributes: ["name", "description"] }, { model: this.user, as: 'user', attributes: ["id", "name"] }] });
    }

    async getById(id: ActionlogId): Promise<Actionlog | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<Actionlog>, actionlog_user_id: number, actionlog_summary: string): Promise<ActionlogId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ActionlogId, new_details: Partial<Actionlog>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ActionlogId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockActionlogRepository implements IActionlogRepositoryInterface<ActionlogId, Actionlog> {

    constructor(/* empty */) { }

    async getAll(): Promise<Actionlog[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<Actionlog[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: ActionlogId): Promise<Actionlog | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<Actionlog>, actionlog_user_id: number, actionlog_summary: string): Promise<ActionlogId> {
        return Promise.resolve(1);
    }

    async update(id: ActionlogId, new_details: Partial<Actionlog>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ActionlogId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
