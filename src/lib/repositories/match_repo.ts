import { type ISetAttributes as MatchData, type SetId as MatchId, Set as Match } from "$models/set";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface IMatchRepositoryInterface<MatchId, MatchData> extends IBaseRepositoryInterface<MatchId, MatchData> { }

export class MatchRepository implements IMatchRepositoryInterface<MatchId, MatchData> {

    constructor(private readonly model: typeof Match = Match) { }

    async getAll(): Promise<MatchData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<MatchData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: MatchId): Promise<MatchData | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<MatchData>, actionlog_user_id: number, actionlog_summary: string): Promise<MatchId> {
        throw new Error("Method not implemented.");
    }

    async update(id: MatchId, new_details: Partial<MatchData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: MatchId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockMatchRepository implements IMatchRepositoryInterface<MatchId, MatchData> {

    constructor(/* empty */) { }

    async getAll(): Promise<MatchData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<MatchData[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: MatchId): Promise<MatchData | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<MatchData>, actionlog_user_id: number, actionlog_summary: string): Promise<MatchId> {
        return Promise.resolve(1);
    }

    async update(id: MatchId, new_details: Partial<MatchData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: MatchId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
