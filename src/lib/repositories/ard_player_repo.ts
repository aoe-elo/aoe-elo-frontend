import { APP } from "$lib/bootstrap";
import type { IArdPlayerAttributes, ArdPlayerId } from "$lib/models/ard_player";
import type { IPlayerRepositoryInterface } from "$lib/repositories/player_repo";

type PlayerData = IArdPlayerAttributes;
type Player = typeof APP.models.ArdPlayer;

export class ArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, PlayerData> {

    constructor(private readonly model: Player = APP.models.ArdPlayer) { }

    async getAll(): Promise<PlayerData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<PlayerData[]> {
        return this.model.findAll({ offset, limit, include: [{ model: APP.models.Country, as: "country", attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<PlayerData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: ArdPlayerId): Promise<PlayerData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<PlayerData | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ArdPlayerId, new_details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, PlayerData> {

    constructor(/* empty */) { }

    async getAll(): Promise<PlayerData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as PlayerData, { id: 2, name: "Test2", country_id: 123 } as PlayerData];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<PlayerData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<PlayerData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as PlayerData, { id: 2, name: "Test2", country_id: 123 } as PlayerData];
    }

    async getById(id: ArdPlayerId): Promise<PlayerData | null> {
        return { id: id, name: "Test", country_id: 123 } as PlayerData;
    }

    async getByName(name: string): Promise<PlayerData | null> {
        return { id: 1, name: name, country_id: 123 } as PlayerData;
    }

    async create(details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        return Promise.resolve(1);
    }

    async update(id: ArdPlayerId, new_details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
