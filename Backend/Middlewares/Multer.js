const multer = require("multer")
const path = require("path")
const fs = require("fs").promises

const storage = multer.diskStorage({
    destination:async (req,file,cb)=>{
        const dest = path.join(__dirname,'../Uploads')
        try{
           await fs.access(dest)
        }
        catch(err){
            if(err.code === 'ENOENT'){
            await fs.mkdir(dest,{recursive:true})
            }
        }
       cb(null,dest)
    },
    filename:(req,file,cb)=>{
        const name = file.fieldname +"_" + Date.now() + "_" + file.originalname.replace(/\s+/g, '')
        cb(null,name) 
    }
})

const storageEngine = multer({storage})

module.exports=storageEngine
