const mongoose = require("../db/conn.js");
const { Schema } = require("mongoose");

const Customer = mongoose.model("Customer", new Schema({
    name: {
        type: String,
        required: true
    },
    document: {
      type: String,  
    },
    phone: {
        type: String,
        required: true
    },
    vehicle: {
        type: Array,
        required: true
    },
    parking: {
        type: Schema.Types.ObjectId,
        ref: 'Parking',
        required: true
    }
}, {timestamps: true}));

module.exports = Customer;