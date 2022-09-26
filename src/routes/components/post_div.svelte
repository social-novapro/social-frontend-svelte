<script lang="ts">
    let postData: any;

    export let post: any = {};
    if (post) {
        postData = post;
    }

</script>
<div>
    {#if postData?.postData?.content}
        <a href="/post/{postData.postData._id}">
            <p>{postData.postData.content}</p>
        </a>
    {/if}
</div>