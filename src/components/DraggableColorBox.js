import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import useStyles from '../styles/DraggableColorBoxStyles';

function DraggableColorBox(props) {
  const classes = useStyles();

  const { handleClick, color, name } = props;
  return (
    <div className={ classes.root } style={{backgroundColor: color}}>
      <div className={ classes.boxContent }>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
      </div>
    </div>
  )
}

export default SortableElement(DraggableColorBox);