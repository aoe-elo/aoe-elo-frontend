import type { PageServerLoad } from './$types';
import API from "$api";


export const load = (async ({ params, locals }) => {

	const [topTournaments, allTournaments] = await Promise.all([
		API.getLatestTournaments(),
		API.getLandingPageTournaments(),
	]);

	return {
		topTournaments,
		allTournaments,
	};

}) satisfies PageServerLoad;