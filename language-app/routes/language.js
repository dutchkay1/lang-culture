const express = require('express')
const {index,store,updateLang,deleteLang} = require('../controllers/Language');
const router = express.Router();


router.get('/', index);

router.post('/words', store);

router.patch('/words/:id', updateLang);

router.delete('/words/:id', deleteLang);






module.exports  = router;


