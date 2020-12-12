import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: '20%',
    height: '25%', 
    overflow: 'hidden',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-5px',
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
  const { classes } = props;
  return (
    <div className={ classes.root } style={{backgroundColor: props.color}}>
      <div className={ classes.boxContent }>
        <span>{props.name}</span>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox);