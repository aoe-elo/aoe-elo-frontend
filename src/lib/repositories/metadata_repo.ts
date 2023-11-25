import { models } from "$lib/db_setup";
import type { IMetadatumAttributes, MetadatumId as MetadataId } from "$lib/models/metadatum";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type MetadataData = IMetadatumAttributes;
type Metadata = typeof models.Metadatum;

interface IMetadataRepositoryInterface<MetadataId, ReviewData> extends IBaseRepositoryInterface<MetadataId, ReviewData> { }

export class MetadataRepository implements IMetadataRepositoryInterface<MetadataId, MetadataData> {

    constructor(private readonly model: Metadata = models.Metadatum) { }

    async getAll(): Promise<MetadataData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<MetadataData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: MetadataId): Promise<MetadataData | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<MetadataData>, actionlog_user_id: number, actionlog_summary: string): Promise<MetadataId> {
        throw new Error("Method not implemented.");
    }

    async update(id: MetadataId, new_details: Partial<MetadataData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: MetadataId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockMetadataRepository implements IMetadataRepositoryInterface<MetadataId, MetadataData> {

    constructor(/* empty */) { }

    async getAll(): Promise<MetadataData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<MetadataData[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: MetadataId): Promise<MetadataData | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<MetadataData>, actionlog_user_id: number, actionlog_summary: string): Promise<MetadataId> {
        return Promise.resolve(1);
    }

    async update(id: MetadataId, new_details: Partial<MetadataData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: MetadataId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
