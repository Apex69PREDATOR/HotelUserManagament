const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       const dest = path.join(__dirname,'../Uploads')
       cb(null,dest)
    },
    filename:(req,file,cb)=>{
        const name = file.fieldname +"_" + Date.now() + "_" + file.originalname.replace(/\s+/g, '')
        cb(null,name) 
    }
})

const storageEngine = multer({storage})

module.exports=storageEngine
