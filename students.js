let students =
JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;

displayStudents();

/* Add / Update Student */

function addStudent(){

    let studentId =
    document.getElementById("studentId").value;

    let name =
    document.getElementById("name").value;

    let course =
    document.getElementById("course").value;

    let age =
    document.getElementById("age").value;

    let phone =
    document.getElementById("phone").value;

    let email =
    document.getElementById("email").value;

    let gender =
    document.getElementById("gender").value;

    let fees =
    document.getElementById("fees").value;

    let paidAmount =
    document.getElementById("paidAmount").value;

    let balance =
    document.getElementById("balance").value;

    let status =
    document.getElementById("status").value;

    let dueDate =
    document.getElementById("dueDate").value;

    let receiptNo =
    document.getElementById("receiptNo").value;

    let paymentMode =
    document.getElementById("paymentMode").value;

    if(
        studentId === "" ||
        name === "" ||
        course === "" ||
        age === ""
    ){
        alert("Please fill all required fields");
        return;
    }

    let studentData = {

        id:Number(studentId),
        name,
        course,
        age,
        phone,
        email,
        gender,

        fees,
        paidAmount,
        balance,
        status,
        dueDate,
        receiptNo,
        paymentMode

    };

    if(editIndex === -1){

        let duplicate =
        students.find(
        s => s.id == studentId);

        if(duplicate){

            alert("Student ID already exists");
            return;
        }

        students.push(studentData);

    }else{

        students[editIndex] =
        studentData;

        editIndex = -1;

        document.getElementById(
        "studentBtn").innerText =
        "Add Student";
    }

    saveData();
    displayStudents();
    clearForm();
}

/* Display Students */

function displayStudents(){

    let table =
    document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student,index)=>{

        let statusClass = "";

        if(student.status === "Paid"){
            statusClass = "paid";
        }
        else if(student.status === "Part Payment"){
            statusClass = "part";
        }
        else if(student.status === "Pending"){
            statusClass = "pending";
        }
        else if(student.status === "Unpaid"){
            statusClass = "unpaid";
        }
        else if(student.status === "Overdue"){
            statusClass = "overdue";
        }

        table.innerHTML += `

        <tr>

            <td>${student.id}</td>

            <td>${student.name}</td>

            <td>${student.course}</td>

            <td>${student.age}</td>

            <td>${student.phone}</td>

            <td>${student.email}</td>

            <td>${student.gender}</td>

            <td>₹${student.fees || 0}</td>

            <td>₹${student.paidAmount || 0}</td>

            <td>₹${student.balance || 0}</td>

            <td class="${statusClass}">
                ${student.status || "-"}
            </td>

            <td>
                ${student.dueDate || "-"}
            </td>

            <td>
                ${student.receiptNo || "-"}
            </td>

            <td>
                ${student.paymentMode || "-"}
            </td>

            <td>

                <button
                class="edit-btn"
                onclick="editStudent(${index})">
                Edit
                </button>

                <button
                class="delete-btn"
                onclick="deleteStudent(${index})">
                Delete
                </button>

            </td>

        </tr>

        `;
    });

    document.getElementById(
    "totalStudents").innerText =
    students.length;
}

/* Edit Student */

function editStudent(index){

    let student =
    students[index];

    document.getElementById("studentId").value =
    student.id;

    document.getElementById("name").value =
    student.name;

    document.getElementById("course").value =
    student.course;

    document.getElementById("age").value =
    student.age;

    document.getElementById("phone").value =
    student.phone;

    document.getElementById("email").value =
    student.email;

    document.getElementById("gender").value =
    student.gender;

    document.getElementById("fees").value =
    student.fees;

    document.getElementById("paidAmount").value =
    student.paidAmount;

    document.getElementById("balance").value =
    student.balance;

    document.getElementById("status").value =
    student.status;

    document.getElementById("dueDate").value =
    student.dueDate;

    document.getElementById("receiptNo").value =
    student.receiptNo;

    document.getElementById("paymentMode").value =
    student.paymentMode;

    editIndex = index;

    document.getElementById(
    "studentBtn").innerText =
    "Update Student";
}

/* Delete Student */

function deleteStudent(index){

    if(confirm(
    "Delete this student?")){

        students.splice(index,1);

        saveData();
        displayStudents();
    }
}

/* Search Student */

function searchStudent(){

    let value =
    document.getElementById("search")
    .value.toLowerCase();

    let rows =
    document.querySelectorAll(
    "#studentTable tr");

    rows.forEach(row=>{

        row.style.display =

        row.innerText
        .toLowerCase()
        .includes(value)

        ? ""

        : "none";
    });
}

/* Auto Balance */

function calculateBalance(){

    let fees =
    Number(
    document.getElementById("fees").value);

    let paid =
    Number(
    document.getElementById("paidAmount").value);

    let balance =
    fees - paid;

    document.getElementById(
    "balance").value = balance;
}

/* Save Data */

function saveData(){

    localStorage.setItem(
    "students",
    JSON.stringify(students));
}

/* Clear Form */

function clearForm(){

    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("fees").value = "";
    document.getElementById("paidAmount").value = "";
    document.getElementById("balance").value = "";
    document.getElementById("status").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("receiptNo").value = "";
    document.getElementById("paymentMode").value = "";

    editIndex = -1;

    document.getElementById(
    "studentBtn").innerText =
    "Add Student";
}

/* Dashboard */

function goDashboard(){

    window.location.href =
    "dashboard.html";
}