import { APP } from "./hooks.server";
import type { ITournament } from "$interfaces/entities/tournament";

/** This is the API that the frontend uses to get data from the backend.
 *
 * TODO: This is a WIP, and will be expanded as needed.
 * TODO: We need to implement mapping to our interfaces.
 *
 */
export default {
	/** Get the players for the landing page
	 *
	 * @returns Partial<Player>[]
	 */
	getLandingPagePlayers: () => {
		return APP.repositories.players.getAllPartiallyCached();
	},

	/** Get the tournaments for the landing page
	 *
	 * @returns Partial<Tournament>[]
	 */
	getLandingPageTournaments: () => {
		return APP.repositories.tournaments.getAllPartiallyCached();
	},

	/** Get the teams for the landing page
	 *
	 * @returns Partial<Team>[]
	 */
	getLandingPageTeams: () => {
		return APP.repositories.teams.getAllPartiallyCached();
	},

	/** Get the highlighted tournaments
	 *
	 * @param prize_pool_min defaults to 10000
	 * @param limit defaults to 5
	 * @returns Tournament[]
	 *
	 */
	getHighlightedTourneys: (prize_pool_min?: number, limit?: number) => {
		return APP.repositories.tournaments.getHighlighted(prize_pool_min, limit);
	},

	/** Get the top players by tournament elo
	 *
	 * @param amount defaults to 5
	 * @returns (Player & { stats: Partial<PlayerCache> })[]
	 */
	getTopPlayers: (amount?: number) => {
		return APP.repositories.players.getTopPlayersByTournamentElo(amount);
	},

	/** Get the latest tournaments
	 *
	 * @param amount defaults to 5
	 * @returns ITournament[]
	 */
	getLatestTournaments: (amount?: number) => {
		return APP.repositories.tournaments.getLatestTournaments(amount).then((items) => {
			// map items to ITournament
			return items.map((item) => {
				return {
					id: item.id,
					name: item.name,
					url: item.website ? item.website : null,
					short: item.short,
					start: item.start ? item.start.toISOString() : null,
					end: item.end ? item.end.toISOString() : null,
					prizemoney: item.prizemoney ? item.prizemoney : null,
				} as ITournament;
			});
		});
	},
};
