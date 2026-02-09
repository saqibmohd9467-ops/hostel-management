const mongoose = require("mongoose")
const schema= mongoose.Schema({
  roomtype:String
})

const rt= mongoose.model("roomtype",schema)
module.exports= rt