const Route = require('express').Router()
const userModel = require('../DataBase/UserSchema')
const verify = require('../Middlewares/Verify')
const storageEngine = require('../Middlewares/Multer')

require("dotenv").config()

Route.post('/',verify,storageEngine.single('profilePic'),async(req,res)=>{
    try{
       const data = req.body
       const profileImage = process.env.SERVER_URL + '/upload/' + req.file.filename
       data.Image=profileImage
       
       data.Features = [data.Feature]
       
       const newUser = await new userModel(data)
       await newUser.save()
       
       return res.status(200).json({message:'Successfully Added',newUser})
       
    }
    catch(err){
        return res.status(500).json({message:'server error or all values not given'})
    }
})

module.exports  = Route