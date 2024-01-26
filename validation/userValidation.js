const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    next();
}