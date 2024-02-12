import type { ICountryDetails, IPlayer } from "$repositories/entities/player";
import type { ITeamDetails } from "$repositories/entities/team";
import type { ITournament } from "$repositories/entities/tournament";
import { APP } from "$shooks";

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
	 * TODO!: Implemented as API, switch to it and remove this.
	 * `/api/v1/tournaments/top?prize_pool_min=10000&limit=5`
	 * 
	 * TODO: Ordered by start date descending, maybe we need one by highest prize pool?
	 * 
	 * @param prize_pool_min defaults to 10000
	 * @param limit defaults to 5
	 * @returns Tournament[]
	 *
	 */
	getHighlightedTourneys: (prize_pool_min?: number, limit?: number) => {
		return APP.repositories.tournaments.getHighlighted(prize_pool_min, limit);
	},

	/** Get a single player by id
	 * 
	 * TODO!: Implemented as API, switch to it and remove this.
	 * `/api/v1/players/{id}`
	 * 
	 * 
	 * @param player_id
	 * @returns IPlayer
	 */
	getPlayerById: (player_id: number) => {
		return APP.repositories.players.getById(player_id);
	},

	/** Get a single tournament by id
	 *
	 * TODO!: Implemented as API, switch to it and remove this.
	 * `/api/v1/tournaments/{id}`
	 * 
	 * 
	 * @param tournament_id
	 * @returns ITournament
	 */
	getTournamentById: (tournament_id: number) => {
		return APP.repositories.tournaments.getById(tournament_id);
	},

	/** Get the top players by tournament elo
	 *
	 * TODO!: Implemented as API, switch to it and remove this.
	 * `/api/v1/players/top?amount=5`
	 * 
	 * 
	 * @param amount defaults to 5
	 * @returns (Player & { stats: Partial<PlayerCache> })[]
	 */
	getTopPlayers: (amount?: number) => {
		return APP.repositories.players
			.getTopPlayersByTournamentElo(amount)
	},

	/** Get the latest tournaments
	 *
	 * TODO!: Implemented as API, switch to it and remove this.
	 * `/api/v1/tournaments/latest?amount=5`
	 * 
	 * 
	 * @param amount defaults to 5
	 * @returns ITournament[]
	 */
	getLatestTournaments: (amount?: number) => {
		return APP.repositories.tournaments
			.getLatestTournaments(amount)
	},
};
