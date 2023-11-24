import { models } from "$lib/sequelize";
import type { teamAttributes } from "$lib/models/team";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type TeamId = teamAttributes["id"];
type TeamData = teamAttributes;
type Team = typeof models.team;

export interface ITeamRepositoryInterface<TeamId, TeamData> extends IBaseRepositoryInterface<TeamId, TeamData> {
    getByName(name: string): Promise<TeamData | null>;
    getAllPartiallyCached(): Promise<Partial<TeamData[]>>;
}

export class TeamRepository implements ITeamRepositoryInterface<TeamId, TeamData> {

    constructor(private readonly team_model: Team = models.team) { }

    async getAll(): Promise<TeamData[]> {
        return this.team_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<TeamData[]> {
        return this.team_model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<TeamData[]>> {
        return this.team_model.findAll({ attributes: ["id", "name"] })
    }

    async getById(team_id: TeamId): Promise<TeamData | null> {
        return this.team_model.findByPk(team_id);
    }

    async getByName(name: string): Promise<teamAttributes | null> {
        return this.team_model.findOne({ where: { name } });
    }

    async create(team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<TeamId> {
        throw new Error("Method not implemented.");
    }

    async update(team_id: TeamId, new_team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(team_id: TeamId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockTeamRepository implements ITeamRepositoryInterface<TeamId, TeamData> {

    constructor(/* empty */) { }

    async getAll(): Promise<TeamData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as TeamData, { id: 2, name: "Test2", country_id: 123 } as TeamData];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<TeamData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<TeamData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as TeamData, { id: 2, name: "Test2", country_id: 123 } as TeamData];
    }

    async getById(team_id: TeamId): Promise<TeamData | null> {
        return { id: team_id, name: "Test", country_id: 123 } as TeamData;
    }

    async getByName(name: string): Promise<TeamData | null> {
        return { id: 1, name: name, country_id: 123 } as TeamData;
    }

    async create(team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<TeamId> {
        return Promise.resolve(1);
    }

    async update(team_id: TeamId, new_team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(team_id: TeamId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
