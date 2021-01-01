import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import useStyles from '../styles/DraggableColorBoxStyles';
import chroma from 'chroma-js';

function DraggableColorBox(props) {
  const classes = useStyles();

  const { handleClick, color, name } = props;
  return (
    <div className={ classes.root } style={{backgroundColor: color}}>
      <div className={ classes.boxContent } style={{color: chroma(color).luminance() >= 0.08 ? 'black' : 'white',}}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} style={{color: chroma(color).luminance() >= 0.08 ? 'black' : 'white'}} />
      </div>
    </div>
  )
}

export default SortableElement(DraggableColorBox);