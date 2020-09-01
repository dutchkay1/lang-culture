const express = require('express');
const langRoute = require('./routes/language.routes')
require('dotenv').config()

const app = express();
  

app.use('/api/language', langRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


