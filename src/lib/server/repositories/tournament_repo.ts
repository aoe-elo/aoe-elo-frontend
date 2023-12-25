/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IBaseRepositoryInterface } from "$lib/server/helpers/repositoryHelper";
import type { PrismaClient, Tournament } from "@prisma-app/aoe-elo-live-client";
import type { ITournament } from "./entities/tournament";

type TournamentId = Tournament["id"];

interface ITournamentRepositoryInterface<TournamentId, TournamentData>
	extends IBaseRepositoryInterface<TournamentId, ITournament> {
	getByName(name: string): Promise<TournamentData | null>;
	getAllPartiallyCached(): Promise<Partial<TournamentData>[]>;
	getLatestTournaments(amount: number): Promise<ITournament[]>;
}

export class TournamentRepository<T extends PrismaClient>
	implements ITournamentRepositoryInterface<TournamentId, Tournament>
{
	constructor(private readonly model: T) { }

	getAll(): Promise<ITournament[]> {
		return this.model.tournament.findMany();
	}

	getAllPaginated(offset: number, limit = 25): Promise<ITournament[]> {
		return this.model.tournament.findMany({ skip: offset, take: limit });
	}

	getAllPartiallyCached(): Promise<Partial<ITournament>[]> {
		return this.model.tournament.findMany({
			select: {
				id: true,
				name: true,
				prizemoney: true,
				short: true,
				start: true,
				end: true,
			},
		});
	}

	getById(id: TournamentId): Promise<ITournament | null> {
		return this.model.tournament.findUnique({ where: { id: id } }).then((item) => {
			if (!item) {
				return null;
			}

			// map item to ITournament
			return {
				id: item.id,
				name: item.name,
				url: item.website ? item.website : undefined,
				short: item.short,
				start: item.start ? item.start.toISOString() : undefined,
				end: item.end ? item.end.toISOString() : undefined,
				prizemoney: item.prizemoney ? item.prizemoney : undefined,
			} as ITournament;
		});;
	}

	getHighlighted(prize_pool_min = 10000, limit = 5): Promise<ITournament[]> {
		return this.model.tournament.findMany({
			orderBy: { start: "desc" },
			take: limit,
			where: { prizemoney: { gt: prize_pool_min } },
		});
	}

	getLatestTournaments(amount = 5): Promise<ITournament[]> {
		return this.model.tournament.findMany({
			orderBy: { start: "desc" },
			take: amount,
		}).then((items) => {
			// map items to ITournament
			return items.map((item) => {
				return {
					id: item.id,
					name: item.name,
					url: item.website ? item.website : undefined,
					short: item.short,
					start: item.start ? item.start.toISOString() : undefined,
					end: item.end ? item.end.toISOString() : undefined,
					prizemoney: item.prizemoney ? item.prizemoney : undefined,
				} as ITournament;
			});
		});;
	}

	getByName(name: string): Promise<Tournament | null> {
		return this.model.tournament.findFirst({ where: { name: name } });
	}

	create(
		_details: Partial<Tournament>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<TournamentId> {
		throw new Error("Method not implemented.");
	}

	update(
		_id: TournamentId,
		_new_details: Partial<Tournament>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		_id: TournamentId,
		_actionlog_user_id: number,
		_actionlog_summary: string,
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
