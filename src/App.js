import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors'
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette'
import PaletteList from './components/PaletteList';
import { generatePalette } from './components/colorHelpers';
import NewPaletteForm from './components/NewPaletteForm';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes ] = useState(savedPalettes || seedColors);


  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes])

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  } 

  const findPalette = (id) => {
    return palettes.find(function(palette){
      return palette.id === id;
    })
  }

  const deletePalette = (id) => {
    setPalettes(palettes.filter(palette => palette.id !== id));
  }
  
  return (
    <Switch>
      <Route exact path='/' 
        render={(routeProps) => <PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />}
        />
      <Route exact path='/palette/new' 
        render={(routeProps) => 
          <NewPaletteForm 
            savePalette={savePalette} 
            palettes={palettes}
            {...routeProps} 
            />
        }/>  
      <Route exact path='/palette/:id' 
        render={(routeProps) => 
          <Palette 
            palette={generatePalette(findPalette(routeProps.match.params.id)
          )}/>
        }/> 
      <Route exact path='/palette/:paletteId/:colorId'         
        render={(routeProps) => 
          <SingleColorPalette 
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(findPalette(routeProps.match.params.paletteId)
          )}/>
        } />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
