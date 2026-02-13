const mongoose = require("mongoose")
const schema = mongoose.Schema({
    roomno: String,
    roomid: String,
    name: String,
    mobile: String,
    address: String,
    aadhar: String,
    purpose: String,
    paidrent: Number,
    totalrent: Number,
    pendingrent: Number
})

const rrr = mongoose.model("rentroom", schema)
module.exports = rrr