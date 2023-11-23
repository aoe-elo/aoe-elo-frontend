import { database } from "$lib/sequelize";
import { initModels } from "$lib/models/init-models";

try {
    await database.authenticate();
    database.databaseVersion().then((v) => console.log(v));
    console.log('Connection has been established successfully.');

    // database.query("SELECT * FROM users").then((v) => console.log(v));
    // import models into sequelize instance
    const models = initModels(database);
    const user = await models.user.findOne({ where: { "id": 1 } });
    console.log(user);
} catch (error) {
    console.error('Unable to connect to the database:', error);
}