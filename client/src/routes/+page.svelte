<script lang="ts">
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import Phone from '../components/Phone.svelte';
	import AvatarProfilo from '../components/avatarProfilo.svelte';
	import BarraCSopra from '../components/barraCSopra.svelte';
	import BarraCSotto from '../components/barraCSotto.svelte';
	import BarraPCentrale from '../components/barraPCentrale.svelte';
	import BarraSopra from '../components/barraSopra.svelte';
	import BarraSotto from '../components/barraSotto.svelte';
	import Chat from '../components/chat.svelte';
	import Corsi from '../components/corsi.svelte';
	import ListaChat from '../components/listaChat.svelte';
	import Login from '../components/login.svelte';
	import Stories from '../components/stories.svelte';
	import TabellaUtenti from '../components/tabellaUtenti.svelte';
	import Warning from '../components/warning.svelte';
	let chatTitle = 'Chat';
	let nameApp = 'WaveEdu';

	import ThemeToggle from '../components/ThemeToggle.svelte';
	let email = '';
	let loading = false;
	let successMessage = '';
	let errorMessage = '';

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		loading = true;

		const response = await fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/auth/link`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ email })
		});

		const { message, cookieToken } = await response.json();

		if (message) {
			successMessage =
				'A Magic Link has been sent to your email address. Please click it to log in.';
			document.cookie = `node-magic-link-check=${cookieToken}; path=/;`;
		} else {
			errorMessage = 'An error occurred. Please try again later.';
			loading = false;
			return;
		}
		loading = false;
	};
</script>

<h1 class="text-3xl font-bold underline">{nameApp}</h1>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent (tertiary)</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>

<h2 class="mb-4 mt-7 text-xl font-bold underline">Schermate Login</h2>
<Phone>
	<Login />
</Phone>

<Phone>
	<Warning />
</Phone>

<h2 class="mb-4 mt-7 text-xl font-bold underline">Schermate Profilo</h2>
<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<BarraSopra />
		</header>
		<main class="mt-8 flex h-full flex-col place-items-center justify-start text-center">
			<AvatarProfilo />
			<h6 class="mt-2 text-xl">--------@------</h6>
			<h6 class="mb-4 mt-2 text-xl">--------@------</h6>
			<Corsi />
			<BarraPCentrale />
		</main>
		<footer>
			<BarraSotto />
		</footer>
	</div>
</Phone>

<h2 class="mb-4 mt-7 text-xl font-bold underline">Schermate Chat Professore</h2>
<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<BarraSopra />
			<Stories />
		</header>
		<main class="flex h-full flex-col justify-start">
			<ListaChat />
		</main>
		<footer>
			<BarraSotto />
		</footer>
	</div>
</Phone>

<Phone>
	<div class="my-6 flex h-full w-full flex-col">
		<header>
			<BarraCSopra />
		</header>
		<main class="flex h-full flex-col justify-end">
			<Chat />
		</main>
		<footer>
			<BarraCSotto />
		</footer>
	</div>
</Phone>

<h2 class="mb-4 mt-7 text-xl font-bold underline">Schermata Amministratore</h2>
<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<BarraSopra />
			<Stories />
		</header>
		<main class="overflow-y-scroll">
			<TabellaUtenti />
		</main>
	</div>
</Phone>
<main>
	{#if successMessage}
		<p>{successMessage}</p>
	{:else if errorMessage}
		<p>{errorMessage}</p>
	{:else}
		<form on:submit={handleSubmit}>
			<label>
				Email:
				<input type="email" bind:value={email} required />
			</label>
			<button type="submit" disabled={loading}>
				{#if loading}
					Loading...
				{:else}
					Send Magic Link
				{/if}
			</button>
		</form>
	{/if}
</main>
