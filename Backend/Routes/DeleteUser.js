const Route = require('express').Router()
const { log } = require('console')
const userModel = require('../DataBase/UserSchema')
const verify = require('../Middlewares/Verify')
const fs = require('fs')
const path = require("path")
const cloudinary = require('../DataBase/CloudinaryConfig')
function getPublicIdFromUrl(url) {
  const regex = /\/upload\/(?:v\d+\/)?(.+?)(\.\w+)?$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}


Route.post('/',verify,async(req,res)=>{
    try{
       const id = req.body.user._id
       const profilePic = req.body.user.Image.split('/')
       const old = await userModel.findByIdAndDelete(id)

       const publicId = getPublicIdFromUrl(old.Image)

       await cloudinary.uploader.destroy(publicId)

    
       const picPath = path.join(__dirname,'../Uploads',profilePic[profilePic.length-1])
    fs.existsSync(picPath) && fs.unlink(picPath,(err)=>{
        if(err)
            throw err
       })
       return res.status(200).json({message:'Deleted successfully'})
       
    }
    catch(err){
       return res.status(500).json({message:'cant delete for now'})
    }
})

module.exports  = Route