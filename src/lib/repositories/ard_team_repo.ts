import { models } from "$lib/sequelize";
import type { ard_teamAttributes } from "$lib/models/ard_team";
import type { ITeamRepositoryInterface } from "$lib/repositories/team_repo";

type ArdTeamId = ard_teamAttributes["id"];
type ArdTeamData = ard_teamAttributes;
type ArdTeam = typeof models.ard_team;

export class ArdTeamRepository implements ITeamRepositoryInterface<ArdTeamId, ArdTeamData> {

    constructor(private readonly team_model: ArdTeam = models.ard_team) { }

    async getAll(): Promise<ArdTeamData[]> {
        return this.team_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdTeamData[]> {
        return this.team_model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<ArdTeamData[]>> {
        return this.team_model.findAll({ attributes: ["id", "name"] })
    }

    async getById(team_id: ArdTeamId): Promise<ArdTeamData | null> {
        return this.team_model.findByPk(team_id);
    }

    async getByName(name: string): Promise<ard_teamAttributes | null> {
        return this.team_model.findOne({ where: { name } });
    }

    async create(team_details: Partial<ArdTeamData>, user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        throw new Error("Method not implemented.");
    }

    async update(team_id: ArdTeamId, new_team_details: Partial<ArdTeamData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(team_id: ArdTeamId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockArdTeamRepository implements ITeamRepositoryInterface<ArdTeamId, ArdTeamData> {

    constructor(/* empty */) { }

    async getAll(): Promise<ArdTeamData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdTeamData, { id: 2, name: "Test2", country_id: 123 } as ArdTeamData];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdTeamData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<ArdTeamData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdTeamData, { id: 2, name: "Test2", country_id: 123 } as ArdTeamData];
    }

    async getById(team_id: ArdTeamId): Promise<ArdTeamData | null> {
        return { id: team_id, name: "Test", country_id: 123 } as ArdTeamData;
    }

    async getByName(name: string): Promise<ArdTeamData | null> {
        return { id: 1, name: name, country_id: 123 } as ArdTeamData;
    }

    async create(team_details: Partial<ArdTeamData>, user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        return Promise.resolve(1);
    }

    async update(team_id: ArdTeamId, new_team_details: Partial<ArdTeamData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(team_id: ArdTeamId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
