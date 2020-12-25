import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
  root: {
    width: '20%',
    height: '25%', 
    overflow: 'hidden',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-7px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.25)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    left: '0px',
    padding: '5px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: 'black',
    transition: 'all 0.2s ease-in-out'
  }
}

function DraggableColorBox(props) {
  const { classes, handleClick, color, name } = props;
  return (
    <div className={ classes.root } style={{backgroundColor: color}}>
      <div className={ classes.boxContent }>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
      </div>
    </div>
  )
}

export default SortableElement(withStyles(styles)(DraggableColorBox));