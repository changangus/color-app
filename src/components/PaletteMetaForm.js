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
  const { submitNewPalette, palettes } = props;

  const [open, setOpen] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
      palettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Picker />
        <ValidatorForm onSubmit={() => submitNewPalette(newPaletteName)}>
          <DialogTitle id="form-dialog-title"> Name your palette!</DialogTitle>
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
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Submit Name
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}


export default PaletteMetaForm;
