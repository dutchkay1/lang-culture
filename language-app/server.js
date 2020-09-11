const express = require('express');
const langRoute = require('./routes/language');
const wordRoute = require('./routes/word');
const transRoute = require('./routes/translation');
require('dotenv').config();
const mongoose = require('mongoose');
const slugify = require('slugify');

const app = express();
app.use(express.json());

app.use('/api/languages', langRoute);
app.use('/api/words', wordRoute);
app.use('/api/translations', transRoute);



let db = 'mongodb://127.0.0.1:27017/language';

mongoose.connect(db,  {
    useNewUrlParser: true, useUnifiedTopology: true, }).then(() => {
    console.log('database connected...')
})
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


