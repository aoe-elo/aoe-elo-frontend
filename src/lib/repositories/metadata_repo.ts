import { type IMetadatumAttributes, type MetadatumId, Metadatum } from "$models/metadatum";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface IMetadataRepositoryInterface<MetadatumId, ReviewData> extends IBaseRepositoryInterface<MetadatumId, ReviewData> { }

export class MetadataRepository implements IMetadataRepositoryInterface<MetadatumId, IMetadatumAttributes> {

    constructor(private readonly model: typeof Metadatum = Metadatum) { }

    async getAll(): Promise<IMetadatumAttributes[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IMetadatumAttributes[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: MetadatumId): Promise<IMetadatumAttributes | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<IMetadatumAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<MetadatumId> {
        throw new Error("Method not implemented.");
    }

    async update(id: MetadatumId, new_details: Partial<IMetadatumAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: MetadatumId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockMetadataRepository implements IMetadataRepositoryInterface<MetadatumId, IMetadatumAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<IMetadatumAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IMetadatumAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: MetadatumId): Promise<IMetadatumAttributes | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<IMetadatumAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<MetadatumId> {
        return Promise.resolve(1);
    }

    async update(id: MetadatumId, new_details: Partial<IMetadatumAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: MetadatumId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
