import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const tournament = await import(`../${params.id}`);

		return {
			content: tournament.default,
			meta: tournament.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.id}`);
	}
}
