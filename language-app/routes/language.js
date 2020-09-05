const express = require('express')
const {index,store} = require('../controllers/Language');
const router = express.Router();


router.get('/', index);
router.post('/words', store);

module.exports  = router


