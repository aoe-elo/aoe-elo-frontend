import type { IBaseRepositoryInterface } from "$interfaces/repository";
import { Country } from "$models/country.model";
import { Player } from "$models/player.model";
import type { PlayerId } from "$models/player.model";
import type { Sequelize } from "@sequelize/core";

export interface IPlayerRepositoryInterface<PlayerId, PlayerData>
	extends IBaseRepositoryInterface<PlayerId, PlayerData> {
	getByName(name: string): Promise<PlayerData | null>;
	getAllPartiallyCached(): Promise<Partial<PlayerData[]>>;
}

export class PlayerRepository
	implements IPlayerRepositoryInterface<PlayerId, Player>
{
	getAll(): Promise<Player[]> {
		return Player.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Player[]> {
		return Player.findAll({
			offset,
			limit,
			include: [
				{
					model: Country,
					as: "country",
					attributes: ["name", "iso_3166_2"],
				},
			],
		});
	}

	getAllPartiallyCached(): Promise<Partial<Player[]>> {
		return Player.findAll({ attributes: ["id", "name"] });
	}

	getById(id: PlayerId): Promise<Player | null> {
		return Player.findByPk(id, {
			include: [
				{
					model: Country,
					as: "country",
					attributes: ["name", "iso_3166_2"],
				},
			],
		});
	}

	getByName(name: string): Promise<Player | null> {
		return Player.findOne({ where: { name: name } });
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
