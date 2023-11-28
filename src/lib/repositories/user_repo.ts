import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { UserId } from "$models/user.model";
import { User } from "$models/user.model";
import type { Repository, Sequelize } from "sequelize-typescript";

interface IUserRepositoryInterface<UserId, UserData>
	extends IBaseRepositoryInterface<UserId, UserData> {
	getByName(name: string): Promise<UserData | null>;
	getAllPartiallyCached(): Promise<Partial<UserData[]>>;
}

export class UserRepository implements IUserRepositoryInterface<UserId, User> {
	private readonly user: Repository<User>;

	constructor(connection: Sequelize) {
		this.user = connection.getRepository(User);
	}

	getAll(): Promise<User[]> {
		return this.user.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<User[]> {
		return this.user.findAll({ offset, limit });
	}

	getAllPartiallyCached(): Promise<Partial<User[]>> {
		return this.user.findAll({ attributes: ["id", "name"] });
	}

	getById(id: UserId): Promise<User | null> {
		return this.user.findByPk(id);
	}

	getByName(name: string): Promise<User | null> {
		return this.user.findOne({ where: { name: name } });
	}

	create(
		details: Partial<User>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<UserId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: UserId,
		new_user_details: Partial<User>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: UserId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockUserRepository
	implements IUserRepositoryInterface<UserId, User>
{
	constructor(/* empty */) {}

	getAll(): Promise<User[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as User,
			{ id: 2, name: "Test2", country_id: 123 } as User,
		];
	}

	getAllPaginated(): Promise<User[]> {
		throw new Error("Method not implemented.");
	}

	getAllPartiallyCached(): Promise<User[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as User,
			{ id: 2, name: "Test2", country_id: 123 } as User,
		];
	}

	getById(id: UserId): Promise<User | null> {
		return { id: id, name: "Test", country_id: 123 } as User;
	}

	getByName(name: string): Promise<User | null> {
		return { id: 1, name: name, country_id: 123 } as User;
	}

	create(
		details: Partial<User>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<UserId> {
		return Promise.resolve(1);
	}

	update(
		id: UserId,
		new_details: Partial<User>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: UserId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
