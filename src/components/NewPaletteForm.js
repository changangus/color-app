import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from '../components/DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  addColorBtn: {
    
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

  }
}));

export function NewPaletteForm(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(props.palettes[0].colors);

  const { palettes } = props;

  const removeColor = (colorName) => {
    setColors(colors.filter(color => color.name !== colorName));
  };
    
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor])
  };

  const clearColors = () => {
    setColors([]);
  };

  const savePalette = (newPaletteName) => {
    let newName = newPaletteName;
    let id = newName.toLowerCase().replace(/ /g, '-');
    const newPalette = {paletteName: newName, colors: colors, id: id};
    props.savePalette(newPalette);
    props.history.push('/')
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav 
        open={open}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        savePalette={savePalette} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>Design Your Palette!</Typography>
          <ColorPickerForm 
            setColors={setColors}
            addNewColor={addNewColor}
            clearColors={clearColors}
            colors={colors}
            />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList 
          colors={colors} 
          removeColor={removeColor}
          axis='xy' 
          onSortEnd={onSortEnd}
        />  
      </main>
    </div>
  );
}

export default NewPaletteForm
