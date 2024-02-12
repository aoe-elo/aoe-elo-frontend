import { config as DotEnv } from "dotenv";
import { match } from "ts-pattern";
import { AppMode } from "$lib/shared/enums/app_mode";


export const appMode = (): AppMode => {
    const mode_string: string = DotEnv().parsed?.AOE_ELO_APP_MODE ?? "development";

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
