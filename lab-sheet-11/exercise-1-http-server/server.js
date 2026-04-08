const http = require("http");

const server = http.createServer((req, res) => {

    // Set header
    res.setHeader("Content-Type", "text/html");

    // Response
    res.write("<h2>Welcome to Node.js Server</h2>");
    res.write("<p>Server is running successfully</p>");
    
    res.end();
});

// Run server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});