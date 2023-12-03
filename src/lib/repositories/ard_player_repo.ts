import type { ArdPlayerId } from "$models/ard_player.model";
import { ArdPlayer } from "$models/ard_player.model";
import { Country } from "$models/country.model";
import type { IPlayerRepositoryInterface } from "$repositories/player_repo";

export class ArdPlayerRepository
	implements IPlayerRepositoryInterface<ArdPlayerId, ArdPlayer>
{
	getAll(): Promise<ArdPlayer[]> {
		return ArdPlayer.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<ArdPlayer[]> {
		return ArdPlayer.findAll({
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

	getAllPartiallyCached(): Promise<Partial<ArdPlayer[]>> {
		return ArdPlayer.findAll({ attributes: ["id", "name"] });
	}

	getById(id: ArdPlayerId): Promise<ArdPlayer | null> {
		return ArdPlayer.findByPk(id);
	}

	getByName(name: string): Promise<ArdPlayer | null> {
		return ArdPlayer.findOne({ where: { name: name } });
	}

	create(
		details: Partial<ArdPlayer>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ArdPlayerId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: ArdPlayerId,
		new_details: Partial<ArdPlayer>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: ArdPlayerId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockArdPlayerRepository
	implements IPlayerRepositoryInterface<ArdPlayerId, ArdPlayer>
{
	getAll(): Promise<ArdPlayer[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as ArdPlayer,
			{ id: 2, name: "Test2", country_id: 123 } as ArdPlayer,
		];
	}

	getAllPaginated(offset: number, limit = 25): Promise<ArdPlayer[]> {
		throw new Error("Method not implemented.");
	}

	getAllPartiallyCached(): Promise<ArdPlayer[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as ArdPlayer,
			{ id: 2, name: "Test2", country_id: 123 } as ArdPlayer,
		];
	}

	getById(id: ArdPlayerId): Promise<ArdPlayer | null> {
		return { id: id, name: "Test", country_id: 123 } as ArdPlayer;
	}

	getByName(name: string): Promise<ArdPlayer | null> {
		return { id: 1, name: name, country_id: 123 } as ArdPlayer;
	}

	create(
		details: Partial<ArdPlayer>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ArdPlayerId> {
		return Promise.resolve(1);
	}

	update(
		id: ArdPlayerId,
		new_details: Partial<ArdPlayer>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: ArdPlayerId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
