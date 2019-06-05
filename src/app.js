import React, { useState } from 'react';
import './app.css';
import ResourceList from './components/resource_list';
import UserList from './components/user_list';

const App = () => {
  // ITS SAME THING =>  state = { resource: 'posts' }
  const [resource, setResource] = useState('posts');
  
  return (
    <div className="App">
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  );
}

export default App;
