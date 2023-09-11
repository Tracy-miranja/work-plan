import React, { Component } from 'react'

class Classclick extends Component {
    clickHandler() {
        console.log('clicked object')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click on me</button>
      </div>
    )
  }
}

export default Classclick
