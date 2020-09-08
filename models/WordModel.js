const mongoose = require('mongoose');
const slugify = require('slugify');

const wordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A word must be word'],
      unique: true,
      trim: true,
    },
    slug: String,
    description: {
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
    toObject: { virtuals: true },
  }
);

wordSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
