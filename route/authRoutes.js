const express = require('express');
const router = express.Router();
const {registerUser,loginUser,userData,updateUser,verifyMail,createResume} = require('../controller/authController');
const authMiddleware = require('../config/authMidddleware');


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/userdata',authMiddleware,userData)
router.post('/update', updateUser);
router.post('/verify-mail',verifyMail);
router.post('/resumes', createResume);

module.exports = router;
