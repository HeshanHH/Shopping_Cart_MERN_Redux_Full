const Category = require('../models/category');
const slugify = require('slugify');
exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name), //  slug will not allow to create a category with same name.
  };
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) {
      return res.status(400).json({ error: error });
    }
    if (category) {
      return res.status(201).json({ category: category });
    }
  });
};

exports.getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error });
    if (categories) {
      res.status(200).json({ ...categories });
    }
  });
};
