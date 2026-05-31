const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);

server.listen(1337);

app.use(express.static(path.join(__dirname, "..", "client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});
