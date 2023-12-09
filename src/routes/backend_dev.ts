import { APP } from "./hooks.server";

export async function run_dev() {
	// const players = (await APP.repositories.players.getAllPaginated(0, 5)).forEach((player) => player.getCountry().then((country) => console.log(JSON.stringify(country, null, 2))));

	// Try: Get metadata for a player
	APP.repositories.players.getById(29).then((player) => { console.log(JSON.stringify(player, null, 2)); });
}
