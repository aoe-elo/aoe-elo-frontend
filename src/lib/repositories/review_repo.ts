import { APP } from "$lib/bootstrap";
import type { IReviewAttributes, ReviewId } from "$lib/models/review";
import type { IBaseRepositoryInterface } from "$lib/interfaces/repository";

type ReviewData = IReviewAttributes;
type Review = typeof APP.models.Review;

interface IReviewRepositoryInterface<ReviewId, ReviewData> extends IBaseRepositoryInterface<ReviewId, ReviewData> { }

export class ReviewRepository implements IReviewRepositoryInterface<ReviewId, ReviewData> {

    constructor(private readonly model: Review = APP.models.Review) { }

    async getAll(): Promise<ReviewData[]> {
        return this.model.findAll();
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ReviewData[]> {
        return this.model.findAll({ offset, limit });
    }

    async getById(id: ReviewId): Promise<ReviewData | null> {
        return this.model.findByPk(id);
    }

    async create(details: Partial<ReviewData>, actionlog_user_id: number, actionlog_summary: string): Promise<ReviewId> {
        throw new Error("Method not implemented.");
    }

    async update(id: ReviewId, new_details: Partial<ReviewData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: ReviewId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockMatchRepository implements IReviewRepositoryInterface<ReviewId, ReviewData> {

    constructor(/* empty */) { }

    async getAll(): Promise<ReviewData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllPaginated(offset: number, limit: number = 25): Promise<ReviewData[]> {
        throw new Error("Method not implemented.");
    }

    async getById(id: ReviewId): Promise<ReviewData | null> {
        throw new Error("Method not implemented.");
    }

    async create(details: Partial<ReviewData>, actionlog_user_id: number, actionlog_summary: string): Promise<ReviewId> {
        return Promise.resolve(1);
    }

    async update(id: ReviewId, new_details: Partial<ReviewData>, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async delete(id: ReviewId, actionlog_user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
