<script>
	import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<div class="ml-2 navbar bg-base-100 space-x-2">
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
                <button class="rounded-box border-gray-200 border-4 hover:border-gray-300 p-1 text-center">Logout</button>
                <button class="mt-1 rounded-box border-gray-200 border-4 hover:border-gray-300 p-1 text-center">Aggiungi Storia</button>
            </ul>
        </details>
    </div>
</div>			
