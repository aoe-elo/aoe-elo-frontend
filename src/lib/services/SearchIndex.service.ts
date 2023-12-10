import { APP } from "../../routes/hooks.server";
import Fuse from 'fuse.js'
import { writeFile } from 'node:fs';

// TODO: Use https://web.dev/articles/indexeddb

// TODO: https://www.fusejs.io/api/indexing.html#fuse-createindex

export type SearchIndexItem = {
    id: number;
    name: string;
    type: "Player" | "Tournament" | "Team";
    link: string;
    short_name?: string;
    tag?: string;
    alias?: string;
};

export class SearchIndexService {
    public static async createIndex() {

        const getIndexData = async () => {
            return {
                players: await APP.repositories.players.getAllPartiallyCached(),
                tournaments: await APP.repositories.tournaments.getAllPartiallyCached(),
                teams: await APP.repositories.teams.getAllPartiallyCached()
            };
        }

        const { players, tournaments, teams } = await getIndexData();

        // iterate over all players, tournaments, teams
        // id and name attributes in player, tournaments, and teams can be undefined so they need to be properly handled
        // if id and name are undefined, the item should be skipped
        // items that are not undefined should be used to create a new object of type SearchIndexItem
        // each SearchIndexItem should be pushed to an array

        const indexData: SearchIndexItem[] = [];

        players.forEach((player) => {
            if (player.aliases) {
                // split comma-separated aliases into an array
                const aliases = player.aliases.split(",");

                // add each alias to the indexData array
                aliases.forEach((alias) => {
                    if (player.id && player.name) {
                        indexData.push({
                            id: player.id,
                            name: player.name,
                            alias: alias,
                            type: "Player",
                            link: `/players/${player.id}`
                        })
                    };
                });
            } else {
                if (player.id && player.name) {
                    indexData.push({
                        id: player.id,
                        name: player.name,
                        type: "Player",
                        link: `/players/${player.id}`
                    });
                }
            }
        });

        tournaments.forEach((tournament) => {
            if (tournament.id && tournament.name) {
                indexData.push({
                    id: tournament.id,
                    name: tournament.name,
                    short_name: tournament.short,
                    type: "Tournament",
                    link: `/tournaments/${tournament.id}`
                });
            }
        });

        teams.forEach((team) => {
            if (team.id && team.name) {
                indexData.push({
                    id: team.id,
                    name: team.name,
                    tag: team.tag,
                    type: "Team",
                    link: `/teams/${team.id}`
                });
            }
        });

        // create a new Fuse object with the indexData

        writeFile('src/lib/data/data_index.json', JSON.stringify(indexData), (err) => { if (err) throw err; });

        const fuseIndex = Fuse.createIndex(
            ["name", "alias", "short_name", "tag"],
            indexData
        );

        writeFile('src/lib/data/fuse_index.json', JSON.stringify(fuseIndex.toJSON()), (err) => { if (err) throw err; });
    }

}