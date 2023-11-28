import type { IBaseRepositoryInterface } from "$interfaces/repository";
import { Country } from "$models/country.model";
import { Player } from "$models/player.model";
import type { PlayerId } from "$models/player.model";
import type { Repository, Sequelize } from "sequelize-typescript";

export interface IPlayerRepositoryInterface<PlayerId, PlayerData>
	extends IBaseRepositoryInterface<PlayerId, PlayerData> {
	getByName(name: string): Promise<PlayerData | null>;
	getAllPartiallyCached(): Promise<Partial<PlayerData[]>>;
}

export class PlayerRepository
	implements IPlayerRepositoryInterface<PlayerId, Player>
{
	private readonly player: Repository<Player>;
	private readonly country: Repository<Country>;

	constructor(connection: Sequelize) {
		this.player = connection.getRepository(Player);
		this.country = connection.getRepository(Country);
	}

	getAll(): Promise<Player[]> {
		return this.player.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Player[]> {
		return this.player.findAll({
			offset,
			limit,
			include: [
				{
					model: this.country,
					as: "country",
					attributes: ["name", "iso_3166_2"],
				},
			],
		});
	}

	getAllPartiallyCached(): Promise<Partial<Player[]>> {
		return this.player.findAll({ attributes: ["id", "name"] });
	}

	getById(id: PlayerId): Promise<Player | null> {
		return this.player.findByPk(id, {
			include: [
				{
					model: this.country,
					as: "country",
					attributes: ["name", "iso_3166_2"],
				},
			],
		});
	}

	getByName(name: string): Promise<Player | null> {
		return this.player.findOne({ where: { name: name } });
	}

	create(
		details: Partial<Player>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<PlayerId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: PlayerId,
		new_details: Partial<Player>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: PlayerId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockPlayerRepository
	implements IPlayerRepositoryInterface<PlayerId, Player>
{
	constructor(/* empty */) {}

	getAll(): Promise<Player[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as Player,
			{ id: 2, name: "Test2", country_id: 123 } as Player,
		];
	}

	getAllPaginated(offset: number, limit = 25): Promise<Player[]> {
		throw new Error("Method not implemented.");
	}

	getAllPartiallyCached(): Promise<Player[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as Player,
			{ id: 2, name: "Test2", country_id: 123 } as Player,
		];
	}

	getById(id: PlayerId): Promise<Player | null> {
		return { id: id, name: "Test", country_id: 123 } as Player;
	}

	getByName(name: string): Promise<Player | null> {
		return { id: 1, name: name, country_id: 123 } as Player;
	}

	create(
		details: Partial<Player>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<PlayerId> {
		return Promise.resolve(1);
	}

	update(
		id: PlayerId,
		new_details: Partial<Player>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: PlayerId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
