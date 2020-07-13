const Doctor=require('../models/doctor');
const jwt=require('jsonwebtoken');

// register doctor
module.exports.register=async function (req,res){

    //console.log("**********",req.body);
    try{
       let doctor=await Doctor.create({    // create doctor
         username:req.body.username,
         password:req.body.password,
         name:req.body.name
       });
       if(doctor){                        // doctor created
        return res.json(200,{
        message:"Register successfully"
       });
      }

    }catch(err){               // handle error
      return res.json(200,{
       message:"username is already registered",
       error:err

      });
  }
}  
// login for registered user
module.exports.login=async function (req,res) {

  try{
  let doctor=await Doctor.findOne({username:req.body.username});  // find doctor
   
  // if not found or password not matches
  if(!doctor || doctor.password!=req.body.password){
    return res.json(422,{
      message:"Invalid Userame/Password"
    });
  }
   // found doctor and return
  return res.json(200,{
    message:'Sign in successful,here is your token plz keep it safe',
    data:{
      token:jwt.sign(doctor.toJSON(),'aceraspire5750',{expiresIn:'5h'})
    }
  });
}catch{                             // handle error
   return res.json(500,{
     message:'Internal Server Error'

   });
}
}