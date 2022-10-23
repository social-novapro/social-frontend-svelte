<script lang="ts">
	import { page } from '$app/stores';

    let user: any;
    let activeUserID: String;
    import CheckLogin from '../../../scripts/checkLogin';
    import { onMount } from 'svelte';

    onMount(async () => {
        const data = await CheckLogin("ee");
        if (data.success != true) return null;
        await pageCode(data);
	});

    async function pageCode(startData:any) {
        const { headers, apiURL } = startData
        activeUserID = headers.userID
        await GetUser(apiURL, headers);
    }

    async function GetUser(apiURL:string, headers:any) {
        const userID = $page.params.id;
        const response = await fetch(`${apiURL}/get/user/${userID}`, { method: 'GET', headers});
        const data = await response.json();
        user = data;

        console.log(user)

    };
</script>
<h1>Welcome to User</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<div>
    {#if user?.userData.username}
        <p>cheese</p>
    {:else}
        <p>no valid id</p>
    {/if}
</div>

