const cloudinary = require('cloudinary').v2
require('dotenv').config()
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDNAME,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    api_key:process.env.CLOUDINARY_API_KEY
})

module.exports=cloudinary