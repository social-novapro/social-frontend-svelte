<script lang="ts">
    import CheckLogin from '../../../scripts/checkLogin';
    checking();
    async function checking() {
        const tokens = localStorage.getItem("social.loginUserToken")
        await CheckLogin(tokens);
    }
</script>
<div>
    <!-- <h1>Please Login!</h1>
    <div>
        <p>Enter Username:</p>
        <p><input id="userUsernameLogin" placeholder="Username" type="text" bind:value={username} name="username"></p>
    </div>
    <div>
        <p>Enter Password</p>
        <p><input id="userPasswordLogin" placeholder="Password" type="password" bind:value={password} name="password"></p>
    </div> -->
        <!-- <input class="buttonStyled" type="submit"> -->
    <!-- <div class="button primary" on:click={sendLoginRequest}>Sign in</div> -->

</div>