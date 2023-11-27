import api from "../api";

export async function load({ params, locals }) {
	return {
		topTournaments: api.getHighlightedTourneys(),
		allTournaments: api.getMasterList(),
	};
}
