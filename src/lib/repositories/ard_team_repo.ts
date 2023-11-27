import type { ArdTeamId } from "$models/ard_team.model";
import type ArdTeam from "$models/ard_team.model";
import type { ITeamRepositoryInterface } from "$repositories/team_repo";

export class ArdTeamRepository implements ITeamRepositoryInterface<ArdTeamId, ArdTeam> {

    constructor(private readonly model: typeof ArdTeam) { }

    async getAll(): Promise<ArdTeam[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdTeam[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<ArdTeam[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: ArdTeamId): Promise<ArdTeam | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<ArdTeam | null> {
        return this.model.findOne({ where: { name } });
    }

    async create(details: Partial<ArdTeam>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ArdTeamId, new_details: Partial<ArdTeam>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ArdTeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockArdTeamRepository implements ITeamRepositoryInterface<ArdTeamId, ArdTeam> {

    constructor(/* empty */) { }

    async getAll(): Promise<ArdTeam[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdTeam, { id: 2, name: "Test2", country_id: 123 } as ArdTeam];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdTeam[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<ArdTeam[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdTeam, { id: 2, name: "Test2", country_id: 123 } as ArdTeam];
    }

    async getById(id: ArdTeamId): Promise<ArdTeam | null> {
        return { id: id, name: "Test", country_id: 123 } as ArdTeam;
    }

    async getByName(name: string): Promise<ArdTeam | null> {
        return { id: 1, name: name, country_id: 123 } as ArdTeam;
    }

    async create(details: Partial<ArdTeam>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        return Promise.resolve(1);
    }

    async update(id: ArdTeamId, new_details: Partial<ArdTeam>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ArdTeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
