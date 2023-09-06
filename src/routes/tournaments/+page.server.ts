import api from '$lib/api';

export async function load({ params, locals }) {
	return {
		releases: api.getHighlightedTourneys(),
		title: 'detail.name'
	};
}
