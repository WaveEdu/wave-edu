// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
const unProtectedRoutes = ['/'];
export const handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('node-magic-link-session');
	if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
		throw redirect(303, '/');
	}
	// if sessionId is present and you are on / route then redirect to dashboard
	if (unProtectedRoutes.includes(event.url.pathname) && sessionId) {
		throw redirect(303, '/dashboard');
	}
	return resolve(event);
};
