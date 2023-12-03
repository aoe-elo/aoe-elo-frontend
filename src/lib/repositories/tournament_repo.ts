import type { IBaseRepositoryInterface } from "$interfaces/repository";
import { Tournament, type TournamentId } from "$models/tournament.model";
import { Op } from "@sequelize/core";

interface ITournamentRepositoryInterface<TournamentId, TournamentData>
	extends IBaseRepositoryInterface<TournamentId, TournamentData> {
	getByName(name: string): Promise<TournamentData | null>;
	getAllPartiallyCached(): Promise<Partial<TournamentData[]>>;
}

export class TournamentRepository
	implements ITournamentRepositoryInterface<TournamentId, Tournament>
{
	getAll(): Promise<Tournament[]> {
		return Tournament.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Tournament[]> {
		return Tournament.findAll({ offset, limit });
	}

	getAllPartiallyCached(): Promise<Partial<Tournament[]>> {
		return Tournament.findAll({ attributes: ["id", "name"] });
	}

	getById(id: TournamentId): Promise<Tournament | null> {
		return Tournament.findByPk(id);
	}

	getHighlighted(prize_pool_min: number, limit = 5): Promise<Tournament[]> {
		return Tournament.findAll({
			order: [["started_at", "DESC"]],
			limit: limit,
			where: { prize_pool: { [Op.gte]: prize_pool_min } },
		});
	}

	getByName(name: string): Promise<Tournament | null> {
		return Tournament.findOne({ where: { name } });
	}

	create(
		details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TournamentId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: TournamentId,
		new_details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: TournamentId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockTournamentRepository
	implements ITournamentRepositoryInterface<TournamentId, Tournament>
{
	getAll(): Promise<Tournament[]> {
		throw new Error("Method not implemented.");
	}

	getAllPaginated(offset: number, limit = 25): Promise<Tournament[]> {
		throw new Error("Method not implemented.");
	}

	getAllPartiallyCached(): Promise<Tournament[]> {
		throw new Error("Method not implemented.");
	}

	getById(id: TournamentId): Promise<Tournament | null> {
		throw new Error("Method not implemented.");
	}

	getByName(name: string): Promise<Tournament | null> {
		throw new Error("Method not implemented.");
	}

	create(
		details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TournamentId> {
		return Promise.resolve(1);
	}

	update(
		id: TournamentId,
		new_details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: TournamentId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
