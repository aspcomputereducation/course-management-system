document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    let savedUser =
    JSON.parse(
        localStorage.getItem("user")
    );

    let message =
    document.getElementById("message");

    if(
        savedUser &&
        username === savedUser.username &&
        password === savedUser.password
    ){

        message.style.color = "lime";

        message.innerHTML =
        "Login Success ✅";

        setTimeout(() => {

            window.location.href =
            "dashboard.html";

        },1000);

    }
    else{

        message.style.color = "yellow";

        message.innerHTML =
        "Invalid Login ❌";

    }

});