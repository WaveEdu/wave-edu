<script lang="ts">
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import { twMerge as cn } from 'tailwind-merge';
	import Phone from '../components/Phone.svelte';
	import Logo from '../components/Logo.svelte';

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
		// wait 4 seconds
		await new Promise((resolve) => setTimeout(resolve, 4000));
		successMessage = '';
	};
</script>

<!-- <h1 class="text-3xl font-bold underline">{nameApp}</h1>
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
</Phone> -->
<Phone>
	<div class="grid h-full place-items-center">
		<Logo />

		<form class="form-control w-full max-w-lg" on:submit={handleSubmit}>
			<label for="" class="label">
				<span class="label-text"> Email </span>
			</label>
			<input class="input input-bordered" type="email" bind:value={email} required />
			<label for="" class="label">
				<span class="label-text-alt">
					{errorMessage}
				</span>
			</label>
			<button type="submit" disabled={loading} class={cn('btn btn-primary ')}>
				{#if loading}
					<span class="loading loading-spinner" />
				{:else}
					Accedi
				{/if}
			</button>
		</form>
		{#if successMessage != ''}
			<div class="alert alert-success">
				<span class="wrap-text">
					{successMessage}
				</span>
			</div>
		{/if}
	</div>
</Phone>
