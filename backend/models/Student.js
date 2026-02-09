
const mongoose = require("mongoose")
const schema= mongoose.Schema({
    studentname:String,
    roomno:String,
    address:String,
    mobileno:String,
    aadhaar:String,
    purpose:String,
    rentstatus:String
})

const ss= mongoose.model("student",schema)
module.exports= ss 