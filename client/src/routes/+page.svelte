<script>
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
</script>

<h1 class="text-3xl font-bold underline">{nameApp}</h1>


<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent (tertiary)</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>



<h2 class="mt-7 mb-4 text-xl font-bold underline">Schermate Login</h2>
<Phone>
	<Login>
	</Login>
</Phone>

<Phone>
	<Warning>
	</Warning>
</Phone>

<h2 class="mt-7 mb-4 text-xl font-bold underline">Schermate Profilo</h2>
<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<BarraSopra>
			</BarraSopra>
		</header>
		<main class="mt-8 flex h-full flex-col place-items-center text-center justify-start">
			<AvatarProfilo>
			</AvatarProfilo>
			<h6 class="mt-2 text-xl">--------@------</h6>
			<h6 class="mt-2 mb-4 text-xl">--------@------</h6>
			<Corsi>
			</Corsi>
			<BarraPCentrale>
			</BarraPCentrale>
	    </main>
		<footer>
			<BarraSotto>
			</BarraSotto>
		</footer>
	</div>
</Phone>

<h2 class="mt-7 mb-4 text-xl font-bold underline">Schermate Chat Professore</h2>
<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<BarraSopra>
			</BarraSopra>
			<Stories>
			</Stories>
		</header>
		<main class="flex h-full flex-col justify-start">
			<ListaChat>
			</ListaChat>
	    </main>
		<footer>
			<BarraSotto>
			</BarraSotto>
		</footer>
	</div>
</Phone>

<Phone>
	<div class="my-6 flex h-full w-full flex-col">
		<header>
			<BarraCSopra>
			</BarraCSopra>
		</header>
		<main class="flex h-full flex-col justify-end">
			<Chat>
			</Chat>
		</main>
		<footer>
			<BarraCSotto>
			</BarraCSotto>
		</footer>
	</div>
</Phone>

<h2 class="mt-7 mb-4 text-xl font-bold underline">Schermata Amministratore</h2>
<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<BarraSopra>
			</BarraSopra>
			<Stories>
			</Stories>
		</header>
		<main class="overflow-y-scroll ">
			<TabellaUtenti>
			</TabellaUtenti>
		</main> 
	</div>
</Phone>