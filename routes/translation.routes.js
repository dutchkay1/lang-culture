const router = require('express').Router();
const Translation = require('../models/TranslationModel');

router.post('/translate-word', async (req, res, next) => {
  try {
    const translation = await Translation.create(req.body);
    res.status(201).json(translation);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
