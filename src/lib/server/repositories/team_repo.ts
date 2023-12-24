/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IBaseRepositoryInterface } from "$interfaces/repository";
import type { PrismaClient, Team } from "@prisma/client";

type TeamId = Team["id"];

export interface ITeamRepositoryInterface<TeamId, TeamData>
	extends IBaseRepositoryInterface<TeamId, TeamData> {
	getByName(name: string): Promise<TeamData | null>;
	getAllPartiallyCached(): Promise<Partial<TeamData>[]>;
}

export class TeamRepository<T extends PrismaClient>
	implements ITeamRepositoryInterface<TeamId, Team>
{
	constructor(private readonly model: T) {}

	getAll(): Promise<Team[]> {
		return this.model.team.findMany();
	}

	getAllPaginated(offset: number, limit = 25): Promise<Team[]> {
		return this.model.team.findMany({ skip: offset, take: limit });
	}

	getAllPartiallyCached(): Promise<
		Partial<Team & { id: number; name: string }>[]
	> {
		return this.model.team.findMany({
			select: { id: true, name: true, tag: true },
		});
	}

	getById(id: TeamId): Promise<Team | null> {
		return this.model.team.findUnique({
			where: { id: id },
			include: { playersInTeam: true },
		});
	}

	getByName(name: string): Promise<Team | null> {
		return this.model.team.findFirst({ where: { name: name } });
	}

	create(
		_details: Partial<Team>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<TeamId> {
		throw new Error("Method not implemented.");
	}

	update(
		_id: TeamId,
		_new_details: Partial<Team>,
		_actionlog_user_id: number,
		_actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
	delete(
		_team_id: TeamId,
		_user_id: number,
		_actionlog_summary: string,
	): Promise<boolean> {
		throw new Error("Method not implemented.");
	}
}

// export class MockTeamRepository
// 	implements ITeamRepositoryInterface<TeamId, Team>
// {
// 	constructor(/* empty */) {}

// 	getAll(): Promise<Team[]> {
// 		return [
// 			{ id: 1, name: "Test", country_id: 123 } as Team,
// 			{ id: 2, name: "Test2", country_id: 123 } as Team,
// 		];
// 	}

// 	getAllPaginated(offset: number, limit = 25): Promise<Team[]> {
// 		throw new Error("Method not implemented.");
// 	}

// 	getAllPartiallyCached(): Promise<Team[]> {
// 		return [
// 			{ id: 1, name: "Test", country_id: 123 } as Team,
// 			{ id: 2, name: "Test2", country_id: 123 } as Team,
// 		];
// 	}

// 	getById(id: TeamId): Promise<Team | null> {
// 		return { id: id, name: "Test", country_id: 123 } as Team;
// 	}

// 	getByName(name: string): Promise<Team | null> {
// 		return { id: 1, name: name, country_id: 123 } as Team;
// 	}

// 	create(
// 		details: Partial<Team>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<TeamId> {
// 		return Promise.resolve(1);
// 	}

// 	update(
// 		id: TeamId,
// 		new_details: Partial<Team>,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(false);
// 	}

// 	delete(
// 		id: TeamId,
// 		actionlog_user_id: number,
// 		actionlog_summary: string,
// 	): Promise<boolean> {
// 		return Promise.resolve(true);
// 	}
// }
