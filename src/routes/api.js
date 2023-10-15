const { createWork, updateStatus, AllWorks, deleteWork } = require('../controllers/WorksController');
const { createStudentData, StudentLogIn, updateStudentData, resetPassword, updatePassword } = require('../controllers/studentControllers');
const { authVerification } = require('../middleware/AuthVerification');

const router = require('express').Router();


router.post('/createStudentData' , createStudentData);
router.post('/studentLogIn' , StudentLogIn);
router.post('/updateStudentData/:id', authVerification , updateStudentData);
router.post('/updatePassword/:email',updatePassword);

//to create Data 
router.post('/createWork' , authVerification , createWork);
// for Update Data
router.post('/updateStatus/:id' , authVerification, updateStatus);
//to Read all data
router.get('/getAllWorks', authVerification , AllWorks)
//to delete data by ID 
router.get('/deleteWork/:id' , authVerification , deleteWork);
//user password reset
router.post('/resetPassword' ,  resetPassword);

module.exports = router;