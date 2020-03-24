const form = document.querySelector('form')
const searchBtn = document.getElementById('search-btn')
const recipeElement = document.getElementById('recipes')

const API_URL = 'https://quick-recipes-server.now.sh/api/v1'


function handleSearch(params) {
  // fetch(`${API_URL}/recipes`)
}

function listAllRecipes() {
  fetch(`${API_URL}/recipes`)
    .then(response => response.json())
    .then(recipes => {
      // console.log(recipes);

      recipes.forEach(recipe => {
        const div = document.createElement('div')
        div.classList.add('card')

        const header = document.createElement('h5')
        header.textContent = recipe.title
        header.classList.add('card-title')

        const url = document.createElement('a')
        url.classList.add('card-link')
        url.textContent = 'Recipe found HERE'
        url.href = recipe.url

        const category = document.createElement('h6')
        category.textContent = recipe.category
        category.classList.add('card-subtitle')
        category.classList.add('mb-2')
        category.classList.add('text-muted')

        div.appendChild(header)
        div.appendChild(category)
        div.appendChild(url)

        recipeElement.appendChild(div)
      })      
      
    })
}

form.addEventListener('submit', e => {
  
  e.preventDefault()
  const formData = new FormData(form)
  const searchBy = formData.get('search-by')
  const searchFor = formData.get('search-for')


  fetch(`${API_URL}/recipes/${searchBy}/${searchFor}`)
    .then(response => response.json())
    .then(recipes => {
      recipeElement.innerHTML = ''

      recipes.forEach(recipe => {
        const div = document.createElement('div')
        div.classList.add('card')

        const header = document.createElement('h5')
        header.textContent = recipe.title
        header.classList.add('card-title')

        const url = document.createElement('a')
        url.classList.add('card-link')
        url.textContent = 'Recipe found HERE'
        url.href = recipe.url

        const category = document.createElement('h6')
        category.textContent = recipe.category
        category.classList.add('card-subtitle')
        category.classList.add('mb-2')
        category.classList.add('text-muted')

        div.appendChild(header)
        div.appendChild(category)
        div.appendChild(url)

        recipeElement.appendChild(div)
      })      
    })
  

})

listAllRecipes()