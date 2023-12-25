import type { IMatch } from "./match";
import type { ITeamDetails } from "./team";

export interface IPlayer {
	id: number;
	name: string;
	dateStartedActive?: string; // TODO: maybe derived from the first tournament entry?
	tournamentElo: number;
	tournamentEloRank: number;
	peakElo?: number;
	peakEloDate?: string; // TODO: not available yet
	totalAmountEarnings?: number; // TODO: not available yet
	totalAmountTournaments: number;
	totalAmountWins: number;
	totalAmountSecond?: number; // TODO: not available yet
	totalAmountThird?: number; // TODO: not available yet
	totalAmountSeries: number;
	seriesWins?: number; // TODO: what't the difference between this and totalAmountWins?
	totalGames: number;
	lifetimeOpponentsTop5?: IPlayerLifetimeTop5Details[]; // TODO: not available yet
	country: ICountryDetails;
	historicalElo?: IHistoricalElo[]; // by month? // TODO: not available yet
	teamActive: ITeamDetails;
	tournaments: IPlayerTournament[];
	matches?: IPlayerMatch[];
}

export interface ICountryDetails {
	// id: number; // TODO: needed?
	name: string;
	isoKey: string;
	flagUrl?: string;
}

export interface IHistoricalElo {
	date: string; // YYYY-MM(-DD?)
	elo: number;
}

export interface IPlayerTournament {
	id: number;
	name: string;
	date: string;
	finalRank: number;
	amountGainLoss: number;
	location?: ICountryDetails;
	prizePool: number;
	matches: IMatch[];
}

// TODO: Implement
export interface IPlayerLifetimeTop5Details { }
export interface IPlayerMatch { }