const fs = require("fs");

// Create file
fs.writeFile("sample.txt", "Hello Sabareesh!", (err) => {
    if (err) throw err;
    console.log("File created");

    // Read file
    fs.readFile("sample.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);

        // Append data
        fs.appendFile("sample.txt", "\nAppending new data", (err) => {
            if (err) throw err;
            console.log("Data appended");

            // Delete file
            fs.unlink("sample.txt", (err) => {
                if (err) throw err;
                console.log("File deleted");
            });
        });
    });
});