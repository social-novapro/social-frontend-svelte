<script lang="ts">
	// import PostDiv from 'components/post_div.svelte';
	import PostDiv from './components/post_div.svelte';
	// import '@fontsource/red-hat-display/300.css';

	let postList: any[];

    const apiURL = "http://localhost:5002/v1";
    

    var headers = { };

    import CheckLogin from '../scripts/checkLogin';
    import { onMount } from 'svelte';
    // https://svelte.dev/tutorial/onmount

    onMount(async () => {
        const data = await CheckLogin("ee");
        if (data.success != true) return null;

        headers = data.headers;
        await GetFeed();
	});

    // GetFeed();

    async function GetFeed() {
        const response = await fetch(`${apiURL}/get/allPosts`, { method: 'GET', headers});
        const data = await response.json();
        postList = data.reverse();
    };

</script>
<!-- <div on:load={startup}> -->
<div>
    {#if postList}
        {#each postList as post}
            <PostDiv {post} />
        {/each}
    {/if}
</div>

