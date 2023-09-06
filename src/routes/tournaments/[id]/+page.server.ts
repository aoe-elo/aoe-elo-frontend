import api from '$lib/api';
import { fail } from '@sveltejs/kit';

export async function load({ params, locals }) {
	const detail = await api.getTournament(params.id);
	return {
		detail,
		title: detail.title
	};
}
