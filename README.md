# Quick Recipes
Recipe tracker for my wife - might want to make into a Chrome extension or an android app eventually

## Notes
- Scrolling through FB, need to be able to copy link into form
- Form will add page to a db, for viewing later
---

## Needs

### Frontend
- [ ] Basic form for data collection
  - [ ] URL for recipe page
  - [ ] Title for recipe
  - [ ] Selector for recipe category

### Backend
- [ ] Server to communicate between client and db
  - [ ] Express server
- [ ] MongoDB Atlas db

### API
- [ ] /recipes GET - get all recipes
- [ ] /recipes POST - push a recipe into db
- [ ] /recipes/{category} GET - display all recipes of that category

##### Categories
- Breakfast
- Lunch
- Dinner
- Dessert
- Snacks