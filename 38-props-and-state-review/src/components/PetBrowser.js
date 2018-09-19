import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  // renderPets = () => {
  //   return this.props.pets.map(pet => {
  //     return <Pet key={pet.id} {...pet} />
  //   })
  // }

  render() {
    const allPets = this.props.pets.map(pet => {
      return <Pet
                key={ pet.id }
                { ...pet }
                onAdoptPet={ this.props.onAdoptPet }
              />
    })

    return (
      <div className="ui cards">
        { allPets }
      </div>
    )
  }
}

export default PetBrowser
