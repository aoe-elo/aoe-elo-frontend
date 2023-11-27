import { db_status, get_database } from "$lib/db_setup";
import { UserRepository } from "$repositories/user_repo";
// import { MetadataRepository } from "$repositories/metadata_repo";
// import { ReviewRepository } from "$repositories/review_repo";
import { TournamentRepository } from "$repositories/tournament_repo";
import { TeamRepository } from "$repositories/team_repo";
import { PlayerRepository } from "$repositories/player_repo";
import { app_mode } from "$lib/util";
import type { AppMode } from "$types/enums";
import type { ModelReturnType } from "$models/init-models.model";
import { ActionlogRepository } from "$repositories/actionlog_repo";
import type { Sequelize } from "sequelize-typescript";

type InitRepositoryReturnType = {
    // actionlog: ActionlogRepository;
    // players: PlayerRepository;
    // teams: TeamRepository;
    // tournaments: TournamentRepository;
    users: UserRepository;
};

function init_repositories(connection: Sequelize): InitRepositoryReturnType {
    return {
        users: new UserRepository(connection)
        // actionlog: new ActionlogRepository(db),
        // players: new PlayerRepository(db, db),
        // teams: new TeamRepository(db),
        // tournaments: new TournamentRepository(db),
        // ard_player: new ArdPlayerRepository(),
        // ard_team: new ArdTeamRepository(),
        // achievement: new AchievementRepository(),
        // review: new ReviewRepository(),
        // metadata: new MetadataRepository(),
    };
};


type AppInitReturnType = {
    mode: AppMode;
    repositories: InitRepositoryReturnType;
};

export function app_init(): AppInitReturnType {

    const mode = app_mode();
    const connection = get_database(mode);
    db_status(connection);
    const repositories = init_repositories(connection);

    return {
        mode,
        repositories
    };
}
