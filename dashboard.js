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
function openStudents(){
    window.location.href = "students.html";
}
function logout(){

    if(confirm("Logout?")){

        window.location.href =
        "login.html";
    }
}

// Live Counter Animation

function animateValue(id,start,end,duration){

    let range = end - start;

    let current = start;

    let increment = 1;

    let stepTime =
    Math.abs(Math.floor(duration/range));

    let timer =
    setInterval(function(){

        current += increment;

        document.getElementById(id)
        .innerHTML = current;

        if(current >= end){
            clearInterval(timer);
        }

    },stepTime);
}
animateValue("studentCount",0,500,2000);
animateValue("courseCount",0,25,2000);
animateValue("employeeCount",0,40,2000);