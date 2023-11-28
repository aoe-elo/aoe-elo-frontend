import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { config as DotEnv } from "dotenv";

const model_dir = DotEnv().parsed?.AOE_ELO_DB_MODEL_DIR ?? "models";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$api: "src/routes/api",
			$components: "src/lib/components",
			$interfaces: "src/lib/interfaces",
			$models: model_dir,
			$repositories: "src/lib/repositories",
			$services: "src/lib/services",
			$types: "src/lib/types",
		},
	},
};

export default config;
