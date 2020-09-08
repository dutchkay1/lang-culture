const Word = require('../models/WordModel');

exports.newWord = async (req, res, next) => {
  try {
    console.log(req.body);
    const word = await Word.create(req.body);
    res.status(201).json(word);
  } catch (error) {
    next(error);
  }
};
