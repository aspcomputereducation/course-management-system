// ======================
// Load Dashboard Reports
// ======================

loadSummary();

function loadSummary() {

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    const students =
        JSON.parse(localStorage.getItem("students")) || [];

    const trainers =
        JSON.parse(localStorage.getItem("trainers")) || [];

    let revenue = 0;

    courses.forEach(course => {

        revenue += Number(course.fees || 0);

    });

    document.getElementById("totalCourses").innerText =
        courses.length;

    document.getElementById("totalStudents").innerText =
        students.length;

    document.getElementById("totalTrainers").innerText =
        trainers.length;

    document.getElementById("totalRevenue").innerText =
        "₹" + revenue.toLocaleString();
}

// ======================
// Generate Report
// ======================

function generateReport() {

    const reportType =
        document.getElementById("reportType").value;

    const table =
        document.getElementById("reportTable");

    table.innerHTML = "";

    if(reportType === ""){

        alert("Select Report Type");

        return;
    }

    let data = [];

    if(reportType === "Course Report"){

        data =
        JSON.parse(localStorage.getItem("courses")) || [];

        data.forEach((course,index)=>{

            table.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${course.courseName}</td>

                <td>${course.category}</td>

                <td>${course.startDate}</td>

                <td>${course.status}</td>

            </tr>

            `;

        });

    }

    else if(reportType === "Student Report"){

        data =
        JSON.parse(localStorage.getItem("students")) || [];

        data.forEach((student,index)=>{

            table.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${student.name || "-"}</td>

                <td>${student.course || "-"}</td>

                <td>${student.joinDate || "-"}</td>

                <td>${student.status || "-"}</td>

            </tr>

            `;

        });

    }

    else if(reportType === "Trainer Report"){

        data =
        JSON.parse(localStorage.getItem("trainers")) || [];

        data.forEach((trainer,index)=>{

            table.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${trainer.name || "-"}</td>

                <td>${trainer.specialization || "-"}</td>

                <td>${trainer.joinDate || "-"}</td>

                <td>${trainer.status || "-"}</td>

            </tr>

            `;

        });

    }

    else if(reportType === "Revenue Report"){

        const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

        courses.forEach((course,index)=>{

            table.innerHTML += `

            <tr>

                <td>${index+1}</td>

                <td>${course.courseName}</td>

                <td>${course.category}</td>

                <td>${course.startDate}</td>

                <td>₹${course.fees}</td>

            </tr>

            `;

        });

    }

    if(table.innerHTML === ""){

        table.innerHTML = `

        <tr>

            <td colspan="5">
                No Data Available
            </td>

        </tr>

        `;
    }
}

// ======================
// Dashboard Navigation
// ======================

function goDashboard(){

    window.location.href = "dashboard.html";

}