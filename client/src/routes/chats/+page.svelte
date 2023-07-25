<!-- Chats.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import { userStore } from '$lib/userStore';
	import Phone from '../../components/Phone.svelte';
	import BarraSopra from '../../components/barraSopra.svelte';
	import Stories from '../../components/stories.svelte';
	import BarraSotto from '../../components/barraSotto.svelte';

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

<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<BarraSopra />
			<Stories />
		</header>
		<main class="flex h-full flex-col justify-start">
			{#await getChats()}
				<p>Loading...</p>
			{:then data}
				{#if data.length > 0}
					<ul>
						{#each data as chat}
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle h-12 w-12">
										<img
											src={`https://api.dicebear.com/6.x/initials/svg?seed=${chat.name}`}
											alt={chat.name}
										/>
									</div>
								</div>
								<div>
									<div class="font-bold">{chat.name}</div>
								</div>
							</div>
						{/each}
					</ul>
				{:else}
					<p>No chats found.</p>
				{/if}
			{:catch error}
				<p>{error.message}</p>
			{/await}
		</main>
		<footer>
			<BarraSotto />
		</footer>
	</div>
</Phone>
