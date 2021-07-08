const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const controllers = require("./controllers");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(logger("combined"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MoodsDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(controllers);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));