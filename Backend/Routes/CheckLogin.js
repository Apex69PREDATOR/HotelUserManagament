const Route  = require('express').Router()
const verify = require('../Middlewares/Verify')

Route.get('/',verify,(req,res)=>{
     
     return res.status(200).json({message:'logged in successfully'})
})

module.exports = Route