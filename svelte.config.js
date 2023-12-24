import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
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
			$api: "src/lib/server/api",
			$components: "src/lib/components",
			$interfaces: "src/lib/interfaces",
			$models: model_dir,
			$repositories: "src/lib/server/repositories",
			$shooks: "src/routes/hooks.server",
			$services: "src/lib/server/services",
			$types: "src/lib/types",
			$prisma: "./prisma",
		},
		// TODO: SETUP CSP
		// csp: {
		// 	mode: 'auto',
		// 	directives: {
		// 		'script-src': ['self'],
		// 		'default-src': ['self', 'https:'],
		// 		'connect-src': ['self', 'https:'],
		// 		'font-src': ['self', 'https://fonts.gstatic.com', 'data:'],
		// 		'frame-src': ['self'],
		// 		'child-src': ['none'],
		// 		'img-src': ['self', 'data: https:'],
		// 		'media-src': ['self'],
		// 		'object-src': ['none'],
		// 		'style-src': ['self', 'unsafe-inline', 'fonts.gstatic.com', 'fonts.googleapis.com'],
		// 		'worker-src': ['self'],
		// 		'form-action': ['self'],
		// 		'base-uri': ['self'],
		// 		'frame-ancestors': ['none'],
		// 		'report-to': ['self'],
		// 		'report-uri': ['self'],
		// 		'upgrade-insecure-requests': true
		// 	}
		// },
	},
};

export default config;
