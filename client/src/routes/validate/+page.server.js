import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';

export async function load({ params }) {
	// get the token from the URL
	const token = params.token;

	// send a get request to the server to validate the token
	const res = await fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/auth/login?token${token}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	// if the token is invalid, redirect to the login page
	if (res.status === 400) {
		return {
			status: 302,
			redirect: '/'
		};
	}

	// if the token is valid, redirect to the chat page
	if (res.status === 200) {
		return {
			status: 302,
			redirect: '/chat'
		};
	}
}
