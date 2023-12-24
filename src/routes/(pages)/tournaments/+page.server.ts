import API from "$api";

export async function load({ params, locals }) {
	return await {
		topTournaments: API.getLatestTournaments(),
		allTournaments: API.getLandingPageTournaments(),
	};
}
