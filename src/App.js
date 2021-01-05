import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors'
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette'
import PaletteList from './components/PaletteList';
import { generatePalette } from './components/colorHelpers';
import NewPaletteForm from './components/NewPaletteForm';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import useStyles from './styles/AppStyles';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes ] = useState(savedPalettes || seedColors);
  const classes = useStyles();

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
    <div className={classes.root}>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path='/palette/new' 
            render={(routeProps) => 
              <motion.div 
                initial={{opacity: 0, transform: 'translateX(100px)'}}
                animate={{opacity: 1, transform: 'translateX(0px)'}}
                exit={{opacity: 0}}
                transition={{duration: 1}}
              >
                <NewPaletteForm 
                  savePalette={savePalette} 
                  palettes={palettes}
                  {...routeProps} 
                  />
              </motion.div>
            }/>
          <Route exact path='/' 
            render={(routeProps) =>
              <PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />}
            />
          <Route exact path='/palette/:id' 
            render={(routeProps) => 
              <motion.div 
                initial={{opacity: 0, transform: 'translateX(100px)'}}
                animate={{opacity: 1, transform: 'translateX(0px)'}}
                exit={{opacity: 0}}
                transition={{duration: 1}}
              >
                <Palette 
                  palette={generatePalette(findPalette(routeProps.match.params.id)
                )}/>
              </motion.div>
            }/> 
          <Route exact path='/palette/:paletteId/:colorId'         
            render={(routeProps) => 
              <motion.div 
                initial={{opacity: 0, transform: 'translateX(100px)'}}
                animate={{opacity: 1, transform: 'translateX(0px)'}}
                exit={{opacity: 0}}
                transition={{duration: 1}}
              >
                <SingleColorPalette 
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(findPalette(routeProps.match.params.paletteId)
                )}/>
              </motion.div>
            } />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
