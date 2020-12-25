import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import PaletteFormNav from './PaletteFormNav';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import DraggableColorList from '../components/DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  addColorBtn: {
    
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
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
}));

export function NewPaletteForm(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setCurrentColor] = React.useState('teal');
  const [colors, setColors] = React.useState(props.palettes[0].colors);
  const [colorName, setColorName] = React.useState('');

  const { palettes } = props;

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
      colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
        )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) => 
      colors.every(({color}) => color !== currentColor)
    );
  });

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: colorName
    };
    setColors([...colors, newColor])
    setColorName('');
  };

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

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const randomRGB = () => {
     return Math.floor(Math.random() * 256)
    };
    setCurrentColor(`rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`);
  }

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
        classes={classes} 
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
        <Typography variant="h4">Design Your Palette!</Typography>
        <div>
          <Button 
            variant='contained' 
            color='primary'
            onClick={addRandomColor}
          >
            Random Color
          </Button>
          <Button 
            variant='contained' 
            color='secondary' 
            onClick={clearColors}
          >
            Clear Palette
          </Button>
        </div>
        <ChromePicker 
          color={currentColor}
          onChange={() => {}}
          onChangeComplete={(newColor) => {
            const { rgb } = newColor;
            const { r, b, g, a } = rgb;
            setCurrentColor(`rgba(${r}, ${g}, ${b}, ${a})`);
          }}
          />
          <ValidatorForm onSubmit={() => addNewColor()}>
            <TextValidator 
              value={colorName}
              onChange={(evt) => setColorName(evt.target.value)}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={[
                'Must have color name', 
                'Color name is already taken', 
                'Color already in palette'
              ]}
              />
            <Button 
              variant='contained' 
              style={{backgroundColor: `${currentColor}`, transition: 'all 1.25s ease',}}
              className='addColorBtn'
              type='submit'>
              Add Color
            </Button>
          </ValidatorForm>

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
