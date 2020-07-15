const express = require("express");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});