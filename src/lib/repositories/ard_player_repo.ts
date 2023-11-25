import { models } from "$lib/sequelize";
import type { IArdPlayerAttributes, ArdPlayerId } from "$lib/models/ard_player";
import type { IPlayerRepositoryInterface } from "$lib/repositories/player_repo";

type ArdPlayerData = IArdPlayerAttributes;
type ArdPlayer = typeof models.ard_player;

export class ArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, ArdPlayerData> {

    constructor(private readonly model: ArdPlayer = models.ard_player) { }

    async getAll(): Promise<ArdPlayerData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdPlayerData[]> {
        return this.model.findAll({ offset, limit, include: [{ model: models.country, as: "country", attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<ArdPlayerData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: ArdPlayerId): Promise<ArdPlayerData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<ArdPlayerData | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<ArdPlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ArdPlayerId, new_details: Partial<ArdPlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, ArdPlayerData> {

    constructor(/* empty */) { }

    async getAll(): Promise<ArdPlayerData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdPlayerData, { id: 2, name: "Test2", country_id: 123 } as ArdPlayerData];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdPlayerData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<ArdPlayerData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdPlayerData, { id: 2, name: "Test2", country_id: 123 } as ArdPlayerData];
    }

    async getById(id: ArdPlayerId): Promise<ArdPlayerData | null> {
        return { id: id, name: "Test", country_id: 123 } as ArdPlayerData;
    }

    async getByName(name: string): Promise<ArdPlayerData | null> {
        return { id: 1, name: name, country_id: 123 } as ArdPlayerData;
    }

    async create(details: Partial<ArdPlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        return Promise.resolve(1);
    }

    async update(id: ArdPlayerId, new_details: Partial<ArdPlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
