
let students = [
    { name: "Rahul", age: 20, marks: 85 },
    { name: "Aditi", age: 21, marks: 92 },
    { name: "Aman", age: 19, marks: 76 }
];

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let marksInput = document.getElementById("marks").value;
    let marks = Number(marksInput);

    if (
        name === "" ||
        document.getElementById("age").value === "" ||
        marksInput === "" ||
        !Number.isInteger(age) ||
        age <= 0 ||
        !Number.isFinite(marks) ||
        marks < 0 ||
        marks > 100
    ) {
        alert("Enter a valid name, age, and marks (0–100).");
        return;
    }

    students.push({
        name: name,
        age: age,
        marks: marks
    });

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("marks").value = "";

    showStudents();
}

function showStudents() {
    let studentList = document.getElementById("studentList");
    let toppersList = document.getElementById("toppersList");

    studentList.innerHTML = "";
    toppersList.innerHTML = "";

    students.forEach(function(student) {
        let li = document.createElement("li");
        li.textContent = student.name + " - " + student.marks;
        studentList.appendChild(li);
    });

    let toppers = students.filter(function(student) {
        return student.marks >= 80;
    });

    toppers.forEach(function(student) {
        let li = document.createElement("li");
        li.textContent = student.name + " - " + student.marks;
        toppersList.appendChild(li);
    });

    let total = students.reduce(function(sum, student) {
        return sum + student.marks;
    }, 0);

    let average = total / students.length;

    document.getElementById("average").textContent =
        "Class Average: " + average.toFixed(2);
}

// Display initial records
showStudents();