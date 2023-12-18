import { PrismaClient as AoeEloLivePrismaClient } from '$prisma/generated/aoe-elo-live-client'

export const aoe_elo_live_database = new AoeEloLivePrismaClient();

export function db_status(database: AoeEloLivePrismaClient) {
	try {
		database
			.$connect()
			.then(() => console.log("Database connection established"));
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		throw error;
	}
}
