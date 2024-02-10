const express=require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.PORT || 3000

const db=require('./db.js');

const bodyParser=require('body-parser');
app.use(bodyParser.json())

const LeagueRoutes=require('./routes/LeagueRoutes.js')

app.use('/justiceleague',LeagueRoutes);


app.listen(PORT,()=>{
  console.log('Server Started')
})