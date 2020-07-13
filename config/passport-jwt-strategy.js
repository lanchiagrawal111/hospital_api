const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
// extract jwt from header
const ExtractJWT=require('passport-jwt').ExtractJwt;
const Doctor=require('../models/doctor');

let opts={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'aceraspire5750'
}
//use passport 
passport.use(new JWTStrategy(opts,function (jwtPayload,done) {
    
    // find doctor by id
    Doctor.findById(jwtPayload._id,function (err,doctor) {
        if(err){console.log('Error in finding doctor');return;}
 
        if(doctor){               // return doctor
         return done(null,doctor);
        }else{
            return done(null,false);       
        }
        
    });
}));
module.exports=passport;