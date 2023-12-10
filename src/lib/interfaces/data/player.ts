import type { ITeamDetails } from "./team";

export interface IPlayer {
	id: number;
	name: string;
	dateStartedActive: string;
	tournamentElo: number;
	tournamentEloRank: number;
	peakElo: number;
	peakEloDate: string;
	totalAmountEarnings: number;
	totalAmountTournaments: number;
	totalAmountWins: number;
	totalAmountSecond: number;
	totalAmountThird: number;
	totalAmountSeries: number;
	seriesWins: number;
	totalGames: number;
	lifetimeOpponentsTop5: IPlayerLifetimeTop5Details[];
	country: ICountryDetails;
	historicalElo: IHistoricalElo[]; // by month?
	teamActive: ITeamDetails;
	tournaments: IPlayerTournament[];
	matches: IPlayerMatch[];
}

export interface ICountryDetails {
	id: number;
	name: string;
	isoKey: string;
	flagUrl: string;
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