import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
});

export default useStyles;