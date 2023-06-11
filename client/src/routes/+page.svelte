<script>
	import Phone from '../components/Phone.svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';
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
			<button class="btn mt-5 w-full btn-active bg-slate-200 border-gray-200 hover:bg-gray-300 hover:border-gray-300">Accedi</button>
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
			<div class="alert mt-5 h-14 place-items-center grid-rows-1  bg-amber-500">
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
				<span>Invalid email address!</span>
			</div>
			<button class="btn mt-5 w-full btn-active bg-slate-200 border-gray-200 hover:bg-gray-300 hover:border-gray-300">Accedi</button>
		</main>
	</div>
</Phone>

<h2 class="mt-7 mb-4 text-xl font-bold underline">Schermate Chat Professore</h2>
<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<div class="navbar bg-base-100 space-x-2">
				<div class="mt-8 flex flex-1 flex-row gap-2">
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
				<ThemeToggle />
				<div class="dropdown dropdown-end">
					<details class="dropdown">
						<summary class="btn btn-square btn-ghost mt-8">
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
							></summary>
						<ul class="shadow menu dropdown-content bg-white rounded-box w-52">
							<button class="rounded-box border-gray-300 border-4 hover:border-gray-400 p-1 text-center">Logout</button>
							<button class="mt-1 rounded-box border-gray-300 border-4 hover:border-gray-400 p-1 text-center">Aggiungi Storia</button>
						</ul>
					</details>
				</div>
			</div>			
			<!-- Stories --> 
            <!-- devo capire come inserire le stories (gli scr son)-->
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-slate-200 rounded-box">
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

		</header>
		<main>
			  <div class="mt-2 overflow-y-scroll">
				<table class="table">
				  <tbody>
					<!-- row 1 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
							  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
							</div>
						  </div>
						  <div>
							<div class="font-bold">Hart Hagerty</div>
							<div class="text-sm opacity-50">United States</div>
						  </div>
						</div>
					  </td>
					  <td>
						...
					  </td>
					</tr>
					<!-- row 2 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
							  <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
							</div>
						  </div>
						  <div>
							<div class="font-bold">Brice Swyre</div>
							<div class="text-sm opacity-50">China</div>
						  </div>
						</div>
					  </td>
					  <td>
						...
					  </td>
					</tr>
					<!-- row 3 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
							  <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
							</div>
						  </div>
						  <div>
							<div class="font-bold">Marjy Ferencz</div>
							<div class="text-sm opacity-50">Russia</div>
						  </div>
						</div>
					  </td>
					  <td>
						...
					  </td>
					</tr>
					<!-- row 4 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
							  <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
							</div>
						  </div>
						  <div>
							<div class="font-bold">Yancy Tear</div>
							<div class="text-sm opacity-50">Brazil</div>
						  </div>
						</div>
					  </td>
					  <td>
						...
					  </td>
					</tr>
					<!-- row 5 -->
					<tr>
						<td>
						  <div class="flex items-center space-x-3">
							<div class="avatar">
							  <div class="mask mask-squircle w-12 h-12">
								<img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
							</div>
							</div>
							<div>
							  <div class="font-bold">Brice Swyre</div>
							  <div class="text-sm opacity-50">China</div>
							</div>
						  </div>
						</td>
						<td>
							...
						</td>
					</tr>
				  </tbody>
				</table>
			  </div>
		</main>
		<footer>
			<div class="navbar m-1 bg-base-100 ">
				<div class="mx-24 footer flex flex-row gap-20">
					<div class="indicator">
						<span class="indicator-item badge bg-slate-200 border-gray-200">+5</span> 
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

<Phone>
	<div class="flex h-full w-full flex-col">
		<header>
			<div class="navbar bg-base-100 space-x-2">
				<div class="mt-8 flex flex-1 flex-row gap-2">
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
				<div class="dropdown dropdown-end">
					<details class="dropdown">
						<summary class="btn btn-square btn-ghost">
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
							></summary>
						<ul class="shadow menu dropdown-content bg-slate-200  rounded-box w-52">
						  <button class=" text-center">Logout</button>
						</ul>
					</details>
				</div>
			</div>
			<!-- Stories --> 
            <!-- devo capire come inserire le stories (gli scr son)-->
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-slate-200 rounded-box">
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

		</header>
		<main class="flex h-full flex-col justify-start overflow-y-scroll">
			<div class="">
				<table class="table">
				  <!-- head -->
				  <thead>
					<tr>
					  <th>
						Profilo 
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"><path fill="currentColor" d="M12 19.575q-.2 0-.375-.062T11.3 19.3l-6.6-6.6q-.3-.3-.3-.712t.3-.713q.3-.3.7-.3t.7.3l4.9 4.9v-11.2q0-.425.288-.7T12 4q.425 0 .713.288T13 5v11.175l4.9-4.9q.3-.3.7-.3t.7.3q.3.3.3.713t-.3.712l-6.6 6.6q-.15.15-.325.213t-.375.062Z"/></svg>
					  </th>
					  <th>Teacher Role</th>
					  <th>Opzioni</th>
					</tr>
				  </thead>
				  <tbody>
					<!-- row 1 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								alt=""
								/>							
							</div>
						  </div>
						  <div>
							<div class="font-bold">Name</div>
						  </div>
						</div>
					  </td>
					  <td>
						<input type="checkbox" class="toggle" checked />
					  </td>
					  <th>
						<button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						</button>
					  </th>
					</tr>
					<!-- row 2 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								alt=""
								/>							
							</div>
						  </div>
						  <div>
							<div class="font-bold">Name</div>
						  </div>
						</div>
					  </td>
					  <td>
						<input type="checkbox" class="toggle" checked />					  </td>
					  <th>
						<button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						  </button>
					  </th>
					</tr>
					<!-- row 3 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								alt=""
								/>							
							</div>
						  </div>
						  <div>
							<div class="font-bold">Name</div>
						  </div>
						</div>
					  </td>
					  <td>
						<input type="checkbox" class="toggle" checked />					  </td>
					  <th>
						<button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						 </button>
					  </th>
					</tr>
					<!-- row 4 -->
					<tr>
					  <td>
						<div class="flex items-center space-x-3">
						  <div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								alt=""
								/>							
							</div>
						  </div>
						  <div>
							<div class="font-bold">Name</div>
						  </div>
						</div>
					  </td>
					  <td>
						<input type="checkbox" class="toggle" checked />					  </td>
					  <th>
						<button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						</button>
					  </th>
					</tr>
					<!-- row 5 -->
					<tr>
						<td>
						  <div class="flex items-center space-x-3">
							<div class="avatar">
							  <div class="mask mask-squircle w-12 h-12">
								  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								  alt=""
								  />							
							  </div>
							</div>
							<div>
							  <div class="font-bold">Name</div>
							</div>
						  </div>
						</td>
						<td>
							<input type="checkbox" class="toggle" checked />						</td>
						<th>
							<button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
							  </button>
						</th>
					</tr>
					<!-- row 6 -->
					<tr>
						<td>
						  <div class="flex items-center space-x-3">
							<div class="avatar">
							  <div class="mask mask-squircle w-12 h-12">
								  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								  alt=""
								  />							
							  </div>
							</div>
							<div>
							  <div class="font-bold">Name</div>
							</div>
						  </div>
						</td>
						<td>
							<input type="checkbox" class="toggle" checked />						</td>
						<th>
						   <button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
						   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						   </button>
						</th>
					</tr>
					<!-- row 7 -->
					<tr>
						<td>
						  <div class="flex items-center space-x-3">
							<div class="avatar">
							  <div class="mask mask-squircle w-12 h-12">
								  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								  alt=""
								  />							
							  </div>
							</div>
							<div>
							  <div class="font-bold">Name</div>
							</div>
						  </div>
						</td>
						<td>
							<input type="checkbox" class="toggle" checked />						</td>
						<th>
						  <button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						  </button>
						</th>
					</tr>
					<!-- row 8 -->
					<tr>
						<td>
						  <div class="flex items-center space-x-3">
							<div class="avatar">
							  <div class="mask mask-squircle w-12 h-12">
								  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								  alt=""
								  />							
							  </div>
							</div>
							<div>
							  <div class="font-bold">Name</div>
							</div>
						  </div>
						</td>
						<td>
						  <input type="checkbox" class="toggle" checked />
						</td>
						<th>
						  <button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						  </button>
						</th>
					  </tr>
					<!-- row 9 -->
					<tr>
						<td>
						  <div class="flex items-center space-x-3">
							<div class="avatar">
							  <div class="mask mask-squircle w-12 h-12">
								  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								  alt=""
								  />							
							  </div>
							</div>
							<div>
							  <div class="font-bold">Name</div>
							</div>
						  </div>
						</td>
						<td>
						  <input type="checkbox" class="toggle" checked />
						</td>
						<th>
						  <button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						  </button>
						</th>
					  </tr>
					<!-- row 10 -->
					<tr>
						<td>
						  <div class="flex items-center space-x-3">
							<div class="avatar">
							  <div class="mask mask-squircle w-12 h-12">
								  <img src={'https://placehold.co/400'} class="rounded-box object-fit w-11 h-24"
								  alt=""
								  />							
							  </div>
							</div>
							<div>
							  <div class="font-bold">Name</div>
							</div>
						  </div>
						</td>
						<td>
						  <input type="checkbox" class="toggle" checked />
						</td>
						<th>
						  <button class="btn bg-white border-white hover:bg-white hover:border-white btn-md">
							  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"/></svg>
						  </button>
						</th>
					  </tr>
				  </tbody>				  
				</table>
			  </div>
		</main>
	</div>
</Phone>