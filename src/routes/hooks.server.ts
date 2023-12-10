import { app_init } from "$lib/bootstrap";
import type { Handle } from "@sveltejs/kit";
import { run_dev } from "./backend_dev";
import { SearchIndexService } from "$services/SearchIndex.service";

export const handle: Handle = async ({ event, resolve }) => {
	// const session = event.cookies.get ('session')
	// const user = await getUser(session)

	event.locals.user = { id: 123, name: "Test" };
	return resolve(event);
};

// ENTRYPOINT: Bootstrap the app with the database and other stuff
// => APP is a global variable that is used throughout the app
console.log("Bootstrapping app ...");
export const APP = app_init();
console.log("Bootstrapping app complete.");

// Create the search index
console.info("Creating search index ...");
SearchIndexService.createIndex();
console.info("Search index created.");

// TODO!: Remove this, it's just for testing
console.log("Running dev code ...");
await run_dev();
