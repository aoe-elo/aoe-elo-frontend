import { models } from "$lib/sequelize";
import type { teamAttributes } from "$lib/models/team";

type TeamId = teamAttributes["id"];
type TeamData = teamAttributes;
type Team = typeof models.team;

interface ITeamRepositoryInterface {
    getAllTeams(): Promise<TeamData[]>;
    getAllTeamsPaginated(): Promise<TeamData[]>;
    getAllTeamsPartiallyCached(): Promise<Partial<TeamData[]>>;
    getTeamById(team_id: TeamId): Promise<TeamData | null>;
    createTeam(team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<TeamId>;
    updateTeam(team_id: TeamId, new_team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<boolean>;
    deleteTeam(team_id: TeamId, user_id: number, actionlog_summary: string): Promise<boolean>;
}

export class TeamRepository implements ITeamRepositoryInterface {

    constructor(private readonly Team_model: Team = models.team) { }

    async getAllTeams(): Promise<TeamData[]> {
        return this.Team_model.findAll();
    }

    async getAllTeamsPaginated(): Promise<TeamData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllTeamsPartiallyCached(): Promise<Partial<TeamData[]>> {
        return this.Team_model.findAll({ attributes: ["id", "name"] })
    }

    async getTeamById(team_id: TeamId): Promise<TeamData | null> {
        return this.Team_model.findByPk(team_id);
    }

    async createTeam(team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<TeamId> {
        throw new Error("Method not implemented.");
    }

    async updateTeam(team_id: TeamId, new_team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteTeam(team_id: TeamId, user_id: number, actionlog_summary: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export class MockTeamRepository implements ITeamRepositoryInterface {

    constructor(/* empty */) { }

    async getAllTeams(): Promise<TeamData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as TeamData, { id: 2, name: "Test2", country_id: 123 } as TeamData];
    }

    async getAllTeamsPaginated(): Promise<TeamData[]> {
        throw new Error("Method not implemented.");
    }

    async getAllTeamsPartiallyCached(): Promise<TeamData[]> {
        return [{ id: 1, name: "Test", country_id: 123 } as TeamData, { id: 2, name: "Test2", country_id: 123 } as TeamData];
    }

    async getTeamById(team_id: TeamId): Promise<TeamData | null> {
        return { id: team_id, name: "Test", country_id: 123 } as TeamData;
    }

    async createTeam(team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<TeamId> {
        return Promise.resolve(1);
    }

    async updateTeam(team_id: TeamId, new_team_details: Partial<TeamData>, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async deleteTeam(team_id: TeamId, user_id: number, actionlog_summary: string): Promise<boolean> {
        return Promise.resolve(true);
    }
}
