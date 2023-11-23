import { models } from "./hooks.server";

// const users = await models.user.findOne();
// console.log(users);

const daut = await models.player.findOne({ where: { id: 1 }, include: ["country"] });

console.log(JSON.stringify(daut, null, 2));