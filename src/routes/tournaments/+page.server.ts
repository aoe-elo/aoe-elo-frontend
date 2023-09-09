import api from '$lib/api';

export async function load({ params, locals }) {
	return {
		topTournaments: api.getHighlightedTourneys()
	};
}
