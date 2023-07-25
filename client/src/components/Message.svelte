<script>
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import { userStore } from '$lib/userStore';
	import { onMount } from 'svelte';
	import { twJoin } from 'tailwind-merge';

	export let message;

	let name = '';
	let time = '';

	const fetchName = async () => {
		const user = fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/user/${message.ownerId}`).then((res) =>
			res.json()
		);
		console.log(user);
		return user?.name;
	};

	const elapsedTime = (time) => {
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
		{message.ownerId === $userStore.id ? $userStore.name : await fetchName()}
	</div>
	<div class="chat-bubble">{message.contentComunicazione?.comunicazione}</div>
	<div class="chat-footer opacity-50">
		<time class="text-xs opacity-50">
			{time}
		</time>
	</div>
</div>
