const mongoose = require("../db/conn.js");
const { Schema } = require("mongoose");

const User = mongoose.model("User", new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true}));

module.exports = User;