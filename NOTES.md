# Notes

## Models

- Metadata: Tournament, Player, ArdPlayer, Review
- Actionlog: ArdPlayer, ArdTeam, AtpCategory, Country, Location, Match, Stage, Team, "Tournament", "Review", "Player"
- Review: Actionlog, Metadata, Player, Match, Team, Tournament

## Repository

## Database

### Create models

Run `.\node_modules\.bin\sequelize-auto -o .\src\lib\models\ -l ts --sg -e sqlite --caseProp l --caseModel p --useDefine --skipTables _prisma_migrations migrations -d <PATH_TO_DB>` to generate the models.
