import React, {Component} from 'react'

class Pickles extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
      <li> HeLLO FROM Pickles.  This pickle is {this.props.pickle.size}</li>
      </div>
    )
  }
}

export default Pickles
