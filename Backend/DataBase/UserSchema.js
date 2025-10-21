const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    Name:{type:String,required:true},
    Number:{type:String,required:true,unique:true},
    Image:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Address:{type:String,required:true},
    Designation:{type:String,required:true},
    Note:String,
    Role:{type:String,required:true},
    Features:{type:Array}

})

const userModel  = mongoose.model('User',userSchema)

module.exports=userModel