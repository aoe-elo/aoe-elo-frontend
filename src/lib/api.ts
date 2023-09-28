import { error } from '@sveltejs/kit';
import { HIGHLIGHTED_TOURNEYS } from './data';
import { masterlist } from '$lib/data/tournaments.json';
import type { Tournament, TournamentDetail } from './types';

const getTournament = async () => {
	const response: Tournament = await getAllTournaments();
	const adapted = adaptTournament(response);
	return adapted;
};

function adaptTournament(release: Tournament): TournamentDetail {
	return {
		id: release.id,
		name: release.name,
		url: `/tournaments/${release.id}`,
		short: release.short,
		start: release.start,
		end: release.end,
		prizemoney: release.prizemoney
	};
}

export default {
	// hardcode list since no images in json file
	getHighlightedTourneys: () => {
		return HIGHLIGHTED_TOURNEYS;
	},
	getMasterList: () => {
		return masterlist;
	}
};

async function getAllTournaments() {
	const res = await fetch('./tournaments.json');
	const allTournaments = await res.json();

	return allTournaments;
}
