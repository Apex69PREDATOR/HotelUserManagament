const Route = require('express').Router()
const userModel = require('../DataBase/UserSchema')
const verify = require('../Middlewares/Verify')

Route.get('/',verify,async(req,res)=>{
    try{
       const users = await userModel.find({});
       
       return res.status(200).json({users})
    }
    catch(err){
        return res.status(500).json({message:'cannot get useers'})
    }
})

module.exports  = Route