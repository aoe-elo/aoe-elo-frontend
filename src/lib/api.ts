import { error } from '@sveltejs/kit';
import { HIGHLIGHTED_TOURNEYS } from './data';

async function getTourneyData() {
	const res = await fetch('./tournaments.json');
	const tourney = await res.json();
	console.log(tourney);
	return tourney;
}

// const getTournament = async (id: string) => {
// 	const response: alltourneys = await getTourneyData();
// 	return;
// };

export default {
	// hardcode this list, since there's not a good api endpoint to use
	getHighlightedTourneys: () => {
		return HIGHLIGHTED_TOURNEYS;
	}
	// getTournament
};

// async function formatCurrency(prizemoney) {
// 	return new Intl.NumberFormat('en-US', {
// 		style: 'currency',
// 		currency: 'USD',
// 		currencyDisplay: 'code'
// 	})
// 		.format(prizemoney)
// 		.replace('USD', '')
// 		.trim();
// }
