import type { LocationId, Location } from "$models/location";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface ILocationRepositoryInterface<LocationId, LocationData> extends IBaseRepositoryInterface<LocationId, LocationData> {
    getAllPartiallyCached(): Promise<Partial<LocationData[]>>;
}

export class LocationRepository implements ILocationRepositoryInterface<LocationId, Location> {

    constructor(private readonly model: typeof Location) { }

    async getAll(): Promise<Location[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<Location[]> {
        return this.model.findAll({ offset, limit });
    }

    async getAllPartiallyCached(): Promise<Partial<Location[]>> {
        return this.model.findAll({ attributes: ["id", "name"] })
    }

    async getById(id: LocationId): Promise<Location | null> {
        return this.model.findByPk(id);
    }

    async getByName(name: string): Promise<Location | null> {
        return this.model.findOne({ where: { name: name } });
    }

    async create(details: Partial<Location>, actionlog_user_id: number, actionlog_summary: string): Promise<LocationId> {
        throw new Error("Method not implemented.");
    }

    async update(id: LocationId, new_details: Partial<Location>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: LocationId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockLocationRepository implements ILocationRepositoryInterface<LocationId, Location> {

    constructor(/* empty */) { }

    async getAll(): Promise<Location[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<Location[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPartiallyCached(): Promise<Partial<Location[]>> {
        throw new Error("Method not implemented.");
    }

    async getById(id: LocationId): Promise<Location | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<Location>, actionlog_user_id: number, actionlog_summary: string): Promise<LocationId> {
        return Promise.resolve(1);
    }

    async update(id: LocationId, new_details: Partial<Location>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: LocationId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
