import { db_status, get_database, init_models_with_db_connection } from "$lib/db_setup";
import { UserRepository } from "$repositories/user_repo";
// import { MetadataRepository } from "$repositories/metadata_repo";
// import { ReviewRepository } from "$repositories/review_repo";
import { TournamentRepository } from "$repositories/tournament_repo";
import { TeamRepository } from "$repositories/team_repo";
import { PlayerRepository } from "$repositories/player_repo";
import { app_mode } from "$lib/util";
import type { AppMode } from "$types/enums";
import type { ModelReturnType } from "$models/init-models";

type InitRepositoryReturnType = {
    players: PlayerRepository;
    teams: TeamRepository;
    tournaments: TournamentRepository;
    users: UserRepository;
};

function init_repositories(models: ModelReturnType): InitRepositoryReturnType {
    return {
        players: new PlayerRepository(models.Player, models.Country),
        teams: new TeamRepository(models.Team),
        tournaments: new TournamentRepository(models.Tournament),
        users: new UserRepository(models.User)
        // actionlog: new ActionlogRepository(),
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
    const database = get_database(mode);
    db_status(database);
    const models = init_models_with_db_connection(database);
    const repositories = init_repositories(models);

    return {
        mode,
        repositories
    };
}
