import React from 'react';
import styles from '../styles/MiniPaletteStyles';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@materi-ui/icons/Delete';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColors = colors.map(color => (
    <div 
      className={classes.miniColors} 
      style={{backgroundColor: color.color}}
      key={color.name} />
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} style={{transition: 'all 0.3 ease-in-out'}}/>
      </div>
      <div className={classes.colors}>
        {miniColors}
      </div>
  <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
