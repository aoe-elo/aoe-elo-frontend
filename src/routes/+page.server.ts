import { models } from "$lib/sequelize";

import { PlayerRepository } from "$lib/repositories/player_repo";
import { ArdPlayerRepository } from "$lib/repositories/ard_player_repo";

// const users = await models.user.findOne();
// console.log(users);

// const daut = await models.player.findOne({ where: { id: 1 }, include: ["country"] });
// console.log(JSON.stringify(daut, null, 2));

// const all_players_cache = await models.player.findAll({ attributes: ["id", "name"] });
// console.log(JSON.stringify(all_players_cache, null, 2));

// const all_teams_cache = await models.team.findAll({ attributes: ["id", "name"] });
// console.log(JSON.stringify(all_teams_cache, null, 2));

// const all_tounaments_cache = await models.tournament.findAll({ attributes: ["id", "name"] });
// console.log(JSON.stringify(all_tounaments_cache, null, 2));

const ard_player = new ArdPlayerRepository();
// repo.getPlayerById(1).then((player) => console.log(JSON.stringify(player, null, 2)));
ard_player.getAllPaginated(0, 25).then((players) => console.log(JSON.stringify(players, null, 2)));
