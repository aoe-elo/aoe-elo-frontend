import { models } from "$lib/sequelize";
import type { setAttributes } from "$lib/models/set";

type MatchId = setAttributes["id"];
type MatchData = setAttributes;
type Match = typeof models.set;

interface IMatchRepositoryInterface {
    getAllMatches(): Promise<MatchData[]>;
    getAllMatchesPaginated(): Promise<MatchData[]>;
    getMatchById(match_id: MatchId): Promise<MatchData | null>;
    createMatch(match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<MatchId>;
    updateMatch(match_id: MatchId, new_match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<boolean>;
    deleteMatch(match_id: MatchId, user_id: number, actionlog_summary: string): Promise<boolean>;
}

export class MatchRepository implements IMatchRepositoryInterface {

    constructor(private readonly match_model: Match = models.set) { }

    async getAllMatches(): Promise<MatchData[]> {
        return this.match_model.findAll();
    }

    async getAllMatchesPaginated(): Promise<MatchData[]> {
        throw new Error("Method not implemented.");
    }

    async getMatchById(match_id: MatchId): Promise<MatchData | null> {
        return this.match_model.findByPk(match_id);
    }

    async createMatch(match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<MatchId> {
        throw new Error("Method not implemented.");
    }

    async updateMatch(match_id: MatchId, new_match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteMatch(match_id: MatchId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockMatchRepository implements IMatchRepositoryInterface {

    constructor(/* empty */) { }

    async getAllMatches(): Promise<MatchData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllMatchesPaginated(): Promise<MatchData[]> {
        throw new Error("Method not implemented.");
    }

    async getMatchById(match_id: MatchId): Promise<MatchData | null> {
        throw new Error("Method not implemented.");
    }

    async createMatch(match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<MatchId> {
        return Promise.resolve(1);
    }

    async updateMatch(match_id: MatchId, new_match_details: Partial<MatchData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async deleteMatch(match_id: MatchId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
