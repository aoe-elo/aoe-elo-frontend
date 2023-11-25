import { models } from "$lib/sequelize";
import type { IPlayerAttributes, PlayerId } from "$lib/models/player";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type PlayerData = IPlayerAttributes;
type Player = typeof models.player;

export interface IPlayerRepositoryInterface<PlayerId, PlayerData> extends IBaseRepositoryInterface<PlayerId, PlayerData> {
    getByName(name: string): Promise<PlayerData | null>;
    getAllPartiallyCached(): Promise<Partial<PlayerData[]>>;
}

export class PlayerRepository implements IPlayerRepositoryInterface<PlayerId, PlayerData> {

    constructor(private readonly model: Player = models.player) { }

    async getAll(): Promise<PlayerData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<PlayerData[]> {
        return this.model.findAll({ offset, limit, include: [{ model: models.country, as: "country", attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<PlayerData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: PlayerId): Promise<PlayerData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<PlayerData | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<PlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(id: PlayerId, new_details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: PlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockPlayerRepository implements IPlayerRepositoryInterface<PlayerId, PlayerData> {

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

    async getById(id: PlayerId): Promise<PlayerData | null> {
        return { id: id, name: "Test", country_id: 123 } as PlayerData;
    }

    async getByName(name: string): Promise<PlayerData | null> {
        return { id: 1, name: name, country_id: 123 } as PlayerData;
    }

    async create(details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<PlayerId> {
        return Promise.resolve(1);
    }

    async update(id: PlayerId, new_details: Partial<PlayerData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: PlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
