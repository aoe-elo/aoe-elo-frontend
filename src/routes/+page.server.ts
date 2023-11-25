import { api } from '$lib/api';

export async function load({ params, setHeaders }) {
    const players = api.getLandingPagePlayers();
    const tournaments = api.getLandingPageTournaments();

    setHeaders({ 'Cache-Control': 'public, max-age=60' }); // 10 minutes

    return {
        streamed: {
            players,
            tournaments,
            /* ... */
        }
    };
}