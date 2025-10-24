const Route = require('express').Router()
const userModel = require('../DataBase/UserSchema')
const verify = require('../Middlewares/Verify')
const storageEngine = require('../Middlewares/Multer')
const cloudinary = require('../DataBase/CloudinaryConfig')
const fs  = require("fs")

require("dotenv").config()

// Helper function to upload image as a Promise
const uploadToCloudinary = (filePath) => {
    return new Promise((resolve, reject) => {
       const stream =  cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
            if (error)
                return reject(error)
            resolve(result)
        })
        fs.createReadStream(filePath).pipe(stream)
    })
}

Route.post('/', verify, storageEngine.single('profilePic'), async (req, res) => {
    let publicid = null

    try {
        const data = req.body
        data.Features = [data.Feature]

        // ✅ Wait until image is actually uploaded
        const uploadResult = await uploadToCloudinary(req.file.path)
        data.Image = uploadResult.secure_url
        publicid = uploadResult.public_id

        // ✅ Save user only after successful upload
        const newUser = await userModel.create(data)

        return res.status(200).json({
            message: 'Successfully Added ✅',
            newUser
        })
    }
    catch (err) {
        console.error("Error:", err.message)

        // ✅ If DB fails but image uploaded, remove it
        if (publicid) {
            try {
                await cloudinary.uploader.destroy(publicid)
            } catch (destroyErr) {
                console.error("Failed to delete uploaded image:", destroyErr.message)
            }
        }

        return res.status(500).json({
            message: 'Server error or missing fields ❌',
            error: err.message
        })
    }
})

module.exports = Route
