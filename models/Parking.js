const mongoose = require("../db/conn.js");
const { Schema } = require("mongoose");

const Parking = mongoose.model("Parking", new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    vacancy_number: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    vacancy: {
        type: Array,
        required: true
    },
    owner: {
        type: Object,
        required: true
    },
    employee: Object,
    loose: {
        fixedTime: {type: Number},
        overtime: {type: Number},
        tolerance: {type: Number}
    },
    daily: {
        time: {type: Number},
        dailyPrice: {type: Number},
        overtime: {type: Number},
        tolerance: {type: Number}
    },
    monthly: {
        monthlyPrice: {type: Number},
        vancancy: Object
    },
    overnightStay: {
        overnightStayPrice: {type: Number},
        time: {type: Number},
        overtime: {type: Number},
        tolerance: {type: Number}
    }
}, {timestamps: true}));

module.exports = Parking;