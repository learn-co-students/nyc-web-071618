import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h1>FOOD APP</h1>
        Hi, here are you favorite recipes friend
        <RecipeContainer />
      </div>
    )
  }
}

export default App;
