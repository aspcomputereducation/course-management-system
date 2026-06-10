window.onload = function(){

    document.getElementById("companyName").value =
    localStorage.getItem("companyName") || "";

    document.getElementById("adminName").value =
    localStorage.getItem("adminName") || "";

    document.getElementById("email").value =
    localStorage.getItem("email") || "";

    let theme =
    localStorage.getItem("theme") || "light";

    document.getElementById("theme").value =
    theme;

    applyTheme(theme);
};

function saveSettings(){

    let companyName =
    document.getElementById("companyName").value;

    let adminName =
    document.getElementById("adminName").value;

    let email =
    document.getElementById("email").value;

    let theme =
    document.getElementById("theme").value;

    localStorage.setItem(
        "companyName",
        companyName
    );

    localStorage.setItem(
        "adminName",
        adminName
    );

    localStorage.setItem(
        "email",
        email
    );

    localStorage.setItem(
        "theme",
        theme
    );

    applyTheme(theme);

    alert("Settings Saved Successfully");
}

function applyTheme(theme){

    if(theme === "dark"){

        document.body.classList.add(
            "dark-mode"
        );

    }else{

        document.body.classList.remove(
            "dark-mode"
        );
    }
}
// ======================
// Dashboard Navigation
// ======================

function goDashboard(){

    window.location.href = "dashboard.html";

}