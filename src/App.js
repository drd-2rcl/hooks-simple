import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [resource, setResource] = useState('posts');
  
  return (
    <div className="App">
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resource}
    </div>
  );
}

export default App;
