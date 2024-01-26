const express = require('express');
const { userRegister, userLogin } = require('../controllers/userController');
const router = express.Router()
const { check, body, validationResult } = require('express-validator');
const { runValidation } = require('../validation/userValidation');
const { userRegisterValidateion, userLoginValidation } = require('../validation/auth');

router.post('/register', userRegisterValidateion, runValidation, userRegister)

router.post('/login', userLoginValidation, runValidation, userLogin)

module.exports = router;