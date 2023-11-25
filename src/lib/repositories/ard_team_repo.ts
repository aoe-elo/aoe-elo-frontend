import { models } from "$lib/sequelize";
import type { IArdTeamAttributes, ArdTeamId } from "$lib/models/ard_team";
import type { ITeamRepositoryInterface } from "$lib/repositories/team_repo";

type ArdTeamData = IArdTeamAttributes;
type ArdTeam = typeof models.ard_team;

export class ArdTeamRepository implements ITeamRepositoryInterface<ArdTeamId, ArdTeamData> {

    constructor(private readonly model: ArdTeam = models.ard_team) { }

    async getAll(): Promise<ArdTeamData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdTeamData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<ArdTeamData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: ArdTeamId): Promise<ArdTeamData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<ArdTeamData | null> {
        return this.model.findOne({ where: { name } });
    }

    async create(details: Partial<ArdTeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ArdTeamId, new_details: Partial<ArdTeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ArdTeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(id: ArdTeamId): Promise<ArdTeamData | null> {
        return { id: id, name: "Test", country_id: 123 } as ArdTeamData;
    }

    async getByName(name: string): Promise<ArdTeamData | null> {
        return { id: 1, name: name, country_id: 123 } as ArdTeamData;
    }

    async create(details: Partial<ArdTeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        return Promise.resolve(1);
    }

    async update(id: ArdTeamId, new_details: Partial<ArdTeamData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ArdTeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
