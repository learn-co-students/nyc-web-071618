import React from 'react'

class BoxOfNotSame extends React.Component {


  state = {
    number: this.props.rand,
    lastNumber: 0
  }

  render(){

    return(

      <h5 className="box"> {this.state.number} is a number that is not the same as {this.props.rand} </h5>
    )
  }

  shouldComponentUpdate(prevProps, prevState){
    if( this.props.rand === prevProps.rand){
      return false
    } else {
      return true
    }
  }

}

export default BoxOfNotSame
