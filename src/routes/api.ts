import { HIGHLIGHTED_TOURNEYS } from "$lib/data";
import { masterlist } from "$lib/data/tournaments.json";
import type { ITournament, ITournamentDetail } from "$interfaces/data/tournament";
import { error } from "@sveltejs/kit";
import { APP } from "./hooks.server";

/*
 * This is the API that the frontend uses to get data from the backend.
 *
 */
export default {
	getLandingPagePlayers: () => {
		return APP.repositories.players.getAllPartiallyCached();
	},

	getLandingPageTournaments: () => {
		return APP.repositories.tournaments.getAllPartiallyCached();
	},

	getLandingPageTeams: () => {
		return APP.repositories.teams.getAllPartiallyCached();
	},

	getHighlightedTourneys: () => {
		return APP.repositories.tournaments.getHighlighted(10000, 5);
	},
};

// const getTournament = async () => {
// 	const response: Tournament = await getAllTournaments();
// 	const adapted = adaptTournament(response);
// 	return adapted;
// };

// function adaptTournament(release: Tournament): TournamentDetail {
// 	return {
// 		id: release.id,
// 		name: release.name,
// 		url: `/tournaments/${release.id}`,
// 		short: release.short,
// 		start: release.start,
// 		end: release.end,
// 		prizemoney: release.prizemoney,
// 	};
// }

// export default {
// 	// hardcode list since no images in json file
// 	getHighlightedTourneys: () => {
// 		return HIGHLIGHTED_TOURNEYS;
// 	},
// 	getMasterList: () => {
// 		return masterlist;
// 	},
// };

// async function getAllTournaments() {
// 	const res = await fetch("./tournaments.json");
// 	const allTournaments: Tournament[] = await res.json();

// 	return { allTournaments };
// }
