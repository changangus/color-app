import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: 'white',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  miniColors: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-4px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  }
}

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColors = colors.map(color => (
    <div 
      className={classes.miniColors} 
      style={{backgroundColor: color.color}}
      key={color.name} />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        {miniColors}
      </div>
  <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
