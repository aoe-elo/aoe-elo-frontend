import { SiteOptions } from '$lib/configs/siteOptions';
import { APP } from '$shooks';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
    const offset = url.searchParams.get('offset') ? Number(url.searchParams.get('offset')) : SiteOptions.paginationDefaultOffset;
    const limit = url.searchParams.get('limit') ? Number(url.searchParams.get('limit')) : SiteOptions.paginationDefaultLimit;
    if (limit < 1 || limit < 0 || isNaN(limit) || limit > SiteOptions.paginationLimitMax) {
        return new Response(JSON.stringify({ error: `Invalid amount, amount needs to be in range 1..=${SiteOptions.paginationLimitMax}` }), {
            status: 400,
        });
    }
    // TODO: Create API method for this
    return json(await APP.repositories.players.getAllPaginated(offset, limit));
};