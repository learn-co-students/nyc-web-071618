import React from 'react'
import Box from './Box'
import BoxOfNumbers from './BoxOfNumbers'

class ContainerOfBoxes extends React.Component {

  state = {
    showNumBox: true,
    number: 1,
    otherNumber: 1
  }

  toggleNumBox = () =>{
    this.setState({showNumBox: !this.state.showNumBox})
  }

  changeNumber = (num) =>{

    this.setState({
      number: this.state.number + num
    })
  }

  rand = () =>{
    return Math.floor(Math.random() *5 + 1)
  }



  render(){

    return(
      <React.Fragment>
        <Box contents="spiders"/>
        <Box contents="wasps"/>
        <button onClick={this.toggleNumBox}> Show Num Box? </button>
        {this.state.showNumBox && <BoxOfNumbers changeNumber={this.changeNumber} number={this.state.number} otherNumber={this.state.otherNumber}/>}

      </React.Fragment>
    )
  }
  componentDidMount(){
    console.log("CONTAINER OF BOXES MOUNT")
  }
}

export default ContainerOfBoxes
