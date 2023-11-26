import { type IReviewAttributes, type ReviewId, Review } from "$models/review";
import type { IBaseRepositoryInterface } from "$interfaces/repository";

interface IReviewRepositoryInterface<ReviewId, ReviewData> extends IBaseRepositoryInterface<ReviewId, ReviewData> { }

export class ReviewRepository implements IReviewRepositoryInterface<ReviewId, IReviewAttributes> {

    constructor(private readonly model: typeof Review = Review) { }

    async getAll(): Promise<IReviewAttributes[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IReviewAttributes[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: ReviewId): Promise<IReviewAttributes | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<IReviewAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ReviewId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ReviewId, new_details: Partial<IReviewAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ReviewId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockMatchRepository implements IReviewRepositoryInterface<ReviewId, IReviewAttributes> {

    constructor(/* empty */) { }

    async getAll(): Promise<IReviewAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<IReviewAttributes[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: ReviewId): Promise<IReviewAttributes | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<IReviewAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<ReviewId> {
        return Promise.resolve(1);
    }

    async update(id: ReviewId, new_details: Partial<IReviewAttributes>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ReviewId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
