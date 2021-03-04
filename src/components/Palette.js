import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from'./Navbar';
import styles from '../styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  function changeFormat(val){
    setFormat(val);
  }

  function changeLevel(level){
    setLevel(level)
  }

    const { classes } = props;
    const { colors, paletteName, emoji, id } = props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.id}
        id={color.id} 
        paletteId={id} 
        showingFullPalette
        />
    ))
    return (
      <div className={classes.palette}>
        <Navbar 
          level={level} 
          changeLevel={changeLevel} 
          changeFormat={changeFormat}
          paletteName={paletteName}
          emoji={emoji}
          sliderNeeded 
          />
        <div className={classes.paletteColors}>
          {colorBoxes}
        </div>
      </div>
    )
}

export default withStyles(styles)(Palette)

