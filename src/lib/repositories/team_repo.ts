import type { IBaseRepositoryInterface } from "$interfaces/repository";
import { Player } from "$models/player.model";
import type { TeamId } from "$models/team.model";
import { Team } from "$models/team.model";

export interface ITeamRepositoryInterface<TeamId, TeamData>
	extends IBaseRepositoryInterface<TeamId, TeamData> {
	getByName(name: string): Promise<TeamData | null>;
	getAllPartiallyCached(): Promise<Partial<TeamData[]>>;
}

export class TeamRepository implements ITeamRepositoryInterface<TeamId, Team> {
	getAll(): Promise<Team[]> {
		return Team.findAll();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Team[]> {
		return Team.findAll({ offset, limit });
	}

	getAllPartiallyCached(): Promise<Partial<Team[]>> {
		return Team.findAll({ attributes: ["id", "name"] });
	}

	getById(id: TeamId): Promise<Team | null> {
		return Team.findByPk(id, { include: [Player] });
	}

	getByName(name: string): Promise<Team | null> {
		return Team.findOne({ where: { name } });
	}

	create(
		details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TeamId> {
		throw new Error("Method not implemented.");
	}

	update(
		id: TeamId,
		new_details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		team_id: TeamId,
		user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

export class MockTeamRepository
	implements ITeamRepositoryInterface<TeamId, Team>
{
	constructor(/* empty */) {}

	getAll(): Promise<Team[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as Team,
			{ id: 2, name: "Test2", country_id: 123 } as Team,
		];
	}

	getAllPaginated(offset: number, limit = 25): Promise<Team[]> {
		throw new Error("Method not implemented.");
	}

	getAllPartiallyCached(): Promise<Team[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as Team,
			{ id: 2, name: "Test2", country_id: 123 } as Team,
		];
	}

	getById(id: TeamId): Promise<Team | null> {
		return { id: id, name: "Test", country_id: 123 } as Team;
	}

	getByName(name: string): Promise<Team | null> {
		return { id: 1, name: name, country_id: 123 } as Team;
	}

	create(
		details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TeamId> {
		return Promise.resolve(1);
	}

	update(
		id: TeamId,
		new_details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	delete(
		id: TeamId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
