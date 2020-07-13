const Report=require('../models/report');

// fetch reports using status
module.exports.fetchReports=async function (req,res) {
    try{
         // find report by status 
        let report=await Report.find({status:req.params.status})
        .populate('doctor')
        .populate('patient');
         // if exist ,return report
         if(report.length>0){
         return res.status(200).json({       // return fetch report
             message:"All report of "+req.params.status+" status of all patients",
             details:report
         });
        }else{          // not exist of this status
            return res.status(200).json({
                message:"The report of "+ req.params.status+" status not exist"
            })
        }
    }catch{                 //handle error
         return res.status(500).json({
             message:'Internal server error'
         })
    }
    
}