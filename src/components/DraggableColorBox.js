import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%', 
    overflow: 'hidden',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-5px',
  }
}

function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div className={ classes.root } style={{backgroundColor: props.color}}>
      {props.name}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox);