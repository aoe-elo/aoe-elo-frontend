// TODO! This file is not in use, but is kept for reference.

// import type { IBaseRepositoryInterface } from "$interfaces/repository";
// // import type { Set as Match, SetId as MatchId } from "$models/TODO/set.model";

// type IMatchRepositoryInterface<MatchId, MatchData> = IBaseRepositoryInterface<
// 	MatchId,
// 	MatchData
// >;

// export class MatchRepository
// 	implements IMatchRepositoryInterface<MatchId, Match>
// {
// 	constructor(private readonly model: typeof Match) { }

// 	getAll(): Promise<Match[]> {
// 		return this.model.findAll();
// 	}

// 	getAllPaginated(offset: number, limit = 25): Promise<Match[]> {
// 		return this.model.findAll({ offset, limit });
// 	}

// 	getById(id: MatchId): Promise<Match | null> {
// 		return this.model.findByPk(id);
// 	}

// 	create(
// 		details: Partial<Match>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<MatchId> {
// 		throw new Error("Method not implemented.");
// 	}

// 	update(
// 		id: MatchId,
// 		new_details: Partial<Match>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		throw new Error("Method not implemented.");
// 	}
// 	delete(
// 		id: MatchId,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		throw new Error("Method not implemented.");
// 	}
// }

// export class MockMatchRepository
// 	implements IMatchRepositoryInterface<MatchId, Match>
// {
// 	constructor(/* empty */) { }

// 	getAll(): Promise<Match[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getAllPaginated(offset: number, limit = 25): Promise<Match[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getById(id: MatchId): Promise<Match | null> {
// 		throw new Error("Method not implemented.");
// 	}

// 	create(
// 		details: Partial<Match>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<MatchId> {
// 		return Promise.resolve(1);
// 	}

// 	update(
// 		id: MatchId,
// 		new_details: Partial<Match>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(false);
// 	}

// 	delete(
// 		id: MatchId,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(true);
// 	}
// }
