/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { PrismaClient, User } from "@prisma/client";

type UserId = User["id"];

interface IUserRepositoryInterface<UserId, UserData>
	extends IBaseRepositoryInterface<UserId, UserData> {
	getByName(name: string): Promise<UserData | null>;
	getAllPartiallyCached(): Promise<Partial<UserData>[]>;
}

export class UserRepository<T extends PrismaClient> implements IUserRepositoryInterface<UserId, User> {

	constructor(private readonly model: T) {}
	
	getAll(): Promise<User[]> {
		return this.model.user.findMany();
	}

	getAllPaginated(offset: number, limit = 25): Promise<User[]> {
		return this.model.user.findMany({ skip: offset, take: limit });
	}

	getAllPartiallyCached(): Promise<Partial<User>[]> {
		return this.model.user.findMany({ select: { id: true, name: true} });
	}

	getById(id: UserId): Promise<User | null> {
		return this.model.user.findUnique({ where: { id: id } });
	}

	getByName(name: string): Promise<User | null> {
		return this.model.user.findFirst({ where: { name: name } });
	}

	create(
		_details: Partial<User>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<UserId> {
		throw new Error("Method not implemented.");
	}

	update(
		_id: UserId,
		_new_user_details: Partial<User>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		_id: UserId,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

// export class MockUserRepository
// 	implements IUserRepositoryInterface<UserId, User>
// {
// 	getAll(): Promise<User[]> {
// 		return [
// 			{ id: 1, name: "Test", country_id: 123 } as User,
// 			{ id: 2, name: "Test2", country_id: 123 } as User,
// 		];
// 	}

// 	getAllPaginated(): Promise<User[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getAllPartiallyCached(): Promise<User[]> {
// 		return [
// 			{ id: 1, name: "Test", country_id: 123 } as User,
// 			{ id: 2, name: "Test2", country_id: 123 } as User,
// 		];
// 	}

// 	getById(id: UserId): Promise<User | null> {
// 		return { id: id, name: "Test", country_id: 123 } as User;
// 	}

// 	getByName(name: string): Promise<User | null> {
// 		return { id: 1, name: name, country_id: 123 } as User;
// 	}

// 	create(
// 		details: Partial<User>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<UserId> {
// 		return Promise.resolve(1);
// 	}

// 	update(
// 		id: UserId,
// 		new_details: Partial<User>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(false);
// 	}

// 	delete(
// 		id: UserId,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(true);
// 	}
// }
