const express = require("express");
const mongoose = require("mongoose");
const controllers = require("./controllers");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MoodsDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));