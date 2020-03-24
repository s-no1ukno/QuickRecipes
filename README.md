# Quick Recipes

Recipe tracker for my wife - might want to make into a Chrome extension or an android app eventually

## Notes

- Scrolling through FB, need to be able to copy link into form
- Form will add page to a db, for viewing later

---

## Needs

### Frontend

- [x] Basic form for data collection
  - [x] URL for recipe page
  - [x] Title for recipe
  - [x] Selector for recipe category

### Backend

- [x] Server to communicate between client and db
  - [x] Express server
- [x] MongoDB Atlas db

### API

- [x] /recipes GET - get all recipes
- [x] /recipes POST - push a recipe into db
- [x] /recipes/{category} GET - display all recipes of that category

##### Categories

- Breakfast
- Lunch
- Dinner
- Dessert
- Snacks

##### Update Function - stretch

- add a function to update database with a star rating or a comments section
  - /recipes UPDATE
- need to be able to update the title as well as description info later on