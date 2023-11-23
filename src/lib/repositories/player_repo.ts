import type { models } from "$lib/sequelize";
import type { playerAttributes } from "$lib/models/player";

type PlayerId = playerAttributes["id"];
type PlayerData = playerAttributes;
type Player = typeof models.player;

interface IPlayerRepositoryInterface {
    getAllPlayers(): Promise<PlayerData[]>;
    getAllPlayersPaginated(): Promise<PlayerData[]>;
    getAllPlayersPartiallyCached(): Promise<Partial<PlayerData[]>>;
    getPlayerById(player_id: PlayerId): Promise<PlayerData | null>;
    createPlayer(player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<PlayerId>;
    updatePlayer(player_id: PlayerId, new_player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<boolean>;
    deletePlayer(player_id: PlayerId, user_id: number, actionlog_summary: string): Promise<boolean>;
}

export default class PlayerRepository implements IPlayerRepositoryInterface {

    constructor(private readonly player_model: Player) { }

    async getAllPlayers(): Promise<PlayerData[]> {
        return this.player_model.findAll();
    }

    async getAllPlayersPaginated(): Promise<PlayerData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPlayersPartiallyCached(): Promise<Partial<PlayerData[]>> {
        return this.player_model.findAll({ attributes: ["id", "name"] })
    }

    async getPlayerById(player_id: PlayerId): Promise<PlayerData | null> {
        return this.player_model.findByPk(player_id);
    }

    createPlayer(player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<PlayerId> {
        throw new Error("Method not implemented.");
    }

    updatePlayer(player_id: PlayerId, new_player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deletePlayer(player_id: PlayerId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockPlayerRepository implements IPlayerRepositoryInterface {

    constructor(/* empty */) { }

    async getAllPlayers(): Promise<PlayerData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as PlayerData, { id: 2, name: "Test2", country_id: 123 } as PlayerData];
    }

    async getAllPlayersPaginated(): Promise<PlayerData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPlayersPartiallyCached(): Promise<PlayerData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as PlayerData, { id: 2, name: "Test2", country_id: 123 } as PlayerData];
    }

    async getPlayerById(player_id: PlayerId): Promise<PlayerData | null> {
        return { id: player_id, name: "Test", country_id: 123 } as PlayerData;
    }

    createPlayer(player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<PlayerId> {
        return Promise.resolve(1);
    }

    updatePlayer(player_id: PlayerId, new_player_details: Partial<PlayerData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    deletePlayer(player_id: PlayerId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
