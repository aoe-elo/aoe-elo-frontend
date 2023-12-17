import { APP } from "./hooks.server";
import type { ITournament } from "$interfaces/entities/tournament";
import type { ICountryDetails, IPlayer } from "$interfaces/entities/player";
import type { ITeamDetails } from "$interfaces/entities/team";

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

	/** Get a single player by id
	 *
	 * @param player_id
	 * @returns IPlayer[]
	 */
	getPlayerById: (player_id: number) => {
		return APP.repositories.players.getById(player_id).then((item) => {
			if (!item) {
				return null;
			}

			// map item to IPlayer
			return {
				id: item.id,
				name: item.name,
				tournamentElo: item.cachedPlayerItem ? item.cachedPlayerItem.elo : undefined,
				tournamentEloRank: item.cachedPlayerItem ? item.cachedPlayerItem.rank : undefined,
				peakElo: item.cachedPlayerItem ? item.cachedPlayerItem.elo_peak : undefined,
				peakEloDate: undefined,
				totalAmountEarnings: undefined,
				totalAmountTournaments: item.cachedPlayerItem ? item.cachedPlayerItem.tournament_ids?.split(",").length : undefined,
				totalAmountWins: undefined,
				totalAmountSecond: undefined,
				totalAmountThird: undefined,
				totalAmountSeries: item.cachedPlayerItem ? item.cachedPlayerItem.num_matches : undefined,
				seriesWins: item.cachedPlayerItem ? item.cachedPlayerItem.num_wins : undefined,
				totalGames: undefined,
				lifetimeOpponentsTop5: undefined,
				country: item.fromCountry ? {
					name: item.fromCountry.name,
					isoKey: item.fromCountry.iso_key,
					flagUrl: undefined,
				} as ICountryDetails : undefined,
				historicalElo: undefined,
				teamActive: item.memberOfTeam ? {
					id: item.memberOfTeam.id,
					name: item.memberOfTeam.name,
					shortName: item.memberOfTeam.tag,
					logoUrl: undefined,
					externalPageUrl: undefined,
				} as ITeamDetails : undefined,
				tournaments: undefined,
				matches: undefined,
			} as Partial<IPlayer>;
		});
	},


	/** Get a single tournament by id
	 *
	 * @param tournament_id
	 * @returns ITournament[]
	 */
	getTournamentById: (tournament_id: number) => {
		return APP.repositories.tournaments.getById(tournament_id).then((item) => {
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
		});
	},

	/** Get the top players by tournament elo
	 *
	 * @param amount defaults to 5
	 * @returns (Player & { stats: Partial<PlayerCache> })[]
	 */
	getTopPlayers: (amount?: number) => {
		return APP.repositories.players.getTopPlayersByTournamentElo(amount).then((items) => {
			// map each item to IPlayer

			return items.map((item) => {
				if (!item) {
					return null;
				}

				return {
					id: item.id,
					name: item.name,
					tournamentElo: item.stats ? item.stats.elo : undefined,
					tournamentEloRank: item.stats ? item.stats.rank : undefined,
					peakElo: item.stats ? item.stats.elo_peak : undefined,
					peakEloDate: undefined,
					totalAmountEarnings: undefined,
					totalAmountTournaments: item.stats ? item.stats.tournament_ids?.split(",").length : undefined,
					totalAmountWins: undefined,
					totalAmountSecond: undefined,
					totalAmountThird: undefined,
					totalAmountSeries: item.stats ? item.stats.num_matches : undefined,
					seriesWins: item.stats ? item.stats.num_wins : undefined,
					totalGames: undefined,
					lifetimeOpponentsTop5: undefined,
					country: item.fromCountry ? {
						name: item.fromCountry.name,
						isoKey: item.fromCountry.iso_key,
						flagUrl: undefined,
					} as ICountryDetails : undefined,
					historicalElo: undefined,
					teamActive: item.memberOfTeam ? {
						id: item.memberOfTeam.id,
						name: item.memberOfTeam.name,
						shortName: item.memberOfTeam.tag,
						logoUrl: undefined,
						externalPageUrl: undefined,
					} as ITeamDetails : undefined,
					tournaments: undefined,
					matches: undefined,
				} as Partial<IPlayer>;
			});
		});
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
					url: item.website ? item.website : undefined,
					short: item.short,
					start: item.start ? item.start.toISOString() : undefined,
					end: item.end ? item.end.toISOString() : undefined,
					prizemoney: item.prizemoney ? item.prizemoney : undefined,
				} as ITournament;
			});
		});
	},
};
