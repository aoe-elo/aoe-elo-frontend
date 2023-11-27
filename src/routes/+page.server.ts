import { API } from "./api";

export async function load({ params, setHeaders }) {
	// const players = API.getLandingPagePlayers();
	// const tournaments = API.getLandingPageTournaments();

	setHeaders({ "Cache-Control": "public, max-age=60" }); // 10 minutes

	// return {
	//     streamed: {
	//         players,
	//         tournaments,
	//         // /* ... */
	//     }
	// };
}
