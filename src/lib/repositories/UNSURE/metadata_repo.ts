import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { Metadatum, MetadatumId } from "$models/TODO/metadatum.model";

type IMetadataRepositoryInterface<MetadatumId, ReviewData> =
	IBaseRepositoryInterface<MetadatumId, ReviewData>;

export class MetadataRepository
	implements IMetadataRepositoryInterface<MetadatumId, Metadatum>
{
	constructor(private readonly model: typeof Metadatum) {}

	getAll(): Promise<Metadatum[]> {
		return this.model.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Metadatum[]> {
		return this.model.findAll({ offset, limit });
	}

	getById(id: MetadatumId): Promise<Metadatum | null> {
		return this.model.findByPk(id);
	}

	create(
		details: Partial<Metadatum>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<MetadatumId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: MetadatumId,
		new_details: Partial<Metadatum>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: MetadatumId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockMetadataRepository
	implements IMetadataRepositoryInterface<MetadatumId, Metadatum>
{
	constructor(/* empty */) {}

	getAll(): Promise<Metadatum[]> {
		throw new Error("Method not implemented.");
	}

	getAllPaginated(offset: number, limit = 25): Promise<Metadatum[]> {
		throw new Error("Method not implemented.");
	}

	getById(id: MetadatumId): Promise<Metadatum | null> {
		throw new Error("Method not implemented.");
	}

	create(
		details: Partial<Metadatum>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<MetadatumId> {
		return Promise.resolve(1);
	}

	update(
		id: MetadatumId,
		new_details: Partial<Metadatum>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: MetadatumId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
