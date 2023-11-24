import { models } from "$lib/sequelize";
import type { locationAttributes } from "$lib/models/location";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type LocationId = locationAttributes["id"];
type LocationData = locationAttributes;
type Location = typeof models.location;

interface ILocationRepositoryInterface<LocationId, LocationData> extends IBaseRepositoryInterface<LocationId, LocationData> {
    getAllPartiallyCached(): Promise<Partial<LocationData[]>>;

}

export class LocationRepository implements ILocationRepositoryInterface<LocationId, LocationData> {

    constructor(private readonly model: Location = models.location) { }

    async getAll(): Promise<LocationData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<LocationData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<LocationData[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: LocationId): Promise<LocationData | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<LocationData | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<LocationData>, actionlog_user_id: number, actionlog_summary: string): Promise<LocationId> {
        throw new Error("Method not implemented.");
    }

    async update(id: LocationId, new_details: Partial<LocationData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: LocationId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockLocationRepository implements ILocationRepositoryInterface<LocationId, LocationData> {

    constructor(/* empty */) { }

    async getAll(): Promise<LocationData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<LocationData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<Partial<LocationData[]>> {
        throw new Error("Method not implemented.");
    }

    async getById(id: LocationId): Promise<LocationData | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<LocationData>, actionlog_user_id: number, actionlog_summary: string): Promise<LocationId> {
        return Promise.resolve(1);
    }

    async update(id: LocationId, new_details: Partial<LocationData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: LocationId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
