import { Sequelize } from 'sequelize';
import { initModels, type ModelReturnType } from "$lib/models/init-models";
import { match } from 'ts-pattern';
import { AppMode } from '$lib/types/enums';

export const prod_database = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/database.sqlite',
    // dialectOptions: {
    // Your sqlite3 options here
    // for instance, this is how you can configure the database opening mode:
    // DEFAULT: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
    // mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
    // },
});

export const dev_database = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/dev_database.sqlite',
});

export const test_database = new Sequelize('sqlite::memory:');

export function get_models(mode: AppMode = AppMode.DEV): ModelReturnType {
    match(mode)
        .with(AppMode.DEV, () => {
            return init_models_with_db_connection(dev_database);
        })
        .with(AppMode.PROD, () => {
            return init_models_with_db_connection(prod_database);
        })
        .with(AppMode.TEST, () => {
            return init_models_with_db_connection(test_database);
        })
        .exhaustive();

    return init_models_with_db_connection(dev_database);
}

function init_models_with_db_connection(database: Sequelize): ModelReturnType {
    try {
        return initModels(database);
    } catch (error) {
        console.error('Unable to initialize models:', error);
        throw error;
    }
}

export async function db_status(mode: AppMode = AppMode.DEV) {

    let database: Sequelize = dev_database;

    match(mode)
        .with(AppMode.DEV, () => {
            database = dev_database;
        })
        .with(AppMode.PROD, () => {
            database = prod_database;
        })
        .with(AppMode.TEST, () => {
            database = test_database;

            // Sync all models that aren't already in the database
            database.sync({ force: true });
        })
        .exhaustive();

    try {
        database.authenticate().then(() => console.log("Database connection established"));
        database.databaseVersion().then((v) => console.log(v));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
}
