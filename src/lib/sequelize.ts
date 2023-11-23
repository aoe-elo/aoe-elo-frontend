import { Sequelize } from 'sequelize';

console.log(process.cwd());

export const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/database.sqlite',
});
