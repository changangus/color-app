import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import styles from '../styles/NavBarStyles';
import { withStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Navbar(props){
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  function handleChange(e){
    setFormat(e.target.value)
    props.changeFormat(e.target.value);
    handleSnackBar();
  }

  function handleSnackBar(){
    setOpen(true);
  }

  function closeSnackBar(event, reason){
    if (reason === 'clickaway') {
      return;
    };
    setOpen(false);
  };

    
  const { level, changeLevel, sliderNeeded, paletteName, emoji, classes } = props;
  return (
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link to='/'><ArrowBackIcon/></Link>
          <h4 className={classes.paletteNameHeader}>{paletteName}</h4>
          <span>{emoji}</span>
        </div>
        {sliderNeeded && (
        <div>
          <span className={classes.sliderText}>Level: {level}</span>
          <div className={classes.slider}>
            <Slider 
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={handleChange}>
            <MenuItem value='hex'>HEX - #000000</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(0, 0, 0)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(0, 0, 0, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          onClose={closeSnackBar}
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed to {format.toUpperCase()}.</span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackBar}>
                <CloseIcon fontSize="small"  />
              </IconButton>
            </React.Fragment>
          }
      />
      </nav>
    )
}

export default withStyles(styles)(Navbar)
