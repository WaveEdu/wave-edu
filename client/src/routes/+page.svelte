<script lang="ts">
  let email = '';
  let loading = false;
  let successMessage = '';
  let errorMessage = '';

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    loading = true;

    const response = await fetch('http://localhost:8080/api/auth/link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const {message, cookieToken} = await response.json();

    if(message){
        successMessage = 'A Magic Link has been sent to your email address. Please click it to log in.';
        document.cookie = `node-magic-link-check=${cookieToken}; path=/;`;
    } else {
        errorMessage = 'An error occurred. Please try again later.';
        loading = false;
        return;
    }
    loading = false;
  }
</script>

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