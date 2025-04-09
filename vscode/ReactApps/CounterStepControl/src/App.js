import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrease = () => {
    setCount(count + Number(step));
  };

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(0, prevCount - Number(step)));
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p className="count-display">Count: {count}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
        min="1"
        className="step-input"
      />
      <div className="button-group">
        <button onClick={handleIncrease} className="increase-btn">
          Increase
        </button>
        <button onClick={handleDecrease} className="decrease-btn">
          Decrease
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return <Counter />;
}
