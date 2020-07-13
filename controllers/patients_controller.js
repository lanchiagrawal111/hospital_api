const Patient=require('../models/patient');
const jwt=require('jsonwebtoken');
const Report = require('../models/report');

//register the patient by authorized doctor
module.exports.register=async function (req,res) {
    try{
         const usertoken = req.headers.authorization; // read token from header.auth
         const token = usertoken.split(" "); // split tiken
         const decoded = jwt.verify(token[1], "aceraspire5750"); // verify token
         // console.log(decoded);
         // find patient by phone no
         let patient = await Patient.findOne({ phone: req.body.phone });
         if (patient) {                  // if exist, return
           return res.json(200, {
             message: "Patient already exist",
             details: patient,
           });
         } else {                         // create patient
           let createdBy = decoded._id;
           req.body.createdBy = createdBy;
           let patient = await Patient.create(req.body);
           return res
             .json(200, {
               message: "Patient registered successfully",
               details: patient,
             })
             .populate("createdBy");
         }
       }catch(err){           // handle error
  return res.json(400,{
      message:"Internal server error",
      error:err
  });
}
}
// create report for patient
module.exports.createReport= async function (req,res) {
   try{

    const usertoken = req.headers.authorization;
    const token = usertoken.split(" ");
    const decoded = jwt.verify(token[1], "aceraspire5750");
    let report=await Report.create({         // create report
        status:req.body.status, 
        doctor:decoded._id,
        patient:req.params.id
    });
     return res.status(200).json({        // return created report
         message:'New Report Generated!',
         details:report
     });
   }catch(err){                      //handle error
   return res.status(500).json({
       message:'Internal server error',
       error:err
   });
   }
}

// all reports of particular patient
module.exports.allReports=async function (req,res) {
    
    try{
       
       let report=await Report.find({patient:req.params.id }) //find report
       .populate('doctor')       // populate doctor
       .populate('patient');     // populate patient
       return res.status(200).json({
           message:'all reports',         // return all reports
           details:report
       }); 
    }catch(err){                       //handle error
       return res.status(500).json({
         message: "Internal server error",
       });
    }
}