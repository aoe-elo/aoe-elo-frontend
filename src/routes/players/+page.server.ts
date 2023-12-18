import api from '$api';

export async function load({ params, locals }) {
	return await {
		topPlayers: api.getTopPlayers(),
		listPlayers: api.getTopPlayers(10)
	};
}
