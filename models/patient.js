const mongoose = require("mongoose");

// craete patient Schema
const patientSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    name:{
      type:String,
      required:true
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Doctor',
    }
  },{
    timestamps: true,
  }
);

//create Collection
const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
