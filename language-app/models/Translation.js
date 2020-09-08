const mongoose = require('mongoose');

const slugify = require('slugify');

const translationSchema = new mongoose.Schema(
    {
        translation: {
            type: String,
            required: [true, 'A word mut be translated'],
            unique: true,
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
            ref: 'wod',
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

translationSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;