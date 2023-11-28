import type { ArdTeamId } from "$models/ard_team.model";
import type { ArdTeam } from "$models/ard_team.model";
import type { ITeamRepositoryInterface } from "$repositories/team_repo";

export class ArdTeamRepository
	implements ITeamRepositoryInterface<ArdTeamId, ArdTeam>
{
	constructor(private readonly model: typeof ArdTeam) {}

	getAll(): Promise<ArdTeam[]> {
		return this.model.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<ArdTeam[]> {
		return this.model.findAll({ offset, limit });
	}

	getAllPartiallyCached(): Promise<Partial<ArdTeam[]>> {
		return this.model.findAll({ attributes: ["id", "name"] });
	}

	getById(id: ArdTeamId): Promise<ArdTeam | null> {
		return this.model.findByPk(id);
	}

	getByName(name: string): Promise<ArdTeam | null> {
		return this.model.findOne({ where: { name } });
	}

	create(
		details: Partial<ArdTeam>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ArdTeamId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: ArdTeamId,
		new_details: Partial<ArdTeam>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		id: ArdTeamId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockArdTeamRepository
	implements ITeamRepositoryInterface<ArdTeamId, ArdTeam>
{
	constructor(/* empty */) {}

	getAll(): Promise<ArdTeam[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as ArdTeam,
			{ id: 2, name: "Test2", country_id: 123 } as ArdTeam,
		];
	}

	getAllPaginated(offset: number, limit = 25): Promise<ArdTeam[]> {
		throw new Error("Method not implemented.");
	}

	getAllPartiallyCached(): Promise<ArdTeam[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as ArdTeam,
			{ id: 2, name: "Test2", country_id: 123 } as ArdTeam,
		];
	}

	getById(id: ArdTeamId): Promise<ArdTeam | null> {
		return { id: id, name: "Test", country_id: 123 } as ArdTeam;
	}

	getByName(name: string): Promise<ArdTeam | null> {
		return { id: 1, name: name, country_id: 123 } as ArdTeam;
	}

	create(
		details: Partial<ArdTeam>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<ArdTeamId> {
		return Promise.resolve(1);
	}

	update(
		id: ArdTeamId,
		new_details: Partial<ArdTeam>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: ArdTeamId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
