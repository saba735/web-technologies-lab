let xmlData = null;

// Load XML file
function loadBooks() {

    fetch("books.xml")
    .then(response => response.text())
    .then(str => {
        xmlData = new window.DOMParser().parseFromString(str, "text/xml");
        displayBooks();
    })
    .catch(() => alert("Error loading XML file"));
}

// Display books in table
function displayBooks() {

    const table = document.getElementById("bookTable");
    table.innerHTML = "";

    const books = xmlData.getElementsByTagName("book");

    for (let i = 0; i < books.length; i++) {

        const id = books[i].getElementsByTagName("id")[0].textContent;
        const title = books[i].getElementsByTagName("title")[0].textContent;
        const author = books[i].getElementsByTagName("author")[0].textContent;
        const status = books[i].getElementsByTagName("status")[0].textContent;

        table.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${author}</td>
                <td>${status}</td>
            </tr>
        `;
    }
}

// Add new book
function addBook() {

    const id = document.getElementById("bookId").value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    if (!id || !title || !author) {
        alert("Fill all fields");
        return;
    }

    const newBook = xmlData.createElement("book");

    const idNode = xmlData.createElement("id");
    idNode.textContent = id;

    const titleNode = xmlData.createElement("title");
    titleNode.textContent = title;

    const authorNode = xmlData.createElement("author");
    authorNode.textContent = author;

    const statusNode = xmlData.createElement("status");
    statusNode.textContent = "Available";

    newBook.appendChild(idNode);
    newBook.appendChild(titleNode);
    newBook.appendChild(authorNode);
    newBook.appendChild(statusNode);

    xmlData.getElementsByTagName("books")[0].appendChild(newBook);

    displayBooks();
    alert("Book added successfully");
}

// Update availability
function updateBook() {

    const updateId = document.getElementById("updateId").value;
    const newStatus = document.getElementById("status").value;

    const books = xmlData.getElementsByTagName("book");

    for (let i = 0; i < books.length; i++) {

        const id = books[i].getElementsByTagName("id")[0].textContent;

        if (id === updateId) {
            books[i].getElementsByTagName("status")[0].textContent = newStatus;
            displayBooks();
            alert("Book updated successfully");
            return;
        }
    }

    alert("Book ID not found");
}

// Delete book
function deleteBook() {

    const deleteId = document.getElementById("deleteId").value;
    const books = xmlData.getElementsByTagName("book");

    for (let i = 0; i < books.length; i++) {

        const id = books[i].getElementsByTagName("id")[0].textContent;

        if (id === deleteId) {
            books[i].parentNode.removeChild(books[i]);
            displayBooks();
            alert("Book deleted successfully");
            return;
        }
    }

    alert("Book ID not found");
}
