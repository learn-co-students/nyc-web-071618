document.addEventListener("DOMContentLoaded", function (event) {
    const pokemon = data.pokemons
    const pokemonContainer = document.getElementById('pokemon-container')
    const searchInput = document.getElementById('pokemon-search-input')

    function generatePokemonHTMLAndAppendToDOM(pokemonObj) {
        pokemonContainer.innerHTML += `<div class="pokemon-container">
                                                <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                                                <h1 class="center-text">${pokemonObj.name}</h1>
                                                <div style="width:239px;margin:auto">
                                                <div style="width:96px;margin:auto">
                                                    <img data-pokemon-name="${pokemonObj.name}" data-current-image-direction="front" src="${pokemonObj.sprites.front}">
                                                </div>
                                                </div>
                                                <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemonObj.name}" data-action="flip-image">flip card</p>
                                                </div>
                                            </div>`
    }

    function showPokemonMatchingSearchWord() {
        const searchTerm = searchInput.value.toLowerCase()
        const pokemonWhoMatchTheSearchTerm = pokemon.filter(pokemonObj => pokemonObj.name.toLowerCase().includes(searchTerm))
        pokemonWhoMatchTheSearchTerm.forEach(generatePokemonHTMLAndAppendToDOM)
    }

    searchInput.addEventListener('keyup', function (event) {
        pokemonContainer.innerHTML = ""
        if (searchInput.value) {
            showPokemonMatchingSearchWord()
        }
    })

    function flipImageFor(pokemonObj) {
        const pokemonImgElement = document.querySelector(`[data-pokemon-name="${pokemonObj.name}"]`)
        const currentImageDirection = pokemonImgElement.dataset.currentImageDirection
        const nextImageSrc = currentImageDirection === 'front' ? 'back' : 'front'
    }

    pokemonContainer.addEventListener('click',function(event){
        if (event.target.dataset.action === "flip-image") {
            const pokemonName = event.target.dataset.pokename
            const pokemonObj = pokemon.find(pokemonObj => pokemonObj.name === pokemonName)
            flipImageFor(pokemonObj)
        }
    })


})