const mongoose = require ("mongoose");
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email : String,
    tel : String,
    password : String,
    confirmPassword : String 
});
const user = mongoose.model("User",userSchema);
module.exports=user;