
const mongoose= require("mongoose")
const schema= mongoose.Schema({
    roomno:String,
    roomtype:String,
    roomstatus:String,
    roomrent:String

})

const rr= mongoose.model("rooms",schema)
module.exports= rr 