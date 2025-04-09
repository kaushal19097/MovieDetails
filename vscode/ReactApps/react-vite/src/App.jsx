import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] =useState(0);

  return (
    <div className="App">
      the count is {count}
   <button onClick={()=>setCount(count+1)}>
    update count
   </button>
  
    </div>
  );
}

export default App;
