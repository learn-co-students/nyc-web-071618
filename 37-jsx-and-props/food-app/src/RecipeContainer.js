import React from 'react'
import recipes from './recipes'
import RecipeCard from './RecipeCard'
import v4 from 'uuid'

class RecipeContainer extends React.Component {
  renderRecipes = () => {
    return recipes.map(recipe => {
      // spread operator allows us to pass down all the key/value pairs
      // from the original object
      return <RecipeCard key={v4()} {...recipe} />
    })
  }

  render() {
    // can also map through recipes here...
    // const recipeCards = recipes.map(recipe => <RecipeCard key={v4()} {...recipe} />)
    return (
      <div>
        Recipe Container holds all our awesome recipes
        {this.renderRecipes()}

        // ...and place here
        {/* recipeCards */}
      </div>
    )
  }
}

export default RecipeContainer
