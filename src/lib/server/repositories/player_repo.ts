/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type {
	Country,
	Player,
	PlayerCache,
	PrismaClient,
	Team,
} from "@prisma-app/aoe-elo-live-client";

type PlayerId = Player["id"];

export interface IPlayerRepositoryInterface<PlayerId, PlayerData>
	extends IBaseRepositoryInterface<PlayerId, PlayerData> {
	getByName(name: string): Promise<PlayerData | null>;
	getAllPartiallyCached(): Promise<Partial<PlayerData>[]>;
	getTopPlayersByTournamentElo(
		amount: number,
	): Promise<(PlayerData & { stats: Partial<PlayerCache> })[]>;
}

export class PlayerRepository<T extends PrismaClient>
	implements IPlayerRepositoryInterface<PlayerId, Player>
{
	constructor(private readonly model: T) { }

	getAll(): Promise<Player[]> {
		return this.model.player.findMany();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Player[]> {
		return this.model.player.findMany({
			skip: offset,
			take: limit,
			include: { fromCountry: true, memberOfTeam: true },
		});
	}

	getAllPartiallyCached(): Promise<
		Partial<Player & { id: number; name: string }>[]
	> {
		return this.model.player.findMany({
			select: { id: true, name: true, aliases: true },
		});
	}

	getById(
		id: PlayerId,
	): Promise<
		| (Player & {
			cachedPlayerItem?: Partial<PlayerCache>;
			memberOfTeam?: Partial<Team>;
			fromCountry?: Partial<Country>;
		})
		| null
	> {
		return this.model.player.findUnique({
			where: { id: id },
			include: {
				fromCountry: true,
				memberOfTeam: true,
				cachedPlayerItem: true,
			},
		});
	}

	getByName(name: string): Promise<Player | null> {
		return this.model.player.findFirst({ where: { name: name } });
	}

	getTopPlayersByTournamentElo(
		amount = 5,
	): Promise<
		(Player & {
			fromCountry: Country;
			memberOfTeam: Team;
			stats: Partial<PlayerCache>;
		})[]
	> {
		// INFO: This is a workaround/hack for the fact that the elo is not stored in the player table
		return this.model.playerCache
			.findMany({
				select: {
					num_matches: true,
					num_wins: true,
					num_games: true,
					tournament_ids: true,
					last_match: true,
					rank: true,
					elo: true,
					elo_update: true,
					elo_peak: true,
					cachedPlayer: {
						include: { fromCountry: true, memberOfTeam: true },
					}, // relation
				},
				take: amount,
				orderBy: { elo: "desc" },
			})
			.then((players) => {
				return players.map((player) => {
					const player_copy = { ...player };
					// We delete the cachedPlayer property
					// This is the relation, so we can safely
					// delete it here in the copy
					delete player_copy.cachedPlayer;

					// We reorganize the data to match the Player type
					const new_player = {
						...(player.cachedPlayer as Player),
						stats: player_copy as Partial<PlayerCache>,
					};

					return new_player;
				});
			});
	}

	create(
		_details: Partial<Player>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<PlayerId> {
		throw new Error("Method not implemented.");
	}

	update(
		_id: PlayerId,
		_new_details: Partial<Player>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}

	delete(
		_id: PlayerId,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

// export class MockPlayerRepository
// 	implements IPlayerRepositoryInterface<PlayerId, Player>
// {
// 	constructor(/* empty */) {}

// 	getAll(): Promise<Player[]> {
// 		return [
// 			{ id: 1, name: "Test", country_id: 123 } as Player,
// 			{ id: 2, name: "Test2", country_id: 123 } as Player,
// 		];
// 	}

// 	getAllPaginated(offset: number, limit = 25): Promise<Player[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getAllPartiallyCached(): Promise<Player[]> {
// 		return [
// 			{ id: 1, name: "Test", country_id: 123 } as Player,
// 			{ id: 2, name: "Test2", country_id: 123 } as Player,
// 		];
// 	}

// 	getById(id: PlayerId): Promise<Player | null> {
// 		return { id: id, name: "Test", country_id: 123 } as Player;
// 	}

// 	getByName(name: string): Promise<Player | null> {
// 		return { id: 1, name: name, country_id: 123 } as Player;
// 	}

// 	create(
// 		details: Partial<Player>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<PlayerId> {
// 		return Promise.resolve(1);
// 	}

// 	update(
// 		id: PlayerId,
// 		new_details: Partial<Player>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(false);
// 	}

// 	delete(
// 		id: PlayerId,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(true);
// 	}
// }
