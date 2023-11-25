import { models } from "$lib/db_setup";
import type { ITeamAttributes, TeamId } from "$lib/models/team";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type TeamData = ITeamAttributes;
type Team = typeof models.Team;

export interface ITeamRepositoryInterface<TeamId, TeamData> extends IBaseRepositoryInterface<TeamId, TeamData> {
    getByName(name: string): Promise<TeamData | null>;
    getAllPartiallyCached(): Promise<Partial<TeamData[]>>;
}

export class TeamRepository implements ITeamRepositoryInterface<TeamId, TeamData> {

    constructor(private readonly model: Team = models.Team) { }

    async getAll(): Promise<TeamData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<TeamData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<TeamData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: TeamId): Promise<TeamData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<TeamData | null> {
        return this.model.findOne({ where: { name } });
    }

    async create(details: Partial<TeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<TeamId> {
        throw new Error("Method not implemented.");
    }

    async update(id: TeamId, new_details: Partial<TeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(id: TeamId): Promise<TeamData | null> {
        return { id: id, name: "Test", country_id: 123 } as TeamData;
    }

    async getByName(name: string): Promise<TeamData | null> {
        return { id: 1, name: name, country_id: 123 } as TeamData;
    }

    async create(details: Partial<TeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<TeamId> {
        return Promise.resolve(1);
    }

    async update(id: TeamId, new_details: Partial<TeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: TeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
