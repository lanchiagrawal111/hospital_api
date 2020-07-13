const express = require('express');
const router = express.Router();
//require passport
const passport=require('passport');
//require patient controller
const patientsController = require('../controllers/patients_controller');

//routes public or private
router.post('/register',passport.authenticate('jwt',{session:false}), patientsController.register);
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientsController.createReport);
router.get('/:id/all_reports',patientsController.allReports);
//export router
module.exports = router;
