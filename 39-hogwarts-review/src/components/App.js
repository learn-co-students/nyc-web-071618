import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigPen from './PigPen'
import hogs from '../porkers_data';
import Filter from './Filter'

class App extends Component {
  state = {
    hogs: hogs
  }

  sortBy = (event) => {
    event.target.value === 'name' ? this.sortByName() : this.sortByWeight()
  }

  sortByName = () => {
    this.setState((prevState) => {
      const sortedHogs = prevState.hogs.sort((hog1, hog2) => {
        const name1 = hog1.name
        const name2 = hog2.name
        return name1.localeCompare(name2)
      })

      return {
        hogs: sortedHogs
      }
    })
  }

  sortByWeight = () => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    this.setState((prevState) => {
      const sortedHogs = prevState.hogs.sort((hog1, hog2) => {
        return hog1[weight] - hog2[weight]
      })

      return {
        hogs: sortedHogs
      }
    })
  }

  filterGreased = (isFiltered) => {
    if (isFiltered) {
      this.setState((prevState) => {
        const greasedHogs = prevState.hogs.filter((hog) => {
          return hog.greased
        })

        return {
          hogs: greasedHogs
        }
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }
  }

  render() {
    return (
      <div className="App"> { /* comments are placed here */ }
        { /* comments are placed here */ }
        <Nav />
        <Filter
          sortBy={ this.sortBy }
          filterGreased={ this.filterGreased }
        />
        <PigPen hogs={ this.state.hogs } />
      </div>
    )
  }
}

export default App;
