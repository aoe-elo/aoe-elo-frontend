import { models } from "$lib/db_setup";
import type { IUserAttributes, UserId } from "$lib/models/user";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type UserData = IUserAttributes;
type User = typeof models.User;

interface IUserRepositoryInterface<UserId, UserData> extends IBaseRepositoryInterface<UserId, UserData> {
    getByName(name: string): Promise<UserData | null>
    getAllPartiallyCached(): Promise<Partial<UserData[]>>;
}

export class UserRepository implements IUserRepositoryInterface<UserId, UserData> {

    constructor(private readonly model: User = models.User) { }

    async getAll(): Promise<UserData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<UserData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<UserData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: UserId): Promise<UserData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<UserData | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<UserData>, actionlog_user_id: number, actionlog_summary: string): Promise<UserId> {
        throw new Error("Method not implemented.");
    }

    async update(id: UserId, new_user_details: Partial<UserData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: UserId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockUserRepository implements IUserRepositoryInterface<UserId, UserData> {

    constructor(/* empty */) { }

    async getAll(): Promise<UserData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as UserData, { id: 2, name: "Test2", country_id: 123 } as UserData];
    }

    async getAllPaginated(): Promise<UserData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<UserData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as UserData, { id: 2, name: "Test2", country_id: 123 } as UserData];
    }

    async getById(id: UserId): Promise<UserData | null> {
        return { id: id, name: "Test", country_id: 123 } as UserData;
    }

    async getByName(name: string): Promise<UserData | null> {
        return { id: 1, name: name, country_id: 123 } as UserData;
    }

    async create(details: Partial<UserData>, actionlog_user_id: number, actionlog_summary: string): Promise<UserId> {
        return Promise.resolve(1);
    }

    async update(id: UserId, new_details: Partial<UserData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: UserId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
