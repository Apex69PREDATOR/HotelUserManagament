const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    UserId:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true},
    Name:{type:String,required:true},
    Number:{type:String,required:true,unique:true},
    Image:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Date:{type:Date,required:true,default:Date.now},
    Catagory:{type:String,required:true},
    Amount:{type:Number,required:true}

})

const orderModel  = mongoose.model('Orders',orderSchema)

module.exports=orderModel