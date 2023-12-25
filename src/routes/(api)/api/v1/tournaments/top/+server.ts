import { SiteOptions } from '$lib/configs/siteOptions';
import { APP } from '$shooks';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const prize_pool_min = url.searchParams.get('prize_pool_min') ? Number(url.searchParams.get('prize_pool_min')) : SiteOptions.tournamentPrizePoolDefaultMin;
    const limit = url.searchParams.get('limit') ? Number(url.searchParams.get('limit')) : SiteOptions.entityHighlightDefaultLimit;
    if (limit < 1 || limit < 0 || isNaN(limit) || limit > SiteOptions.paginationLimitMax) {
        return new Response(JSON.stringify({ error: `Invalid amount, amount needs to be in range 1..=${SiteOptions.paginationLimitMax}` }), {
            status: 400,
        });
    }
    const response = await APP.repositories.tournaments.getHighlighted(prize_pool_min, limit);

    return new Response(JSON.stringify(response));
};