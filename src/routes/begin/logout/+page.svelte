<script lang="ts">
    import CheckLogin from '../../../scripts/checkLogin';

    function logOut() {
        localStorage.removeItem("social.loginUserToken");
        let actionBar = document.getElementById("currentActionBarLogout") || undefined;
        if (actionBar) actionBar!.innerText="Removed login from local";
    };
    async function doubleCheckLogin() {
        const tokens = localStorage.getItem("social.loginUserToken")
        console.log(tokens);
        const data = await CheckLogin(tokens);
        console.log(data);
    };
</script>
<div>
    <div on:click={logOut}>Log out Button.</div>
    <div on:click={doubleCheckLogin}>Check Login</div>
    <p id="currentActionBarLogout"></p>
</div>