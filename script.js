function showPage(pageId){

    let pages =
    document.querySelectorAll(".page");

    pages.forEach(function(page){
        page.classList.remove("active");
    });

    document
    .getElementById(pageId)
    .classList.add("active");
}

function logout(){

    let confirmLogout =
    confirm("Are you sure you want to logout?");

    if(confirmLogout){
        alert("Logged Out Successfully");
        window.location.href = "login.html";
    }
}