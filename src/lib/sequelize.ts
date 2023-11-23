import { Sequelize } from 'sequelize';
import { initModels } from "$lib/models/init-models";

export const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/database.sqlite',
});

async function getModels() {
    try {
        return initModels(database);
    } catch (error) {
        console.error('Unable to initialize models:', error);
        throw error;
    }
}

export const models = await getModels();
