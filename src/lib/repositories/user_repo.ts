import { models } from "$lib/sequelize";
import type { userAttributes } from "$lib/models/user";

type UserId = userAttributes["id"];
type UserData = userAttributes;
type User = typeof models.user;

interface IUserRepositoryInterface {
    getAllUsers(): Promise<UserData[]>;
    getAllUsersPaginated(): Promise<UserData[]>;
    getAllUsersPartiallyCached(): Promise<Partial<UserData[]>>;
    getUserById(user_id: UserId): Promise<UserData | null>;
    createUser(user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<UserId>;
    updateUser(user_id: UserId, new_user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<boolean>;
    deleteUser(user_id: UserId, change_user_id: number, actionlog_summary: string): Promise<boolean>;
}

export class UserRepository implements IUserRepositoryInterface {

    constructor(private readonly user_model: User = models.user) { }

    async getAllUsers(): Promise<UserData[]> {
        return this.user_model.findAll();
    }

    async getAllUsersPaginated(): Promise<UserData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllUsersPartiallyCached(): Promise<Partial<UserData[]>> {
        return this.user_model.findAll({ attributes: ["id", "name"] })
    }

    async getUserById(user_id: UserId): Promise<UserData | null> {
        return this.user_model.findByPk(user_id);
    }

    async createUser(user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<UserId> {
        throw new Error("Method not implemented.");
    }

    async updateUser(user_id: UserId, new_user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(user_id: UserId, change_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockUserRepository implements IUserRepositoryInterface {

    constructor(/* empty */) { }

    async getAllUsers(): Promise<UserData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as UserData, { id: 2, name: "Test2", country_id: 123 } as UserData];
    }

    async getAllUsersPaginated(): Promise<UserData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllUsersPartiallyCached(): Promise<UserData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as UserData, { id: 2, name: "Test2", country_id: 123 } as UserData];
    }

    async getUserById(user_id: UserId): Promise<UserData | null> {
        return { id: user_id, name: "Test", country_id: 123 } as UserData;
    }

    async createUser(user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<UserId> {
        return Promise.resolve(1);
    }

    async updateUser(user_id: UserId, new_user_details: Partial<UserData>, change_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async deleteUser(user_id: UserId, change_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
