import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

function PaletteFormNav(props) {

  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
      props.palettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  })

  const { classes, open, handleDrawerOpen, savePalette } = props;

  return (
    
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={() => savePalette(newPaletteName)}>
            <TextValidator
              label="Palette Name" 
              value={newPaletteName}
              onChange={(evt) => {setNewPaletteName(evt.target.value)}}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter a palette name', 'Name is taken']}
              />
            <Button 
              variant="contained"  
              color="primary" 
              type="submit"
              >
                Save Palette
            </Button>
            <Link to="/">
            <Button 
              variant="contained"
              color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav;
