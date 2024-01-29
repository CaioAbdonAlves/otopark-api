require("dotenv").config();

const express = require("express");
const cors = require("cors");

// db
const conn = require("./db/conn.js");

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

app.use(cors({credentials: true, origin: "http://localhost:6001"}));

app.listen(port, () => {
    console.log(`O servidor está rodadando na porta: ${port}`);
});