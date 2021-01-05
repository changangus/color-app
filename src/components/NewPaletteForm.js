import React, { useState } from 'react';
import useStyles from '../styles/NewPaletteFormStyles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from '../components/DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';

export function NewPaletteForm(props) {
  const { savePalette, history } = props;

  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState([]);

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

  const submitNewPalette = (newPaletteName, emoji) => {
    let newName = newPaletteName;
    let id = newName.toLowerCase().replace(/ /g, '-');
    const newPalette = {paletteName: newName, colors: colors, id: id, emoji: emoji};
    savePalette(newPalette);
    history.push('/')
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav 
        open={open}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        submitNewPalette={submitNewPalette}
        classes={classes} />
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
          distance={20}
        />  
      </main>
    </div>
  );
}

export default NewPaletteForm
