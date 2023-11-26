import { type ITeamAttributes, type TeamId, Team } from "$models/team";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

export interface ITeamRepositoryInterface<TeamId, TeamData> extends IBaseRepositoryInterface<TeamId, TeamData> {
    getByName(name: string): Promise<TeamData | null>;
    getAllPartiallyCached(): Promise<Partial<TeamData[]>>;
}

export class TeamRepository implements ITeamRepositoryInterface<TeamId, ITeamAttributes> {

    constructor(private readonly model: typeof Team = Team) { }

    async getAll(): Promise<ITeamAttributes[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ITeamAttributes[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<ITeamAttributes[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: TeamId): Promise<ITeamAttributes | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<ITeamAttributes | null> {
        return this.model.findOne({ where: { name } });
    }

    async create(details: Partial<ITeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<TeamId> {
        throw new Error("Method not implemented.");
    }

    async update(id: TeamId, new_details: Partial<ITeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(team_id: TeamId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockTeamRepository implements ITeamRepositoryInterface<TeamId, ITeamAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<ITeamAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ITeamAttributes, { id: 2, name: "Test2", country_id: 123 } as ITeamAttributes];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ITeamAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<ITeamAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ITeamAttributes, { id: 2, name: "Test2", country_id: 123 } as ITeamAttributes];
    }

    async getById(id: TeamId): Promise<ITeamAttributes | null> {
        return { id: id, name: "Test", country_id: 123 } as ITeamAttributes;
    }

    async getByName(name: string): Promise<ITeamAttributes | null> {
        return { id: 1, name: name, country_id: 123 } as ITeamAttributes;
    }

    async create(details: Partial<ITeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<TeamId> {
        return Promise.resolve(1);
    }

    async update(id: TeamId, new_details: Partial<ITeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: TeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
