import React from 'react';
import './App.css';

import Search from './components/search'
import Trending from './components/trending'

function App() {
  return (
    <div className="App">
       <Search />
       <Trending />
    </div>
  );
}

export default App;
