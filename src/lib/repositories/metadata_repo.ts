import type { MetadatumId, Metadatum } from "$models/metadatum.model";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface IMetadataRepositoryInterface<MetadatumId, ReviewData> extends IBaseRepositoryInterface<MetadatumId, ReviewData> { }

export class MetadataRepository implements IMetadataRepositoryInterface<MetadatumId, Metadatum> {

    constructor(private readonly model: typeof Metadatum) { }

    async getAll(): Promise<Metadatum[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<Metadatum[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: MetadatumId): Promise<Metadatum | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<Metadatum>, actionlog_user_id: number, actionlog_summary: string): Promise<MetadatumId> {
        throw new Error("Method not implemented.");
    }

    async update(id: MetadatumId, new_details: Partial<Metadatum>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: MetadatumId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockMetadataRepository implements IMetadataRepositoryInterface<MetadatumId, Metadatum> {

    constructor(/* empty */) { }

    async getAll(): Promise<Metadatum[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<Metadatum[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: MetadatumId): Promise<Metadatum | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<Metadatum>, actionlog_user_id: number, actionlog_summary: string): Promise<MetadatumId> {
        return Promise.resolve(1);
    }

    async update(id: MetadatumId, new_details: Partial<Metadatum>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: MetadatumId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
