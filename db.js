const mongoose=require('mongoose');


// require('dotenv').config();
// const mongodbURL= "mongodb://127.0.0.1:27017/justiceleague"
// const mongodbIntURL=process.env.mongodbOnlineURL;


const mongodbIntURL="mongodb+srv://venkimoon4:venki8904@heros.xz45xn9.mongodb.net/";

mongoose.connect(mongodbIntURL);

const db=mongoose.connection;

db.on('connected',()=>{
  console.log('MongoDB Server Connected')
})

db.on('error',(err)=>{
  console.error('MongoDB Server Error',err)
})

db.on('disconnected',()=>{
  console.log('MongoDB Server Disconnected')
})

module.exports=db;