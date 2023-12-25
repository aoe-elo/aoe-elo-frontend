import { config as DotEnv } from "dotenv";
import { match } from "ts-pattern";
import { AppMode } from "$lib/types/enums";

export const uppercaseFirst = (str: string) => {
	return `${str[0].toUpperCase()}${str.substring(1)}`;
};

export const model_match = (filename: string, member: string) => {
	const match =
		filename.substring(0, filename.indexOf(".model")).replaceAll("_", "") ===
		member.toLowerCase();
	console.log(`File: ${filename} Member: ${member} => match: ${match}`);
	return match;
};

export const app_mode = (): AppMode => {
	const mode_string: string =
		DotEnv().parsed?.AOE_ELO_APP_MODE ?? "development";

	match(mode_string)
		.with("development", () => {
			console.log("Running in development mode");
			return AppMode.DEV;
		})
		.with("production", () => {
			console.log("Running in production mode");
			return AppMode.PROD;
		})
		.with("test", () => {
			console.log("Running in test mode");
			return AppMode.TEST;
		})
		.otherwise(() => {
			throw new Error("Invalid app mode");
		});

	return AppMode.DEV;
};
