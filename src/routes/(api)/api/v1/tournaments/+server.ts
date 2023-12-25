import { SiteOptions } from '$lib/configs/siteOptions';
import { APP } from '$shooks';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
    const offset = url.searchParams.get('offset') ? Number(url.searchParams.get('offset')) : SiteOptions.paginationDefaultOffset;
    const limit = url.searchParams.get('limit') ? Number(url.searchParams.get('limit')) : SiteOptions.paginationDefaultLimit;

    // TODO: Create API method for this
    return json(await APP.repositories.tournaments.getAllPaginated(offset, limit));
};