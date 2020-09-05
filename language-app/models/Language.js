const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    word : {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,

    },
    translation: {
        type: String,
        required: true,

    },
    image: {
        type: String,
    },
    sound: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

const Language = mongoose.model('language', languageSchema);

module.exports = Language;