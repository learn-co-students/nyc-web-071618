import React from 'react'
import allPets from '../data/pets'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: allPets,
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick(event) {
    const petType = this.state.filters.type
    const filteredPets = allPets.filter(pet => pet.type === petType)

    if (petType === 'all') {
      this.setState({
        pets: allPets
      })
    } else {
      this.setState({
        pets: filteredPets
      })
    }
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      
      return pet
    })

    this.setState({ pets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={ this.onFindPetsClick.bind(this) }
                onChangeType={ this.onChangeType }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={ this.state.pets }
                onAdoptPet={ this.onAdoptPet }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
