const express = require('express');
const monk = require('monk');
require('dotenv').config();

const router = express.Router();

const db = monk(process.env.MONGO_URI);
const recipes = db.get('recipes');

router.get('/', (req, res) => {
  res.json('API running!');
});

router.get('/recipes/:searchby/:searchfor', (req, res) => {
  const arr = [];

  if (req.params.searchby === 'Title') {
    recipes
      .find({})
      .then((result) => {
        result.forEach((recipe) => {
          if (recipe.title.toLowerCase().includes(req.params.searchfor.toLowerCase())) {
            arr.push(recipe);
          }
        });
        return arr;
      })
      .then((result) => res.json(result));
  } else if (req.params.searchby === 'Category') {
    recipes
      .find({})
      .then((result) => {
        result.forEach((recipe) => {
          if (recipe.category.toLowerCase().includes(req.params.searchfor.toLowerCase())) {
            arr.push(recipe);
          }
        });
        return arr;
      })
      .then((result) => res.json(result));
  }
});

router.get('/recipes', (req, res) => {
  // let title = req.query.title
  // let search = req.query.

  recipes
    .find()
    .then((result) => {
      res.json(result);
    });
});

router.post('/recipes', (req, res) => {
  const recipe = {
    title: req.body.title,
    url: req.body.url,
    category: req.body.category,
    date: new Date()
  };

  recipes
    .insert(recipe)
    .then((created) => {
      res.json(created);
    });
});


module.exports = router;
