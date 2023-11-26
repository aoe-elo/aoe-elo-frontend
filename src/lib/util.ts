import { match } from "ts-pattern";
import { AppMode } from "./types/enums";
import { config as DotEnv } from "dotenv";

export const uppercaseFirst = (str: string) => {
    return `${str[0].toUpperCase()}${str.substring(1)}`;
};

export const app_mode = (): AppMode => {
    const mode_string: string = DotEnv().parsed?.APP_MODE ?? "dev";

    match(mode_string)
        .with("dev", () => {
            console.log("Running in development mode");
            return AppMode.DEV;
        })
        .with("prod", () => {
            console.log("Running in production mode");
            return AppMode.PROD;
        })
        .with("test", () => {
            console.log("Running in test mode");
            return AppMode.TEST;
        })
        .otherwise(() => { throw new Error("Invalid app mode"); })

    return AppMode.DEV;
};
