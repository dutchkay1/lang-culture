const express = require('express');
const langRoute = require('./routes/language')
require('dotenv').config()
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.use('/api/languages', langRoute)


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


