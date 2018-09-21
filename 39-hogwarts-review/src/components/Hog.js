import React from 'react'
import PigDetail from './PigDetail'

class Hog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false
    }
  }
  // state = {
  //   isClicked: false
  // }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        isClicked: !prevState.isClicked
      }
    })
  }

  render() {
    const { hog } = this.props

    return (
      <div className='ui eight wide column pigTile'>
          <div className="image">
            <h2 className='smallheader'>{ hog.name }</h2>
            <img alt='pig-image'
                src={require(`../hog-imgs/${this.props.img}.jpg`)}
            />
          </div>
        <button onClick={ this.handleClick } className='mini ui button'>
          'clicky clicky show me the piggy'
        </button>
        { /* see if you can get this working! */ }
        <button className='mini ui button'>
          Hide Card
        </button>

        { this.state.isClicked && <PigDetail { ...hog } /> }
      </div>
    )
  }
}

export default Hog
