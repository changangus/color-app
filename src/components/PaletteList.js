import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import { blue, red } from '@material-ui/core/colors/';
import { motion } from 'framer-motion';

function PaletteList(props) {
  const { palettes, classes, deletePalette } = props;
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState('')

  const openDialog = (id) => {
    setDeleteDialog(true);
    setDeleteId(id);
  };

  const closeDialog = () => {
    setDeleteDialog(false);
    setDeleteId('')
  } 

  const handleDelete = () => {
    setDeleteDialog(false);
    deletePalette(deleteId);
    setDeleteId('');
  }

  const goToPalette = (id) => {
    props.history.push(`/palette/${id}`);
  }

    return (
      <motion.div 
        initial={{opacity: 0, transform: 'translateX(100px)'}}
        animate={{opacity: 1, transform: 'translateX(0px)'}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
      > 
        <div className={classes.root}>
          <div className={classes.container}>
            <nav className={classes.nav}>
              <h1 className={classes.header}>Color Collector</h1>
              <Link to='/palette/new'>Create Palette</Link>
            </nav>
            <TransitionGroup className={classes.palettes}>
              {palettes.map(palette => (
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                  <MiniPalette  
                    {...palette}
                    handleClick={() => goToPalette(palette.id)}
                    key={palette.id}
                    id={palette.id}
                    openDialog={openDialog}
                    />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          <Dialog 
            open={deleteDialog} 
            aria-labelledby='delete-dialog-title' 
            onClose={closeDialog}
            >
            <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
            <List>
              <ListItem button onClick={handleDelete} >
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Delete' />
              </ListItem>
              <ListItem button onClick={closeDialog}>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Cancel' />
              </ListItem>
            </List>
          </Dialog>
        </div>
      </motion.div>
    )
  }


export default withStyles(styles)(PaletteList)
