import { models } from "$lib/sequelize";
import type { userAttributes } from "$lib/models/user";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type UserId = userAttributes["id"];
type UserData = userAttributes;
type User = typeof models.user;

interface IUserRepositoryInterface<UserId, UserData> extends IBaseRepositoryInterface<UserId, UserData> {
    getByName(name: string): Promise<UserData | null>
    getAllPartiallyCached(): Promise<Partial<UserData[]>>;
}

export class UserRepository implements IUserRepositoryInterface<UserId, UserData> {

    constructor(private readonly user_model: User = models.user) { }

    async getAll(): Promise<UserData[]> {
        return this.user_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<UserData[]> {
        return this.user_model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<UserData[]>> {
        return this.user_model.findAll({ attributes: ["id", "name"] })
    }

    async getById(user_id: UserId): Promise<UserData | null> {
        return this.user_model.findByPk(user_id);
    }

    async getByName(user_name: string): Promise<UserData | null> {
        return this.user_model.findOne({ where: { name: user_name } });
    }

    async create(user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<UserId> {
        throw new Error("Method not implemented.");
    }

    async update(user_id: UserId, new_user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(user_id: UserId, change_user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(user_id: UserId): Promise<UserData | null> {
        return { id: user_id, name: "Test", country_id: 123 } as UserData;
    }

    async getByName(user_name: string): Promise<UserData | null> {
        return { id: 1, name: user_name, country_id: 123 } as UserData;
    }

    async create(user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<UserId> {
        return Promise.resolve(1);
    }

    async update(user_id: UserId, new_user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(user_id: UserId, change_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
