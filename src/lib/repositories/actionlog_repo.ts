import { type IActionlogAttributes, type ActionlogId, Actionlog } from "$models/actionlog";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface IActionlogRepositoryInterface<ActionlogId, ActionlogData> extends IBaseRepositoryInterface<ActionlogId, ActionlogData> { }

export class ActionlogRepository implements IActionlogRepositoryInterface<ActionlogId, IActionlogAttributes> {

    constructor(private readonly model: typeof Actionlog = Actionlog) { }

    async getAll(): Promise<IActionlogAttributes[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IActionlogAttributes[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: ActionlogId): Promise<IActionlogAttributes | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<IActionlogAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ActionlogId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ActionlogId, new_details: Partial<IActionlogAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ActionlogId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockActionlogRepository implements IActionlogRepositoryInterface<ActionlogId, IActionlogAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<IActionlogAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IActionlogAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: ActionlogId): Promise<IActionlogAttributes | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<IActionlogAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ActionlogId> {
        return Promise.resolve(1);
    }

    async update(id: ActionlogId, new_details: Partial<IActionlogAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ActionlogId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
