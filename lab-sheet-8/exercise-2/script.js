function processStudent() {

    // Create object using input
    const student = {
        id: Number(document.getElementById("id").value),
        name: document.getElementById("name").value,
        department: document.getElementById("dept").value,
        marks: Number(document.getElementById("marks").value)
    };

    // Object destructuring
    const { id, name, department, marks } = student;

    // Grade logic
    let grade;
    if (marks >= 90) grade = "A";
    else if (marks >= 75) grade = "B";
    else if (marks >= 50) grade = "C";
    else grade = "F";

    // Spread operator to create new object
    const updatedStudent = { ...student, grade };

    // Display output using template literals
    document.getElementById("output").innerHTML = `
        <b>Destructured Values:</b><br>
        ID: ${id} <br>
        Name: ${name} <br>
        Department: ${department} <br>
        Marks: ${marks} <br><br>

        <b>Updated Object:</b><br>
        ${JSON.stringify(updatedStudent)}
    `;
}
