import type { UserId, User } from "$models/user";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface IUserRepositoryInterface<UserId, UserData> extends IBaseRepositoryInterface<UserId, UserData> {
    getByName(name: string): Promise<UserData | null>
    getAllPartiallyCached(): Promise<Partial<UserData[]>>;
}

export class UserRepository implements IUserRepositoryInterface<UserId, User> {

    constructor(private readonly model: typeof User) { }

    async getAll(): Promise<User[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<User[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<User[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: UserId): Promise<User | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<User | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<User>, actionlog_user_id: number, actionlog_summary: string): Promise<UserId> {
        throw new Error("Method not implemented.");
    }

    async update(id: UserId, new_user_details: Partial<User>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: UserId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockUserRepository implements IUserRepositoryInterface<UserId, User> {

    constructor(/* empty */) { }

    async getAll(): Promise<User[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as User, { id: 2, name: "Test2", country_id: 123 } as User];
    }

    async getAllPaginated(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<User[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as User, { id: 2, name: "Test2", country_id: 123 } as User];
    }

    async getById(id: UserId): Promise<User | null> {
        return { id: id, name: "Test", country_id: 123 } as User;
    }

    async getByName(name: string): Promise<User | null> {
        return { id: 1, name: name, country_id: 123 } as User;
    }

    async create(details: Partial<User>, actionlog_user_id: number, actionlog_summary: string): Promise<UserId> {
        return Promise.resolve(1);
    }

    async update(id: UserId, new_details: Partial<User>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: UserId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
