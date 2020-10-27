import React from 'react';
import './App.css';
import seedColors from './seedColors'
import Palette from './components/Palette';
import { generatePalette } from './components/colorHelpers';

function App() {
  console.log(generatePalette(seedColors[2]));
  return (
    <div className="App">
      <Palette palette={seedColors[4]}/>
    </div>
  );
}

export default App;
