# Data Interfaces

## Player

```ts
interface IPlayer {
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
  matches: IMatch[];
}
```

```ts
interface ICountryDetails {
  id: number;
  name: string;
  isoKey: string;
  flagUrl: string;
}
```

```ts
interface IHistoricalElo {
    date: string; // YYYY-MM(-DD?)
    elo: number;
}
```

```ts
interface ITeamDetails {
    id: number;
    name: string;
    shortName: string;
    logoUrl: string;
    externalPageUrl?: string;
    liquipediaUrl?: string;
}
```

```ts
interface IPlayerTournament {
  id: number;
  name: string;
  date: string;
  finalRank: number;
  amountGainLoss: number;
  location?: ICountryDetails;
  prizePool: number;
  matches: IMatches[];
}
```

## Matches

played series names
played series opponent
played series bracket
played series date
played series score
played series start elo
played series end elo
played series total elo gained/lost
played series elo gained/lost by match
played series prediction
played series additional comments

opponent name
number of series
total series wins

```ts
interface IMatch {
  ...
}
```
