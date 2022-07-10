const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Server is working properly");
});

app.listen(8080, () => {
    console.log("Listen on the port 3000...");
});