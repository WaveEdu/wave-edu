<!-- Chats.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import { userStore } from '$lib/userStore';

	interface Chat {
		id: string;
		name: string;
	}

	let chats: Chat[] = [];

	const getChats = async () => {
		try {
			const res = await fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/chats/${$userStore.id}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include'
			});

			if (res.status === 403) {
				const { message } = await res.json();
				throw new Error(message);
			}

			const data = await res.json();
			return data.chats;
		} catch (err) {
			console.error(err);
			throw err;
		}
	};

	onMount(async () => {
		try {
			const url = new URL(window.location.href);
			const userId = url.searchParams.get('userId');

			if (!userId || userId === '') {
				return;
			}
			// Get the userId from the URL parameter
			const response = await fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/user/${userId}`); // Fetch user data based on the userId

			if (response.ok) {
				const userData = await response.json();
				userStore.set(userData); // Save the user data to the userStore
			} else {
				console.error('Failed to fetch user data.');
			}
		} catch (error) {
			console.error('Error while fetching user data:', error);
		}
	});
</script>

<main>
	<h1>Chats</h1>

	{JSON.stringify($userStore, null, 2)}

	<button
		on:click={() => {
			chats = [];
			getChats().then((data) => {
				chats = data;
			});
		}}>Get Chats</button
	>

	{#await getChats()}
		<p>Loading...</p>
	{:then data}
		{#if data.length > 0}
			<ul>
				{#each data as chat}
					<li>{chat.name}</li>
				{/each}
			</ul>
		{:else}
			<p>No chats found.</p>
		{/if}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</main>
