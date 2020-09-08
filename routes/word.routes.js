const express = require('express');

const wordController = require('../controller/word.controller');

const router = express.Router();

/****
 * task to do
 * 1) read all the words from the db
 * 2) update word
 * 3) delete word
 */

router.post('/new-word', wordController.newWord);

module.exports = router;
