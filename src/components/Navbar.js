import React, { Component } from 'react';
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

export class Navbar extends Component {
  constructor(props){
    super(props);
    this.state ={
      format: 'hex',
      open: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSnackBar = this.handleSnackBar.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleChange(e){
    this.setState({
      format: e.target.value,
    })
    this.props.changeFormat(e.target.value);
    this.handleSnackBar();
  }

  handleSnackBar(){
    this.setState({
      open: true
    })
  }

  closeSnackBar(event, reason){
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: false
    })
  };

  render() {
    const { format, open } = this.state;
    const { level, changeLevel, sliderNeeded, classes } = this.props;
    return (
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link to='/'>ReactColors</Link>
        </div>
        {sliderNeeded && (
        <div>
          <span>Level: {level}</span>
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
          <Select value={format} onChange={this.handleChange}>
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
          onClose={this.closeSnackBar}
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed to {format.toUpperCase()}.</span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackBar}>
                <CloseIcon fontSize="small"  />
              </IconButton>
            </React.Fragment>
          }
      />
      </nav>
    )
  }
}

export default withStyles(styles)(Navbar)
