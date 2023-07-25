<script>
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import { userStore } from '$lib/userStore';
	import ThemeToggle from '../components/ThemeToggle.svelte';

	const logout = async () => {
		const res = await fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/auth/logout`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include'
		});
		userStore.set({});
		if (res.status === 200) {
			window.location.href = '/';
		}
	};
</script>

<div class="navbar bg-base-100 ml-2 space-x-2">
	c
	<ThemeToggle />
	<div class="dropdown dropdown-end">
		<details class="dropdown">
			<summary class="btn btn-square btn-ghost mt-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-5 w-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
					/></svg
				></summary
			>
			<ul class="menu dropdown-content rounded-box w-52 bg-white shadow">
				<button
					class="rounded-box border-4 border-gray-200 p-1 text-center hover:border-gray-300"
					on:click={logout}
				>
					Logout
				</button>
				<button
					class="rounded-box mt-1 border-4 border-gray-200 p-1 text-center hover:border-gray-300"
					>Aggiungi Storia</button
				>
			</ul>
		</details>
	</div>
</div>
