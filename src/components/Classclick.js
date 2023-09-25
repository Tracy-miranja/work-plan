import React, { Component } from 'react'

class Classclick extends Component {
    clickHandler() {
        return('clicked object')
    }
  render() {
    return (
      <div>
        <div>{this.clickHandler}</div>
        <button onClick={this.clickHandler}>click on me</button>
      </div>
    )
  }
}

export default Classclick
