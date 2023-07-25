import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ params, fetch }) => {
	const resourceUrl = `${PUBLIC_DEPLOY_URL_SERVER}/api/messages/${params.chatId}`;
	// const resourceUrl = 'https://jsonplaceholder.typicode.com/todos';
	const res = await fetch(resourceUrl);

	if (res.ok) {
		return {
			status: res.status,
			messages: await res.json(),
			chatId: params.chatId
		};
	}

	return {
		status: res.status,
		error: new Error(`Could not load url`)
	};
};
