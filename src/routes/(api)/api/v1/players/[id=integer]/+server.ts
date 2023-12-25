import { APP } from '$shooks';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    // TODO: we could not only find a player by their id but also by their likely name
    // e.g. I could pass 'TheViper' and it would find the player with the name 'TheViper'
    // but this doesn't work yet, as we apply route matchers and assure that the id is a number
    const player_id = Number(params.id);
    const response = await APP.repositories.players.getById(player_id);
    return new Response(JSON.stringify(response));
};