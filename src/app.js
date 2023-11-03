require("./config/db");

const express = require("express");
const bodyParser = require("body-parser");
//const cookieParser = require("cookie-parser");
const cors = require("cors");
//const path = require("path");
const routes = require("./routes");

// Init Express App
const app = express();

//app.use(cookieParser());

// Parse JSON Date
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//middleware
app.use(cors({ origin: "*" }));

app.use("/api/v1", routes);

module.exports = app;
