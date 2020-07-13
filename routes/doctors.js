const express = require('express');
const router = express.Router();
//require doctors controller
const doctorsController=require('../controllers/doctors_controller');

// routes 
router.post('/register',doctorsController.register);
router.post('/login',doctorsController.login);

//exports router
module.exports = router;
