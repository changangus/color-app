import React from 'react';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors'
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette'
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
      <Route exact path='/' 
        render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}/>
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
