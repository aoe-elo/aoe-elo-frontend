import { APP } from "$lib/bootstrap";


export async function run_dev() {
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

    // const ard_player = new ArdPlayerRepository();
    // ard_player.getById(1523).then((player) => console.log(JSON.stringify(player, null, 2)));
    // ard_player.getAllPaginated(0, 25).then((players) => console.log(JSON.stringify(players, null, 2)));

    // const reviews = await models.review.findAll({ group: ["reviewable_type"], attributes: ["reviewable_type"] });
    // const actions = await models.actionlog.findAll({ group: ["loggable_type"], attributes: ["loggable_type"] });
    // const actions = await models.actionlog.findAll({ include: ["action"], limit: 2, offset: 1523 });
    // const actions = await models.actionlog.findByPk(1523);

    // for (const action of actions) {
    //     action?.getLoggable().then((loggable) => console.log(JSON.stringify(loggable, null, 2)));
    // }
    // const metadata = await models.metadatum.findAll({ group: ["metadatable_type"], attributes: ["metadatable_type"] });

    // console.log(JSON.stringify(actions, null, 2));

    // let mapping = new Map<string, string>();

    // mapping.set("App\\Models\\Achievement", "Achievement");
    // mapping.set("App\\Models\\ArdPlayer", "ArdPlayer");
    // mapping.set("App\\Models\\ArdTeam", "ArdTeam");
    // mapping.set("App\\Models\\Player", "Player");

    // await actionlog.update({ loggable_type: "Doe" }, {
    //     where: {
    //         loggable_type: null
    //     }
    // });

}