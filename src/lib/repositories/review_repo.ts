import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { Review, ReviewId } from "$models/TODO/review.model";

type IReviewRepositoryInterface<ReviewId, ReviewData> =
	IBaseRepositoryInterface<ReviewId, ReviewData>;

export class ReviewRepository
	implements IReviewRepositoryInterface<ReviewId, Review>
{
	constructor(private readonly model: typeof Review) {}

	getAll(): Promise<Review[]> {
		return this.model.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Review[]> {
		return this.model.findAll({ offset, limit });
	}

	getById(id: ReviewId): Promise<Review | null> {
		return this.model.findByPk(id);
	}

	create(
		details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ReviewId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: ReviewId,
		new_details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
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

	getAll(): Promise<Review[]> {
		throw new Error("Method not implemented.");
	}

	getAllPaginated(offset: number, limit = 25): Promise<Review[]> {
		throw new Error("Method not implemented.");
	}

	getById(id: ReviewId): Promise<Review | null> {
		throw new Error("Method not implemented.");
	}

	create(
		details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ReviewId> {
		return Promise.resolve(1);
	}

	update(
		id: ReviewId,
		new_details: Partial<Review>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: ReviewId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
