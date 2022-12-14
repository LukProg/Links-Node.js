const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path")
const linkRoute = require("./routes/linkRoute")

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/newlinks");

let db = mongoose.connection;

db.on("error", () => console.log("There is an error"));
db.once("open", () => console.log("DB Loaded"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"))

app.use("/", linkRoute)

app.listen(port, () => console.log("Example app listening on port:", port));
