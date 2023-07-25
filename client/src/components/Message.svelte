<script lang="ts">
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import { userStore } from '$lib/userStore';
	import { onMount } from 'svelte';
	import { twJoin } from 'tailwind-merge';

	interface Message {
		idComunicazione: number;
		ownerId: number;
		ownerName: string;
		ownerSurname: string;
		dataComunicazione: string;
		contentComunicazione: {
			idContenuto: number;
			comunicazione: string;
			ownerId: number;
			ownerName: string;
			ownerSurname: string;
			dataContenuto: string;
		};
	}

	interface User {
		idUtente: number;
		name: string;
		surname: string;
		email: string;
		password: string;
		role: string;
	}

	export let message: Message;

	let name: string | undefined = '';
	let time = '';

	const fetchName = async (): Promise<string | undefined> => {
		try {
			const response = await fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/user/${message.ownerId}`);
			const user = await response.json();
			return user?.name;
		} catch (error) {
			// Handle any errors that might occur during the fetch request
			console.error('Error fetching user data:', error);
			return undefined;
		}
	};

	const elapsedTime = (time: Date): string => {
		const now = new Date();
		const diff = (now.getTime() - time.getTime()) / 1000;

		const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' });
		console.log(diff);
		return rtf1.format(diff, 'second');
	};

	onMount(async () => {
		name = await fetchName();
		time = elapsedTime(new Date(message.dataComunicazione));
	});
</script>

<div class={twJoin('chat', message.ownerId === $userStore.id ? 'chat-end' : 'chat-start')}>
	<div class="chat-header">
		{message.ownerId === $userStore.id ? $userStore.name : fetchName()}
	</div>
	<div class="chat-bubble">{message.contentComunicazione?.comunicazione}</div>
	<div class="chat-footer opacity-50">
		<time class="text-xs opacity-50">
			{time}
		</time>
	</div>
</div>
