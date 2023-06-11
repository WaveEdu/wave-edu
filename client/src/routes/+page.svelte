<script lang="ts">
	import { PUBLIC_DEPLOY_URL_SERVER } from '$env/static/public';
	import Phone from '../components/Phone.svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';
	let chatTitle = 'Pokemon Chat';
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

<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent (tertiary)</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>

<ThemeToggle />

<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<div class="navbar bg-base-100 space-x-2">
				<div class="flex-none">
					<a href="/" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							class="inline-block h-5 w-5 stroke-current"
							><path
								fill="currentColor"
								d="M20.25 12a.75.75 0 0 1-.75.75H6.31l5.47 5.47a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.06 1.06l-5.47 5.47H19.5a.75.75 0 0 1 .75.75Z"
							/></svg
						>
					</a>
				</div>
				<div class="flex flex-1 flex-row gap-2">
					<div class="avatar">
						<div class="mask mask-squircle w-10">
							<img
								src={`https://api.dicebear.com/6.x/initials/svg?seed=${chatTitle}`}
								alt={chatTitle}
							/>
						</div>
					</div>
					<h1 class="inline-block text-xl normal-case">{chatTitle}</h1>
				</div>
				<div class="flex-none">
					<button class="btn btn-square btn-ghost">
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
						>
					</button>
				</div>
			</div>
		</header>
		<main class="flex h-full flex-col justify-end">
			<div class="chat chat-start">
				<div class="chat-header">Professor Oak</div>
				<div class="chat-bubble">Pokémon around the world wait for you!</div>
				<div class="chat-footer opacity-50">
					<time class="text-xs opacity-50">2 hours ago</time>
				</div>
			</div>
			<div class="chat chat-end">
				<div class="chat-header">Professor Oak</div>
				<div class="chat-bubble">Thanks 😃</div>
				<div class="chat-footer opacity-50">
					<time class="text-xs">now</time>
				</div>
			</div>
		</main>
		<footer>
			<div class="m-2 flex flex-row gap-2">
				<button class="btn btn-secondary btn-outline btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008l-.007.007l-.002.002l-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
						/></svg
					>
				</button>
				<input
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full rounded-full"
				/>
				<button class="btn btn-primary btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94a60.519 60.519 0 0 0 18.445-8.986a.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z"
						/></svg
					>
				</button>
			</div>
		</footer>
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
