require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

// db
const conn = require("./db/conn.js");

// user routes
const userRoutes = require("./routes/UserRoutes");

app.use('/users', userRoutes);


app.use(cors({credentials: true, origin: "http://localhost:6001"}));

app.listen(port, () => {
    console.log(`O servidor está rodadando na porta: ${port}`);
});