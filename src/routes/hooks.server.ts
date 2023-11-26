import type { Handle } from '@sveltejs/kit';
import { app_init } from '$lib/bootstrap';

export const handle: Handle = async ({ event, resolve }) => {
	// const session = event.cookies.get ('session')
	// const user = await getUser(session)

	event.locals.user = { id: 123, name: 'Test' };
	return resolve(event);
};

// ENTRYPOINT: Bootstrap the app with the database and other stuff
// => APP is a global variable that is used throughout the app
export const APP = await app_init();
