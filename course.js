// =========================
// Course Management System
// =========================

// Load Data

let courses = JSON.parse(localStorage.getItem("courses")) || [];

let editIndex = -1;

// Initial Display

displayCourses();

// =========================
// Add / Update Course
// =========================

function addCourse() {

    const courseCode =
        document.getElementById("courseCode").value.trim();

    const courseName =
        document.getElementById("courseName").value.trim();

    const category =
        document.getElementById("category").value.trim();

    const duration =
        document.getElementById("duration").value;

    const fees =
        document.getElementById("fees").value;

    const trainer =
        document.getElementById("trainer").value.trim();

    const seats =
        document.getElementById("seats").value;

    const startDate =
        document.getElementById("startDate").value;

    const status =
        document.getElementById("status").value;

    const description =
        document.getElementById("description").value.trim();

    // Validation

    if (
        courseCode === "" ||
        courseName === "" ||
        category === ""
    ) {
        alert("Please fill all required fields!");
        return;
    }

    const course = {

        courseCode,
        courseName,
        category,
        duration,
        fees,
        trainer,
        seats,
        startDate,
        status,
        description

    };

    // Update

    if (editIndex !== -1) {

        courses[editIndex] = course;

        editIndex = -1;

        document.getElementById("courseBtn").innerText =
            "Add Course";

        alert("Course Updated Successfully!");

    }

    // Add

    else {

        courses.push(course);

        alert("Course Added Successfully!");

    }

    saveCourses();

    clearForm();

    displayCourses();
}

// =========================
// Display Courses
// =========================

function displayCourses(data = courses) {

    const table =
        document.getElementById("courseTable");

    table.innerHTML = "";

    if (data.length === 0) {

        table.innerHTML = `

        <tr>

            <td colspan="11">
                No Courses Available
            </td>

        </tr>

        `;

    }

    data.forEach((course, index) => {

        table.innerHTML += `

        <tr>

            <td>${course.courseCode}</td>

            <td>${course.courseName}</td>

            <td>${course.category}</td>

            <td>${course.duration}</td>

            <td>₹${course.fees}</td>

            <td>${course.trainer}</td>

            <td>${course.seats}</td>

            <td>${course.startDate}</td>

            <td>${course.status}</td>

            <td>${course.description}</td>

            <td>

                <button
                class="edit-btn"
                onclick="editCourse(${index})">

                    Edit

                </button>

                <button
                class="delete-btn"
                onclick="deleteCourse(${index})">

                    Delete

                </button>

            </td>

        </tr>

        `;
    });

    document.getElementById("totalCourses").innerText =
        courses.length;
}

// =========================
// Edit Course
// =========================

function editCourse(index) {

    const course = courses[index];

    document.getElementById("courseCode").value =
        course.courseCode;

    document.getElementById("courseName").value =
        course.courseName;

    document.getElementById("category").value =
        course.category;

    document.getElementById("duration").value =
        course.duration;

    document.getElementById("fees").value =
        course.fees;

    document.getElementById("trainer").value =
        course.trainer;

    document.getElementById("seats").value =
        course.seats;

    document.getElementById("startDate").value =
        course.startDate;

    document.getElementById("status").value =
        course.status;

    document.getElementById("description").value =
        course.description;

    editIndex = index;

    document.getElementById("courseBtn").innerText =
        "Update Course";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// =========================
// Delete Course
// =========================

function deleteCourse(index) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    courses.splice(index, 1);

    saveCourses();

    displayCourses();

    alert("Course Deleted Successfully!");
}

// =========================
// Search Course
// =========================

function searchCourse() {

    const searchText =
        document.getElementById("search")
        .value
        .toLowerCase();

    const filteredCourses = courses.filter(course =>

        course.courseCode
        .toLowerCase()
        .includes(searchText)

        ||

        course.courseName
        .toLowerCase()
        .includes(searchText)

        ||

        course.category
        .toLowerCase()
        .includes(searchText)

        ||

        course.trainer
        .toLowerCase()
        .includes(searchText)

    );

    displayCourses(filteredCourses);
}

// =========================
// Save Data
// =========================

function saveCourses() {

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );
}

// =========================
// Clear Form
// =========================

function clearForm() {

    document.getElementById("courseCode").value = "";

    document.getElementById("courseName").value = "";

    document.getElementById("category").value = "";

    document.getElementById("duration").value = "";

    document.getElementById("fees").value = "";

    document.getElementById("trainer").value = "";

    document.getElementById("seats").value = "";

    document.getElementById("startDate").value = "";

    document.getElementById("status").value = "";

    document.getElementById("description").value = "";

    editIndex = -1;

    document.getElementById("courseBtn").innerText =
        "Add Course";
}

// =========================
// Dashboard Navigation
// =========================

function goDashboard() {

    window.location.href = "dashboard.html";
}