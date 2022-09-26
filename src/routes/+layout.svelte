<script lang="ts">
    import CheckLogin from '../scripts/checkLogin';
    import { onMount } from 'svelte';
    // https://svelte.dev/tutorial/onmount

    async function redirect() {

        return {
            status: 302,
            redirect: "/begin/login"
        };
    }

    onMount(async () => {
        const data = await CheckLogin("ee");
        if (data.success != true) return redirect();
	});
    
</script>
<div>
    <h1>Welcome To Interact</h1>
</div>
<nav>
    <a href="/">Home</a>
    <a href="/begin/login">Login</a>
    <a href="/begin/logout">Logout</a>
</nav>
<slot></slot>