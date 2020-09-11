const mongoose = require('mongoose');

 
const translationSchema = new mongoose.Schema(
    {
        translation: {
            type: String,
            required: [true, 'A word mut be translated'],
             trim: true,
        },
        slug: String,
        descripton: {
            type: String,
            trim: true,
        },
        language: {
            type: mongoose.Schema.ObjectId,
            ref: 'Language',
            required: [true,'no language included'],
        },
        word: {
            type: mongoose.Schema.ObjectId,
            ref: 'Word',
            required: [true,'every word must have translation'],
        },
        sound: String,
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false,
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true},
    }
);


const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;