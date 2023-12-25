# Notes

## Database

### Create models (Sequelize)

Run `.\node_modules\.bin\sequelize-auto -o .\src\lib\models\ -l ts --sg -e sqlite --caseProp l --caseModel p --useDefine --skipTables _prisma_migrations migrations -d <PATH_TO_DB>` to generate the models.

Then use `sequelize-typescript` to convert to decorator syntax.
