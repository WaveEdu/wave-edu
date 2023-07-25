<script lang="ts">
	import type { PageData } from './$types';
	import Message from '../../../components/Message.svelte';
	export let data: PageData;
</script>

<h1>Chat {data.chatId}</h1>
<main class="flex h-full flex-col justify-end overflow-y-scroll">
	{#each data.messages as message}
		<Message {message} />
	{/each}
</main>
