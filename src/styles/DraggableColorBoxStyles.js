import { makeStyles } from '@material-ui/core/styles';
import sizes from './MediaQueries';

const useStyles = makeStyles({
  root: {
    width: '20%',
    height: '25%', 
    overflow: 'hidden',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-7px',
    '& svg': {
      opacity: '0.65'
    },
    '&:hover svg': {
      opacity: '1',
      transform: 'scale(1.25)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '15%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '10%'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    left: '0px',
    padding: '5px',
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