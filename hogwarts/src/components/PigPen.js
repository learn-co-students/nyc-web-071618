import React from 'react'
import Hog from './Hog'

class PigPen extends React.Component {
  // renderHogs = () => {
  //   return this.props.hogs.map((hog, idx) => {
  //     return <Hog key={idx} {...hog} />
  //   })
  // }
  getImage = (name) => {
    return `${name.toLowerCase().split(' ').join('_')}`
  }

  render() {
    const hogs = this.props.hogs.map((hog, idx) => {
      return <Hog key={idx}
                  hog={hog}
                  img={this.getImage(hog.name)}
            />
    })

    return (
      <div className='ui grid container'>
        <div className='ui sixteen wide column'>
          { hogs }
        </div>
      </div>
    )
  }
}

export default PigPen
