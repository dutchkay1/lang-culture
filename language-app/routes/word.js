const express = require('express');
const { wordGet, wordFetch, wordUpdate, wordDelete } = require('../controllers/Word');
const router = express.Router();

router.get('/', wordGet);

router.post('/', wordFetch);

router.patch('/:id', wordUpdate);

router.delete('/:id', wordDelete);

module.exports = router;