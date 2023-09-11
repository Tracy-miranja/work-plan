import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props){
        super(props)
        this.state= {
            message:'hello james'
        }
    }

    textChanger(){
        this.setState({
            message:'welcome to my site',
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.textChanger.bind(this)}>tap</button> */}
        <button onClick={() => this.textChanger()}>tap</button>
      </div>
    )
  }
}

export default EventBind
