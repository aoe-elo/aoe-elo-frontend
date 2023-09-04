import api from '$lib/api';

export async function load({ params, locals }) {
	// const detail = await api.getTournament(params.id);
	return {
		// detail,
		releases: api.getHighlightedTourneys(),
		title: 'detail.name'
	};
}
