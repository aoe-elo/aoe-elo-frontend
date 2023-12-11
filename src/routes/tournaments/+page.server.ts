import api from "$api";

export async function load({ params, locals }) {
	return await {
		topTournaments: api.getLatestTournaments(),
		allTournaments: api.getLandingPageTournaments(),
	};
}
