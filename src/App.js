import React from 'react';
import './App.css';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';

// import Greet from './components/Greet';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
      <Classclick></Classclick>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      {/* <Greet/>
      <Welcome></Welcome> */}
    </div>
  );
}

export default App;
