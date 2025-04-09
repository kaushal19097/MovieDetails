import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // useEffect to log counter value to the console every time it changes
  useEffect(() => {
    console.log(`Counter value: ${counter}`);
  }, [counter]);

  return (
    <div className="app-container">
      <h1>React Counter App</h1>
      <div className="counter-display">Counter: {counter}</div>
      <div className="buttons">
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
