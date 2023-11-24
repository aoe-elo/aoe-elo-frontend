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

    constructor(private readonly location_model: Location = models.location) { }

    async getAll(): Promise<LocationData[]> {
        return this.location_model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<LocationData[]> {
        return this.location_model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<LocationData[]>> {
        return this.location_model.findAll({ attributes: ["id", "name"] })
    }

    async getById(location_id: LocationId): Promise<LocationData | null> {
        return this.location_model.findByPk(location_id);
    }

    async getByName(location_name: string): Promise<LocationData | null> {
        return this.location_model.findOne({ where: { name: location_name } });
    }

    async create(location_details: Partial<LocationData>, user_id: number, actionlog_summary: string): Promise<LocationId> {
        throw new Error("Method not implemented.");
    }

    async update(location_id: LocationId, new_location_details: Partial<LocationData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(location_id: LocationId, user_id: number, actionlog_summary: string): Promise<boolean> {
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

    async getById(location_id: LocationId): Promise<LocationData | null> {
        throw new Error("Method not implemented.");
    }

    async create(location_details: Partial<LocationData>, user_id: number, actionlog_summary: string): Promise<LocationId> {
        return Promise.resolve(1);
    }

    async update(location_id: LocationId, new_location_details: Partial<LocationData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(location_id: LocationId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
