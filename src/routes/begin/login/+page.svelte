<script lang="ts">
    import CheckLogin from '../../../scripts/checkLogin';

    let username: string;
    let password: string;

    var headers = {
        'Content-Type': 'application/json',
        "devtoken": "33c4d102-9ece-4f8d-947a-ea1ab00e9081",
        "apptoken": "2d4048d3-16f2-48d4-95f4-4ab6a43aac53",
        "username": "null",
        "password": "null",
    };
    
    const apiURL = "http://localhost:5002/v1";


    async function sendLoginRequest() {
        headers.username = username
        headers.password = password
        
        // const response = await fetch(`${baseURL}Priv/get/userLogin/`, {
        const response = await fetch(`${apiURL}/auth/userLogin/`, {
            method: 'GET',
            headers,
        })

        // if (response.status != 200) 
        console.log(response)
        const userData = await response.json()
        console.log(userData)

        if (response.ok) saveLoginUser(userData.userID, userData.userToken, userData.accessToken)
        // else return showModal(`<p>Error: ${userData.code}\n${userData.msg}</p>`)

        if (userData.login === true) return // redirection()
    }

    function saveLoginUser(userID: String, userToken: String, accessToken: String ) {
        localStorage.setItem("social.loginUserToken", JSON.stringify({
            userID, userToken, accessToken
        }))
    }

    async function doubleCheckLogin() {
        const tokens = localStorage.getItem("social.loginUserToken")
        console.log(tokens)
        const data = await CheckLogin(tokens);
        console.log(data)
    }
</script>
<div>
    <h1>Please Login!</h1>
    <div>
        <p>Enter Username:</p>
        <p><input id="userUsernameLogin" placeholder="Username" type="text" bind:value={username} name="username"></p>
    </div>
    <div>
        <p>Enter Password</p>
        <p><input id="userPasswordLogin" placeholder="Password" type="password" bind:value={password} name="password"></p>
    </div>
        <!-- <input class="buttonStyled" type="submit"> -->
    <div class="button primary" on:click={sendLoginRequest}>Sign in</div>
    <div on:click={doubleCheckLogin}>Check Login</div>

</div>