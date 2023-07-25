import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url, params, props, fetch, session, stuff, status, error }) => {
	const resourceUrl = `${PUBLIC_DEPLOY_URL_SERVER}/messages/${params.chatId}`;
	const res = await fetch(resourceUrl);

	if (res.ok) {
		return {
			status: res.status,
			props: {
				propName: await res.json()
			}
		};
	}

	return {
		status: res.status,
		error: new Error(`Could not load url`)
	};
};
