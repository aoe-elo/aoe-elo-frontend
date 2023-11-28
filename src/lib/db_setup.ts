import { ArdPlayer } from "$models/ard_player.model";
import { ArdPlayerArdTeam } from "$models/ard_player_ard_team.model";
import { ArdTeam } from "$models/ard_team.model";
import { AtpCategory } from "$models/atp_category.model";
import { Country } from "$models/country.model";
import { Player } from "$models/player.model";
import { PlayerTeam } from "$models/player_team.model";
import { Team } from "$models/team.model";
import { Tournament } from "$models/tournament.model";
import { User } from "$models/user.model";
import { AppMode } from "$types/enums";
// import { model_match } from "./util";
import { config as DotEnv } from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { match } from "ts-pattern";

export function get_database(mode: AppMode = AppMode.DEV): Sequelize {
	console.log(`Getting database for AppMode: ${mode}`);

	const db_dialect: string =
		DotEnv().parsed?.AOE_ELO_DB_DIALECT ?? "sqlite::memory:";
	const db_storage_dir: string =
		DotEnv().parsed?.AOE_ELO_DB_STORAGE_DIR ?? "database";
	const model_dir: string = DotEnv().parsed?.AOE_ELO_DB_MODEL_DIR ?? "models";

	let settings;

	const model_glob = `${model_dir}/*.model.ts`;
	console.log(`Model directory: ${model_glob}`);

	const supported_model_types = [
		ArdPlayer,
		ArdPlayerArdTeam,
		ArdTeam,
		AtpCategory,
		Country,
		PlayerTeam,
		Player,
		Team,
		Tournament,
		User,
	];

	match(mode)
		.with(AppMode.DEV, () => {
			settings = {
				dialect: db_dialect,
				storage: `${db_storage_dir}/dev_database.sqlite`,
				repositoryMode: true,
				models: supported_model_types,
				// models: [model_dir],
				// modelMatch: (filename: string, member: string) => {
				// 	console.log(`File: ${filename} Member: ${member}`);
				// 	model_match(filename, member);
				// },
			};
		})
		.with(AppMode.PROD, () => {
			settings = {
				dialect: db_dialect,
				storage: `${db_storage_dir}/database.sqlite`,
				repositoryMode: true,
				models: supported_model_types,
				// models: [model_dir],
				// modelMatch: (filename: string, member: string) => {
				// 	model_match(filename, member);
				// },
				// dialectOptions: {
				// Your sqlite3 options here
				// for instance, this is how you can configure the database opening mode:
				// DEFAULT: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
				// mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
				// },
			};
		})
		.with(AppMode.TEST, () => {
			settings = {
				storage: "sqlite::memory:",
				repositoryMode: true,
				models: supported_model_types,
				// models: [model_dir],
				// modelMatch: (filename: string, member: string) => {
				// 	model_match(filename, member);
				// },
			};
		});

	return new Sequelize(settings);
}

// export function init_models_with_db_connection(database: Sequelize): ModelReturnType {
//     try {
//         return initModels(database);
//     } catch (error) {
//         console.error('Unable to initialize models:', error);
//         throw error;
//     }
// }

export function db_status(database: Sequelize) {
	try {
		database
			.authenticate()
			.then(() => console.log("Database connection established"));
		database
			.databaseVersion()
			.then((v) => console.log(`Database version: ${v}`));
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		throw error;
	}
}
