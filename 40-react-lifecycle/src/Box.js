import React from 'react'

class Box extends React.Component {
  render(){
    console.log("Box has rendered")
    return(
    <div className="box">This is a box that contains {this.props.contents}</div>
    )
  }
  componentDidMount(){
    console.log("BOX MOUNT")
  }
}

export default Box
