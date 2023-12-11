import api from "$api";

export async function load({ params, locals }) {
	return {
		topTournaments: api.getLatestTournaments(),
		allTournaments: api.getLandingPageTournaments(),
	};
}
