const mongoose = require("mongoose");

// craete doctor Schema
const doctorSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name:{
      type:String,
      required:true
    },
  },
  {
    timestamps: true,
  }
);

//create Collection
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
