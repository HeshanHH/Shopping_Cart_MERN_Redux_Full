const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    // for now use parentId and this will use in sub categories.
    parentId: {
      type: String,
    },
    // type: {
    //   type: String,
    // },
    // categoryImage: { type: String },
    // parentId: {
    //   type: String,
    // },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
