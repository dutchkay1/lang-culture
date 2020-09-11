const express = require('express');
const { transGet, transFetch, transUpdate, transDelete } = require('../controllers/Translation');
const router = express.Router();



router.get('/', transGet);

router.post('/', transFetch);

router.patch('/:id', transUpdate);

router.delete('/:id', transDelete);


module.exports = router;