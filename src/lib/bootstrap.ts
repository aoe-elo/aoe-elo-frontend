import { database, db_status } from "$lib/prisma";
import { app_mode } from "$lib/util";
import { PlayerRepository } from "$repositories/player_repo";
import { TeamRepository } from "$repositories/team_repo";
import { TournamentRepository } from "$repositories/tournament_repo";
import { UserRepository } from "$repositories/user_repo";
import type { AppMode } from "$types/enums";
import type { PrismaClient } from "@prisma/client";

type InitRepositoryReturnType = {
	players: PlayerRepository<PrismaClient>;
	teams: TeamRepository<PrismaClient>;
	tournaments: TournamentRepository<PrismaClient>;
	users: UserRepository<PrismaClient>;
};

function init_repositories_with_prisma(
	connection: PrismaClient,
): InitRepositoryReturnType {
	return {
		users: new UserRepository(connection),
		players: new PlayerRepository(connection),
		teams: new TeamRepository(connection),
		tournaments: new TournamentRepository(connection),
	};
}

type AppInitReturnType = {
	mode: AppMode;
	connection: PrismaClient;
	repositories: InitRepositoryReturnType;
};

export function app_init(): AppInitReturnType {
	const connection = database;
	const mode = app_mode();
	db_status(connection);
	const repositories = init_repositories_with_prisma(connection);

	return {
		mode,
		connection,
		repositories,
	};
}
