document.addEventListener("DOMContentLoaded", function(){


const petInputForm = document.getElementById('petInputForm')
const cardContainer = document.getElementById('cardContainer')

petInputForm.addEventListener('submit', function(event){
  event.preventDefault()
  const newPetCard = document.createElement('div')
  newPetCard.className = "petCard"
  cardContainer.append(newPetCard)

  const remove = document.createElement('div')
  remove.className = "remove"
  remove.innerHTML = "X"
  newPetCard.append(remove)

  const newPetName = document.createElement('h3')
  newPetName.className = "petName"
  newPetName.innerHTML = document.getElementById('petName').value
  newPetCard.append(newPetName)

  const newPetImage = document.createElement('img')
  newPetImage.className = "petImage"
  newPetImage.src = document.getElementById('petImage').value
  newPetCard.append(newPetImage)
})

document.addEventListener('keydown', function(event){
  if(event.which == 84){
    petInputForm.style.transform = 'rotate(45deg)'
  }
  if(event.which == 81){
    petInputForm.style.transform = 'skew(20deg)'
  }
})

const removeEvie = document.getElementById('removeEvie')
removeEvie.addEventListener('click', function(event){
  event.target.parentElement.remove()
})
})
