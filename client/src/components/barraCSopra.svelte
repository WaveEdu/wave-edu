<script>
	let chatTitle = 'Chat';
</script>

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