import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { PrismaClient, Tournament } from "@prisma/client";

interface ITournamentRepositoryInterface<TournamentId, TournamentData>
	extends IBaseRepositoryInterface<TournamentId, TournamentData> {
	getByName(name: string): Promise<TournamentData | null>;
	getAllPartiallyCached(): Promise<Partial<TournamentData>[]>;
}

type TournamentId = Tournament["id"];

export class TournamentRepository<T extends PrismaClient>
	implements ITournamentRepositoryInterface<TournamentId, Tournament>
{

	constructor(private readonly model: T) {}

	getAll(): Promise<Tournament[]> {
		return this.model.tournament.findMany();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Tournament[]> {
		return this.model.tournament.findMany({ skip: offset, take: limit });
	}

	getAllPartiallyCached(): Promise<Partial<Tournament>[]> {
		return this.model.tournament.findMany({ select: {id: true, name: true} });
	}

	getById(id: TournamentId): Promise<Tournament | null> {
		return this.model.tournament.findUnique({ where: {id: id}});
	}

	getHighlighted(prize_pool_min: number, limit = 5): Promise<Tournament[]> {
		return this.model.tournament.findMany({
			orderBy: {start: 'desc'},
			take: limit,
			where: { prizemoney: { gt: prize_pool_min } },
		});
	}

	getByName(name: string): Promise<Tournament | null> {
		return this.model.tournament.findFirst({ where: { name: name } });
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

// export class MockTournamentRepository
// 	implements ITournamentRepositoryInterface<TournamentId, Tournament>
// {
// 	getAll(): Promise<Tournament[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getAllPaginated(offset: number, limit = 25): Promise<Tournament[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getAllPartiallyCached(): Promise<Tournament[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getById(id: TournamentId): Promise<Tournament | null> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getByName(name: string): Promise<Tournament | null> {
// 		throw new Error("Method not implemented.");
// 	}

// 	create(
// 		details: Partial<Tournament>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<TournamentId> {
// 		return Promise.resolve(1);
// 	}

// 	update(
// 		id: TournamentId,
// 		new_details: Partial<Tournament>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(false);
// 	}

// 	delete(
// 		id: TournamentId,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(true);
// 	}
// }