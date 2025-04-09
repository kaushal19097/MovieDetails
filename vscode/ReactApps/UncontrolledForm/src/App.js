import React, { useRef } from 'react';

const App = () => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert('Entered text: ' + inputRef.current.value); // Alert the entered text
    inputRef.current.value = ''; // Clear the input field
  };

  return (
    <div className="app">
      <h1>Uncontrolled Form Example</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
