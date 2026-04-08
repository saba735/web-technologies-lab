const express = require("express");
const app = express();

// Global Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

// Route-level Middleware
const checkAuth = (req, res, next) => {
    console.log("Auth checked");
    next();
};

// Route
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/secure", checkAuth, (req, res) => {
    res.send("Secure Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});