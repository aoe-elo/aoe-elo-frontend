import { models } from "$lib/sequelize";
import type { setAttributes } from "$lib/models/set";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type MatchId = setAttributes["id"];
type MatchData = setAttributes;
type Match = typeof models.set;

interface IMatchRepositoryInterface<MatchId, MatchData> extends IBaseRepositoryInterface<MatchId, MatchData> { }

export class MatchRepository implements IMatchRepositoryInterface<MatchId, MatchData> {

    constructor(private readonly match_model: Match = models.set) { }

    async getAll(): Promise<MatchData[]> {
        return this.match_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<MatchData[]> {
        return this.match_model.findAll({ offset, limit });
    }

    async getById(match_id: MatchId): Promise<MatchData | null> {
        return this.match_model.findByPk(match_id);
    }

    async create(match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<MatchId> {
        throw new Error("Method not implemented.");
    }

    async update(match_id: MatchId, new_match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(match_id: MatchId, user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(match_id: MatchId): Promise<MatchData | null> {
        throw new Error("Method not implemented.");
    }

    async create(match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<MatchId> {
        return Promise.resolve(1);
    }

    async update(match_id: MatchId, new_match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(match_id: MatchId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
