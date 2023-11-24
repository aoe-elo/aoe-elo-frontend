import { models } from "$lib/sequelize";
import type { ard_playerAttributes } from "$lib/models/ard_player";
import type { IPlayerRepositoryInterface } from "$lib/repositories/player_repo";

type ArdPlayerId = ard_playerAttributes["id"];
type ArdPlayerData = ard_playerAttributes;
type ArdPlayer = typeof models.ard_player;

export class ArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, ArdPlayerData> {

    constructor(private readonly player_model: ArdPlayer = models.ard_player) { }

    async getAll(): Promise<ArdPlayerData[]> {
        return this.player_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdPlayerData[]> {
        return this.player_model.findAll({ offset, limit, include: [{ model: models.country, as: "country", attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<ArdPlayerData[]>> {
        return this.player_model.findAll({ attributes: ["id", "name"] })
    }

    async getById(player_id: ArdPlayerId): Promise<ArdPlayerData | null> {
        return this.player_model.findByPk(player_id);
    }

    async getByName(player_name: string): Promise<ArdPlayerData | null> {
        return this.player_model.findOne({ where: { name: player_name } });
    }

    async create(player_details: Partial<ArdPlayerData>, user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(player_id: ArdPlayerId, new_player_details: Partial<ArdPlayerData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(player_id: ArdPlayerId, user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(player_id: ArdPlayerId): Promise<ArdPlayerData | null> {
        return { id: player_id, name: "Test", country_id: 123 } as ArdPlayerData;
    }

    async getByName(player_name: string): Promise<ArdPlayerData | null> {
        return { id: 1, name: player_name, country_id: 123 } as ArdPlayerData;
    }

    async create(player_details: Partial<ArdPlayerData>, user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        return Promise.resolve(1);
    }

    async update(player_id: ArdPlayerId, new_player_details: Partial<ArdPlayerData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(player_id: ArdPlayerId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
