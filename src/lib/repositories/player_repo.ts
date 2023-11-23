import prisma from "../prisma.ts";

type Id = number;
type Player = typeof prisma.player; /// should probably be an Interface as well, so we can use our own


interface IPlayerRepositoryInterface {
    getAllPlayers(): Promise<Player[]>;
    getAllPlayersPaginated(): Promise<Player[]>;
    getPlayerById(player_id: number): Promise<Player>;
    createPlayer(player_details: Record<string, string>, user_id: number, actionlog_summary: string): Promise<Id>;
    updatePlayer(player_id: number, new_player_details: Record<string, string>, user_id: number, actionlog_summary: string): Promise<boolean>;
    deletePlayer(player_id: number, user_id: number, actionlog_summary: string): Promise<boolean>;
}

class PlayerRepository implements IPlayerRepositoryInterface {

    getAllPlayers(): Promise<Player[]> {
        let players = prisma.player.
    }

    getAllPlayersPaginated(): Promise<Player[]>;
    getPlayerById(player_id: number): Promise<Player>;
    createPlayer(player_details: Record<string, string>, user_id: number, actionlog_summary: string): Promise<Id>;
    updatePlayer(player_id: number, new_player_details: Record<string, string>, user_id: number, actionlog_summary: string): Promise<boolean>;
    deletePlayer(player_id: number, user_id: number, actionlog_summary: string): Promise<boolean>;
}

class MockPlayerRepository implements IPlayerRepositoryInterface {

}


// can be used with MockPlayerRepository or PlayerRepository
class PlayerService<
    T extends IPlayerRepositoryInterface
> {
    constructor(private player_repository: T) { }

    async create(player: Player): Promise<Id> {
        return this.player_repository.create(player);
    }

    /// ... other RUD of CRUD
}