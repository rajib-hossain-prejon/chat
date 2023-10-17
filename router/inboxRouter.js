// external
const express = require('express');

//controller import
const { getInboxes } = require('../controller/inboxController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
//router
const router = express.Router();

//router controller
router.get('/', decorateHtmlResponse('Chammak'), getInboxes);

//export
module.exports = router;
