import type { IBaseRepositoryInterface } from "$interfaces/repository";
import { Tournament, type TournamentId } from "$models/tournament.model";
import type { Repository, Sequelize } from "sequelize-typescript";

interface ITournamentRepositoryInterface<TournamentId, TournamentData>
	extends IBaseRepositoryInterface<TournamentId, TournamentData> {
	getByName(name: string): Promise<TournamentData | null>;
	getAllPartiallyCached(): Promise<Partial<TournamentData[]>>;
}

export class TournamentRepository
	implements ITournamentRepositoryInterface<TournamentId, Tournament>
{
	private readonly tournament: Repository<Tournament>;

	constructor(connection: Sequelize) {
		this.tournament = connection.getRepository(Tournament);
	}

	async getAll(): Promise<Tournament[]> {
		return this.tournament.findAll();
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Tournament[]> {
		return this.tournament.findAll({ offset, limit });
	}

	async getAllPartiallyCached(): Promise<Partial<Tournament[]>> {
		return this.tournament.findAll({ attributes: ["id", "name"] });
	}

	async getById(id: TournamentId): Promise<Tournament | null> {
		return this.tournament.findByPk(id);
	}

	async getByName(name: string): Promise<Tournament | null> {
		return this.tournament.findOne({ where: { name } });
	}

	async create(
		details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TournamentId> {
		throw new Error("Method not implemented.");
	}

	async update(
		id: TournamentId,
		new_details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async delete(
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
	constructor(/* empty */) {}

	async getAll(): Promise<Tournament[]> {
		throw new Error("Method not implemented.");
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Tournament[]> {
		throw new Error("Method not implemented.");
	}

	async getAllPartiallyCached(): Promise<Tournament[]> {
		throw new Error("Method not implemented.");
	}

	async getById(id: TournamentId): Promise<Tournament | null> {
		throw new Error("Method not implemented.");
	}

	async getByName(name: string): Promise<Tournament | null> {
		throw new Error("Method not implemented.");
	}

	async create(
		details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TournamentId> {
		return Promise.resolve(1);
	}

	async update(
		id: TournamentId,
		new_details: Partial<Tournament>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	async delete(
		id: TournamentId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
