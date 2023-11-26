import type { IArdPlayerAttributes, ArdPlayerId, ArdPlayer } from "$models/ard_player";
import type { Country } from "$models/country";
import type { IPlayerRepositoryInterface } from "$repositories/player_repo";


export class ArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, IArdPlayerAttributes> {

    constructor(private readonly model: typeof ArdPlayer, private readonly country: typeof Country) { }

    async getAll(): Promise<IArdPlayerAttributes[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IArdPlayerAttributes[]> {
        return this.model.findAll({ offset, limit, include: [{ model: this.country, as: "country", attributes: ["name", "iso_3166_2"] }] });
    }

    async getAllPartiallyCached(): Promise<Partial<IArdPlayerAttributes[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: ArdPlayerId): Promise<IArdPlayerAttributes | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<IArdPlayerAttributes | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<IArdPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ArdPlayerId, new_details: Partial<IArdPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockArdPlayerRepository implements IPlayerRepositoryInterface<ArdPlayerId, IArdPlayerAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<IArdPlayerAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IArdPlayerAttributes, { id: 2, name: "Test2", country_id: 123 } as IArdPlayerAttributes];
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IArdPlayerAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<IArdPlayerAttributes[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as IArdPlayerAttributes, { id: 2, name: "Test2", country_id: 123 } as IArdPlayerAttributes];
    }

    async getById(id: ArdPlayerId): Promise<IArdPlayerAttributes | null> {
        return { id: id, name: "Test", country_id: 123 } as IArdPlayerAttributes;
    }

    async getByName(name: string): Promise<IArdPlayerAttributes | null> {
        return { id: 1, name: name, country_id: 123 } as IArdPlayerAttributes;
    }

    async create(details: Partial<IArdPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ArdPlayerId> {
        return Promise.resolve(1);
    }

    async update(id: ArdPlayerId, new_details: Partial<IArdPlayerAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ArdPlayerId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
