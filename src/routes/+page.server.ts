import { models } from "./hooks.server";

// const users = await models.user.findOne();
// console.log(users);

const daut = await models.player.findOne({ where: { id: 1 }, include: ["country"] });
console.log(JSON.stringify(daut, null, 2));

const all_players_cache = await models.player.findAll({ attributes: ["id", "name"] });
console.log(JSON.stringify(all_players_cache, null, 2));

const all_teams_cache = await models.team.findAll({ attributes: ["id", "name"] });
console.log(JSON.stringify(all_teams_cache, null, 2));

const all_tounaments_cache = await models.tournament.findAll({ attributes: ["id", "name"] });
console.log(JSON.stringify(all_tounaments_cache, null, 2));
