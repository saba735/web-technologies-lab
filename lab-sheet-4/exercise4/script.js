let students = [];

function addStudent() {

    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const dept = document.getElementById("dept").value;
    const marks = document.getElementById("marks").value;

    if(!id || !name || !dept || !marks){
        alert("Fill all fields");
        return;
    }

    students.push({id, name, dept, marks});
    displayStudents();
}

function displayStudents(){

    const table = document.getElementById("table");
    table.innerHTML = "";

    students.forEach((s, index) => {
        table.innerHTML += `
            <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.dept}</td>
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
