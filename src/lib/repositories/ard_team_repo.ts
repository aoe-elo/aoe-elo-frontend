import { type IArdTeamAttributes, type ArdTeamId, ArdTeam } from "$models/ard_team";
import type { ITeamRepositoryInterface } from "$repositories/team_repo";

export class ArdTeamRepository implements ITeamRepositoryInterface<ArdTeamId, IArdTeamAttributes> {

    constructor(private readonly model: typeof ArdTeam = ArdTeam) { }

    async getAll(): Promise<IArdTeamAttributes[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IArdTeamAttributes[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<IArdTeamAttributes[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: ArdTeamId): Promise<IArdTeamAttributes | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<IArdTeamAttributes | null> {
        return this.model.findOne({ where: { name } });
    }

    async create(details: Partial<IArdTeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ArdTeamId, new_details: Partial<IArdTeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ArdTeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockArdTeamRepository implements ITeamRepositoryInterface<ArdTeamId, IArdTeamAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<IArdTeamAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IArdTeamAttributes, { id: 2, name: "Test2", country_id: 123 } as IArdTeamAttributes];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IArdTeamAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<IArdTeamAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IArdTeamAttributes, { id: 2, name: "Test2", country_id: 123 } as IArdTeamAttributes];
    }

    async getById(id: ArdTeamId): Promise<IArdTeamAttributes | null> {
        return { id: id, name: "Test", country_id: 123 } as IArdTeamAttributes;
    }

    async getByName(name: string): Promise<IArdTeamAttributes | null> {
        return { id: 1, name: name, country_id: 123 } as IArdTeamAttributes;
    }

    async create(details: Partial<IArdTeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdTeamId> {
        return Promise.resolve(1);
    }

    async update(id: ArdTeamId, new_details: Partial<IArdTeamAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ArdTeamId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
