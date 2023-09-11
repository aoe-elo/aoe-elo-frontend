// import api from '$lib/api';
// import { fail } from '@sveltejs/kit';

// export const load = ({ fetch, params }) => {
// 	console.log(params);
// };

// export const load = ({ fetch, params }) => {
// 	const fetchTournament = async (id) => {
// 		const res = await fetch('./tournaments.json/');
// 		const data = await res.json();
// 		return data;
// 	};

// 	return {
// 		tournament: fetchTournament(params.tournament_id)
// 	};
// };

// export const load = ({ params }) => {
// 	console.log(params);
// };

// export async function load({ params, locals }) {
// 	const detail = await api.getTournament(params.id);
// 	return {
// 		detail,
// 		title: detail.title
// 	};
// }
