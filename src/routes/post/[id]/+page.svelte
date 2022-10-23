<script lang="ts">
	import { page } from '$app/stores';
	let post: any;

    import CheckLogin from '../../../scripts/checkLogin';
    import { onMount } from 'svelte';

    onMount(async () => {
        const data = await CheckLogin("ee");
        if (data.success != true) return null;
        await pageCode(data);
	});

    async function pageCode(startData:any) {
        const { headers, apiURL } = startData;
        await GetPost(apiURL, headers);
    };


    async function GetPost(apiURL:string, headers:any) {
        const postID = $page.params.id;
        const response = await fetch(`${apiURL}/get/post/${postID}`, { method: 'GET', headers});
        const data = await response.json();
        post = data;
    };
</script>
<h1>Welcome to Post</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<div>
    {#if post?._id}
        <div id="postElement_{post._id}" class="postElement">
            <div class="publicPost areaPost" id="postdiv_${post._id}">
                <!-- <p class="pointerCursor ${post.userID == currentUserLogin.userID ? "ownUser" : "otherUser"}" ${user ? ` onclick="userHtml('${post.userID}')"> ${user.displayName} @${user.username}${user.verified ? ' ✔️ ' : ''}` : '>Unknown User'} | ${timesince}</p> -->
                <div class="postContent" id="postContentArea_${post._id}">
                    <div class="textAreaPost">
                        <p id="postContent_${post._id}">{post.content}</p>
                        {#if post.edited}
                            <p><i class="edited"> (edited)</i></p>
                        {/if}
                    </div>
                    <!-- ${post.quoteReplyPostID && post.quotedPost && post.quotedUser ? `<hr><div>${postElementCreate(post.quotedPost, post.quotedUser, "basic")}</div>` : ''} -->
                    <div class="PostAttachments">
                        <!-- ${imageContent.image ? `<div>${imageContent.attachments.map(function(attachment) {return `${attachment}`}).join(" ")}</div>`:''} -->
                    </div>
                </div>
                <!-- <div class="actionOptions pointerCursor"> 
                    <p onclick="likePost('${post._id}')" id="likePost_${post._id}">${post.totalLikes} likes</p>
                    <p>${post.totalReplies} comments</p>
                    <p id="quoteButton_${post._id}"><p onclick="quotePost('${post._id}')">quote post</p></p>
                    ${post.userID == currentUserLogin.userID ? `
                        <p onclick="deletePost('${post._id}')">delete post</p>
                        <p id='editButton_${post._id}'><p onclick="editPost('${post._id}', '${post.edited}')">edit post</p></p>
                    ` : '' }</p>
                    <p id="popupactions_${post._id}" onclick="popupActions('${post._id}')">more</p>
                </div> -->
            </div>
        </div>
    {:else}
        <p>no valid id</p>
    {/if}
</div>

