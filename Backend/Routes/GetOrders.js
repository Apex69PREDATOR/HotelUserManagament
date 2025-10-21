const Route = require('express').Router()
const orderModel = require('../DataBase/Orders')
const verify = require('../Middlewares/Verify')

Route.get('/',verify,async(req,res)=>{
    try{
       const orders = await orderModel.find({});

       return res.status(200).json({orders})
    }
    catch(err){
        return res.status(500).json({message:'cannot get orders'})
    }
})

module.exports  = Route