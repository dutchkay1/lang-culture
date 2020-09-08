const Language = require('../models/LanguageModel');

exports.newLanguage = async (req, res, next) => {
  try {
    console.log(req.body);
    const language = await Language.create(req.body);
    res.status(201).json(language);
  } catch (error) {
    next(error);
  }
};
