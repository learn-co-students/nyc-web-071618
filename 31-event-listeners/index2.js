document.addEventListener('DOMContentLoaded', function(event){
  console.log(event)

  document.addEventListener('click', function(event){
    if(event.target.id === "remove"){
      event.target.parentNode.remove()
    }
  })

  const petInputForm = document.getElementById('petInputForm')
  const petName = document.getElementById('petName')
  const petImage = document.getElementById('petImage')


  petInputForm.addEventListener('submit', function(event){
    // event.preventDefault()
    const petCard = document.createElement('div')
    petCard.className = "petCard"
    const image = document.createElement('img')
    image.className = "petImage"
    image.src = petImage.value
    const name = document.createElement('h3')
    name.innerText = petName.value

    petCard.append(name)
    petCard.append(image)
    cardContainer.append(petCard)

  })

  document.addEventListener('keydown', function(event){
    if(event.which == 84){
      petInputForm.style.transform = 'rotate(45deg)'
    }
    if(event.which == 81){
      petInputForm.style.transform = 'skew(20deg)'
    }
  })
})
