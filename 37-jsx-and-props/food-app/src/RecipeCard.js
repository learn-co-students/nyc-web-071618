import React, { Component } from 'react'
import Image from './Image'

export default class RecipeCard extends Component {
  // constructor is not required for class components
  // however, if you use it and want access to `this`,
  // you must use super()

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     likes: 0
  //   }
  // }

  state = {
    likes: 0
  }

  increaseLikes = () => {
    console.log(`before: ${this.state.likes}`)
    // setState allows for rerendering to show dynamic changes
    // never directly mutate state (e.g. this.state.likes++)
    this.setState({
      likes: this.state.likes + 1
    }, () => {
      // second optional parameter to setState
      // allows us to work better with async code
      // this console.log will reflect changes made in setState
      console.log(`after: ${this.state.likes}`)
    })

    // setState is asynchronous, changes may or may not be reflected here
    console.log(`outside: ${this.state.likes}`)
  }

  render () {
    // console.log(this.state)
    return (
      <div>
        <a href={this.props.href}>
          <h3>{this.props.title}</h3>
        </a>
        <p>{this.props.ingredients}</p>
        <Image image={this.props.thumbnail} />
        <button onClick={this.increaseLikes} >
          Like
        </button>
        <p>Number of likes: {this.state.likes} </p>
      </div>
    )
  }
}
