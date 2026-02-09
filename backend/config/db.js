const mongoose= require("mongoose")

const connectdb= async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/testingdb7")
        console.log("Connection Successful")
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports= connectdb