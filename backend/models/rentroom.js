const mongoose = require("mongoose")
const schema= mongoose.Schema({
    roomid:String,
    rentername:String,
    renteradhar:String,
    renterno:String,
    roomno:String,
    renteraddress:String,
    renterpurpose:String,
    rentstatus:String,
    paidroomrent:Number
})

const rrr= mongoose.model("rentroom",schema)
module.exports= rrr