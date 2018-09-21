import React, { Component } from 'react';
import ContainerOfBoxes from './ContainerOfBoxes'

class App extends Component {

  state = {
    dogurl: "https://via.placeholder.com/350x150",
    number: 1
  }

  fetchDog = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(dog => this.setState({
      dogurl: dog.message
    })
  )
  }

  render() {


    return (
      <div>
      <img className="img" src={this.state.dogurl} alt="random dog"/>
      <ContainerOfBoxes />
      <button onClick={this.fetchDog}> fetch </button>

      </div>
    );
  }

  componentDidMount(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(dog => this.setState({
      dogurl: dog.message
    })
  )
}

componentDidUpdate(prevProps, prevState){

  this.setState({
    number: this.state.number +1
  })
}

shouldComponentUpdate(nextProps, nextState){
  console.log(nextProps)
  console.log(nextState)
  if (nextState.dogurl.length > 10){
    return false
  } else {
    return true

  }
  }



}

export default App;
