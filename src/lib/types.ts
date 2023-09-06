export interface Tournament {
	id: number;
	name: string;
	url: string;
	imageUrl: string;
	short: string;
	start: string;
	end: string;
	prizemoney: number;
}

export interface TournamentDetail {
	id: number;
	name: string;
	url: string;
	short: string;
	start: string;
	end: string;
	prizemoney: number;

	// Here we need to add all of the
	// additional details which will show
	// on each individual tournament page
}
