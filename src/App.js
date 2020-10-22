import React from 'react';
import './App.css';
import seedColors from './seedColors'
import Palette from './components/Palette';

function App() {
  return (
    <div className="App">
      <Palette palette={seedColors[4]}/>
    </div>
  );
}

export default App;
