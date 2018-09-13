const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// query selectors
const mainContainer = document.querySelector('main')

fetch(TRAINERS_URL)
.then(r => r.json())
.then(displayTrainers)

function displayTrainers(trainers) {
  trainers.forEach(trainer => {
    // nested arrays/collections
    mainContainer.innerHTML += `<div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
      <button data-trainer-id="${trainer.id}">Add Pokemon</button>
      <ul>
        ${trainer.pokemons.map(pokemon => {
          return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
        }).join('')}
      </ul>
    </div>`
  })
}

// event delegation
mainContainer.addEventListener('click', (event) => {
  if (event.target.dataset.trainerId) {
    const trainerId = event.target.dataset.trainerId
    const trainerDiv = document.querySelector(`div[data-id="${trainerId}"]`)
    const trainerUl = trainerDiv.children[2]
    
    if (trainerUl.children.length < 6) {
      fetch(POKEMONS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({trainer_id: trainerId})
      })
      .then(r => r.json())
      .then(pokemon => {
        trainerUl.innerHTML += `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
      })
    }
  } else if (event.target.dataset.pokemonId) {
    const pokemonId = event.target.dataset.pokemonId
    event.target.parentNode.remove()

    fetch(`${POKEMONS_URL}/${pokemonId}`, {
      method: 'DELETE'
    })
  }
})
