//external imports
const express = require('express');

//internal imports
const { getUsers } = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

//router
const router = express.Router();

//router control
router.get('/', decorateHtmlResponse('Challo'), getUsers);

//exports
module.exports = router;
