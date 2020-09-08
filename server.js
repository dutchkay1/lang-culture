const express = require('express');
const mongoose = require('mongoose');
const langRoute = require('./routes/language.routes');
const wordRoute = require('./routes/word.routes');
const translationRoute = require('./routes/translation.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/language', langRoute);
app.use('/api/word', wordRoute);
app.use('/api/translation', translationRoute);

mongoose
  .connect('mongodb://localhost:27017/languages', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`db connected 👌👌`);
  })
  .catch((err) => console.log(err.message));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
