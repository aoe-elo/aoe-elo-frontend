import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { Review, ReviewId } from "$models/review.model";

type IReviewRepositoryInterface<ReviewId, ReviewData> =
	IBaseRepositoryInterface<ReviewId, ReviewData>;

export class ReviewRepository
	implements IReviewRepositoryInterface<ReviewId, Review>
{
	constructor(private readonly model: typeof Review) {}

	async getAll(): Promise<Review[]> {
		return this.model.findAll();
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Review[]> {
		return this.model.findAll({ offset, limit });
	}

	async getById(id: ReviewId): Promise<Review | null> {
		return this.model.findByPk(id);
	}

	async create(
		details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ReviewId> {
		throw new Error("Method not implemented.");
	}

	async update(
		id: ReviewId,
		new_details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async delete(
		id: ReviewId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockMatchRepository
	implements IReviewRepositoryInterface<ReviewId, Review>
{
	constructor(/* empty */) {}

	async getAll(): Promise<Review[]> {
		throw new Error("Method not implemented.");
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Review[]> {
		throw new Error("Method not implemented.");
	}

	async getById(id: ReviewId): Promise<Review | null> {
		throw new Error("Method not implemented.");
	}

	async create(
		details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ReviewId> {
		return Promise.resolve(1);
	}

	async update(
		id: ReviewId,
		new_details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	async delete(
		id: ReviewId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
