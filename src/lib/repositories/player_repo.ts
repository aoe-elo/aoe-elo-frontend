import type { IPlayerAttributes, PlayerId, Player } from "$models/player";
import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { Country } from "$models/country";

export interface IPlayerRepositoryInterface<PlayerId, PlayerData> extends IBaseRepositoryInterface<PlayerId, PlayerData> {
    getByName(name: string): Promise<PlayerData | null>;
    getAllPartiallyCached(): Promise<Partial<PlayerData[]>>;
}

export class PlayerRepository implements IPlayerRepositoryInterface<PlayerId, IPlayerAttributes> {

    constructor(private readonly player: typeof Player, private readonly country: typeof Country) { }

    async getAll(): Promise<IPlayerAttributes[]> {
        return this.player.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IPlayerAttributes[]> {
        return this.player.findAll({ offset, limit, include: [{ model: this.country, as: 'country', attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<IPlayerAttributes[]>> {
        return this.player.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: PlayerId): Promise<IPlayerAttributes | null> {
        return this.player.findByPk(id);
    }

    async getByName(name: string): Promise<IPlayerAttributes | null> {
        return this.player.findOne({ where: { name: name } });
    }

    async create(details: Partial<IPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<PlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(id: PlayerId, new_details: Partial<IPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: PlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockPlayerRepository implements IPlayerRepositoryInterface<PlayerId, IPlayerAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<IPlayerAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IPlayerAttributes, { id: 2, name: "Test2", country_id: 123 } as IPlayerAttributes];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IPlayerAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<IPlayerAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IPlayerAttributes, { id: 2, name: "Test2", country_id: 123 } as IPlayerAttributes];
    }

    async getById(id: PlayerId): Promise<IPlayerAttributes | null> {
        return { id: id, name: "Test", country_id: 123 } as IPlayerAttributes;
    }

    async getByName(name: string): Promise<IPlayerAttributes | null> {
        return { id: 1, name: name, country_id: 123 } as IPlayerAttributes;
    }

    async create(details: Partial<IPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<PlayerId> {
        return Promise.resolve(1);
    }

    async update(id: PlayerId, new_details: Partial<IPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: PlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
