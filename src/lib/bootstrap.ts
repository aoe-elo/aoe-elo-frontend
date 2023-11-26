import { db_status, get_models } from "$lib/db_setup";
// import { run_dev } from "./backend_dev";
import { UserRepository } from "$lib/repositories/user_repo";
// import { MetadataRepository } from "$lib/repositories/metadata_repo";
// import { ReviewRepository } from "$lib/repositories/review_repo";
import { TournamentRepository } from "$lib/repositories/tournament_repo";
import { TeamRepository } from "$lib/repositories/team_repo";
import { PlayerRepository } from "$lib/repositories/player_repo";
import { app_mode } from "$lib/util";

function init_repositories() {
    return {
        players: new PlayerRepository(),
        teams: new TeamRepository(),
        tournaments: new TournamentRepository(),
        users: new UserRepository()
        // actionlog: new ActionlogRepository(),
        // ard_player: new ArdPlayerRepository(),
        // ard_team: new ArdTeamRepository(),
        // achievement: new AchievementRepository(),
        // review: new ReviewRepository(),
        // metadatum: new MetadataRepository(),
    };
};


export const app_init = async () => {

    const mode = app_mode();
    db_status(mode);
    const models = get_models(mode);
    const repositories = init_repositories();

    // TODO!: Remove this, it's just for testing
    // await run_dev();

    return {
        mode,
        models,
        repositories
    };
}
