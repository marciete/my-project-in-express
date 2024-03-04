const express = require("express");

const app = express();

app.get("/", (request, response) => response.status(200).send("Hello World!"));
app.listen(3333, () => console.log("Server running or port 3333"));
