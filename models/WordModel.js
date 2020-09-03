const mongoose = require('mongoose');
const slugify = require('slugify');

const wordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A language must have a name'],
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

const Language = mongoose.model('Word', wordSchema);

module.exports = Language;
