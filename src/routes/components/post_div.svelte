<script lang="ts">
    let postData: any;

    export let post: any = {};
    if (post) {
        postData = post;
        // console.log(post)
    }

    // import CheckLogin from '../../scripts/checkLogin';
    // import { onMount } from 'svelte';

    // onMount(async () => {
    //     const data = await CheckLogin("ee");
    //     if (data.success != true) return null;
    //     await pageCode(data);
	// });

    // async function pageCode(startData:any) {
    //     const { headers, apiURL } = startData
    //     await GetUser(apiURL, headers);
    // }

    // async function GetUser(apiURL:string, headers:any) {
    //     // const postID = $page.params.id;
    //     const userID = postData.userID;
    //     const response = await fetch(`${apiURL}/get/userByID/${userID}`, { method: 'GET', headers});
    //     const data = await response.json();
    //     post = data;
    //     // console.log(postList);
    // };

</script>
<div>
    {#if postData?.postData?.content}
        <div class="userInfo">
           {#if postData.userData}
                <a href="/u/{postData.userData._id}">
                    <p>{postData.userData.username}</p>
                </a>
           {/if}
            <a href="/post/{postData.postData._id}">
                <p>{postData.postData.content}</p>
            </a>
        </div>
    {/if}
</div>