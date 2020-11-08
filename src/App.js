import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedColors from './seedColors'
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import { generatePalette } from './components/colorHelpers';

function App() {

  const findPalette = (id) => {
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  
  return (
    <Switch>
      <Route exact path='/' render={() => <PaletteList palettes={seedColors} />}/>
      <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(
        findPalette(routeProps.match.params.id)
      )}/>}/> 
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
