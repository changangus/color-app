import React from 'react';
import clsx from 'clsx';
import PaletteMetaForm from './PaletteMetaForm';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import useStyles from '../styles/PaletteFormNavStyles';

function PaletteFormNav(props) {
  
  const classes = useStyles(); 

  const { open, handleDrawerOpen, submitNewPalette, palettes } = props;

  return (
    <div className={classes.root}>
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
            New Palette Form
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
            <Link to="/" className={classes.buttonLink}>
              <Button 
                variant="contained"
                color="secondary"
                >
                  Go Back
              </Button>
            </Link>
            <PaletteMetaForm
              className={classes.button}
              submitNewPalette={submitNewPalette}
              palettes={palettes}
              classes={classes}
            />
          </div>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav;
