import API from '$lib/server/api';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
    // TODO: we could not only find a tournament by their id but also by their likely name
    // e.g. I could pass 'NAC' and it would find the tournament with the name 'NAC'
    // but this doesn't work yet, as we apply route matchers and assure that the id is a number
    return json(await API.getTournamentById(Number(params.id)));
};