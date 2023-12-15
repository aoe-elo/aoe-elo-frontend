import api from '$api';

export async function load({ params, locals }) {
	return await {
		topPlayers: api.getTopPlayers(),
		allPlayers: api.getPlayerById(28)
	};
}
