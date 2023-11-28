import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { Location, LocationId } from "$models/TODO/location.model";

interface ILocationRepositoryInterface<LocationId, LocationData>
	extends IBaseRepositoryInterface<LocationId, LocationData> {
	getAllPartiallyCached(): Promise<Partial<LocationData[]>>;
}

export class LocationRepository
	implements ILocationRepositoryInterface<LocationId, Location>
{
	constructor(private readonly model: typeof Location) {}

	getAll(): Promise<Location[]> {
		return this.model.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Location[]> {
		return this.model.findAll({ offset, limit });
	}

	getAllPartiallyCached(): Promise<Partial<Location[]>> {
		return this.model.findAll({ attributes: ["id", "name"] });
	}

	getById(id: LocationId): Promise<Location | null> {
		return this.model.findByPk(id);
	}

	getByName(name: string): Promise<Location | null> {
		return this.model.findOne({ where: { name: name } });
	}

	create(
		details: Partial<Location>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<LocationId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: LocationId,
		new_details: Partial<Location>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: LocationId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockLocationRepository
	implements ILocationRepositoryInterface<LocationId, Location>
{
	constructor(/* empty */) {}

	getAll(): Promise<Location[]> {
		throw new Error("Method not implemented.");
	}

	getAllPaginated(offset: number, limit = 25): Promise<Location[]> {
		throw new Error("Method not implemented.");
	}

	getAllPartiallyCached(): Promise<Partial<Location[]>> {
		throw new Error("Method not implemented.");
	}

	getById(id: LocationId): Promise<Location | null> {
		throw new Error("Method not implemented.");
	}

	create(
		details: Partial<Location>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<LocationId> {
		return Promise.resolve(1);
	}

	update(
		id: LocationId,
		new_details: Partial<Location>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: LocationId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
