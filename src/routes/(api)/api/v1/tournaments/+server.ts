import { SiteOptions } from '$lib/configs/siteOptions';
import { APP } from '$shooks';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const offset = url.searchParams.get('offset') ? Number(url.searchParams.get('offset')) : SiteOptions.paginationDefaultOffset;
    const limit = url.searchParams.get('limit') ? Number(url.searchParams.get('limit')) : SiteOptions.paginationDefaultLimit;
    const response = await APP.repositories.tournaments.getAllPaginated(offset, limit);

    return new Response(JSON.stringify(response));
};