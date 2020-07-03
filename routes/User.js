const express = require('express')
const UserController = require("../controller/User");
const router = express.Router();


router.get('/test', UserController.test);

module.exports = router;