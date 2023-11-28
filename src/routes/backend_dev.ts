import { APP } from "./hooks.server";

export async function run_dev() {
	// const players = (await APP.repositories.players.getAllPaginated(0, 5)).forEach((player) => player.getCountry().then((country) => console.log(JSON.stringify(country, null, 2))));

	(await APP.repositories.users.getAllPaginated(0, 5)).forEach((user) =>
		console.log(JSON.stringify(user, null, 2)),
	);

	// const actions = await models.actionlog.findAll({ group: ["loggable_type"], attributes: ["loggable_type"] });
	// const actions = await models.actionlog.findAll({ include: ["action"], limit: 2, offset: 1523 });
	// const actions = await models.actionlog.findByPk(1523);

	// for (const action of actions) {
	//     action?.getLoggable().then((loggable) => console.log(JSON.stringify(loggable, null, 2)));
	// }
	// const metadata = await models.metadatum.findAll({ group: ["metadatable_type"], attributes: ["metadatable_type"] });
}
