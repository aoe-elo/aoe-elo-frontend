import { Prisma, PrismaClient } from '@prisma/client'

export const database = new PrismaClient();

export function db_status(database: PrismaClient) {
	try {
		database
			.$connect()
			.then(() => console.log("Database connection established"));
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		throw error;
	}
}