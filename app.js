const express = require("express");
const PORT = 4002;
const app = express();
const bodyParser = require('body-parser');
const http = require('http');

app.get("/", (req, res) => {
    res.json({ message: " Api running...." });

    res.end();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


require("./routes/routes.js")(app);

const server = http.createServer(app);
server.listen(PORT, function() {
    console.log('Node app is running on port 4002');
});