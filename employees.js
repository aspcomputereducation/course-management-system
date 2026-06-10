let employees = [];

let employeeId = 1;

let editIndex = -1;

function saveEmployee(){

    let name =
    document.getElementById("empName").value;

    let position =
    document.getElementById("empPosition").value;

    let salary =
    document.getElementById("empSalary").value;

    if(
        name === "" ||
        position === "" ||
        salary === ""
    ){
        alert("Please fill all fields");
        return;
    }

    if(editIndex === -1){

        employees.push({
            id: employeeId++,
            name: name,
            position: position,
            salary: salary
        });

    }else{

        employees[editIndex].name = name;
        employees[editIndex].position = position;
        employees[editIndex].salary = salary;

        editIndex = -1;

        document.getElementById("saveBtn")
        .innerText = "Add Employee";
    }

    clearFields();

    displayEmployees();
}

function displayEmployees(){

    let table =
    document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach((employee,index)=>{

        table.innerHTML += `

        <tr>

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.position}</td>

            <td>₹${employee.salary}</td>

            <td>
                <button
                class="edit-btn"
                onclick="editEmployee(${index})">
                Edit
                </button>
            </td>

            <td>
                <button
                class="delete-btn"
                onclick="deleteEmployee(${index})">
                Delete
                </button>
            </td>

        </tr>

        `;
    });
}

function editEmployee(index){

    document.getElementById("empName").value =
    employees[index].name;

    document.getElementById("empPosition").value =
    employees[index].position;

    document.getElementById("empSalary").value =
    employees[index].salary;

    editIndex = index;

    document.getElementById("saveBtn")
    .innerText = "Update Employee";
}

function deleteEmployee(index){

    if(confirm("Delete this employee?")){

        employees.splice(index,1);

        displayEmployees();
    }
}

function clearFields(){

    document.getElementById("empName").value = "";

    document.getElementById("empPosition").value = "";

    document.getElementById("empSalary").value = "";
}
// ======================
// Dashboard Navigation
// ======================

function goDashboard(){

    window.location.href = "dashboard.html";

}