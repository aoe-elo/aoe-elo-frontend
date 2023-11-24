import { models } from "$lib/sequelize";
import type { tournamentAttributes } from "$lib/models/tournament";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type TournamentId = tournamentAttributes["id"];
type TournamentData = tournamentAttributes;
type Tournament = typeof models.tournament;

interface ITournamentRepositoryInterface<TournamentId, TournamentData> extends IBaseRepositoryInterface<TournamentId, TournamentData> {
    getByName(name: string): Promise<TournamentData | null>
    getAllPartiallyCached(): Promise<Partial<TournamentData[]>>;
}

export class TournamentRepository implements ITournamentRepositoryInterface<TournamentId, TournamentData> {

    constructor(private readonly tournament_model: Tournament = models.tournament) { }

    async getAll(): Promise<TournamentData[]> {
        return this.tournament_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<TournamentData[]> {
        return this.tournament_model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<TournamentData[]>> {
        return this.tournament_model.findAll({ attributes: ["id", "name"] })
    }

    async getById(tournament_id: TournamentId): Promise<TournamentData | null> {
        return this.tournament_model.findByPk(tournament_id);
    }

    async getByName(name: string): Promise<TournamentData | null> {
        return this.tournament_model.findOne({ where: { name } });
    }

    async create(tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<TournamentId> {
        throw new Error("Method not implemented.");
    }

    async update(tournament_id: TournamentId, new_tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(tournament_id: TournamentId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockTournamentRepository implements ITournamentRepositoryInterface<TournamentId, TournamentData> {

    constructor(/* empty */) { }

    async getAll(): Promise<TournamentData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<TournamentData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<TournamentData[]> {
        throw new Error("Method not implemented.");
    }

    async getById(tournament_id: TournamentId): Promise<TournamentData | null> {
        throw new Error("Method not implemented.");
    }

    async getByName(name: string): Promise<TournamentData | null> {
        throw new Error("Method not implemented.");
    }

    async create(tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<TournamentId> {
        return Promise.resolve(1);
    }

    async update(tournament_id: TournamentId, new_tournament_details: Partial<TournamentData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(tournament_id: TournamentId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
