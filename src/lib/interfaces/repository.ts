export interface IBaseRepositoryInterface<Id, Data> {
	getAll(): Promise<Data[]>;
	getAllPaginated(offset: number, limit: number): Promise<Data[]>;
	getById(id: Id): Promise<Data | null>;
	create(
		details: Partial<Data>,
		user_id: number,
		actionlog_summary: string,
	): Promise<Id>;
	update(
		id: Id,
		new_details: Partial<Data>,
		user_id: number,
		actionlog_summary: string,
	): Promise<boolean>;
	delete(id: Id, user_id: number, actionlog_summary: string): Promise<boolean>;
}
