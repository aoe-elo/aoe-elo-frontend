import { models } from "$lib/sequelize";
import type { playerAttributes } from "$lib/models/player";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type PlayerId = playerAttributes["id"];
type PlayerData = playerAttributes;
type Player = typeof models.player;

export interface IPlayerRepositoryInterface<PlayerId, PlayerData> extends IBaseRepositoryInterface<PlayerId, PlayerData> {
    getByName(name: string): Promise<PlayerData | null>;
    getAllPartiallyCached(): Promise<Partial<PlayerData[]>>;
}

export class PlayerRepository implements IPlayerRepositoryInterface<PlayerId, PlayerData> {

    constructor(private readonly player_model: Player = models.player) { }

    async getAll(): Promise<PlayerData[]> {
        return this.player_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<PlayerData[]> {
        return this.player_model.findAll({ offset, limit, include: [{ model: models.country, as: "country", attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<PlayerData[]>> {
        return this.player_model.findAll({ attributes: ["id", "name"] })
    }

    async getById(player_id: PlayerId): Promise<PlayerData | null> {
        return this.player_model.findByPk(player_id);
    }

    async getByName(player_name: string): Promise<PlayerData | null> {
        return this.player_model.findOne({ where: { name: player_name } });
    }

    async create(player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<PlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(player_id: PlayerId, new_player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(player_id: PlayerId, user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(player_id: PlayerId): Promise<PlayerData | null> {
        return { id: player_id, name: "Test", country_id: 123 } as PlayerData;
    }

    async getByName(player_name: string): Promise<PlayerData | null> {
        return { id: 1, name: player_name, country_id: 123 } as PlayerData;
    }

    async create(player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<PlayerId> {
        return Promise.resolve(1);
    }

    async update(player_id: PlayerId, new_player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(player_id: PlayerId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
