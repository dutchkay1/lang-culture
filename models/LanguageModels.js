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
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },

    //embedded document
    guides: [
      {
        //expecting the schema to be an id in mongo db
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
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

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
