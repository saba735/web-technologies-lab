let students = [];

function loadStudents(){

    fetch("students.json")
    .then(res => res.json())
    .then(data => {
        students = data;
        displayStudents();
    })
    .catch(() => alert("Error loading JSON"));
}

function displayStudents(){

    const table = document.getElementById("table");
    table.innerHTML = "";

    students.forEach((s,index) => {

        table.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.course}</td>
                <td>${s.marks}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index){
    students.splice(index,1);
    displayStudents();
}
