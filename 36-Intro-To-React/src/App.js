import React, { Component } from 'react';
import Pickles from './Pickles'
import pickleTypes from './pickleTypes'

class App extends Component {
  render() {
    const pickleList = pickleTypes.map((pickle, index) =>{
      return <Pickles key={pickle.size} pickle={pickle}/>
    })

    return (
      <div>
        {pickleList}
      </div>
    );
  }
}

export default App;
