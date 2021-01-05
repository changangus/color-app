import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import useStyles from '../styles/ColorPickerFormStyles';
import chroma from 'chroma-js';

function ColorPickerForm(props) {
  const classes = useStyles();
  const { addNewColor, colors, clearColors } = props;
  const [currentColor, setCurrentColor] = useState('teal');
  const [colorName, setColorName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorUnique', (value) => 
      colors.every(({color}) => color !== currentColor)
    );
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
      colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
        )
    );
  });

  const addRandomColor = () => {
    const randomRGB = () => {
     return Math.floor(Math.random() * 256)
    };
    setCurrentColor(`rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`);
  }

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: colorName
    };
    addNewColor(newColor);
    setColorName('');
  }

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <Button 
          variant='contained' 
          color='primary'
          onClick={addRandomColor}
          className={classes.button}
        >
          Random Color
        </Button>
        <Button 
          variant='contained' 
          color='secondary' 
          onClick={clearColors}
          className={classes.button}
        >
          Clear Palette
        </Button>
      </div>
      <ChromePicker 
        className={classes.picker}
        color={currentColor}
        onChange={() => {}}
        onChangeComplete={(newColor) => {
          const { rgb } = newColor;
          const { r, b, g, a } = rgb;
          setCurrentColor(`rgba(${r}, ${g}, ${b}, ${a})`);
        }}
      />
      <ValidatorForm 
        onSubmit={handleSubmit}
        instantValidate={false} 
        >
        <TextValidator 
          className={classes.colorNameInput}
          value={colorName}
          onChange={(evt) => setColorName(evt.target.value)}
          placeholder="Name your color"
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Must have color name', 
            'Color name is already taken', 
            'Color already in palette'
          ]}
          />
        <Button 
          variant='contained' 
          margin='normal'
          style={{background: `${currentColor}`, transition: 'all 1.25s ease', color: chroma(currentColor).luminance() >= 0.08 ? 'black' : 'white' }}
          className={classes.addColorBtn}
          type='submit'
          >
          Add Color
        </Button>
      </ValidatorForm>
    </div>
  )
}

export default ColorPickerForm; 