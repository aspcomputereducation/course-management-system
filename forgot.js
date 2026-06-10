function recoverPassword(){

    let username =
    document.getElementById("username").value;

    let user =
    JSON.parse(
    localStorage.getItem("user")
    );

    let result =
    document.getElementById("result");

    if(
        user &&
        username === user.username
    ){

        result.style.color =
        "green";

        result.innerHTML =
        "Password : " + user.password;

    }
    else{

        result.style.color =
        "red";

        result.innerHTML =
        "Username Not Found";

    }

}