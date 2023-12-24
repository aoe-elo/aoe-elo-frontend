import type { LayoutServerData } from "../$types";

export const load: LayoutServerData = async ({ locals }) => {
	return { user: locals.user };
};
