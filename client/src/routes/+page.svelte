<script>
	import Phone from '../components/Phone.svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';
	let chatTitle = 'Chat';
	let nameApp = 'WaveEdu';
</script>

<h1 class="text-3xl font-bold underline">{nameApp}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

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
			<div class="mx-3 mt-28 flex flex-1 flex-row gap-2">
				<h1 class="inline-block text-6xl normal-case">Login</h1>

			</div>
		</header>
		<main> 
			<div class="mx-4 mt-5 w-full join">
				<input class="input w-80 join-item rounded-sm outline" placeholder="Email"/>
			</div>
			<button class="btn btn-neutral w-full mt-5">Accedi</button>
		</main>
	</div>
</Phone>

<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<div class="mx-2 mt-28 flex flex-1 flex-row gap-2">
				<h1 class="inline-block text-6xl normal-case">Login</h1>

			</div>
		</header>
		<main> 
			<div class="mx-4 mt-5 w-full join">
				<input class="input w-80 join-item rounded-sm outline" placeholder="Email"/>
			</div>
			<div class="alert mt-5 h-14 place-items-start bg-amber-500">
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
				<span>Invalid email address!</span>
			</div>
			<!--<button class="btn btn-neutral w-full mt-5">Accedi</button>-->
		</main>
	</div>
</Phone>

<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<div class="navbar bg-base-100 space-x-2">
				<div class="my-8 flex flex-1 flex-row gap-2">
					<div class="avatar">
						<div class="w-10 rounded-xl">
							<img
							src="/logo.svg"
							alt=""
							/>
						</div>
					  </div>
					<h1 class="inline-block text-xl normal-case">WaveEdu</h1>
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
		<main class="flex h-full flex-col justify-start">
			<!-- Stories --> 
            <!-- devo capire come inserire le stories (gli scr son)-->
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12  h-24" 
				  alt="" 
				  />
                </div> 
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div> 
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div> 
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div> 
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div> 
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div> 
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""/>
                </div>
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div>
                 <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div>
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div>
                <div class="carousel-item">
            	  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24"
				  alt=""
				  />
                </div>
                <div class="carousel-item">
                  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-12 h-24 "
				  alt=""
				  />
                </div>
              </div>
			  <div class="mt-5 grid grid-flow-row gap-4">
				<div class>{chatTitle}</div>
				<div class>{chatTitle}</div>
				<div class>{chatTitle}</div>
				<div class>{chatTitle}</div>
				<div class>{chatTitle}</div>
				<div>{chatTitle}</div>
			  </div>
		</main>
		<footer>
			<div class="navbar m-1 bg-base-100 ">
				<div class="mx-24 footer flex flex-row gap-20">
					<div class="indicator">
						<span class="indicator-item badge badge-neutral">+5</span> 
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M236.06 187.69A84 84 0 0 0 172.29 68.9a84 84 0 1 0-152.35 70.79l-7.24 25.36A18 18 0 0 0 35 187.3l25.36-7.24a84.27 84.27 0 0 0 23.36 7a84.05 84.05 0 0 0 112 41l25.36 7.24a18 18 0 0 0 22.25-22.25Zm-207.7-23.47Zm33.17-9a12 12 0 0 0-3.3.46l-19.49 5.57l5.57-19.49a12 12 0 0 0-1-9.05a60 60 0 1 1 24 24a11.91 11.91 0 0 0-5.78-1.48Zm150.16 34.54l5.57 19.49l-19.49-5.57a12 12 0 0 0-9.05 1A60.06 60.06 0 0 1 111 186.63a83.93 83.93 0 0 0 68.55-91.37a60 60 0 0 1 33.16 85.46a12 12 0 0 0-1.02 9.05Z"/></svg>
							<h4 class="inline-block text-sm normal-case">Chat</h4>					  
						</button>
					</div>
					<button class="active">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>					
					</button>
				</div>
			</div>
		</footer>
	</div>
</Phone>

<Phone>
	<div class="my-6 flex h-full w-full flex-col">
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
