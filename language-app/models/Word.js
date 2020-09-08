const mongoose = require('mongoose');

const slugify = require('slugify');

const wordSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A wod mut be word'],
            unique: true,
            trim: true,
        },
        slugify: String,
        descripton: {
            type: String,
            trim: true,
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

wordSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;