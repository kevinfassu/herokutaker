const {application} = require("express");
const express = require("express");
const { resolve } = require("node:path");
const path = require ("node:path");
const api = require("./routes/api")

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());

app.use("api/notes", api);

app.use(express.static("public"));



app.get("/", (require, resolve) => resolve)