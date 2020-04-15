const form = document.querySelector('form')
const searchBtn = document.getElementById('search-btn')
const recipeElement = document.getElementById('recipes')

const API_URL = 'https://quick-recipes-server.now.sh/api/v1'

function showSingleRecipe(recipe) {

  console.log(recipe.noteData);
  
  recipeElement.innerHTML = ''

  const div = document.createElement('div')
  div.classList.add('card')

  const notesDiv = document.createElement('div')
  
  const header = document.createElement('h3')
  header.textContent = recipe.title

  recipe.noteData.forEach((data) => {
    const note = document.createElement('p')
    note.textContent = data.note
    const author = document.createElement('small')
    author.textContent = data.author

    note.appendChild(author)
    notesDiv.appendChild(note)
  })

  const noteElement = document.createElement('form')
  noteElement.classList.add('note-form')
    const noteArea = document.createElement('textarea')
    noteArea.rows = '4'
    noteArea.placeholder = 'New note here'

    const label = document.createElement('label')
    label.for = 'name'
    label.textContent = 'Name:'

    const author = document.createElement('input')
    author.type = 'text'

    noteElement.appendChild(noteArea)
    noteElement.appendChild(label)
    noteElement.appendChild(author)

  

  const button = document.createElement('button')
  button.classList.add('btn')
  button.classList.add('btn-secondary')
  button.textContent = 'Save new note'
  button.addEventListener('click', () => {
    noteElement.value = ''
    const recipeNotes = {
      note: noteArea.value,
      author: author.value
    }

    fetch(`${API_URL}/recipe/${recipe.title}`, {
      method: 'POST',
      body: JSON.stringify(recipeNotes),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => console.error(err))

    alert('Note has been saved!')
  })

  const recipeLink = document.createElement('button')
  recipeLink.classList.add('btn')
  recipeLink.classList.add('btn-primary')
  recipeLink.textContent = 'Go to the Recipe!'
  recipeLink.addEventListener('click', () => {
    window.location = recipe.url
  })

  const lineBreak = document.createElement('hr')
  
  recipeElement.appendChild(div)
  div.appendChild(header)
  div.appendChild(notesDiv)
  div.appendChild(noteElement)
  div.appendChild(button)
  div.appendChild(lineBreak)
  div.appendChild(recipeLink)
}

function listAllRecipes() {
  fetch(`${API_URL}/recipes`)
    .then(response => response.json())
    .then(recipes => {
      // console.log(recipes);

      recipes.forEach(recipe => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.addEventListener('click', () => showSingleRecipe(recipe))

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