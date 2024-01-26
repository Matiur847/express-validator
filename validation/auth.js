const { check } = require("express-validator");

exports.userRegisterValidateion = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('Name field required')
        .isLength({ min: 5 })
        .withMessage('name must be 5 character'),
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Enter your email')
        .isEmail()
        .withMessage('Enter you valid email, missing @'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage('Enter your password')
        .isLength(8)
        .withMessage('Password must be 8 characters'),
    check('dob')
        .trim()
        .notEmpty()
        .withMessage('date of birth missing')
        .isISO8601()
        .toDate()
        .withMessage('Not a valid date'),
]

exports.userLoginValidation = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Enter your email')
        .isEmail()
        .withMessage('Enter you valid email, missing @'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage('Email/Password invalid')
]