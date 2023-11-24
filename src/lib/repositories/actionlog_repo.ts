import { models } from "$lib/sequelize";
import type { actionlogAttributes } from "$lib/models/actionlog";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type ActionlogId = actionlogAttributes["id"];
type ActionlogData = actionlogAttributes;
type Actionlog = typeof models.actionlog;

interface IActionlogRepositoryInterface<ActionlogId, ActionlogData> extends IBaseRepositoryInterface<ActionlogId, ActionlogData> { }

export class ActionlogRepository implements IActionlogRepositoryInterface<ActionlogId, ActionlogData> {

    constructor(private readonly model: Actionlog = models.actionlog) { }

    async getAll(): Promise<ActionlogData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ActionlogData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: ActionlogId): Promise<ActionlogData | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<ActionlogData>, actionlog_user_id: number, actionlog_summary: string): Promise<ActionlogId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ActionlogId, new_details: Partial<ActionlogData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ActionlogId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockActionlogRepository implements IActionlogRepositoryInterface<ActionlogId, ActionlogData> {

    constructor(/* empty */) { }

    async getAll(): Promise<ActionlogData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ActionlogData[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: ActionlogId): Promise<ActionlogData | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<ActionlogData>, actionlog_user_id: number, actionlog_summary: string): Promise<ActionlogId> {
        return Promise.resolve(1);
    }

    async update(id: ActionlogId, new_details: Partial<ActionlogData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ActionlogId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
