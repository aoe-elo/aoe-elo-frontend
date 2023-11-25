import { database } from "$lib/db_setup";
import type { Handle } from '@sveltejs/kit';
import { run_dev } from "./backend_dev";
import { UserRepository } from "$lib/repositories/user_repo";
import { MetadataRepository } from "$lib/repositories/metadata_repo";
import { ReviewRepository } from "$lib/repositories/review_repo";
import { TournamentRepository } from "$lib/repositories/tournament_repo";
import { TeamRepository } from "$lib/repositories/team_repo";
import { PlayerRepository } from "$lib/repositories/player_repo";

export const handle: Handle = async ({ event, resolve }) => {
	// const session = event.cookies.get ('session')
	// const user = await getUser(session)

	event.locals.user = { id: 123, name: 'Test' };
	return resolve(event);
};

async function db_status() {
	try {
		await database.authenticate();
		database.databaseVersion().then((v) => console.log(v));
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
		throw error;
	}
}

function init_repos() {
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

await db_status();
export const repositories = init_repos();

// TODO!: Remove this, it's just for testing
await run_dev();
