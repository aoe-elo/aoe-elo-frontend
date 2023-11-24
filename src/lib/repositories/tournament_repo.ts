import { models } from "$lib/sequelize";
import type { tournamentAttributes } from "$lib/models/tournament";

type TournamentId = tournamentAttributes["id"];
type TournamentData = tournamentAttributes;
type Tournament = typeof models.tournament;

interface ITournamentRepositoryInterface {
    getAllTournaments(): Promise<TournamentData[]>;
    getAllTournamentsPaginated(): Promise<TournamentData[]>;
    getAllTournamentsPartiallyCached(): Promise<Partial<TournamentData[]>>;
    getTournamentById(tournament_id: TournamentId): Promise<TournamentData | null>;
    createTournament(tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<TournamentId>;
    updateTournament(tournament_id: TournamentId, new_tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<boolean>;
    deleteTournament(tournament_id: TournamentId, user_id: number, actionlog_summary: string): Promise<boolean>;
}

export class TournamentRepository implements ITournamentRepositoryInterface {

    constructor(private readonly Tournament_model: Tournament = models.tournament) { }

    async getAllTournaments(): Promise<TournamentData[]> {
        return this.Tournament_model.findAll();
    }

    async getAllTournamentsPaginated(): Promise<TournamentData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllTournamentsPartiallyCached(): Promise<Partial<TournamentData[]>> {
        return this.Tournament_model.findAll({ attributes: ["id", "name"] })
    }

    async getTournamentById(tournament_id: TournamentId): Promise<TournamentData | null> {
        return this.Tournament_model.findByPk(tournament_id);
    }

    async createTournament(tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<TournamentId> {
        throw new Error("Method not implemented.");
    }

    async updateTournament(tournament_id: TournamentId, new_tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteTournament(tournament_id: TournamentId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockTournamentRepository implements ITournamentRepositoryInterface {

    constructor(/* empty */) { }

    async getAllTournaments(): Promise<TournamentData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllTournamentsPaginated(): Promise<TournamentData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllTournamentsPartiallyCached(): Promise<TournamentData[]> {
        throw new Error("Method not implemented.");
    }

    async getTournamentById(tournament_id: TournamentId): Promise<TournamentData | null> {
        throw new Error("Method not implemented.");
    }

    async createTournament(tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<TournamentId> {
        return Promise.resolve(1);
    }

    async updateTournament(tournament_id: TournamentId, new_tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async deleteTournament(tournament_id: TournamentId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
