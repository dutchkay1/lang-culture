const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World')
});

router.get('/words', (req, res) => {
    res.send('avalable words ')
});


router.patch('/words', (req, res)=>{
    res.send('edited')
})

module.exports  = router