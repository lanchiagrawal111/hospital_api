
const express=require('express');
const config=require('config');
let morgan = require("morgan");
const app=express();  // create instance of express
const port=8000;
const db=require('./config/mongoose');
const passportJWT=require('./config/passport-jwt-strategy');



//encoded form data that is submitted
app.use(express.urlencoded());

// use express router
app.use('/',require('./routes/index'));

if (config.util.getEnv("NODE_ENV") !== "test") {
  //use morgan to log at command line
  app.use(morgan("combined")); //'combined' outputs the Apache style LOGs
}

//listen on port 
app.listen(port,function(err){
    if(err)
    console.log(`Error in running the server: ${err}`);

    console.log(`Server is running on port: ${port}`);
});
module.exports=app;