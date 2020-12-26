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
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '1rem'
  },
  buttonLink: {
    textDecoration: 'none',
    marginRight: '1rem'
  }
}))

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
            />
          </div>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav;
