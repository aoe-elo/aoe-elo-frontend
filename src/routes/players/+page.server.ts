import api from '$api';

export async function load() {
	return await {
		topPlayers: api.getTopPlayers()
	};
}
