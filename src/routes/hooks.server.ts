import { database } from "$lib/sequelize";
import { initModels } from "$lib/models/init-models";
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// const session = event.cookies.get ('session')
	// const user = await getUser(session)

	event.locals.user = 'Test';
	return resolve(event);
};

async function db_status() {
	try {
		await database.authenticate();
		database.databaseVersion().then((v) => console.log(v));
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
		throw error;
	}
}

async function getModels() {
	try {
		await db_status();
		return initModels(database);
	} catch (error) {
		console.error('Unable to initialize models:', error);
		throw error;
	}
}

export const models = await getModels();
