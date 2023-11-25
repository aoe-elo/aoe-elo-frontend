import { database } from "$lib/db_setup";
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// const session = event.cookies.get ('session')
	// const user = await getUser(session)

	event.locals.user = { id: 123, name: 'Test' };
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

await db_status();
