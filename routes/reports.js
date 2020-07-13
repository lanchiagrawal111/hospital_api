const express=require('express');
const router=express.Router();
//require reports controller
const reportsController=require('../controllers/reports_controller');

//route
router.get('/:status',reportsController.fetchReports);
//export router
module.exports=router;