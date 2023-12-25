import { PrismaClient as AoeEloLivePrismaClient } from "@prisma-app/aoe-elo-live-client";

const globalForPrisma = globalThis as unknown as {
	prisma: AoeEloLivePrismaClient;
};

export const prisma = globalForPrisma.prisma || new AoeEloLivePrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

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
