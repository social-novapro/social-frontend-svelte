<script lang="ts">
	// import PostDiv from 'components/post_div.svelte';
	// import PostDiv from './components/post_div.svelte';
	// import '@fontsource/red-hat-display/300.css';
	import { page } from '$app/stores';

	let post: any;

    const apiURL = "http://localhost:5002/v1";
    var headers = {
        'Content-Type': 'application/json',
        "devtoken": "33c4d102-9ece-4f8d-947a-ea1ab00e9081",
        "apptoken": "2d4048d3-16f2-48d4-95f4-4ab6a43aac53",
        "userid": "c0db2ee9-0916-4e15-867a-bcd0edd9cc22",
        "usertoken": "2f12445a-7dd4-4c0b-9bf8-acbc4bece341",
        "accesstoken": "00dd1e19-0177-498d-af98-cb80073551de"
    };

    const postID = $page.params.id;
    GetPost();


    async function GetPost() {
        const response = await fetch(`${apiURL}/get/post/${postID}`, { method: 'GET', headers});
        const data = await response.json();
        post = data;
        // console.log(postList);
    };

    console.log(post)


    // fetch('https://api.huelet.net/videos/get?bulk=true')
	// 	.then((response) => response.json())
	// 	.then((videos) => {
	// 		videoList = videos.data;
	// 	});
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

