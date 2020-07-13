const express=require('express');
const app=express();  // create instance of express
const port=8000;
//require jwt-strategy
const passportJWT=require('./config/passport-jwt-strategy');
// require mongoose
const db=require('./config/mongoose');

//encoded form data that is submitted
app.use(express.urlencoded());

// use express router
app.use('/',require('./routes/index'));

//listen on port 
app.listen(port,function(err){
    if(err)
    console.log(`Error in running the server: ${err}`);

    console.log(`Server is running on port: ${port}`);
});