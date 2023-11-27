import type { ArdPlayerId, } from "$models/ard_player.model";
import type ArdPlayer from "$models/ard_player.model";
import type Country from "$models/country.model";
import type { IPlayerRepositoryInterface } from "$repositories/player_repo";


export class ArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, ArdPlayer> {

    constructor(private readonly model: typeof ArdPlayer, private readonly country: typeof Country) { }

    async getAll(): Promise<ArdPlayer[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdPlayer[]> {
        return this.model.findAll({ offset, limit, include: [{ model: this.country, as: "country", attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<ArdPlayer[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: ArdPlayerId): Promise<ArdPlayer | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<ArdPlayer | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<ArdPlayer>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ArdPlayerId, new_details: Partial<ArdPlayer>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, ArdPlayer> {

    constructor(/* empty */) { }

    async getAll(): Promise<ArdPlayer[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdPlayer, { id: 2, name: "Test2", country_id: 123 } as ArdPlayer];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ArdPlayer[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<ArdPlayer[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as ArdPlayer, { id: 2, name: "Test2", country_id: 123 } as ArdPlayer];
    }

    async getById(id: ArdPlayerId): Promise<ArdPlayer | null> {
        return { id: id, name: "Test", country_id: 123 } as ArdPlayer;
    }

    async getByName(name: string): Promise<ArdPlayer | null> {
        return { id: 1, name: name, country_id: 123 } as ArdPlayer;
    }

    async create(details: Partial<ArdPlayer>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        return Promise.resolve(1);
    }

    async update(id: ArdPlayerId, new_details: Partial<ArdPlayer>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
