const express = require('express');

const languageController = require('../controller/language.controller');

const router = express.Router();

/****
 * task to do
 * 1) read all the langauge from the db
 * 2) update langauge
 * 3) delete langauge
 */

router.post('/new-language', languageController.newLanguage);

module.exports = router;
