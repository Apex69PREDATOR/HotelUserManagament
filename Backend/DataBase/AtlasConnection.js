const mongoose = require('mongoose');

require("dotenv").config()

const password = encodeURIComponent(process.env.DB_PASSWORD)
const db = 'UserManagement'
const uri = `mongodb+srv://arpana036:${password}@apex.2k0me.mongodb.net/${db}?retryWrites=true&w=majority&appName=apex`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function AtlasConn() {
  try {
    
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err) {
    // Ensures that the client will close when you finish/error
    console.log(err);
    
    await mongoose.disconnect();
  }
}
module.exports = AtlasConn