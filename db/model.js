const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:Number,
    Address:String,
    DOB:String,
    age:Number,

})

module.exports=mongoose.model("data",userSchema)