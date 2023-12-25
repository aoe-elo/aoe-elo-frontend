import { db_status, prisma } from "$lib/server/dalPrisma";
import { appMode } from "./shared/utilities/appMode";
import type { PrismaClient } from "@prisma-app/aoe-elo-live-client";
import { PlayerRepository } from "$repositories/player_repo";
import { TeamRepository } from "$repositories/team_repo";
import { TournamentRepository } from "$repositories/tournament_repo";
import { UserRepository } from "$repositories/user_repo";
import type { AppMode } from "$lib/shared/enums/app_mode";

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
	const mode = appMode();
	const connection = prisma;
	db_status(connection);
	const repositories = init_repositories_with_prisma(connection);

	return {
		mode,
		connection,
		repositories,
	};
}
