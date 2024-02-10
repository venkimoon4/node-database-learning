const express=require('express');
const app=express();

const db=require('./db.js');

const bodyParser=require('body-parser');
app.use(bodyParser.json())

const LeagueRoutes=require('./routes/LeagueRoutes.js')

app.use('/justiceleague',LeagueRoutes);




app.listen(3000,()=>{
  console.log('Server Started')
})