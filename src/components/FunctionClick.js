const React = require('react');


function FunctionClick() {
     function clickHandler(){
        console.log('clicked')
     }
  return (
    <div><button onClick={clickHandler}>click</button></div>
  )
}

export default FunctionClick