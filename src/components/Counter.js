import React, { Component, useState } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        }, ()=>{
            console.log('this value', this.state.count)
        })
    }

    decrementCount(){
            if(this.state.count===0){
               
            }else{
                this.setState({
                    count: this.state.count - 1
                }, () =>{
                    console.log('callback value', this.state.count)
                });
                return '';
            }
    }

  render() {
    return (
      <div>
        <h1>Count-{this.state.count}</h1>
        <button onClick={()=> this.incrementCount()}>+</button>
        <button onClick={()=> this.decrementCount()}>-</button>
      </div>
    )
  }
}

export default Counter
