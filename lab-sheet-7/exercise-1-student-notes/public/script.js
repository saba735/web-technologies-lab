const api = "http://localhost:3000/notes";

function addNote() {

    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;

    fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            subject,
            description
        })
    })
    .then(res => res.json())
    .then(data => {
    alert("Note Added Successfully");

    document.getElementById("title").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("description").value = "";
});
}

function getNotes() {

    fetch(api)
    .then(res => res.json())
    .then(notes => {

        let output = "";

        notes.forEach(note => {

            output += `
            <div>
                <h3>${note.title}</h3>
                <p>${note.subject}</p>
                <p>${note.description}</p>

                <button onclick="deleteNote('${note._id}')">Delete</button>
                <button onclick="editNote('${note._id}')">Edit</button>

                <hr>
            </div>
            `;
        });

        document.getElementById("notes").innerHTML = output;

    });
}

function deleteNote(id) {

    fetch(api + "/" + id, {
        method: "DELETE"
    })
    .then(() => {
        alert("Note Deleted");
        getNotes();
    });
}

function editNote(id) {

    const newTitle = prompt("Enter new title");
    const newDescription = prompt("Enter new description");

    fetch(api + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: newTitle,
            description: newDescription
        })
    })
    .then(() => {
        alert("Note Updated");
        getNotes();
    });
}