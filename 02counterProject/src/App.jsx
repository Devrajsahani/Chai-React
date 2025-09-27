import React, {useState} from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  // let counter =50;
  const addValue = ()=>{
    console.log("clicked",counter);
    //counter = counter + 1;
    setCounter(counter+1); // when setcounter will be called then this will happen
  }
  const removeValue =()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1> Chai and react</h1>
      <h2> Counter value : {counter}</h2>
      <button
      onClick={addValue}
      > Add value </button>
      <br/>
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
