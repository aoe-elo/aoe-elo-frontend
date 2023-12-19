import api from '$api';

export async function load({ params, locals }) {
	return await {
		topPlayers: api.getTopPlayers(4),
		listPlayers: api.getTopPlayers(650)
	};
}
