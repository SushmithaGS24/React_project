import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);


 useEffect (()=> {

  const interval = setInterval(()=> {
    setCount((c) => c + 1);

  }, 500);

  return () => clearInterval(interval);

 }, []);

  // function increment (){
  //   setCount(count + 1);
  // }
  // function decrement() {
  //   setCount(count - 1);
  // }

  // function reset() {
  //   setCount(0);
  // }
  return (
   
    <div className="App">
      <p>Count is {count}</p>
      {/* <button onClick = {(() => setCount(count + 1))}>Increment</button>
      <button onClick = {(() => setCount(count - 1))}>Decrement</button>
      <button onClick = {(() => setCount(0))}>Reset</button> */}
    </div>
   
  );
}

export default App;
