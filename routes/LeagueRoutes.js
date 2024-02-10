const express=require('express');

const League=require('../models/LeagueSchema.js')

const routes=express.Router()

// POST

routes.post('/', async(req,res)=>{

  try{
   const data=req.body;
   const newLeague=new League(data);
   const savedLeague=await newLeague.save();
   console.log("Data Saved");
   res.status(201).json(savedLeague);
  }
  catch(err){
    console.log('Error in Server',err)
    res.status(500).json({error:"Internal Server Error"})
  }

})

// GET

routes.get("/",async(req,res)=>{
  try{
    const data= await League.find();
    console.log("data fetched to server")
    res.status(200).json(data);
  }
  catch(err){
    console.log('Error in Server',err)
    res.status(500).json({error:"Internal Server Error"})
  }
})


// GET USIND _Id

routes.get('/:id',async(req,res)=>{

  try{
    const leagueID=req.params.id;
    const dataOfLeaguer=await League.find({_id:leagueID})
    console.log("data found on Id");
    res.status(200).json(dataOfLeaguer);

  }
  catch(err){
    console.log('Error in Server',err)
    res.status(500).json({error:"Internal Server Error"})
  }

  // PUT (UPDATE)

  routes.put('/:id', async (req,res)=>{

    try{
      const leagueId=req.params.id;
      const dataToUpdate=req.body;

      const updatedLeagueData= await League.findByIdAndUpdate(leagueId,dataToUpdate,{
        new:true,
        runValidators:true,
      });

      if(!updatedLeagueData){
        console.log('data is not matched to id you have presented')
        res.status(404).json({error:"Given Id Not Found In League"})
      }

      console.log("data updated");
      res.status(200).json(updatedLeagueData)

    }
    catch(err){
      console.log('Error in Server',err)
      res.status(500).json({error:"Internal Server Error"})
    }

  })

})

routes.delete('/:id',async(req,res)=>{

  try{
    const leagueId=req.params.id;

    const deleteLeagueData= await League.findByIdAndDelete(leagueId);

    if(!deleteLeagueData){
      console.log('data is not matched to id you have presented')
      res.status(404).json({error:"Given Id Not Found In League"})
    }

    console.log('data deleted');
    res.status(200).json(deleteLeagueData);
  }
  catch(err){
    console.log('Error in Server',err)
    res.status(500).json({error:"Internal Server Error"})
  }

})

module.exports=routes;