import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// const session = event.cookies.get ('session')
	// const user = await getUser(session)

	event.locals.user = 'Test';
	return resolve(event);
};
