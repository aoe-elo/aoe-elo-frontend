import API from "$api";

export async function load({ params, locals }) {

	const [topTournaments, allTournaments] = await Promise.all([
		API.getLatestTournaments(),
		API.getLandingPageTournaments(),
	]);

	return {
		topTournaments,
		allTournaments,
	};
}
