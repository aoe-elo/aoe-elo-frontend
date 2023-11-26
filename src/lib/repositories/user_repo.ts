import { type IUserAttributes, type UserId, User } from "$models/user";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface IUserRepositoryInterface<UserId, UserData> extends IBaseRepositoryInterface<UserId, UserData> {
    getByName(name: string): Promise<UserData | null>
    getAllPartiallyCached(): Promise<Partial<UserData[]>>;
}

export class UserRepository implements IUserRepositoryInterface<UserId, IUserAttributes> {

    constructor(private readonly model: typeof User = User) { }

    async getAll(): Promise<IUserAttributes[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IUserAttributes[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<IUserAttributes[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: UserId): Promise<IUserAttributes | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<IUserAttributes | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<IUserAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<UserId> {
        throw new Error("Method not implemented.");
    }

    async update(id: UserId, new_user_details: Partial<IUserAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: UserId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockUserRepository implements IUserRepositoryInterface<UserId, IUserAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<IUserAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IUserAttributes, { id: 2, name: "Test2", country_id: 123 } as IUserAttributes];
    }

    async getAllPaginated(): Promise<IUserAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<IUserAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IUserAttributes, { id: 2, name: "Test2", country_id: 123 } as IUserAttributes];
    }

    async getById(id: UserId): Promise<IUserAttributes | null> {
        return { id: id, name: "Test", country_id: 123 } as IUserAttributes;
    }

    async getByName(name: string): Promise<IUserAttributes | null> {
        return { id: 1, name: name, country_id: 123 } as IUserAttributes;
    }

    async create(details: Partial<IUserAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<UserId> {
        return Promise.resolve(1);
    }

    async update(id: UserId, new_details: Partial<IUserAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: UserId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
