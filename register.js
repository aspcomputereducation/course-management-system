let registerForm =
document.getElementById("registerForm");

let profileImage =
document.getElementById("profileImage");

let preview =
document.getElementById("preview");

profileImage.addEventListener(
"change",
function(){

    let file =
    this.files[0];

    if(file){

        let reader =
        new FileReader();

        reader.onload =
        function(e){

            preview.src =
            e.target.result;

        }

        reader.readAsDataURL(file);
    }

});

registerForm.addEventListener(
"submit",
function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;

    let msg =
    document.getElementById("msg");

    if(password !== confirmPassword){

        msg.style.color = "yellow";

        msg.innerHTML =
        "Passwords do not match";

        return;
    }

    let user = {
        name,
        email,
        username,
        password,
        image: preview.src
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    msg.style.color = "lime";

    msg.innerHTML =
    "Registration Successful ✅";

    setTimeout(() => {

        window.location.href =
        "login.html";

    },1500);

});