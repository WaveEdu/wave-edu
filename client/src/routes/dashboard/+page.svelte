<!-- make a get request to http://localhost:8080/api/user passing node-magic-link-session cookie -->
<script lang="ts">
    import {PUBLIC_DEPLOY_URL_SERVER} from '$env/static/public';    
    import { onMount } from 'svelte';
    
    interface User {
        id: string;
        email: string;
        name: string;
        userType: string;
        chatIDs: string[];
    }

    let users: User[] = [];

    // in realtà per prendere i dati bisogna usare +page.server.ts usate questo per post, put, delete
    const getUsers = async () => {
    try {
        const res = await fetch(`${PUBLIC_DEPLOY_URL_SERVER}/api/user`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        })

        if (res.status === 403) {
            const { message } = await res.json();
            throw new Error(message);
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
    }
 
    onMount(async () => {
        users = await getUsers();
    });
</script>

<main>
    <h1>Dashboard</h1>
 
    <button on:click={() => {
        users = [];
        getUsers().then(data => {
            users = data;
        });
    }}>Get Users</button>

     {#await getUsers()}
        <p>Loading...</p>
    {:then data}
        {#if data.length > 0}
            <ul>
                {#each data as user}
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                {/each}
            </ul>
        {:else}
            <p>No users found.</p>
        {/if}
    {:catch error}
        <p>{error.message}</p>
    {/await}
  
</main>
