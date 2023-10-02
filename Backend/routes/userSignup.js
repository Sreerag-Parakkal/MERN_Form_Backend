const express = require("express");
const { userSignup } = require("../controllers/controller");
const router = express.Router();


router.route('/userSignup').post(userSignup);

module.exports = router