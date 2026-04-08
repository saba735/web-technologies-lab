const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// GET
app.get("/users", (req, res) => {
    res.json(users);
});

// POST
app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({ message: "User added", user });
});

// PUT
app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json({ message: "User updated" });
});

// DELETE
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});