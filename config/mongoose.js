const mongoose = require("mongoose");
//connect to the database
mongoose.connect("mongodb://localhost/hospital_api_db", {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex:true
});
//acquire the connection(to check if it is successful)
const db = mongoose.connection;
//error

db.on("error", console.error.bind(console, "error connectng to db"));
//up and running then print message
db.once("open", function () {
  console.log("Successfully connected to database");
});
module.exports=db;