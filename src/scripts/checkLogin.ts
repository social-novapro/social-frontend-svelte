async function CheckLogin(ee:any) {
    const apiURL = "http://localhost:5002/v1";
    let client_tokens = localStorage.getItem("social.loginUserToken")
    var returnData: any;
    returnData = {}
    // returnData.headers: any

    returnData.headers = {
        'Content-Type': 'application/json',
        "devtoken": "33c4d102-9ece-4f8d-947a-ea1ab00e9081",
        "apptoken": "2d4048d3-16f2-48d4-95f4-4ab6a43aac53",
    };
    returnData.apiURL = "http://localhost:5002/v1"

    /*
        success: Boolean
        message: String
        apiURL: String
        headers
            appToken
            devToken
            accessToken
            userToken
            userID
    */

    const userStorageLogin = client_tokens
    if (!userStorageLogin) {
        returnData.success = false
        returnData.message = "No found login."

    } else {
        let currentUserLogin = JSON.parse(userStorageLogin)

        returnData.headers.accesstoken = currentUserLogin.accessToken
        returnData.headers.usertoken = currentUserLogin.userToken
        returnData.headers.userid = currentUserLogin.userID

        const response = await fetch(`${apiURL}/auth/checkToken/`, {
            method: 'GET',
            headers: returnData.headers,
        })

        const data = await response.json()

        // console.log(data);

        if (!data.login) {
            returnData.headers = null;
            returnData.success = false;
            returnData.message = "Login tokens have an error, please sign in again.";
        } else {
            returnData.success = true;
        };
    };

    return returnData;
}

export default CheckLogin;