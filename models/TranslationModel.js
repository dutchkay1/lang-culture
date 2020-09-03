const mongoose = require('mongoose');
const slugify = require('slugify');

const languageSchema = new mongoose.Schema(
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
    //embedded document
    language: {
      //expecting the schema to be an id in language collection
      type: mongoose.Schema.ObjectId,
      ref: 'Language',
      required: [true, 'no language included'],
    },
    word: {
      //expecting the schema to be an id in word collection
      type: mongoose.Schema.ObjectId,
      ref: 'Word',
      required: [true, 'Every word must have a translation'],
    },
    sound: String,
    description_img: String,
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

languageSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Language = mongoose.model('Tour', languageSchema);

module.exports = Language;
