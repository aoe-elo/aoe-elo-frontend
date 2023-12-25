import { SiteOptions } from '$lib/configs/siteOptions';
import { APP } from '$shooks';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const amount = url.searchParams.get('amount') ? Number(url.searchParams.get('amount')) : SiteOptions.entityHighlightDefaultLimit;

    if (amount < 1 || amount < 0 || isNaN(amount) || amount > SiteOptions.paginationLimitMax) {
        return new Response(JSON.stringify({ error: `Invalid amount, amount needs to be in range 1..=${SiteOptions.paginationLimitMax}` }), {
            status: 400,
        });
    }

    const response = await APP.repositories.tournaments.getLatestTournaments(amount);

    return new Response(JSON.stringify(response));
};