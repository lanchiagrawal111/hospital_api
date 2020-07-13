const mongoose=require('mongoose');

//create report schema
const reportSchema=new mongoose.Schema({
    status:{
        type:String,
        required:true
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
    date:{
        type:Date,
        default:Date.now()
    }
},{
    timestamps:true  
});

const Report=mongoose.model('Report',reportSchema);
module.exports=Report;