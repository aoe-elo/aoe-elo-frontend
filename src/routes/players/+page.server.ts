import type { PageServerLoad } from './$types';
import API from "$api";


export const load = (async ({ params, locals }) => {

    const [topPlayers, listPlayers] = await Promise.all([
        API.getTopPlayers(5),
        API.getTopPlayers(650), // FIXME! Don't do this, we need another API endpoint for this.
    ]);

    return {
        topPlayers,
        listPlayers,
    };

}) satisfies PageServerLoad;