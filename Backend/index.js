const express = require('express')
const app = express();
const PORT = 3000
const cors = require('cors')
const AtlasConn = require('./DataBase/AtlasConnection')
const path = require('path')

app.use(cors())
app.use(express.json())
app.use('/upload',express.static(path.join(__dirname,'Uploads')))
AtlasConn()
app.get('/',(req,res)=>{
    res.send('Happy Diwali!')
})

app.use('/getOrders',require('./Routes/GetOrders'))
app.use('/getUsers',require('./Routes/GetUsers'))
app.use('/login',require('./Routes/Login'))
app.use('/check',require('./Routes/CheckLogin'))
app.use('/addUser',require('./Routes/AddUser'))
app.use('/deleteUser',require('./Routes/DeleteUser'))
app.use('/editUser',require('./Routes/EditUser'))

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})