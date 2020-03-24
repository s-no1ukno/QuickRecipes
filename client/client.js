// Query Selectors
const form = document.querySelector('form')
const find = document.getElementById('find')

const API_URL = 'https://quick-recipes-server.now.sh/api/v1'

// Event Listeners

find.addEventListener('click', () => {
  window.location = '/recipes.html'
})

form.addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(form)
  const title = formData.get('title')
  const url = formData.get('url')
  const category = formData.get('category')

  const recipe = {
    title,
    url,
    category
  }

  console.log(recipe);
  

  fetch(`${API_URL}/recipes`, {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())

  form.reset()
  alert('Your recipe has been filed!')
})