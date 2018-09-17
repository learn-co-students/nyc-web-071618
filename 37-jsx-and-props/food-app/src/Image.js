import React from 'react'

class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} style={{width: 100, height: 100}} />
      </div>
    )
  }
}

Image.defaultProps = {
  image: 'https://www.sockittome.com/images/detailed/6/MEF0209.jpg'
}

export default Image
