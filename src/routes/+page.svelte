<script lang="ts">
	// import PostDiv from 'components/post_div.svelte';
	import PostDiv from './components/post_div.svelte';
	// import '@fontsource/red-hat-display/300.css';

	let postList: any[];

    const apiURL = "http://localhost:5002/v1";
    

    var headers = {
        'Content-Type': 'application/json',
        "devtoken":" 33c4d102-9ece-4f8d-947a-ea1ab00e9081",
        "apptoken":" 2d4048d3-16f2-48d4-95f4-4ab6a43aac53",
        "userid":" c0db2ee9-0916-4e15-867a-bcd0edd9cc22",
        "usertoken":" 2f12445a-7dd4-4c0b-9bf8-acbc4bece341",
        "accesstoken":" 00dd1e19-0177-498d-af98-cb80073551de"
    };

    import CheckLogin from '../scripts/checkLogin';
    // startup()

    async function startup() {
        console.log("e")
        const data = await CheckLogin("ee");
        console.log(data)
        if (data.success != true) return null;

        headers = data.headers;
        
        await GetFeed();
    }
    GetFeed();

    async function GetFeed() {
        const response = await fetch(`${apiURL}/get/allPosts`, { method: 'GET', headers});
        const data = await response.json();
        postList = data.reverse();
        console.log(postList);
    };

</script>
<h1>Welcome to Interact</h1>
<!-- <div on:load={startup}> -->
<div>
        {#if postList}
        {#each postList as post}
            <PostDiv {post} />
        {/each}
    {/if}
</div>

