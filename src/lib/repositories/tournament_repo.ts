import { APP } from "$lib/bootstrap";
import type { ITournamentAttributes, TournamentId } from "$lib/models/tournament";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type TournamentData = ITournamentAttributes;
type Tournament = typeof APP.models.Tournament;

interface ITournamentRepositoryInterface<TournamentId, TournamentData> extends IBaseRepositoryInterface<TournamentId, TournamentData> {
    getByName(name: string): Promise<TournamentData | null>
    getAllPartiallyCached(): Promise<Partial<TournamentData[]>>;
}

export class TournamentRepository implements ITournamentRepositoryInterface<TournamentId, TournamentData> {

    constructor(private readonly model: Tournament = APP.models.Tournament) { }

    async getAll(): Promise<TournamentData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<TournamentData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<TournamentData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: TournamentId): Promise<TournamentData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<TournamentData | null> {
        return this.model.findOne({ where: { name } });
    }

    async create(details: Partial<TournamentData>, actionlog_user_id: number, actionlog_summary: string): Promise<TournamentId> {
        throw new Error("Method not implemented.");
    }

    async update(id: TournamentId, new_details: Partial<TournamentData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: TournamentId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(id: TournamentId): Promise<TournamentData | null> {
        throw new Error("Method not implemented.");
    }

    async getByName(name: string): Promise<TournamentData | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<TournamentData>, actionlog_user_id: number, actionlog_summary: string): Promise<TournamentId> {
        return Promise.resolve(1);
    }

    async update(id: TournamentId, new_details: Partial<TournamentData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: TournamentId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
