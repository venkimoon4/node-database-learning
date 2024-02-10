const mongoose=require('mongoose');

const leagueSchema=mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  age:{
    type:Number
  },
  gender:{
    type:String,
    enum:['m',"f"]
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  work:{
    type:String
  },
  phoneno:{
    type:Number
  }
})

const League=mongoose.model("League",leagueSchema);

module.exports=League;