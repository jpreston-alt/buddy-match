const express = require("express");
const logger = require("morgan");
const path = require("path");
const petRoutes = require("./routes/api/pets");
const orgRoutes = require("./routes/api/organizations");
const tokenRoutes = require("./routes/token");
const favoritesRoutes = require("./routes/api/favorites");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddy-match");

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds133340.mlab.com:33340/heroku_nmnd0rk9", { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// import API routes
app.use(petRoutes);
app.use(orgRoutes);
app.use(tokenRoutes);
app.use(favoritesRoutes);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});