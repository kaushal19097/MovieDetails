import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke({ setup: "Oops!", punchline: "Couldn't fetch a joke. Try again!" });
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      {joke && (
        <div className="joke-card">
          <p className="setup">{joke.setup}</p>
          <p className="punchline">{joke.punchline}</p>
        </div>
      )}
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}

export default App;
