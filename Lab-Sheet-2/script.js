/* Exercise 1: Canvas */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 50);

ctx.beginPath();
ctx.arc(200, 70, 30, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.moveTo(20, 150);
ctx.lineTo(300, 150);
ctx.stroke();

ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("HTML5 Canvas", 150, 200);

/* Exercise 2: Audio & Video */
const audio = document.getElementById("audio");
const video = document.getElementById("video");

audio.ontimeupdate = () => {
    document.getElementById("audioTime").innerText = audio.currentTime.toFixed(1);
};

video.ontimeupdate = () => {
    document.getElementById("videoTime").innerText = video.currentTime.toFixed(1);
};

/* Exercise 3: Drag & Drop */
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    if (ev.target.id === "done") {
        document.getElementById(data).style.background = "lightgreen";
        document.getElementById("message").innerText = "Task Completed Successfully";
    }
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (taskInput.value === "") return;

    const task = document.createElement("div");
    task.className = "task";
    task.id = "task" + Date.now();
    task.draggable = true;
    task.ondragstart = drag;
    task.innerText = taskInput.value + " (" + new Date().toLocaleDateString() + ")";

    document.getElementById("todo").appendChild(task);
    taskInput.value = "";
}

/* Exercise 4: LocalStorage */
function registerUser(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    if (mobile.length !== 10 || password.length < 6) {
        alert("Invalid mobile or password");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === email)) {
        alert("Email already registered");
        return;
    }

    users.push({ name, email, mobile });
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((u, i) => {
        table.innerHTML += `
            <tr>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.mobile}</td>
                <td><button onclick="deleteUser(${i})">Delete</button></td>
            </tr>
        `;
    });
}

function deleteUser(i) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(i, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers();
}

function clearUsers() {
    localStorage.clear();
    loadUsers();
}

loadUsers();
