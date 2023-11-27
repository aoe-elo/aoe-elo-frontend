import type { SetId as MatchId, Set as Match } from "$models/set.model";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

type IMatchRepositoryInterface<MatchId, MatchData> = IBaseRepositoryInterface<
	MatchId,
	MatchData
>;

export class MatchRepository
	implements IMatchRepositoryInterface<MatchId, Match>
{
	constructor(private readonly model: typeof Match) {}

	async getAll(): Promise<Match[]> {
		return this.model.findAll();
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Match[]> {
		return this.model.findAll({ offset, limit });
	}

	async getById(id: MatchId): Promise<Match | null> {
		return this.model.findByPk(id);
	}

	async create(
		details: Partial<Match>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<MatchId> {
		throw new Error("Method not implemented.");
	}

	async update(
		id: MatchId,
		new_details: Partial<Match>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async delete(
		id: MatchId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockMatchRepository
	implements IMatchRepositoryInterface<MatchId, Match>
{
	constructor(/* empty */) {}

	async getAll(): Promise<Match[]> {
		throw new Error("Method not implemented.");
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Match[]> {
		throw new Error("Method not implemented.");
	}

	async getById(id: MatchId): Promise<Match | null> {
		throw new Error("Method not implemented.");
	}

	async create(
		details: Partial<Match>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<MatchId> {
		return Promise.resolve(1);
	}

	async update(
		id: MatchId,
		new_details: Partial<Match>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	async delete(
		id: MatchId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
