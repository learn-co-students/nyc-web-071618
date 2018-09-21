import React from 'react'

class BoxOfNumbers extends React.Component {

  render(){

    return(
      <React.Fragment>
        <div>The First Number is<button className="box">{this.props.number}</button></div>
        <div>The Second Number is<button className="box">{this.props.otherNumber}</button></div>
      </React.Fragment>
    )
  }

  componentWillUnmount(){
    this.props.changeNumber(5)
  }

  componentDidUpdate(prevProps, prevState){
    console.log("prevprops", prevProps)
    console.log("prevState", prevState)
  }

}

export default BoxOfNumbers
