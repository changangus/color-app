import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function PaletteMetaForm(props) {
  const { submitNewPalette, palettes, classes } = props;

  const [openNameForm, setOpenNameForm] = useState(false);
  const [openEmojiForm, setOpenEmojiForm] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
      palettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  })

  const handleOpenNameForm = () => {
    setOpenNameForm(true);
  };

  const handleCloseNameForm = () => {
    setOpenNameForm(false);
  };

  const handleSubmitNameForm = () => {
    setOpenNameForm(false);
    setOpenEmojiForm(true);
  }

  const handleCloseEmojiForm = () => {
    setOpenEmojiForm(false);
  } 

  const addNewEmoji = (emoji) => {
    setEmoji(emoji.native);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenNameForm}>
        Save Palette
      </Button>
      <Dialog open={openNameForm} onClose={handleCloseNameForm} aria-labelledby="form-dialog-title">
        <ValidatorForm>
          <DialogTitle id="form-dialog-title">Name your palette!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your brand new palette. Your palette name must be unique! 
            </DialogContentText>
              <TextValidator
                fullWidth
                margin='normal'
                label="Palette Name" 
                value={newPaletteName}
                onChange={(evt) => {setNewPaletteName(evt.target.value)}}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter a palette name', 'Name is taken']}
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseNameForm} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmitNameForm} color="primary">
              Submit Name
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <Dialog open={openEmojiForm} onClose={handleCloseEmojiForm}>
        <DialogTitle>Pick a Palette Emoji!</DialogTitle>
        <ValidatorForm onSubmit={() => submitNewPalette(newPaletteName, emoji)} className={classes.emojiForm}>
          <Picker onSelect={addNewEmoji} />
          <Button type='submit' variant='contained' color='primary'>
            Submit Palette!
          </Button>
          </ValidatorForm>
      </Dialog>
    </div>
  );
}


export default PaletteMetaForm;
