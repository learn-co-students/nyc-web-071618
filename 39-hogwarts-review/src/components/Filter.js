import React from 'react'

class Filter extends React.Component {
  state = {
    isFiltered: false
  }

  handleChange = () => {
    this.setState((prevState) => {
      return {
        isFiltered: !prevState.isFiltered
      }
    }, () => {
      this.props.filterGreased(this.state.isFiltered)
    })
  }

  render() {

    return (
      <div className='ui centered grid'>
        <div className="filterWrapper ui borderless menu">
          <div className="item">Sort by: &nbsp;
            <select onChange={ this.props.sortBy }>
              <option></option>
              <option value='name'>Name</option>
              <option value='weight'>Weight</option>
            </select>
          </div>

          <div className="item">
            <input onChange={ this.handleChange } type="checkbox" />
            { this.state.isFiltered ? "Show All" : "Filter Greased" }
          </div>
        </div>
      </div>
    )
  }
}

export default Filter
