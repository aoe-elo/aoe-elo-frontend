import type { IBaseRepositoryInterface } from "$interfaces/repository";
import { Player } from "$models/player.model";
import type { TeamId } from "$models/team.model";
import { Team } from "$models/team.model";
import type { Repository, Sequelize } from "sequelize-typescript";

export interface ITeamRepositoryInterface<TeamId, TeamData>
	extends IBaseRepositoryInterface<TeamId, TeamData> {
	getByName(name: string): Promise<TeamData | null>;
	getAllPartiallyCached(): Promise<Partial<TeamData[]>>;
}

export class TeamRepository implements ITeamRepositoryInterface<TeamId, Team> {
	private readonly team: Repository<Team>;
	private readonly player: Repository<Player>;

	constructor(connection: Sequelize) {
		this.team = connection.getRepository(Team);
		this.player = connection.getRepository(Player);
	}

	async getAll(): Promise<Team[]> {
		return this.team.findAll();
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Team[]> {
		return this.team.findAll({ offset, limit });
	}

	async getAllPartiallyCached(): Promise<Partial<Team[]>> {
		return this.team.findAll({ attributes: ["id", "name"] });
	}

	async getById(id: TeamId): Promise<Team | null> {
		return this.team.findByPk(id, { include: [this.player] });
	}

	async getByName(name: string): Promise<Team | null> {
		return this.team.findOne({ where: { name } });
	}

	async create(
		details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TeamId> {
		throw new Error("Method not implemented.");
	}

	async update(
		id: TeamId,
		new_details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	async delete(
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

	async getAll(): Promise<Team[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as Team,
			{ id: 2, name: "Test2", country_id: 123 } as Team,
		];
	}

	async getAllPaginated(offset: number, limit = 25): Promise<Team[]> {
		throw new Error("Method not implemented.");
	}

	async getAllPartiallyCached(): Promise<Team[]> {
		return [
			{ id: 1, name: "Test", country_id: 123 } as Team,
			{ id: 2, name: "Test2", country_id: 123 } as Team,
		];
	}

	async getById(id: TeamId): Promise<Team | null> {
		return { id: id, name: "Test", country_id: 123 } as Team;
	}

	async getByName(name: string): Promise<Team | null> {
		return { id: 1, name: name, country_id: 123 } as Team;
	}

	async create(
		details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<TeamId> {
		return Promise.resolve(1);
	}

	async update(
		id: TeamId,
		new_details: Partial<Team>,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(false);
	}

	async delete(
		id: TeamId,
		actionlog_user_id: number,
		actionlog_summary: string,
	): Promise<boolean> {
		return Promise.resolve(true);
	}
}
